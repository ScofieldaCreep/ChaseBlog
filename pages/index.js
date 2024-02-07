import React, { useState } from "react";

/* 
index.js
用途: index.js通常位于pages目录下，它代表的是应用的入口页面，也就是访问应用根URL时首先加载的页面。
页面组件: 它是一个React组件，用于定义应用的主页内容。在Next.js中，pages目录下的每个文件都自动成为路由，而index.js就是这些路由的根。
特定页面: 与_app.js不同，index.js只关心自己的布局和逻辑，不会影响到其他页面。
*/
function CompA() {
  React.createElement("h1", null, "CompA");
}
function CompB() {
  return <h1>CompB</h1>;
}
// JSX 语法: 用于在 JavaScript 代码中直接编写 HTML 标签 -> Javascript XML
class CompC extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello CompC!");
  }
}

function Home() {
  // useState: 用于在函数组件中声明状态变量
  // [stateValue, mutateStateFunction] = useState(initialState)
  const [myValue, setValue] = useState(10);
  const increVal = (incrementor) => {
    setValue(myValue + incrementor);
  };
  return (
    <div>
      Current Value: <h1>{myValue}</h1>
      <button onClick={() => setValue(myValue + 1)}>+</button>
      <button onClick={() => setValue(myValue - 1)}>-</button>
      <CompA />
    </div>
  );
}

export default Home;
