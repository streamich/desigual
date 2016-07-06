module.exports = [
  [
    [
      /#/g,
      'comment',
      1
    ],
    [
      /\[.*\]/g,
      'section',
      1
    ],
    [
      /([^="\[]+)((?:\[.+\])*)([ \t]*)(=)/g,
      ['type', 'paren', 'normal', 'symbol'],
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
