# Setup environment to run tests

1.  Install Node.js > 21.7.1
2.  `cd js`
3.  `npm install`

# Run all tests

```bash
npm test
```

# Run all tests in a specific file

```bash
npm test -- 'absolutepath/to/testfile'
# npm run test -- './excercises/8queens/8queen.test.ts'
```

# Run a specific test in a specific file

```bash
npm test -- 'absolutepath/to/testfile' --t='testname'
# npm run test -- './excercises/8queens/8queen.test.ts' -t 'eightQueen returns true'
```

# Get coverage report

```bash
npm run test:coverage
```
