module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:jsdoc/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/strict",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react"
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    camelcase: 0,
    curly: ["error", "all"],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "rebass",
            message: "Please use rebass/styled-components instead."
          }
        ]
      }
    ],
    // 'prettier/prettier': 0,
    "react/boolean-prop-naming": [
      "error",
      { rule: "^(is|has|will|(.*)On)[A-Z]([A-Za-z0-9]?)+" }
    ],
    "react/forbid-prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-sort-props": "error",
    "react/no-array-index-key": 0,
    "react/no-did-mount-set-state": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "react/sort-prop-types": "error",
    "react/state-in-constructor": ['error', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    "react/style-prop-object": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/order": [
      "warn",
      {
        groups: [
          ["external", "builtin"],
          ["internal", "index", "sibling", "parent"]
        ],
        "newlines-between": "never"
      }
    ],
    "jsdoc/match-description": [
      "warn",
      { matchDescription: "^(.* - )([A-Z]|[`\\d_])([\\s\\S]*[.?!`])?$" }
    ],
    "jsx-a11y/anchor-is-valid": ["error", { components: [] }],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-for": [
      2,
      {
        components: ["Label"],
        required: {
          every: ["id"]
        },
        allowChildren: false
      }
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        depth: 1
      }
    ],
    "max-len": ["error", { code: 120, ignoreUrls: true }],
    "no-cond-assign": ["error", "except-parens"],
    "no-confusing-arrow": "error",
    "no-mixed-operators": "error",
    "no-negated-condition": "error",
    "no-param-reassign": ["error", { props: false }],
    "no-new": 0,
    "no-tabs": "error",
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: true
      }
    ],
    "prefer-promise-reject-errors": 0
  },
  plugins: [
    "import",
    "json",
    "markdown",
    "prettier",
    "promise",
    "compat",
    "jsdoc",
    "react",
    "react-hooks"
  ]
};
