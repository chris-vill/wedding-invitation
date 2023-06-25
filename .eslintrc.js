/* eslint no-undef: "off" */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["vue", "typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};

