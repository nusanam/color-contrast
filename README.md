# color-contrast

add this to package.json (from react template: https://saurabhnativeblog.medium.com/react30-project23-setting-up-a-react-project-using-webpack-and-babel-f4ca5554dfec)

  `"start": "webpack serve --mode development --open",
  "build": "webpack --mode production"`
  
  
## color

for `package.json`: 

`
"scripts": {
		"prepublish": "babel src --out-dir dist",
		"build": "webpack -p --progress --colors --config public/webpack.config.js",
		"gh-pages": "gh-pages -d demo",
		"start": "webpack-dev-server --config package/webpack.config.js",
		"test": "jest"
},
`