/* 
_app.js
用途: _app.js是一个特殊的文件，用于初始化所有页面。你可以使用它来保持布局不变、保持状态时跨页面共享数据、添加全局CSS（例如使用<GlobalStyle />）等。
全局作用: 它包裹着你的每个页面，因此在应用中任何页面渲染之前都会先加载_app.js。这使得_app.js成为执行全局逻辑的理想位置。
自定义App组件: 通过自定义App组件，你可以控制页面初始化，如页面变化时的过渡效果，或者注入额外数据到页面组件中等。
*/

import "../styles/globals.css";
import "bulma/css/bulma.min.css";
// pageProps 是每个页面的初始化属性， Component 是当前页面的组件
function MyApp({ Component, pageProps }) {
  console.log(Component);
  return <Component {...pageProps} />;
}

export default MyApp;
