import React from 'react';
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import "./singlePost.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SinglePost() {
  const [listComment, setListComment] = useState([]);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(false);

  const contentRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  
  const handleOnClick = e => {
    if (validateText(username) && validateText(email) &&  validateText(content)) {
      setListComment([...listComment, {
        username,
        email,
        content
      }]);
      contentRef.current.value = null;
      emailRef.current.value = null;
      usernameRef.current.value = null;
      setError(false);
    } else {
      setError(true);
    }
  }
  const handleOnChange = (e, type) => {
    const value = e.target.value;
    if (type === 'email') setEmail(value);
    if (type === 'username') setUsername(value);
    if (type === 'content') setContent(value);
  }
  const array = ['', 'fuck', ]; // them vao day
  const validateText = text => {
    for(let element of array) {
      const regex = new RegExp(element, 'g');
      if (regex.test(text)) return false;
    }
    return true;
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-tags"></i>
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="comments_header">
        COMMENTS
      </div>
      <div className="comments">
         { listComment && (
           listComment.map((comment, index) => {
              return (
                <div className="comment" key={`comment-${index}`}>
                  <div className="comment_username">
                    <span style={{ borderBottom: '1px solid #dd9933', paddingBottom: '1px', fontWeight: '600'}}>
                      {comment.username}</span> <span style={{fontSize: '12px'}}>says:
                    </span>
                  </div>
                  <div className="comment_email">
                    {comment.email}
                  </div>
                  <div className="comment_content">
                    {comment.content}
                  </div>
                  <div className="line"></div>
                </div>
              );
           })
         )}
      </div>
      <h3 className="comment-reply-title">Leave a Reply </h3>
      <div className="single-post-cmt">
        <form className="single-post-cmt-form">
          <textarea ref={contentRef} id="cmt" placeholder="Write your comment here" onChange={e => handleOnChange(e, 'content')}/>
          <label htmlFor="name">Name</label>
          <input ref={usernameRef} type="text" id="name" onChange={e => handleOnChange(e, 'username')}/>
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" id="email" onChange={e => handleOnChange(e, 'email')}/>
          { error && (
            <div style={{ fontSize: '15px', fontStyle: 'italic', color: 'red', margin: '2px 0px 10px 0px'}}>
              Comment không hợp lệ
            </div>
          )}
          <button type="button" onClick={handleOnClick}>Send</button>
        </form>
      </div>
      {/* <form action></form>  */}
    </div>
  );
}

// gửi dữ liệu cụ thể từng bài từ database về.
