import React from "react";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { NotionRenderer } from "react-notion";

const Blog = () => {
  return (
    <div className="mx-[200px]">
      <div className="h-[520px]">
        <img
          src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="max-w-[673px] mx-auto">
        <div className="">
          <h1 className="text-[#333] text-5xl font-medium text-center mt-4 mb-3">
            Instagram head says Threads API is in the works
          </h1>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex items-center gap-2 text-xs text-[#333]">
              <AiOutlineCalendar />
              <p>4/11/2023</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#333]">
              <AiOutlineUser />
              <p>Alicia Stones</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          Content dari notion
          {/* <NotionRenderer /> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
