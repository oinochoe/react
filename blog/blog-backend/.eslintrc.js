const path = require('path');

module.exports = {
    "extends": "airbnb-base",
    "settings" : {
        "import/resolver": {
          node: { paths: [path.resolve('./src')] }
        },
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-unused-vars" : 1,
        "comma-dangle" : 0,
        "eol-last": 0,
        "no-console": 0,
        "linebreak-style": 0,
    }
};