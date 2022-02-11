import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const id = req.query;
    console.log("req.headerasdasdasd", id.updateid);
    const data = req.body;
    console.log("hello data", data);
    const client = await MongoClient.connect(process.env.NEXT_MONGO_CONNECT);
    const db = client.db();
    const blogsData = db.collection("blogsData");
    const response = await blogsData.updateOne(
      {
        _id: ObjectId(id.updateid),
      },
      { $set: { title: data.title, imgurl: data.imgurl, desc: data.desc } }
    );

    console.log(response);
    client.close();
    res.status(200).json({ message: "Blog Updated succesfully!" });
  }
}
