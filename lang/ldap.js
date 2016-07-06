module.exports = [
  [
    [
      /#/g,
      'comment',
      1
    ],
    [
      /(\b[A-Za-z0-9_]+:)((?:[^,=]*$)?)/g,
      ['keyword', 'string'],
      -1
    ],
    [
      /([A-Za-z0-9_]+)(=)([^,]+)(,?)/g,
      ['attribute', 'symbol', 'string', 'symbol'],
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
