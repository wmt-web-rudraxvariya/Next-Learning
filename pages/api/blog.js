import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_PWD);
    const db = client.db();
    const blogsData = db.collection("blogsData");
    const response = await blogsData.insertOne(data);
    console.log(response);
    client.close();
    res.status(201).json({ message: "Blog added succesfully!" });
  }
  res.status(201).json({ message: "Blog added succesfully!" });
}
