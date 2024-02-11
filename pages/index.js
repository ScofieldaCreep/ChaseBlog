/* 
index.js
用途: index.js通常位于pages目录下，它代表的是应用的入口页面，也就是访问应用根URL时首先加载的页面。
页面组件: 它是一个React组件，用于定义应用的主页内容。在Next.js中，pages目录下的每个文件都自动成为路由，而index.js就是这些路由的根。
特定页面: 与_app.js不同，index.js只关心自己的布局和逻辑，不会影响到其他页面。
*/
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";

function Home({ resources }) {
  return (
    <div>
      <Layout>
        <ResourceHighlight resources={resources.slice(0, 2)} />
        <Newsletter />
        <ResourceList resources={resources.slice(2)} />
        <Footer />
      </Layout>
    </div>
  );
}

// async: 用于定义一个异步函数，它返回一个Promise对象。
export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();
  return {
    props: {
      resources: data,
    },
  };
}

export default Home;
