/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
import type { Config } from "jest";

import { defaults } from "jest-config";

// https://jestjs.io/docs/configuration
const config: Config = {
  // The test environment that will be used for testing. The default environment in Jest is a Node.js environment. If you are building a web app, you can use a browser-like environment through jsdom instead.
  // READ-MORE: https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: "jsdom",

  displayName: {
    name: "UNIT_TESTS",
    color: "blue",
  },
  // The glob patterns Jest uses to detect test files. By default it looks for .js, .jsx, .ts and .tsx files inside of __tests__ folders, as well as any files with a suffix of .test or .spec (e.g. Component.test.js or Component.spec.js). It will also find files called test.js or spec.js.
  // READ-MORE: https://jestjs.io/docs/configuration#testmatch-arraystring
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  // An array of regexp pattern strings that are matched against all test paths before executing the test. If the test path matches any of the patterns, it will be skipped.
  // READ-MORE: https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns],

  // An array of RegExp patterns that are matched against all source file paths before re-running tests in watch mode. If the file path matches any of the patterns, when it is updated, it will not trigger a re-run of tests.
  // READ-MORE: https://jestjs.io/docs/configuration#watchpathignorepatterns-arraystring
  watchPathIgnorePatterns: ["node_modules"],

  // WHY: using ts-jest instead of babel-jest:
  // READ-MORE: https://kulshekhar.github.io/ts-jest/docs/babel7-or-ts/
  // babel-jest by default will transpile TypeScript files, but Babel will not verify the types on runtime, therefore for type checking we use ts-jest.
  // READ-MORE: https://jestjs.io/docs/code-transformation
  transform: {
    // tells ts-jest to use Babel with the specified configuration file.
    "^.+\\.[tj]sx?$": [
      // READ-MORE: https://github.com/kulshekhar/ts-jest
      "ts-jest",
      // ts-jest by default does NOT use Babel, but if you may want to use it, especially if your code rely on Babel plugins to make some transformations then ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript by specifying the path to a babel config file.
      // READ-MORE: https://kulshekhar.github.io/ts-jest/docs/getting-started/options/babelConfig
      {
        babelConfig: "babel.config.js",
      },
    ],
    // READ-MORE: https://jestjs.io/docs/code-transformation#transforming-images-to-their-path
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/jest.fileTransformer.js",
  },

  // Automatically clear mock calls and instances before every test
  // READ-MORE: https://jestjs.io/docs/configuration#clearmocks-boolean
  clearMocks: true,

  // Automatically restore mock state and implementation before every test
  // READ-MORE: https://jestjs.io/docs/configuration#restoremocks-boolean
  restoreMocks: true,

  // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.
  // READ-MORE: https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ["<rootDir>/test/jest.setupAfterEnv.ts"],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources, like images or styles with a single module. The most specific rule should be listed first.
  // READ-MORE: https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    // https://github.com/keyz/identity-obj-proxy, useful for mocking CSS modules, when you do `styles.container`, it will resolve to "container" instead of throwing an exception.
    "\\.(css|scss)$": "identity-obj-proxy",
  },

  // An array of directory names to be searched recursively up from the requiring module's location.
  // READ-MORE: https://jestjs.io/docs/configuration#moduledirectories-arraystring
  moduleDirectories: ["<rootDir>/", "<rootDir>/node_modules"],
  // An array of file extensions your modules use. If you require modules without specifying a file extension, these are the extensions Jest will look for, in left-to-right order.
  // READ-MORE: https://jestjs.io/docs/configuration#modulefileextensions-arraystring
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  // COVERAGE
  coverageDirectory: "<rootDir>/coverage-reports/unit",
  collectCoverageFrom: ["<rootDir>/**/*.{ts,tsx,js,jsx}"],
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },

  // Make calling deprecated APIs throw helpful error messages to ease the upgrade process.
  errorOnDeprecated: true,
  // READ-MORE: https://jestjs.io/docs/configuration#testtimeout-number
  testTimeout: 5000,
  // A number limiting the number of tests that are allowed to run at the same time when using `test.concurrent`.
  // READ-MORE: https://jestjs.io/docs/api#testconcurrentname-fn-timeout (EXPERIMENTAL)
  // READ-MORE: https://jestjs.io/docs/configuration#maxConcurrency-number
  maxConcurrency: 5,
  // Specifies the maximum number of workers the worker-pool will spawn for running tests.
  // READ-MORE: https://jestjs.io/docs/configuration#maxworkers-number--string
  maxWorkers: "50%",
  // Specifies the memory limit for workers before they are recycled
  // READ-MORE: https://jestjs.io/docs/configuration#workeridlememorylimit-numberstring
  // workerIdleMemoryLimit: "2GB"
};

export default config;
