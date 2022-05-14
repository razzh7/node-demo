## 自动生成所需文件
demo02是一个基于node环境下自动生成所需文件的操作，核心利用了`json-templater`,它的作用是可以在模版中使用`mustache`作为占位符，后期使用它提供的`API render`对模版中的`mustache`语法进行替换操作，配合`shell`就可以达到自动生成文件的目的，这对组件库的开发很有帮助。  

### 用到的依赖包
+ fs: Nodejs中的文件操作
+ path: Nodejs中的文件路径
+ json-templater：模版站位符转换工具
+ uppercamelcase：转换成驼峰命名法
+ os.EOL: Nodejs中的系统换行符号 Windows系统是\r\n，其他系统是\n
