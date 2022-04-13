module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : 1,
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-mixed-spaces-and-tabs": "warn",
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
  },

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript",
  ],
};
