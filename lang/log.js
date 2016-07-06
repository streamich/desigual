module.exports = [
  [
    [
      /^[A-Za-z]{3}[ \t]{1,2}[\d]{1,2}(?=[ \t][\d]{2}:[\d]{2}:[\d]{2})/g,
      'date',
      1,
      1
    ],
    [
      /^[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b/g,
      'ip',
      6,
      1
    ],
    [
      /^\[[A-Za-z]{3}[ \t][A-Za-z]{3}[ \t]{1,2}[\d]{1,2}[ \t](?=[\d]{2}:[\d]{2}:[\d]{2})/g,
      'date',
      8,
      1
    ],
    [
      /[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b/g,
      'ip',
      -1
    ],
    [
      /\b(?:root|failure)\b/g,
      'string',
      -1
    ],
    [
      /((?:port|pid)[ \t])([\d]+)/g,
      ['normal', 'port'],
      -1
    ],
    [
      /[ \t](?=(?:IN|OUT)=)/g,
      'normal',
      9,
      1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\b[\d]{2}:[\d]{2}:[\d]{2}\b/g,
      'time',
      2,
      1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /[^ \t]+/g,
      'symbol',
      3,
      1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /:/g,
      'normal',
      -3
    ],
    [
      /[^:\(\[]+/g,
      'function',
      -1
    ],
    [
      /\[/g,
      'number',
      4
    ],
    [
      /\(/g,
      'number',
      5
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\]/g,
      'number',
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
      /\)/g,
      'number',
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
      /[A-Za-z0-9]+(?=[ \t]\[[\d]{2}\/[A-Za-z]{3}\/[\d]{4})/g,
      'string',
      -1
    ],
    [
      /[\d]{2}\/[A-Za-z]{3}\/[\d]{4}(?=:[\d]{2}:[\d]{2}:[\d]{2})/g,
      'date',
      -1
    ],
    [
      /[\d]{2}:[\d]{2}:[\d]{2}[ \t][+-][\d]{4}/g,
      'time',
      -1
    ],
    [
      /[1-5][\d]{2}[ \t][-0-9]+/g,
      'twonumbers',
      -1
    ],
    [
      /\b(?:OPTIONS|GET|HEAD|POST|PUT|DELETE|TRACE|CONNECT|PROPFIND|MKCOL|COPY|MOVE|LOCK|UNLOCK)\b/g,
      'webmethod',
      7,
      1
    ]
  ],
  [
    [
      /[^ \t]+/g,
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
      /\b[\d]{2}:[\d]{2}:[\d]{2}\b/g,
      'time',
      -1
    ],
    [
      /[\d]{4}\]|\[[A-Za-z]{3}[ \t][A-Za-z]{3}[ \t]{1,2}[\d]{1,2}[ \t](?=[\d]{2}:[\d]{2}:[\d]{2})/g,
      'date',
      -1
    ],
    [
      /\[error\]/g,
      'string',
      -1
    ],
    [
      /\[notice\]/g,
      'comment',
      -1
    ],
    [
      /[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b/g,
      'ip',
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
      /(?:IN|OUT|PROTO)=(?=[^ \t]+)/g,
      'normal',
      7,
      1
    ],
    [
      /(?:SPT|DPT|TYPE|SEQ)=(?=[^ \t]+)/g,
      'normal',
      10,
      1
    ],
    [
      /\b(?:CWR|ECE|URG|ACK|PSH|RST|SYN|FIN)\b/g,
      'number',
      -1
    ],
    [
      /[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b/g,
      'ip',
      -1
    ]
  ],
  [
    [
      /[^ \t]+/g,
      'cbracket',
      -2
    ]
  ]
];