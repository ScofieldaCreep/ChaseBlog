import axios from "axios";

export default async function (req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();
    // 这里res 是返回给浏览器的，而不是返回给前端组件的
    return res.send(data);
  }
  if (req.method === "POST") {
    const { title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data are missing!");
    }
    try {
      const axiosRes = await axios.post(
        "http://localhost:3001/api/resources",
        // req.body 是前端组件传过来的数据
        req.body
      );
      return res.send(axiosRes.data);
    } catch {
      return status(422).send("Data cannot be stored!");
    }
  }
}
