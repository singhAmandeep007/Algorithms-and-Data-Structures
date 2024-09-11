# Setup environment to run tests

1. Install Go > 1.22.1
2. `cd go`

# Run all tests

```bash
go test ./...
```

# Run a specific test

```bash
go test ./path/to/package
# go test ./excercises/twosum
```

# Run a specific test with verbose output

```bash
go test -v ./path/to/package
# go test -v ./excercises/twosum
```

# Run a specific test with verbose output and run a specific test

```bash
go test -v -run TestName ./path/to/package
# go test -v -run TestTwoSum ./excercises/twosum
```
