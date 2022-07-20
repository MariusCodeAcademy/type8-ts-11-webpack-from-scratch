# Webback

## steps

0. `npm init -y`
1. `npm git init`
2. `npm i webpack webpack-cli webpack-dev-server -D`
3. scripts

```
  "start": "webpack serve",
  "watch": "webpack --watch",
  "build": "webpack"
```

4. `npm run build`
5. Babel `npm i -D babel-loader @babel/core @babel/preset-env`

### Css

1. `npm i -D css-loader mini-css-extract-plugin`

### React

1. `npm i react react-dom`
2. `npm i -D @babel/preset-react`

### TS

1.  add .ts extension
2.  write ts code - see it explode
3.  add ts-loader `npm i -D ts-loader`
4.  add rule fot ts files - see it explode
5.  add tsconfig.json file `tsc --init`
