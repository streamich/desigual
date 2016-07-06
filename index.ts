
const enum ACTION {
    NOP = -1,
    EXIT = -2,
    EXIT_ALL = -3,
}


export type Ttoken = [number, string, number];

// Tokenize
export function tok(code: string, language): Ttoken[] {

    // the result
    var tags = [];
    var numTags = 0;

    // each element is a pattern object from language
    var patternStack = [];

    // the current position within inputString
    var pos = 0;

    // the name of the current style, or null if there is no current style
    var currentStyle = null;

    var output = function(s, style) {
        var length = s.length;
        // this is more than just an optimization - we don't want to output empty <span></span> elements
        if (length === 0) {
            return;
        }
        if (! style) {
            var stackLength = patternStack.length;
            if (stackLength !== 0) {
                var pattern = patternStack[stackLength - 1];
                // check whether this is a state or an environment
                if (! pattern[3]) {
                    // it's not a state - it's an environment; use the style for this environment
                    style = pattern[1];
                }
            }
        }
        if (currentStyle !== style) {
            if (currentStyle) {
                tags[numTags - 1].push(pos);
            }
            if (style) {
                tags[numTags++] = [pos, style];
            }
        }
        pos += length;
        currentStyle = style;
    };

    var endOfLinePattern = /\r\n|\r|\n/g;
    endOfLinePattern.lastIndex = 0;
    var inputStringLength = code.length;
    while (pos < inputStringLength) {
        var start = pos;
        var end;
        var startOfNextLine;
        var endOfLineMatch = endOfLinePattern.exec(code);
        if (endOfLineMatch === null) {
            end = inputStringLength;
            startOfNextLine = inputStringLength;
        }
        else {
            end = endOfLineMatch.index;
            startOfNextLine = endOfLinePattern.lastIndex;
        }

        var line = code.substring(start, end);

        var matchCache = [];
        for (;;) {
            var posWithinLine = pos - start;

            var stateIndex;
            var stackLength = patternStack.length;
            if (stackLength === 0) {
                stateIndex = 0;
            }
            else {
                // get the next state
                stateIndex = patternStack[stackLength - 1][2];
            }

            var state = language[stateIndex];
            var numPatterns = state.length;
            var mc = matchCache[stateIndex];
            if (! mc) {
                mc = matchCache[stateIndex] = [];
            }
            var bestMatch = null;
            var bestPatternIndex = -1;
            for (var i = 0; i < numPatterns; i++) {
                var match;
                if (i < mc.length && (mc[i] === null || posWithinLine <= mc[i].index)) {
                    match = mc[i];
                }
                else {
                    var regex = state[i][0];
                    regex.lastIndex = posWithinLine;
                    match = regex.exec(line);
                    mc[i] = match;
                }
                if (match !== null && (bestMatch === null || match.index < bestMatch.index)) {
                    bestMatch = match;
                    bestPatternIndex = i;
                    if (match.index === posWithinLine) {
                        break;
                    }
                }
            }

            if (bestMatch === null) {
                output(line.substring(posWithinLine), null);
                break;
            }
            else {
                // got a match
                if (bestMatch.index > posWithinLine) {
                    output(line.substring(posWithinLine, bestMatch.index), null);
                }

                var pattern = state[bestPatternIndex];

                var newStyle = pattern[1];
                var matchedString;
                if (newStyle instanceof Array) {
                    for (var subexpression = 0; subexpression < newStyle.length; subexpression++) {
                        matchedString = bestMatch[subexpression + 1];
                        output(matchedString, newStyle[subexpression]);
                    }
                }
                else {
                    matchedString = bestMatch[0];
                    output(matchedString, newStyle);
                }

                switch (pattern[2]) {
                    case ACTION.NOP:
                        // do nothing
                        break;
                    case ACTION.EXIT:
                        // exit
                        patternStack.pop();
                        break;
                    case ACTION.EXIT_ALL:
                        // exitall
                        patternStack.length = 0;
                        break;
                    default:
                        // this was the start of a delimited pattern or a state/environment
                        patternStack.push(pattern);
                        break;
                }
            }
        }

        // end of the line
        if (currentStyle) {
            tags[numTags - 1].push(pos);
            currentStyle = null;
        }
        pos = startOfNextLine;
    }

    return tags;
}

// Convert to JsonML tree
export function jml(code: string, tokens: Ttoken[], prefix = 'hl-'): any[] {
    var pos = 0;
    var list = [];
    for(var token of tokens) {
        var [start, style, end] = token;
        if(pos < start) {
            list.push(code.substring(pos, start));
        }
        list.push(['span', {'class': prefix + style}, code.substring(start, end)]);
        pos = end;
    }
    return list;
}

export function css(root = '.hl-desigual', prefix = 'hl-') {
    prefix = '.' + prefix;
    return {
        [root]: {
            color: 'black',
            'font-style': 'normal',
            'font-weight': 'normal',
            [prefix + 'keyword']:       {color: 'blue', 'font-weight': 'bold'},
            [prefix + 'type']:          {color: 'darkgreen'},
            [prefix + 'usertype']:      {color: 'teal'},
            [prefix + 'string']:        {color: 'red', 'font-family': 'monospace'},
            [prefix + 'regexp']:        {color: 'orange', 'font-family': 'monospace'},
            [prefix + 'specialchar']:   {color: 'pink', 'font-family': 'monospace'},
            [prefix + 'comment']:       {color: 'brown', 'font-style': 'italic'},
            [prefix + 'number']:        {color: 'purple'},
            [prefix + 'preproc']:       {color: 'darkblue', 'font-weight': 'bold'},
            [prefix + 'symbol']:        {color: 'darkred'},
            [prefix + 'function']:      {color: 'black', 'font-weight': 'bold'},
            [prefix + 'cbracket']:      {color: 'red'},
            [prefix + 'todo']:          {'font-weight': 'bold', 'background-color': 'cyan'},
            [prefix + 'predef_var']:    {color: 'darkblue'},
            [prefix + 'predef_func']:   {color: 'darkblue', 'font-weight': 'bold'},
            [prefix + 'classname']:     {color: 'teal'},
            [prefix + 'url']:           {color: 'blue', 'font-family': 'monospace', 'text-decoration': 'underline'},
            [prefix + 'date']:          {color: 'blue', 'font-weight': 'bold'},
            [prefix + 'time']:          {color: 'darkblue', 'font-weight': 'bold'},
            [prefix + 'file']:          {color: 'darkblue', 'font-weight': 'bold'},
            [prefix + 'ip']:            {color: 'darkgreen'},
            [prefix + 'name']:          {color: 'darkgreen'},
            [prefix + 'variable']:      {color: 'darkgreen'},
            [prefix + 'italics']:       {color: 'darkgreen', 'font-style': 'italic'},
            [prefix + 'bold']:          {color: 'darkgreen', 'font-weight': 'bold'},
            [prefix + 'underline']:     {color: 'darkgreen', 'font-decoration': 'underline'},
            [prefix + 'fixed']:         {color: 'green', 'font-family': 'monospace'},
            [prefix + 'argument']:      {color: 'darkgreen'},
            [prefix + 'optionalargument']: {color: 'purple'},
            [prefix + 'math']:          {color: 'orange'},
            [prefix + 'bibtex']:        {color: 'blue'},
            [prefix + 'newfile']:       {color: 'darkgreen'},
            [prefix + 'difflines']:     {color: 'blue'},
            [prefix + 'selector']:      {color: 'purple'},
            [prefix + 'property']:      {color: 'blue'},
            [prefix + 'value']:         {color: 'darkgreen', 'font-style': 'italic'},
            [prefix + 'section']:       {color: 'black', 'font-weight': 'bold'},
            [prefix + 'paren']:         {color: 'red'},
            [prefix + 'attribute']:     {color: 'darkgreen'},
        }
    };
}
