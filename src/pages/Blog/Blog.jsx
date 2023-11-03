import React, { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { NotionRenderer } from "react-notion";
import { useParams } from "react-router-dom";
import { getBlogList, getBlogDetail } from "../../services/blog.service";

import "./blog.style.css";

const Blog = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState();
  const [dataPostDetail, setDataPostDetail] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const respAllPost = await getBlogList();
      const respPostDetail = await getBlogDetail(id);

      const findPost = respAllPost.find((post) => post.id === id);

      setPostInfo(findPost);
      setDataPostDetail(respPostDetail);
    };

    fetchData();
  }, []);

  if (!postInfo && !dataPostDetail) return <>Loading...</>;

  return (
    <div className="mx-[200px]">
      <div className="h-[520px]">
        <img
          src={postInfo.cover[0].url}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="max-w-[673px] mx-auto">
        <div className="">
          <h1 className="text-[#333] text-5xl font-medium text-center mt-4 mb-3">
            {postInfo.title}
          </h1>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex items-center gap-2 text-xs text-[#333]">
              <AiOutlineCalendar />
              <p>{postInfo.created_date}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#333]">
              <AiOutlineUser />
              <p>Alicia Stones</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <NotionRenderer blockMap={dataPostDetail} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
