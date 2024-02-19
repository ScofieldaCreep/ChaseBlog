export default async function (req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();
  }
  if (req.method === "POST") {
    res.send("Data has been received!");
  }

  res.send(data);
}
