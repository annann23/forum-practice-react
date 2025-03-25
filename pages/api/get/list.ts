import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, answer: NextApiResponse){
  if(request.method == 'GET') {
    try {
      const db = (await connectDB).db("Forum")
      const res = await db.collection('post').find().toArray();
    
      answer.status(200).json(res);
    } catch(e) {
      answer.status(400).json(e)
    }
  }
}