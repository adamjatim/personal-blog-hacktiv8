import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

const BlogList = ({ imgUrl, title, createdDate, excerpt, url }) => {
  return (
    <div className="flex gap-14">
      <Link to={`/blog/${url}`} className="w-[400px] h-[200px] ">
        <img
          src={imgUrl}
          alt=""
          className="rounded-lg object-cover object-center w-full h-full"
        />
      </Link>
      <div className="">
        <Link to={`/blog/${url}`} className="text-xl font-medium">
          {title}
        </Link>
        <div className="text-xs flex items-center gap-2 mt-4 mb-6">
          <AiOutlineCalendar />
          <p>{createdDate}</p>
        </div>
        <p className="text-base mb-6">{excerpt}</p>
        <Link
          to={`/blog/${url}`}
          className="flex items-center gap-2 text-xs font-semibold text-[#e99355]"
        >
          <p>Continue reading</p>
          <GoChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
