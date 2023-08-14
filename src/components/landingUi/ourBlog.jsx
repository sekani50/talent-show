import React from "react";
import vector from '../../assets/png/Vector 1.png'
import Blog from "../composable/blog";
const blogs = [
  {date: "25th June 2023", title: "Singing and Songwriting"},
  {date: "18th May 2023", title: "Stand-Up Comedy"},
  {date: "17th May 2023", title: "Painting and Visual Arts"},
]
const OurBlog = () => {
  return (
    <div className="w-full  bg-gray-100 py-6 sm:py-8 space-y-5 sm:space-y-8">
      <h1 className="text-center text-lg sm:text-2xl font-semibold">
        Our Blogs
      </h1>
      <div className="px-4 mx-auto justify-center flex items-center text-center leading-7 sm:leading-8 w-full sm:px-20">
        Explore Insights and Inspiration: Dive into Our Blogs for Engaging Content!
      </div>
      <div >
        <img src={vector} alt='' className="mx-auto" />
      </div>
      <div className="grid grid-cols-1 w-full items-center px-4 md:flex sm:px-20 gap-6 lg:gap-10 ">
       {blogs.map((blog, index) => {
        return (
          <Blog key={index} title={blog.title} date={blog.date}/>
        )
       })}
      </div>
    </div>
  );
};

export default OurBlog;
