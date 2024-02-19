import Layout from "components/Layout";
import resources from "../api/resources";
import axios from "axios";

const ResourceDetail = ({ resource }) => {
  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();
  console.log(data);
  const paths = data.map((resource) => {
    return { params: { id: resource.id } };
  });
  return {
    paths,
    // 如果fallback为false，那么如果没有匹配的路径，就会返回404页面;
    // 如果fallback为true，那么如果没有匹配的路径，就会返回空的页面，然后在客户端进行加载
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await dataRes.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;
