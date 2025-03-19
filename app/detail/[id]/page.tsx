import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import Link from "next/link";

interface PageProps {
  params: { id: ObjectId};
}

export default async function Detail(props:PageProps) {
  let db = (await connectDB).db('Forum')
  const { id } = await props.params;
  let result = await db.collection('post').findOne({_id : new ObjectId(id)});

  return (
    <div className="m-[30px]">
      <div className="text-[22px] font-bold mb-[30px]">상세페이지</div>
      <div className="text-[18px] font-bold mb-[20px]">{result?.title}</div>
      <div className="mb-[20px] min-h-[100px]">{result?.content}</div>
      <Link href="/list" className="border-1 text-[14px] px-[10px] py-[4px] rounded-sm cursor-pointer">돌아가기</Link>
    </div>
  )
}