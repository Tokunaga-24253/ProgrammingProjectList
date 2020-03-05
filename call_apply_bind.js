// 要求

// call
Function.prototype.call2 = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("not a function, Error");
  }
  // 默认上下文是window
  context = context || window;
  // 保存默认的fn
  const { fn } = context;

  // 前面讲的关键，将函数本身作为对象context的属性调用，自动绑定this
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);

  // 恢复默认的fn
  context.fn = fn;
  return result;
};

function testFunction(arg1, arg2) {
  console.log(arg1, arg2);
  console.log(this.a, this.b);
}
const testObject = {
  a: "funck a ",
  b: "funck b "
};
// testFunction.call2(
//   {
//     a: "aaab",
//     b: "bbba"
//   },
//   1,
//   2
// );
let test2 = testFunction.bind(testObject);
test2(2, 3);
