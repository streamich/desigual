module.exports = [
  [
    [
      /\b(?:include|include_once|require|require_once)\b/g,
      'preproc',
      -1
    ],
    [
      /\/\//g,
      'comment',
      1
    ],
    [
      /#/g,
      'comment',
      1
    ],
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'number',
      -1
    ],
    [
      /"/g,
      'string',
      2
    ],
    [
      /'/g,
      'string',
      3
    ],
    [
      /\b(?:and|or|xor|__FILE__|exception|php_user_filter|__LINE__|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|each|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|for|foreach|function|global|if|isset|list|new|old_function|print|return|static|switch|unset|use|var|while|__FUNCTION__|__CLASS__|__METHOD__)\b/g,
      'keyword',
      -1
    ],
    [
      /\/\/\//g,
      'comment',
      4
    ],
    [
      /\/\//g,
      'comment',
      1
    ],
    [
      /\/\*\*/g,
      'comment',
      9
    ],
    [
      /\/\*/g,
      'comment',
      10
    ],
    [
      /(?:\$[#]?|@|%)[A-Za-z0-9_]+/g,
      'variable',
      -1
    ],
    [
      /<\?php|~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,
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
      /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
      'url',
      -1
    ],
    [
      /<\?xml/g,
      'preproc',
      5,
      1
    ],
    [
      /<!DOCTYPE/g,
      'preproc',
      6,
      1
    ],
    [
      /<!--/g,
      'comment',
      7
    ],
    [
      /<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,
      'keyword',
      -1
    ],
    [
      /<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,
      'keyword',
      8,
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
      8,
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
      2
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
      2
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
      7
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
      2
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
      5,
      1
    ],
    [
      /<!DOCTYPE/g,
      'preproc',
      6,
      1
    ],
    [
      /<!--/g,
      'comment',
      7
    ],
    [
      /<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,
      'keyword',
      -1
    ],
    [
      /<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,
      'keyword',
      8,
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
      8,
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
  ]
];
