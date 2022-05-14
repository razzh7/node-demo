## PostCSS API应用
element构建官网icon的流程：通过`postcss`，将icon.scss中转换成`nodes`结构,利用正则截取icons的类名，通过`fs.writeFile`API自动生成了`icons.json`目录，通过遍历就形成了`elementUi`官网上的`icon`列表。

### 依赖包
+ fs: Nodejs中的文件操作
+ path: Nodejs中的文件路径
+ postcss.parse: 将css解析成类似node树的包