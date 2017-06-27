module.exports = {
  extends: ['airbnb-base'],
  plugins: ['html'],
  globals: {
    CONIFG: true,
    F: true,
    $: true,
    // fis 配置
    fis: true,
    __uri: true,
    __inline: true,
    _hmt: true,
    Zepto: true,
  },
  parserOptions: {
    // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    sourceType: 'module'
  },
  env: {
    es6: true,
  },
  parser: 'babel-eslint',
  rules: {
    // style
    // allow use of unary operators, ++ and --
    'no-plusplus': 'off',
    // allow if as the only statement in an else block
    'no-lonely-if': 'off',
    // not require assignment operator shorthand where possible or prohibit it entirely
    // 可以使用x = x + y;
    // http://eslint.cn/docs/rules/operator-assignment
    'operator-assignment': 'off',
    // not enforce newline at the end of file, with no multiple empty lines
    // 要求或禁止文件末尾保留一行空行
    'eol-last': 'off',
    // not require function expressions to have a name
    // 要求或禁止命名的 function 表达式
    'func-names': 'off',

    // disallow use of variables before they are defined
    // "no-use-before-define": ["error", { "functions": true, "classes": true }]

    // best-practices
    // http://eslint.cn/docs/rules/no-param-reassign
    // 允许对函数的参数赋值
    'no-param-reassign': 'off',
    // allow redundant return; keywords
    'no-useless-return': 'off',

    // imports
    // don't require .vue extension when importing
    'import/extensions': ['error', 'never', {
      'js': 'never',
      'vue': 'never'
    }],

    // errors
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // This rule warns the usage of `console`
    // 不禁用 console
    'no-console': 'off',

    // 要求使用箭头函数作为回调
    'prefer-arrow-callback': 'off',

    /**
     * 要求使用点号
     * @see http://eslint.cn/docs/rules/dot-notation
     */
    'dot-notation': 'off',

    // variables
    // disallow use of variables before they are defined
    // 只允许函数和类定义前使用
    // 该规则接受 "nofunc" 字符串作为一个选项。 "nofunc" 和 { "functions": false, "classes": true } 的效果相同。
    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
  }
}
// "off" 或 0 - 关闭规则
// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
//
/**
 * TODO
 * - no-restricted-syntax
 * - quote-props http://eslint.cn/docs/rules/quote-props
 * - no-mixed-operators
 * - no-restricted-syntax
 */