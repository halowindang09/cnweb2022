import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import "./posts.css";
import { requestMgr } from "../../RequestMgr";

export default function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      const data = await requestMgr.getAllPost();
      console.log(data)
      };
    getAllPosts();
  }, []);

  console.log(allPosts);

  return (
    <div className="posts">
      <Post
        img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        content=""
      />
      {/* <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" content="mnl" />
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" content="rer" />
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" content="egreg" /> */}
    </div>
  );
}
