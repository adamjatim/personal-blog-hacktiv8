import React from "react";
import Header from "../components/Header";
import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <div className="mx-[200px] pb-10">
      <Header />
      <div className="flex flex-col gap-16">
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
      </div>
    </div>
  );
};

export default Home;
