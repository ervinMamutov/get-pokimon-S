module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      files: ["**/*.js"], // Match all JavaScript files
      rules: {
        quotes: ["error", "single"], // Enforce single quotes for JavaScript
      },
    },
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // Other ESLint config options
  extends: [
    // Other extends configurations
    "plugin:jest/recommended",
  ],
  rules: {},
};
