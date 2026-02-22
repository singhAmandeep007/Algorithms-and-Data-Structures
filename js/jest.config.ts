/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "jest";

// https://jestjs.io/docs/configuration
const config: Config = {
  // ---------------------------------------------------------------------------
  // ENVIRONMENT
  //  The test environment that will be used for testing. The default environment in Jest is a Node.js environment. If you are building a web app, you can use a browser-like environment through jsdom instead.-------------------------------------------------------------------
  // Default to "node" (faster). Tests that need a DOM can opt-in per file with
  // the @jest-environment docblock: /** @jest-environment jsdom */
  // READ-MORE: https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: "node",

  displayName: {
    name: "UNIT_TESTS",
    color: "blue",
  },

  // ---------------------------------------------------------------------------
  // TEST DISCOVERY
  // The glob patterns Jest uses to detect test files. By default it looks for .js, .jsx, .ts and .tsx files inside of __tests__ folders, as well as any files with a suffix of .test or .spec (e.g. Component.test.js or Component.spec.js). It will also find files called test.js or spec.js.
  // READ-MORE: https://jestjs.io/docs/configuration#testmatch-arraystring

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  // An array of regexp pattern strings that are matched against all test paths before executing the test. If the test path matches any of the patterns, it will be skipped.
  // READ-MORE: https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring
  testPathIgnorePatterns: ["/node_modules/", "/coverage-reports/"],
  // An array of RegExp patterns that are matched against all source file paths before re-running tests in watch mode. If the file path matches any of the patterns, when it is updated, it will not trigger a re-run of tests.
  // READ-MORE: https://jestjs.io/docs/configuration#watchpathignorepatterns-arraystring
  watchPathIgnorePatterns: ["node_modules", "coverage-reports"],

  // ---------------------------------------------------------------------------
  // TRANSFORM — @swc/jest (Rust-based, ~20x faster than ts-jest/babel)
  // Type-checking is handled separately via `npm run tsc:check`.
  // ---------------------------------------------------------------------------
  transform: {
    "^.+\\.[tj]sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          target: "es2022",
        },
      },
    ],
    // Static assets → path stub
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/jest.fileTransformer.js",
  },

  // ---------------------------------------------------------------------------
  // CACHING — persist transform cache between runs
  // ---------------------------------------------------------------------------
  cacheDirectory: "<rootDir>/node_modules/.cache/jest",

  // ---------------------------------------------------------------------------
  // MOCKS
  // ---------------------------------------------------------------------------
  // Automatically clear mock calls and instances before every test
  // READ-MORE: https://jestjs.io/docs/configuration#clearmocks-boolean
  clearMocks: true,
  // Automatically restore mock state and implementation before every test
  // READ-MORE: https://jestjs.io/docs/configuration#restoremocks-boolean
  restoreMocks: true,

  // ---------------------------------------------------------------------------
  // SETUP
  // ---------------------------------------------------------------------------
  // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.
  // READ-MORE: https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ["<rootDir>/test/jest.setupAfterEnv.ts"],

  // ---------------------------------------------------------------------------
  // MODULE RESOLUTION
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources, like images or styles with a single module. The most specific rule should be listed first.
  // READ-MORE: https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  // An array of directory names to be searched recursively up from the requiring module's location.
  // READ-MORE: https://jestjs.io/docs/configuration#moduledirectories-arraystring
  moduleDirectories: ["<rootDir>/", "<rootDir>/node_modules"],
  // An array of file extensions your modules use. If you require modules without specifying a file extension, these are the extensions Jest will look for, in left-to-right order.
  // READ-MORE: https://jestjs.io/docs/configuration#modulefileextensions-arraystring
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  // ---------------------------------------------------------------------------
  // COVERAGE
  // ---------------------------------------------------------------------------
  coverageDirectory: "<rootDir>/coverage-reports/unit",
  collectCoverageFrom: [
    "<rootDir>/excercises/**/*.{ts,tsx,js,jsx}",
    "!**/*.test.*",
    "!**/*.spec.*",
    "!**/node_modules/**",
  ],
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },

  // ---------------------------------------------------------------------------
  // PERFORMANCE
  // ---------------------------------------------------------------------------
  // Throw on deprecated API usage
  errorOnDeprecated: true,
  // Per-test timeout
  // READ-MORE: https://jestjs.io/docs/configuration#testtimeout-number
  testTimeout: 5000,
  // A number limiting the number of tests that are allowed to run at the same time when using `test.concurrent`.
  // READ-MORE: https://jestjs.io/docs/api#testconcurrentname-fn-timeout (EXPERIMENTAL)
  // READ-MORE: https://jestjs.io/docs/configuration#maxConcurrency-number
  maxConcurrency: 10,
  // Specifies the maximum number of workers the worker-pool will spawn for running tests.
  // READ-MORE: https://jestjs.io/docs/configuration#maxworkers-number--string
  maxWorkers: "50%",
  // Recycle workers that exceed this memory to prevent leaks
  // Specifies the memory limit for workers before they are recycled
  // READ-MORE: https://jestjs.io/docs/configuration#workeridlememorylimit-numberstring
  workerIdleMemoryLimit: "512MB",
};

export default config;
