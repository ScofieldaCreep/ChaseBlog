import axios from "axios";
import Layout from "components/Layout";
import Link from "next/link";

const ResourceDetail = ({ resource }) => {
    const activateResource = () => {
        axios
            .patch("/api/resources", { ...resource, status: "active" })
            .then((_) => location.reload())
            .catch((_) => alert("Cannot activate the resource!"));
    };
    const completeResource = () => {
        axios
            .patch("/api/resources", { ...resource, status: "complete" })
            .then((_) => location.reload())
            .catch((_) => alert("Cannot activate the resource!"));
    };
    return (
        <Layout>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <section className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    <div className="content is-medium">
                                        <h2 className="subtitle is-4">
                                            {resource.createdAt}
                                        </h2>
                                        <h1 className="title">
                                            {resource.title}
                                        </h1>
                                        <p>{resource.description}</p>
                                        <p>
                                            Time to finish:{" "}
                                            {resource.timeToFinish} min
                                        </p>
                                        <Link
                                            href={`/resources/${resource.id}/edit`}
                                        >
                                            <button className="button is-warning">
                                                Update
                                            </button>
                                        </Link>

                                        <Link
                                            href={`/resources/${resource.id}`}
                                        >
                                            {resource.status == "active" ? (
                                                <button
                                                    onClick={completeResource}
                                                    className="button is-danger ml-3"
                                                >
                                                    Invalidate
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={activateResource}
                                                    className="button is-success ml-3"
                                                >
                                                    Activate
                                                </button>
                                            )}
                                        </Link>
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

export async function getServerSideProps({ params }) {
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
