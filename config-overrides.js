const path = require('path')
const postcssPresetEnv = require('postcss-preset-env')

const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addWebpackAlias,
  addBabelPreset,
  addDecoratorsLegacy,
  getBabelLoader
} = require('customize-cra')

const addCustomize = config => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false //去掉map文件
  }
  getBabelLoader(config).options.presets.unshift('@emotion/babel-preset-css-prop')
  console.log(getBabelLoader(config).options.presets)
  // throw new Error('hei')
  return config
}

module.exports = override(
  // addBabelPreset('@emotion/babel-preset-css-prop'),
  // addBabelPreset(['@emotion/babel-preset-css-prop', {
  //   "preventFullImport": true
  // }]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css' //自动打包相关的样式 默认为 style:'css'
  }),
  addPostcssPlugins([
    postcssPresetEnv({      
      stage: 3,
      features: {
        'nesting-rules': true,  // 支持 & 嵌套写法
      },
      browsers: 'last 2 versions'
    }),
  ]),
  // 定义路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  // addDecoratorsLegacy(), // yarn add @babel/plugin-proposal-decorators -D
  addCustomize
)
