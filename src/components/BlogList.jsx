import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <div className="flex gap-14">
      <Link to={`/blog/1`} className="w-[400px] h-[200px] ">
        <img
          src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="rounded-lg object-cover object-center w-full h-full"
        />
      </Link>
      <div className="">
        <Link to={`/blog/1`} className="text-xl font-medium">
          Instagram head says Threads API is in the works
        </Link>
        <div className="text-xs flex items-center gap-2 mt-4 mb-6">
          <AiOutlineCalendar />
          <p>4/11/2023</p>
        </div>
        <p className="text-base mb-6">
          Instagram head Adam Mosseri said today that a Threads API is in the
          works. This will give chance to developers to create different apps
          and experiences around Threads. Mosseri was responding to jou…
        </p>
        <Link
          to={`/blog/1`}
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
