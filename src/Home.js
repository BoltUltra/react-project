import { useState } from "react";

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
  return <div className="home"></div>;
};

export default Home;
