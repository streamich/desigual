module.exports = [
  [
    [
      /^[a-zA-Z0-9_-]+[\s]*=/g,
      'type',
      -1
    ],
    [
      /^\.[a-zA-Z0-9_-]+[\s]*:|@(?:.+)@/g,
      'preproc',
      -1
    ],
    [
      /^(?:[A-Za-z0-9_.\s-])+:/g,
      'symbol',
      -1
    ],
    [
      /%[a-zA-Z0-9_.-]+:%[a-zA-Z0-9_.-]+/g,
      'string',
      -1
    ],
    [
      /(?:[A-Za-z0-9_-]*)\.(?:[A-Za-z0-9_-]+)/g,
      'normal',
      -1
    ],
    [
      /\b(?:import)\b/g,
      'preproc',
      -1
    ],
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'number',
      -1
    ],
    [
      /\\"|\\'/g,
      'normal',
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
      /function[ \t]+(?:[A-Za-z]|_)[A-Za-z0-9_]*[ \t]*(?:\(\))?|(?:[A-Za-z]|_)[A-Za-z0-9_]*[ \t]*\(\)/g,
      'function',
      -1
    ],
    [
      /(?:[A-Za-z]*[-\/]+[A-Za-z]+)+/g,
      'normal',
      -1
    ],
    [
      /\b(?:alias|bg|bind|break|builtin|caller|case|command|compgen|complete|continue|declare|dirs|disown|do|done|elif|else|enable|esac|eval|exec|exit|export|false|fc|fg|fi|for|getopts|hash|help|history|if|in|jobs|let|local|logout|popd|printf|pushd|read|readonly|return|select|set|shift|shopt|source|suspend|test|then|times|trap|true|type|typeset|umask|unalias|unset|until|wait|while)\b/g,
      'keyword',
      -1
    ],
    [
      /(?:[A-Za-z]|_)[A-Za-z0-9_]*(?==)|\$\{(?:[^ \t]+)\}|\$\((?:[^ \t]+)\)|\$(?:[A-Za-z]|_)[A-Za-z0-9_]*|\$(?:[^ \t]{1})/g,
      'variable',
      -1
    ],
    [
      /~|!|%|\^|\*|\(|\)|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\||%%|(?:##){2}(?!#)/g,
      'symbol',
      -1
    ],
    [
      /#/g,
      'comment',
      3
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
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ]
];