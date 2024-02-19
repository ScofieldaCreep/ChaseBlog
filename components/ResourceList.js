/* eslint-disable react/no-unescaped-entities */
import React from "react"; // 确保导入了React，如果您使用的是React 17或更高版本并使用了新的JSX转换，则可以省略这一行。
import Link from "next/link";

const ResourceList = ({ resources }) => {
  const renderResources = () =>
    resources.map((resource) => (
      <div key={resource.id} className="column is-5 is-offset-1 ">
        <div className="content is-medium">
          <h2 className="subtitle is-5 has-text-grey">{resource.createdAt}</h2>
          <h1 className="title has-text-black is-3">{resource.title}</h1>
          <p className="has-text-dark">{resource.description}</p>
          <Link href={`/resources/${resource.id}`}>
            <button className="button is-dark">Details</button>
          </Link>
        </div>
      </div>
    ));

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline is-variable is-8">
              {renderResources()}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResourceList;
