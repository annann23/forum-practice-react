import Link from "next/link";
import { forumData } from "../common";

export default async function List() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get/list`, { method: 'GET', cache: 'no-cache' });
  const data = await res.json();

  return (
    <div>
      <Link href={'/write'} className="flex justify-center w-[100px] text-[18px] mx-[44px] my-[22px] rounded-[2px] border-[1px] border-white">새 글 작성</Link>
      <div className="list-group p-[44px]">
        {
          !data || !Array.isArray(data) || data.length === 0 ? 
          <p>게시판이 비어있습니다.</p> :
          data.map((elem: forumData) => 
            <Link href={`detail/${elem._id}`} className="flex flex-col mb-10" key={elem._id}>
              <div className="font-bold text-2xl">{elem.title}</div>
              <div className="content mb-4">{elem.content}</div>
              <span className="w-60 h-0.5 bg-white"></span>
            </Link>
          ) 
        }
      </div>
    </div>
  )
}