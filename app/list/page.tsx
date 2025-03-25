import Link from "next/link";
import { forumData } from "../common";

export default async function List() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get/list`, { method: 'GET', cache: 'no-cache' });
  const data = await res.json();

  if (!data || data.length == 0) return <p>게시판이 비어있습니다.</p>

  return (
    <div className="list-group p-12">
      {
        data.map((elem: forumData) => 
          <Link href={`detail/${elem._id}`} className="flex flex-col mb-10" key={elem._id}>
            <div className="font-bold text-2xl">{elem.title}</div>
            <div className="content mb-4">{elem.content}</div>
            <span className="w-60 h-0.5 bg-white"></span>
          </Link>
        ) 
      }
    </div>
  )
}