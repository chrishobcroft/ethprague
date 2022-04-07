module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : 1,
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript",
  ],
};
