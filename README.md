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
