import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
const MyTest = (props) => {
    return (
        <>
            <h1>MyTest Component</h1>
            {props.children}
        </>
    );
};

function About() {
    return (
        <>
            <Layout>
                <h1>Im about page</h1>
            </Layout>
        </>
    );
}
export default About;
