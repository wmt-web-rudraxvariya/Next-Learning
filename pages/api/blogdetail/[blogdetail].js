import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const blogId = req.query.blogdetail;
    const client = await MongoClient.connect(process.env.NEXT_MONGO_CONNECT);
    const db = client.db();
    const blogsData = db.collection("blogsData");
    const TotalBlogs = await blogsData.findOne({
      _id: ObjectId(blogId),
    });
    console.log(TotalBlogs)
    res.status(200).json({ blogdetail: TotalBlogs });
    client.close();
  }
}
