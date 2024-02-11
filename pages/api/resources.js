import data from "./data.json";
// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  res.send(data);
}
