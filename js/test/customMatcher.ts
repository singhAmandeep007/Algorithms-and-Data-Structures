declare global {
  namespace jest {
    interface Matchers<R> {
      toBeLessThanExecutionTime(expectedTimeInMs: number): CustomMatcherResult;
    }
  }
}

function toBeLessThanExecutionTime(received: any, expectedTimeInMs: number) {
  const startTime = performance.now();
  received();
  const endTime = performance.now();
  const actualTime = endTime - startTime;

  const pass = actualTime < expectedTimeInMs;
  const message = pass
    ? () => `Expected execution time to be less than ${expectedTimeInMs}ms, got ${actualTime.toFixed(2)}ms.`
    : () => `Expected execution time to be less than ${expectedTimeInMs}ms, but it was ${actualTime.toFixed(2)}ms.`;

  return {
    pass,
    message,
  };
}

expect.extend({
  toBeLessThanExecutionTime,
});

export { toBeLessThanExecutionTime };
