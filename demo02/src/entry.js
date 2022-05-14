
import Button from './packagesButton/index.js';
import Alert from './packagesAlert/index.js';
const install = (Vue, options) => {
  Components.forEach(component, {
    // Vue.component(component.name, component) // 没有Vue构造函数
  })
}
export default {
  Button,
Alert,
  install,
  version: '1.0.2'
}