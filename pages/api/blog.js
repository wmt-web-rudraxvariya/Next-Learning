import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    const data = req.body;
    console.log("datat", data)
    const client = await MongoClient.connect(process.env.NEXT_MONGO_CONNECT);
    const db = client.db();
    const blogsData = db.collection("blogsData");
    const response = await blogsData.insertOne(data);
    console.log(response);
    client.close();
    res.status(201).json({ message: "Blog added succesfully!" });
  }
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.NEXT_MONGO_CONNECT);
    const db = client.db();
    const blogsData = db.collection("blogsData");
    const TotalBlogs = await blogsData.find().toArray();
    res.status(200).json(TotalBlogs);
  }
}
