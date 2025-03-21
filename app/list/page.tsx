import {connectDB} from "@/util/database"
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("Forum");
  let result = await db.collection('post').find().toArray();

  return (
    <div className="list-group p-12">
      {
        result.map((elem, index) => 
          <Link href={`detail/${elem._id}`} className="flex flex-col mb-10" key={index}>
            <div className="font-bold text-2xl">{elem.title}</div>
            <div className="content mb-4">{elem.content}</div>
            <span className="w-60 h-0.5 bg-white"></span>
          </Link>
        )
      }
    </div>
  )
}