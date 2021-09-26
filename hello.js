const ts = require("typescript")

// 这是一个自定义转换器
function createTransformer() {
  return context => {
    return node => ts.visitNode(node, visit)

    function visit(node) {
      if (ts.isStringLiteral(node)) {
        return ts.createStringLiteral("hello world!")
      }
      return ts.visitEachChild(node, visit, context)
    }
  }
}

// 要编译源码
const source = `console.log("hello xuld")`

// 编译源码
const result = ts.transpileModule(source, {
  transformers: {
    before: [createTransformer()]
  }
})

// 打印结果
console.log(result.outputText)
