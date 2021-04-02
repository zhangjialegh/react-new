const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra')
const path = require('path')
const theme = require('./package.json').theme
function resolve (dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = override(
    addWebpackAlias({
        "@": resolve("src")
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
        localIdentName: '[local]--[hash:base64:5]'
    }),
)