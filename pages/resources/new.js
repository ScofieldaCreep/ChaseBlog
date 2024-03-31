import Layout from "components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ResourceForm from "components/ResourceForm";

const ResourceCreate = () => {
    const router = useRouter();

    const createResource = (formData) => {
        axios
            .post("/api/resources", formData)
            // 如果成功，就跳转到首页
            .then((_) => router.push("/"))
            // 如果失败，就弹出错误信息
            .catch((err) => alert(err?.response?.data));
    };

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <ResourceForm
                            onFormSubmit={createResource}
                        ></ResourceForm>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ResourceCreate;
