module.exports = [
  [
    [
      /\b(?:import)\b/g,
      'preproc',
      -1
    ],
    [
      /(s)(\{(?:\\\}|[^}])*\}\{(?:\\\}|[^}])*\})([ixsmogce]*)/g,
      ['keyword', 'regexp', 'keyword'],
      -1
    ],
    [
      /(s)(\((?:\\\)|[^)])*\)\((?:\\\)|[^)])*\))([ixsmogce]*)/g,
      ['keyword', 'regexp', 'keyword'],
      -1
    ],
    [
      /(s)(\[(?:\\\]|[^\]])*\]\[(?:\\\]|[^\]])*\])([ixsmogce]*)/g,
      ['keyword', 'regexp', 'keyword'],
      -1
    ],
    [
      /(s)(<.*><.*>)([ixsmogce]*)/g,
      ['keyword', 'regexp', 'keyword'],
      -1
    ],
    [
      /(q(?:q?))(\{(?:\\\}|[^}])*\})/g,
      ['keyword', 'string'],
      -1
    ],
    [
      /(q(?:q?))(\((?:\\\)|[^)])*\))/g,
      ['keyword', 'string'],
      -1
    ],
    [
      /(q(?:q?))(\[(?:\\\]|[^\]])*\])/g,
      ['keyword', 'string'],
      -1
    ],
    [
      /(q(?:q?))(<.*>)/g,
      ['keyword', 'string'],
      -1
    ],
    [
      /(q(?:q?))([^A-Za-z0-9 \t])(.*\2)/g,
      ['keyword', 'string', 'string'],
      -1
    ],
    [
      /(s)([^A-Za-z0-9 \t])(.*\2.*\2)([ixsmogce]*(?=[ \t]*(?:\)|;)))/g,
      ['keyword', 'regexp', 'regexp', 'keyword'],
      -1
    ],
    [
      /(s)([^A-Za-z0-9 \t])(.*\2[ \t]*)([^A-Za-z0-9 \t])(.*\4)([ixsmogce]*(?=[ \t]*(?:\)|;)))/g,
      ['keyword', 'regexp', 'regexp', 'regexp', 'regexp', 'keyword'],
      -1
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
      /(?:m|qr)(?=\{)/g,
      'keyword',
      2
    ],
    [
      /(?:m|qr)(?=#)/g,
      'keyword',
      4
    ],
    [
      /(?:m|qr)(?=\|)/g,
      'keyword',
      6
    ],
    [
      /(?:m|qr)(?=@)/g,
      'keyword',
      8
    ],
    [
      /(?:m|qr)(?=<)/g,
      'keyword',
      10
    ],
    [
      /(?:m|qr)(?=\[)/g,
      'keyword',
      12
    ],
    [
      /(?:m|qr)(?=\\)/g,
      'keyword',
      14
    ],
    [
      /(?:m|qr)(?=\/)/g,
      'keyword',
      16
    ],
    [
      /"/g,
      'string',
      18
    ],
    [
      /'/g,
      'string',
      19
    ],
    [
      /</g,
      'string',
      20
    ],
    [
      /\/[^\n]*\//g,
      'string',
      -1
    ],
    [
      /\b(?:chomp|chop|chr|crypt|hex|i|index|lc|lcfirst|length|oct|ord|pack|q|qq|reverse|rindex|sprintf|substr|tr|uc|ucfirst|m|s|g|qw|abs|atan2|cos|exp|hex|int|log|oct|rand|sin|sqrt|srand|my|local|our|delete|each|exists|keys|values|pack|read|syscall|sysread|syswrite|unpack|vec|undef|unless|return|length|grep|sort|caller|continue|dump|eval|exit|goto|last|next|redo|sub|wantarray|pop|push|shift|splice|unshift|split|switch|join|defined|foreach|last|chop|chomp|bless|dbmclose|dbmopen|ref|tie|tied|untie|while|next|map|eq|die|cmp|lc|uc|and|do|if|else|elsif|for|use|require|package|import|chdir|chmod|chown|chroot|fcntl|glob|ioctl|link|lstat|mkdir|open|opendir|readlink|rename|rmdir|stat|symlink|umask|unlink|utime|binmode|close|closedir|dbmclose|dbmopen|die|eof|fileno|flock|format|getc|print|printf|read|readdir|rewinddir|seek|seekdir|select|syscall|sysread|sysseek|syswrite|tell|telldir|truncate|warn|write|alarm|exec|fork|getpgrp|getppid|getpriority|kill|pipe|qx|setpgrp|setpriority|sleep|system|times|x|wait|waitpid)\b/g,
      'keyword',
      -1
    ],
    [
      /^\=(?:head1|head2|item)/g,
      'comment',
      21
    ],
    [
      /(?:\$[#]?|@|%)[\/A-Za-z0-9_]+/g,
      'variable',
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
      /\{/g,
      'regexp',
      3
    ]
  ],
  [
    [
      /[ \t]+#.*/g,
      'comment',
      -1
    ],
    [
      /\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,
      'variable',
      -1
    ],
    [
      /\\\{|\\\}|\}/g,
      'regexp',
      -3
    ]
  ],
  [
    [
      /#/g,
      'regexp',
      5
    ]
  ],
  [
    [
      /[ \t]+#.*/g,
      'comment',
      -1
    ],
    [
      /\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,
      'variable',
      -1
    ],
    [
      /\\#|#/g,
      'regexp',
      -3
    ]
  ],
  [
    [
      /\|/g,
      'regexp',
      7
    ]
  ],
  [
    [
      /[ \t]+#.*/g,
      'comment',
      -1
    ],
    [
      /\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,
      'variable',
      -1
    ],
    [
      /\\\||\|/g,
      'regexp',
      -3
    ]
  ],
  [
    [
      /@/g,
      'regexp',
      9
    ]
  ],
  [
    [
      /[ \t]+#.*/g,
      'comment',
      -1
    ],
    [
      /\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,
      'variable',
      -1
    ],
    [
      /\\@|@/g,
      'regexp',
      -3
    ]
  ],
  [
    [
      /</g,
      'regexp',
      11
    ]
  ],
  [
    [
      /[ \t]+#.*/g,
      'comment',
      -1
    ],
    [
      /\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,
      'variable',
      -1
    ],
    [
      /\\<|\\>|>/g,
      'regexp',
      -3
    ]
  ],
  [
    [
      /\[/g,
      'regexp',
      13
    ]
  ],
  [
    [
      /[ \t]+#.*/g,
      'comment',
      -1
    ],
    [
      /\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,
      'variable',
      -1
    ],
    [
      /\\]|\]/g,
      'regexp',
      -3
    ]
  ],
  [
    [
      /\\/g,
      'regexp',
      15
    ]
  ],
  [
    [
      /[ \t]+#.*/g,
      'comment',
      -1
    ],
    [
      /\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,
      'variable',
      -1
    ],
    [
      /\\\\|\\/g,
      'regexp',
      -3
    ]
  ],
  [
    [
      /\//g,
      'regexp',
      17
    ]
  ],
  [
    [
      /[ \t]+#.*/g,
      'comment',
      -1
    ],
    [
      /\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,
      'variable',
      -1
    ],
    [
      /\\\/|\//g,
      'regexp',
      -3
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
      /\=cut/g,
      'comment',
      -2
    ]
  ]
];
