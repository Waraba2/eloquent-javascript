console.log(/a(?=e)/.exec("braeburn"));
// [ 'a', index: 2, input: 'braeburn', groups: undefined ]
console.log(/a(?! )/.exec("a b"));
// null
