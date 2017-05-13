# eslint-config-style-guide
Custom Style Guide for JavaScript

在[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)基础上做适当的调整。

## 相关资源 ##
- [Airbnb JavaScript 编码规范](https://github.com/yuche/javascript)
- [Airbnb React/JSX 编码规范](https://github.com/JasonBoy/javascript/tree/master/react)
- https://github.com/sivan/javascript-style-guide
- https://github.com/benmosher/eslint-plugin-import
- [Vue.js 组件编码规范](https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README-CN.md)
- https://github.com/eggjs/eslint-config-egg
- https://github.com/ElemeFE/eslint-config-elemefe
- https://github.com/google/eslint-config-google


## TODO ##
```
for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array  no-restricted-syntax
```
- https://github.com/airbnb/javascript/issues/851