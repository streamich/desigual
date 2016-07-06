"use strict";
function tok(code, language) {
    var tags = [];
    var numTags = 0;
    var patternStack = [];
    var pos = 0;
    var currentStyle = null;
    var output = function (s, style) {
        var length = s.length;
        if (length === 0) {
            return;
        }
        if (!style) {
            var stackLength = patternStack.length;
            if (stackLength !== 0) {
                var pattern = patternStack[stackLength - 1];
                if (!pattern[3]) {
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
                stateIndex = patternStack[stackLength - 1][2];
            }
            var state = language[stateIndex];
            var numPatterns = state.length;
            var mc = matchCache[stateIndex];
            if (!mc) {
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
                    case -1:
                        break;
                    case -2:
                        patternStack.pop();
                        break;
                    case -3:
                        patternStack.length = 0;
                        break;
                    default:
                        patternStack.push(pattern);
                        break;
                }
            }
        }
        if (currentStyle) {
            tags[numTags - 1].push(pos);
            currentStyle = null;
        }
        pos = startOfNextLine;
    }
    return tags;
}
exports.tok = tok;
function jml(code, tokens, classAttr, prefix, tag) {
    if (classAttr === void 0) { classAttr = 'class'; }
    if (prefix === void 0) { prefix = 'hl-'; }
    if (tag === void 0) { tag = 'span'; }
    var pos = 0;
    var list = [];
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        var start = token[0], style = token[1], end = token[2];
        if (pos < start) {
            list.push(code.substring(pos, start));
        }
        list.push([tag, (_a = {}, _a[classAttr] = prefix + style, _a), code.substring(start, end)]);
        pos = end;
    }
    if (pos < code.length) {
        list.push(code.substring(pos));
    }
    return list;
    var _a;
}
exports.jml = jml;
function css(root, prefix) {
    if (root === void 0) { root = '.hl-desigual'; }
    if (prefix === void 0) { prefix = 'hl-'; }
    prefix = '.' + prefix;
    return (_a = {},
        _a[root] = (_b = {
                color: 'black',
                'font-style': 'normal',
                'font-weight': 'normal'
            },
            _b[prefix + 'keyword'] = { color: 'blue', 'font-weight': 'bold' },
            _b[prefix + 'type'] = { color: 'darkgreen' },
            _b[prefix + 'usertype'] = { color: 'teal' },
            _b[prefix + 'string'] = { color: 'red', 'font-family': 'monospace' },
            _b[prefix + 'regexp'] = { color: 'orange', 'font-family': 'monospace' },
            _b[prefix + 'specialchar'] = { color: 'pink', 'font-family': 'monospace' },
            _b[prefix + 'comment'] = { color: 'brown', 'font-style': 'italic' },
            _b[prefix + 'number'] = { color: 'purple' },
            _b[prefix + 'preproc'] = { color: 'darkblue', 'font-weight': 'bold' },
            _b[prefix + 'symbol'] = { color: 'darkred' },
            _b[prefix + 'function'] = { color: 'black', 'font-weight': 'bold' },
            _b[prefix + 'cbracket'] = { color: 'red' },
            _b[prefix + 'todo'] = { 'font-weight': 'bold', 'background-color': 'cyan' },
            _b[prefix + 'predef_var'] = { color: 'darkblue' },
            _b[prefix + 'predef_func'] = { color: 'darkblue', 'font-weight': 'bold' },
            _b[prefix + 'classname'] = { color: 'teal' },
            _b[prefix + 'url'] = { color: 'blue', 'font-family': 'monospace', 'text-decoration': 'underline' },
            _b[prefix + 'date'] = { color: 'blue', 'font-weight': 'bold' },
            _b[prefix + 'time'] = { color: 'darkblue', 'font-weight': 'bold' },
            _b[prefix + 'file'] = { color: 'darkblue', 'font-weight': 'bold' },
            _b[prefix + 'ip'] = { color: 'darkgreen' },
            _b[prefix + 'name'] = { color: 'darkgreen' },
            _b[prefix + 'variable'] = { color: 'darkgreen' },
            _b[prefix + 'italics'] = { color: 'darkgreen', 'font-style': 'italic' },
            _b[prefix + 'bold'] = { color: 'darkgreen', 'font-weight': 'bold' },
            _b[prefix + 'underline'] = { color: 'darkgreen', 'font-decoration': 'underline' },
            _b[prefix + 'fixed'] = { color: 'green', 'font-family': 'monospace' },
            _b[prefix + 'argument'] = { color: 'darkgreen' },
            _b[prefix + 'optionalargument'] = { color: 'purple' },
            _b[prefix + 'math'] = { color: 'orange' },
            _b[prefix + 'bibtex'] = { color: 'blue' },
            _b[prefix + 'newfile'] = { color: 'darkgreen' },
            _b[prefix + 'difflines'] = { color: 'blue' },
            _b[prefix + 'selector'] = { color: 'purple' },
            _b[prefix + 'property'] = { color: 'blue' },
            _b[prefix + 'value'] = { color: 'darkgreen', 'font-style': 'italic' },
            _b[prefix + 'section'] = { color: 'black', 'font-weight': 'bold' },
            _b[prefix + 'paren'] = { color: 'red' },
            _b[prefix + 'attribute'] = { color: 'darkgreen' },
            _b
        ),
        _a
    );
    var _a, _b;
}
exports.css = css;
