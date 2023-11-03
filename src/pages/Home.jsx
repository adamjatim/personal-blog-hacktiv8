import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import { getBlogList } from "../services/blog.service";

const Home = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogList();

      console.log(resp);
      setBlogList(resp);
    };

    fetchData();
  }, []);

  if (blogList.length === 0) return <>Loading...</>;

  return (
    <div className="mx-[200px] pb-10">
      <Header />
      <div className="flex flex-col gap-16">
        {blogList.map((list) => (
          <BlogList
            title={list.title}
            createdDate={list.created_date}
            excerpt={list.excerpt}
            url={list.id}
            imgUrl={list.cover[0].url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
