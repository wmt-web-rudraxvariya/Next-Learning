import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const id = req.query;
    console.log("req.headerasdasdasd", id.deleteblog);
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://blogTestUser:TSCZ36Eilkt9janp@cluster0.ylkwz.mongodb.net/blogsData?retryWrites=true&w=majority"
    );
    const db = client.db();
    const blogsData = db.collection("blogsData");
    const response = await blogsData.deleteOne({
      _id: ObjectId(id.deleteblog),
    });
    console.log(response);
    client.close();
    res.status(200).json({ message: "Blog Deleted succesfully!" });
  }
}
