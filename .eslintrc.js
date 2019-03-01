module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "CHECK": true,
        "NODE": true,
        "TIM": true,
        "pass": true,
        "root": true,
        "tim": true,
        "_require": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": "off",
        "no-trailing-spaces": "error",
        "no-unused-vars": [
            "error",
            {
                "args" : "none",
                "varsIgnorePattern" : "^_require$|^TIM$|^pass$",
            },
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
