import React from "react";
/* 
index.js
用途: index.js通常位于pages目录下，它代表的是应用的入口页面，也就是访问应用根URL时首先加载的页面。
页面组件: 它是一个React组件，用于定义应用的主页内容。在Next.js中，pages目录下的每个文件都自动成为路由，而index.js就是这些路由的根。
特定页面: 与_app.js不同，index.js只关心自己的布局和逻辑，不会影响到其他页面。
*/
function CompA() {
  return <h1>CompA</h1>;
}

class CompC extends React.Component {
  render() {
    return <h1>CompC</h1>;
  }
}

function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <CompA></CompA>
      <CompC></CompC>
    </div>
  );
}

export default Home;
