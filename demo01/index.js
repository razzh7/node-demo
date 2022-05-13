'use strict'

var fs = require('fs')
var path = require('path')
var postcss = require('postcss')
var fontFile = fs.readFileSync(path.resolve(__dirname, './icon.scss'))
var nodes = postcss.parse(fontFile).nodes
var classList = [];


nodes.forEach((node) => {
  var selector = node.selector || '';
  var reg = new RegExp(/\.el-icon-([^:]+):before/);
  var arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});
fs.writeFile(path.resolve(__dirname, './icon.json'), JSON.stringify(classList), () => {})