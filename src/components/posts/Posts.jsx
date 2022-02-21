import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import "./posts.css";
import { requestMgr } from "../../RequestMgr";


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      let data = await requestMgr.getAllPost();
      const _data = await requestMgr.getAllPostWithTag();
      data = data.map(item => {
        let newItem = item;
        for (let _item of _data) {
          if (newItem.postId === _item.postID) {
            if (newItem.tags && newItem.tags.length > 0 ) {
              const _tag = newItem.tags;
              newItem = {
                ...newItem,
                tags: [..._tag, _item.tagName]
              }
            }
            else newItem = { ...item, tags: [_item.tagName]}
          }
          else newItem = { ...item }
        }
        return newItem;
      })
      setAllPosts(data);
    };
    getAllPosts();
  }, []);

  const listImage = [
    "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];
  return (
    <div className="posts">
      {
        allPosts && allPosts.length > 0 && allPosts.map((item, index) => {

          return (
            <Post 
              key={`post-${index}`}
              img={listImage[getRandomInt(3)]}
              item={item}
            />
          );
        })
      }
    </div>
  );
}
