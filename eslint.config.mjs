// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  // 1️⃣ Base JS recommended rules
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser, // Browser globals like window, document
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // 2️⃣ Prettier integration + custom rules
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      // Custom ESLint rules
      "no-unused-vars": ["warn", { argsIgnorePattern: "res|next|^err" }],
      "arrow-body-style": ["error", "as-needed"],
      "no-param-reassign": ["error", { props: false }],
      "no-console": "warn",
      "quotes": ["error", "double", { allowTemplateLiterals: true }],
      "func-names": "off",
      "space-unary-ops": "error",
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "comma-dangle": "off",
      "max-len": "off",
      "import/extensions": "off", // requires eslint-plugin-import if enabled
      "no-underscore-dangle": "off",
      "consistent-return": "off",
      "radix": "off",
      "no-shadow": ["error", { hoist: "all", allow: ["resolve", "reject", "done", "next", "err", "error"] }],
      "no-unused-expressions": "off",
    },
  },
];