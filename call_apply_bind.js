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

let test2 = testFunction.bind(testObject);
test2(2, 3);
