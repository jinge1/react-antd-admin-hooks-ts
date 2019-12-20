# demo

## questions

- @types/react-router-dom 问题

  - 问题描述：使用@types/react-router-dom 报错 Can't resolve 'react-router-dom'

  - 解决办法：安装 react-router-dom

## 配置路径别名

1. config-overrides.js 中相关配置项(addWebpackAlias)

   ```javascript
   const path = require('path')
   const { override, addWebpackAlias } = require('customize-cra')

   module.exports = override(
     addWebpackAlias({
       '@': path.resolve(__dirname, 'src')
     })
   )
   ```

2. 项目根目录新增 paths.json 文件（直接配置 tsconfig.json 文件中的 paths 项，启动项目的时候文件中的 paths 会莫名其妙消失掉，所以使用 extends 扩展的形式导入。注意 baseUrl 与 paths 的路径需正确配置），内容如下：

   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["src/*"]
       }
     }
   }
   ```

3. tsconfig.json 配置 extends(tsconfig.json 文件可以利用 extends 属性从另一个配置文件里继承配置)

```json
{
  "extends": "./paths.json"
}
```

## React中CSS Modules的使用（实现CSS的局部作用域）

- 局部样式：命名规则: xxx.module.css 

    - 引入方式 import xxx from 'xxx.module.css'
    - 用法：<div className={xxx.styleName}>

- 全局样式：命名规则: xxx.css  

    - 引入方式  import ‘xxx.css’
    - 用法：<div className='styleName'>

## emotion

css方案暂定 [emotion](https://emotion.sh/docs/css-prop)

prop问题待解决

https://github.com/emotion-js/emotion/issues/1123

https://juejin.im/post/5ca5bd0ee51d4564221c4cf3

https://github.com/arackaf/customize-cra/blob/master/api.md

https://segmentfault.com/a/1190000018130766



<!-- build 区分 development 和 production 模式 -->

<!-- 通过自定义环境变量来实现， 参考 How can I create build for my dev server, 在项目文件夹下创建 .env.production 和 .env.development 文件。 分别设置 REACT_APP_ENV 为 production 和 development。 在package.json 中创建新的命令如下：

业务代码中可以通过使用 process.env.REACT_APP_ENV 来区分不同构建环境 -->

<!-- 状态管理方案 redux or mobx -->

<!-- 代码拆分（路由懒加载） 参考 React.lazy 以及 React.Suspense -->
