import Layout from "components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceCreate = () => {
  const [form, setForm] = useState(DEFAULT_DATA);
  const router = useRouter();

  const submitForm = () => {
    // fetch 和 post 关系： fetch 是 get 和 post 的结合体
    axios
      .post("/api/resources", form)
      .then((res) => router.push("/"))
      .catch((err) => {
        alert(err?.response?.data || "Some error occurred!");
      });
  };

  const resetForm = () => setForm(DEFAULT_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      value={form.title}
                      onChange={handleChange}
                      name="title"
                      className="input"
                      type="text"
                      placeholder="Learn Next JS and Sanity IO"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      value={form.description}
                      name="description"
                      onChange={handleChange}
                      className="textarea"
                      placeholder="Learn these technologies because they are very popular and enable better SEO"
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      value={form.link}
                      onChange={handleChange}
                      name="link"
                      className="input"
                      type="text"
                      placeholder="https://academy.eincode.com"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={form.priority}
                        onChange={handleChange}
                        name="priority"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input
                      value={form.timeToFinish}
                      onChange={handleChange}
                      name="timeToFinish"
                      className="input"
                      type="number"
                      placeholder="60"
                    />
                  </div>
                  <p className="help">Time is in minutes</p>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      type="button"
                      onClick={submitForm}
                      className="button is-link"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button
                      onClick={resetForm}
                      type="button"
                      className="button is-link is-light"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
