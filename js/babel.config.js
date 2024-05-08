/*eslint-env node */
// const env = String(process.env.NODE_ENV);
// const isTest = env === "test";
// const isDev = env === "development";
// const isProd = !isTest && !isDev;

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [
            "ie 11",
            "last 3 Edge versions",
            "last 3 Chrome versions",
            "last 3 Opera versions",
            "last 3 Safari versions",
            "last 3 Firefox versions",
          ],
        },
      },
    ],
    "@babel/preset-typescript",
  ].filter(Boolean),
  plugins: ["@babel/plugin-transform-runtime"].filter(Boolean),
};
