var Components = require('./components.json');
var render = require('json-templater/string');
var IMPORT_TEMPLATE = 'import {{name}} from \'./packages{{package}}/index.js\';'
var uppercamelcase = require('uppercamelcase')
var fs = require('fs')
var path = require('path')
var endline = require('os').EOL

var MAIN_TEMPLATE = `
{{import}}
const install = (Vue, options) => {
  Components.forEach(component, {
    // Vue.component(component.name, component) // 没有Vue构造函数
  })
}
export default {
  {{list}},
  install,
  version: '{{version}}'
}`

var IMPORT_ARR = Object.keys(Components)
var ImportComponentTemplate = []
var upperNameArr = []

IMPORT_ARR.forEach(name => {
  var upperName = uppercamelcase(name)
  upperNameArr.push(upperName)
  ImportComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: upperName,
    package: upperName
  }))
})

var template = render(MAIN_TEMPLATE, {
  import: ImportComponentTemplate.join(endline),
  list: upperNameArr.join(',' + endline),
  version: require('./package.json').version
})

console.log('t', template)

fs.writeFileSync(path.resolve(__dirname, './src/entry.js'), template)