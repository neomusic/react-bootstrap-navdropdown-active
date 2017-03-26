module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jasmine": true,
    "node": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": [2,"never"],
    "no-duplicate-case": 2,
    "no-extra-parens": [2,"all"],
    "no-extra-semi": 2,
    "linebreak-style": [2,"unix"],
    "semi": [2,"never"],
    "no-trailing-spaces": [2,{"skipBlankLines":false}]
  }
};
