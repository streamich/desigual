module.exports = [
  [
    [
      /#/g,
      'comment',
      1
    ],
    [
      /!/g,
      'comment',
      1
    ],
    [
      /([^="]+)([ \t]*)(=)/g,
      ['type', 'normal', 'symbol'],
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
