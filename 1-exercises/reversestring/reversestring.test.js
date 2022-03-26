const solutions = require('./index');

for (let sol of solutions) {
  let reverse = sol;
  test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });

  test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });

  test('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });

  test('Reverse reverses a string', () => {
    expect(reverse(' @great function # ')).toStrictEqual(' # noitcnuf taerg@ ');
  });
}
