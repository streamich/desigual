module.exports = [
  [
    [
      /\/\/\//g,
      'comment',
      1
    ],
    [
      /\/\//g,
      'comment',
      7
    ],
    [
      /\/\*\*/g,
      'comment',
      8
    ],
    [
      /\/\*/g,
      'comment',
      9
    ],
    [
      /\b(?:abstract|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|final|finally|for|function|goto|if|implements|in|instanceof|interface|native|new|null|private|protected|prototype|public|return|static|super|switch|synchronized|throw|throws|this|transient|true|try|typeof|var|volatile|while|with)\b/g,
      'keyword',
      -1
    ],
    [
      /(\+\+|--|\)|\])(\s*)(\/=?(?![*\/]))/g,
      ['symbol', 'normal', 'symbol'],
      -1
    ],
    [
      /(0x[A-Fa-f0-9]+|(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?)(\s*)(\/(?![*\/]))/g,
      ['number', 'normal', 'symbol'],
      -1
    ],
    [
      /([A-Za-z$_][A-Za-z0-9$_]*\s*)(\/=?(?![*\/]))/g,
      ['normal', 'symbol'],
      -1
    ],
    [
      /\/(?:\\.|[^*\\\/])(?:\\.|[^\\\/])*\/[gim]*/g,
      'regexp',
      -1
    ],
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'number',
      -1
    ],
    [
      /"/g,
      'string',
      10
    ],
    [
      /'/g,
      'string',
      11
    ],
    [
      /~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,
      'symbol',
      -1
    ],
    [
      /\{|\}/g,
      'cbracket',
      -1
    ],
    [
      /\b(?:Math|Infinity|NaN|undefined|arguments)\b/g,
      'predef_var',
      -1
    ],
    [
      /\b(?:Array|Boolean|Date|Error|EvalError|Function|Number|Object|RangeError|ReferenceError|RegExp|String|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt)\b/g,
      'predef_func',
      -1
    ],
    [
      /\b(?:applicationCache|closed|Components|content|controllers|crypto|defaultStatus|dialogArguments|directories|document|frameElement|frames|fullScreen|globalStorage|history|innerHeight|innerWidth|length|location|locationbar|menubar|name|navigator|opener|outerHeight|outerWidth|pageXOffset|pageYOffset|parent|personalbar|pkcs11|returnValue|screen|availTop|availLeft|availHeight|availWidth|colorDepth|height|left|pixelDepth|top|width|screenX|screenY|scrollbars|scrollMaxX|scrollMaxY|scrollX|scrollY|self|sessionStorage|sidebar|status|statusbar|toolbar|top|window)\b/g,
      'predef_var',
      -1
    ],
    [
      /\b(?:alert|addEventListener|atob|back|blur|btoa|captureEvents|clearInterval|clearTimeout|close|confirm|dump|escape|find|focus|forward|getAttention|getComputedStyle|getSelection|home|moveBy|moveTo|open|openDialog|postMessage|print|prompt|releaseEvents|removeEventListener|resizeBy|resizeTo|scroll|scrollBy|scrollByLines|scrollByPages|scrollTo|setInterval|setTimeout|showModalDialog|sizeToContent|stop|unescape|updateCommands|onabort|onbeforeunload|onblur|onchange|onclick|onclose|oncontextmenu|ondragdrop|onerror|onfocus|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onpaint|onreset|onresize|onscroll|onselect|onsubmit|onunload)\b/g,
      'predef_func',
      -1
    ],
    [
      /(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,
      'function',
      -1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
      'url',
      -1
    ],
    [
      /<\?xml/g,
      'preproc',
      2,
      1
    ],
    [
      /<!DOCTYPE/g,
      'preproc',
      4,
      1
    ],
    [
      /<!--/g,
      'comment',
      5
    ],
    [
      /<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,
      'keyword',
      -1
    ],
    [
      /<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,
      'keyword',
      6,
      1
    ],
    [
      /&(?:[A-Za-z0-9]+);/g,
      'preproc',
      -1
    ],
    [
      /<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,
      'keyword',
      -1
    ],
    [
      /<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,
      'keyword',
      6,
      1
    ],
    [
      /@[A-Za-z]+/g,
      'type',
      -1
    ],
    [
      /(?:TODO|FIXME|BUG)(?:[:]?)/g,
      'todo',
      -1
    ]
  ],
  [
    [
      /\?>/g,
      'preproc',
      -2
    ],
    [
      /([^=" \t>]+)([ \t]*)(=?)/g,
      ['type', 'normal', 'symbol'],
      -1
    ],
    [
      /"/g,
      'string',
      3
    ]
  ],
  [
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'string',
      -2
    ]
  ],
  [
    [
      />/g,
      'preproc',
      -2
    ],
    [
      /([^=" \t>]+)([ \t]*)(=?)/g,
      ['type', 'normal', 'symbol'],
      -1
    ],
    [
      /"/g,
      'string',
      3
    ]
  ],
  [
    [
      /-->/g,
      'comment',
      -2
    ],
    [
      /<!--/g,
      'comment',
      5
    ]
  ],
  [
    [
      /(?:\/)?>/g,
      'keyword',
      -2
    ],
    [
      /([^=" \t>]+)([ \t]*)(=?)/g,
      ['type', 'normal', 'symbol'],
      -1
    ],
    [
      /"/g,
      'string',
      3
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ],
  [
    [
      /\*\//g,
      'comment',
      -2
    ],
    [
      /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
      'url',
      -1
    ],
    [
      /<\?xml/g,
      'preproc',
      2,
      1
    ],
    [
      /<!DOCTYPE/g,
      'preproc',
      4,
      1
    ],
    [
      /<!--/g,
      'comment',
      5
    ],
    [
      /<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,
      'keyword',
      -1
    ],
    [
      /<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,
      'keyword',
      6,
      1
    ],
    [
      /&(?:[A-Za-z0-9]+);/g,
      'preproc',
      -1
    ],
    [
      /<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,
      'keyword',
      -1
    ],
    [
      /<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,
      'keyword',
      6,
      1
    ],
    [
      /@[A-Za-z]+/g,
      'type',
      -1
    ],
    [
      /(?:TODO|FIXME|BUG)(?:[:]?)/g,
      'todo',
      -1
    ]
  ],
  [
    [
      /\*\//g,
      'comment',
      -2
    ],
    [
      /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
      'url',
      -1
    ],
    [
      /(?:TODO|FIXME|BUG)(?:[:]?)/g,
      'todo',
      -1
    ]
  ],
  [
    [
      /"/g,
      'string',
      -2
    ],
    [
      /\\./g,
      'specialchar',
      -1
    ]
  ],
  [
    [
      /'/g,
      'string',
      -2
    ],
    [
      /\\./g,
      'specialchar',
      -1
    ]
  ]
];
