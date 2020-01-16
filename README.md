# demo

## 修改配置方案（react-app-rewired）

1. `yarn add react-app-rewired --dev`

2. 根目录新建 config-overrides.js 配置文件

3. 核心代码(根据实际需要配置):

   ```javascript
   const { override } = require('customize-cra')
   const addCustomize = config => {
     if (process.env.NODE_ENV === 'production') {
       config.devtool = false // 去掉map文件
     }
     return config
   }
   module.exports = override(addCustomize)
   ```

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

## antd 按需加载配置

1. 安装 babel-plugin-import

   `yarn add babel-plugin-import --dev`

2. 配置 react-app-rewired，关键代码：

   ```javascript
   // config-overrides.js
   const { override, fixBabelImports } = require('customize-cra')
   module.exports = override(
     fixBabelImports('import', {
       libraryName: 'antd',
       libraryDirectory: 'es',
       style: 'css' //自动打包相关的样式 默认为 style:'css'
     })
   )
   ```

## css 方案(emotion)

1. [emotion](https://emotion.sh/docs/css-prop) 即是 JSX 思路的 CSS 实现

2. 示例代码：

```tsx
import React, { FC } from 'react'
type StyleProps = {
  color: string
  width: number
}

const EmotionStyle = styled.div<StyleProps>`
  width: ${(props: StyleProps) => props.width}px;
  color: ${(props: StyleProps) => props.color};
  text-align center;
`
const EmotionDemo: FC = () => {
  return (
    <EmotionStyle color="red" width={300}>
      <p>emotion css示例</p>
    </EmotionStyle>
  )
}
export default EmotionDemo
```

## api 请求

可以考虑使用[swr 库](https://github.com/zeit/swr)

## yarn 常用命令

- 初始化项目: `yarn init -y`

- 安装包: `yarn add [package-name]`

- 安装包（添加到 devDependencies）: `yarn add [package-name] --dev`

- 删除包: `yarn remove [package-name]`

- 安装所有依赖关系: `yarn`

- 启动命令: `yarn start`

## build 区分 development 和 production 模式(待实现)

[参考](https://segmentfault.com/a/1190000018130766)

查阅文档发现， 为了达到区分生产环境构建和开发环境构建的目的， 可以通过自定义环境变量来实现， 参考 How can I create build for my dev server, 在项目文件夹下创建 .env.production 和 .env.development 文件。 分别设置 REACT_APP_ENV 为 production 和 development。 在 package.json 中创建新的命令如下：

```shell
// yarn add dotenv-cli -D
"dev-build": "dotenv -e .env.development react-scripts build"
```

当使用 yarn start 和 yarn dev-build 命令时会加载 .env.development 文件。 当使用 yarn build 命令时，对应加载 .env.production 文件。因此可以在业务代码中可以通过使用 process.env.REACT_APP_ENV 来区分不同构建环境（实际 dev-build 打包还是生产环境的，仅用于业务代码区分 ）。

## 状态管理方案 redux or mobx

## 代码拆分（路由懒加载）

参考 React.lazy 以及 React.Suspense

## 路由解决方案 react-router

`yarn add @types/react-router-dom react-router-dom`

如果未安装 react-router-dom，会报错 Can't resolve 'react-router-dom'

[react-router5文档](https://reacttraining.com/react-router/web/api/)

## 功能

后台管理系统，主要分列表，详情，与编辑 3 部分

- 列表

  - 搜索条件（根据屏幕自适应 3-4 个，输入框长度自适应，展开与收起控制）

  - 列表（分页：页码，跳转指定页，上一页，下一页；详情，编辑按钮）

- 详情与编辑

  - 左侧菜单与右侧项目对应高亮，支持滚动后边对应高亮左侧菜单

  - 右侧项目有表单，表格（支持选择），统一提交，项目之间支持数据关联

  - 详情与编辑需展示不同效果


<!-- Suspense -->