module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "rules": {
        "quotes": [2, "single"],
        "strict": [2, "never"],
        "generator-star-spacing": 1,
        "babel/new-cap": 1,
        "object-shorthand": 1,
        "no-await-in-loop": 1,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2
    },
    "plugins": [
        "babel",
        "react"
    ]
}
