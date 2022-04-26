import { useState } from "react";
import BlogList from "./BlogLists";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "Mayowa",
      id: 1,
    },
    {
      title: "Welcome party",
      body: "lorem ipsum ...",
      author: "Damilola",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum ...",
      author: "Usman",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
