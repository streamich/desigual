module.exports = [
  [
    [
      /\b(?:require)\b/g,
      'preproc',
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
      1
    ],
    [
      /'/g,
      'string',
      2
    ],
    [
      /</g,
      'string',
      3
    ],
    [
      /\/[^\n]*\//g,
      'regexp',
      -1
    ],
    [
      /(%r)(\{(?:\\\}|#\{[A-Za-z0-9]+\}|[^}])*\})/g,
      ['symbol', 'regexp'],
      -1
    ],
    [
      /\b(?:alias|begin|BEGIN|break|case|defined|do|else|elsif|end|END|ensure|for|if|in|include|loop|next|raise|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|false|nil|self|true|__FILE__|__LINE__|and|not|or|def|class|module|catch|fail|load|throw)\b/g,
      'keyword',
      -1
    ],
    [
      /(?:^\=begin)/g,
      'comment',
      4
    ],
    [
      /(?:\$[#]?|@@|@)(?:[A-Za-z0-9_]+|'|\"|\/)/g,
      'type',
      -1
    ],
    [
      /[A-Za-z0-9]+(?:\?|!)/g,
      'normal',
      -1
    ],
    [
      /~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,
      'symbol',
      -1
    ],
    [
      /(#)(\{)/g,
      ['symbol', 'cbracket'],
      -1
    ],
    [
      /#/g,
      'comment',
      5
    ],
    [
      /\{|\}/g,
      'cbracket',
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
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|')/g,
      null,
      -1
    ],
    [
      /'/g,
      'string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      />/g,
      'string',
      -2
    ]
  ],
  [
    [
      /^(?:\=end)/g,
      'comment',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ]
];
