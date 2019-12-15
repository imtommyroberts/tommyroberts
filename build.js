const minify = require('html-minifier').minify
const fs = require('fs')

const src = fs.readFileSync('src/index.html', { encoding: 'utf-8' })

const result = minify(src, {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeTagWhitespace: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true
})

fs.writeFileSync('dist/index.html', result)
console.log('Built index')