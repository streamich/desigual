module.exports = [
  [
    [
      /^[ \t]*#(?:(?:if|else)[ \t]*[A-Za-z0-9_]*|end)|import|package/g,
      'preproc',
      -1
    ],
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
      /(\b(?:class|interface))([ \t]+)([$A-Za-z0-9_]+)/g,
      ['keyword', 'normal', 'classname'],
      -1
    ],
    [
      /\b(?:abstract|assert|break|case|cast|catch|class|continue|default|do|else|enum|extends|extern|false|final|finally|for|function|if|implements|in|inline|interface|new|null|override|private|protected|public|return|static|super|switch|synchronized|this|throw|throws|true|try|typedef|untyped|var|while)\b/g,
      'keyword',
      -1
    ],
    [
      /\b(?:Bool|Dynamic|Float|Int|Void)\b/g,
      'type',
      -1
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
      /(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,
      'function',
      -1
    ],
    [
      /([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,
      ['usertype', 'usertype', 'normal'],
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
