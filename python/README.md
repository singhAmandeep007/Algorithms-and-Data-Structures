# Setup environment to run tests

1.  Install Conda > 24.1.2
2.  `cd python`
3.  `conda env create -f environment.yml`
4.  `conda activate algoriths-and-data-structures`

# Run all tests

```bash
pytest -vv -s --html=report.html --self-contained-html
```

# Run all tests in a specific file

```bash
pytest -vv -s --html=report.html --self-contained-html 'path/to/testfile'
# pytest -vv -s --html=report.html --self-contained-html './python/excercises/fib/test_fib.py'
```

# Run a specific test in a specific file

```bash
pytest -vv -s --html=report.html --self-contained-html 'path/to/testfile' -k 'testname'
# pytest -vv -s --html=report.html --self-contained-html './python/excercises/fib/test_fib.py' -k 'TestFibonacci'
```

# Update `environment.yml`

```bash
conda env export > environment.yml
```
