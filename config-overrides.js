const path = require('path')
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra')

const addCustomize = config => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false //去掉map文件
  }
  return config
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css' //自动打包相关的样式 默认为 style:'css'
  }),
  // 定义路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  // addDecoratorsLegacy(), // yarn add @babel/plugin-proposal-decorators -D
  addCustomize
)
