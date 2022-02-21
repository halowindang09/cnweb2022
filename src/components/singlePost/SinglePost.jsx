import React from 'react';
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import "./singlePost.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { DeleteIcon, GrayStar, YellowStar } from '../../icon';

export default function SinglePost({id, data}) {
  const [listComment, setListComment] = useState([]);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(false);

  const contentRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  
  const handleOnClick = e => {
    if (username && email && content &&
      validateText(username) && validateText(email) &&  validateText(content)  
    ) {
      setListComment([...listComment, {
        id: listComment.length,
        username,
        email,
        content
      }]);
      contentRef.current.value = null;
      emailRef.current.value = null;
      usernameRef.current.value = null;
      setEmail(null);
      setUsername(null);
      setContent(null);
      setError(false);
      // AJAX
      const request = new XMLHttpRequest();
      const url = ''; // nhập api ở đây
      request.open('POST', url, true);
      request.setRequestHeader("Content-Type", "application/json");
      const data = JSON.stringify(''); // truyền dữ liệu vào đây
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            // thành công . Khi thành công mình làm gì tiếp theo thì làm ở đây
          }
          else {
            // thất bại thì cần làm gì ??
          }
        }
      };
      request.send(data);
    
    } else {
        setError(true);
    }};
  const handleOnChange = (e, type) => {
    const value = e.target.value;
    if (type === 'email') setEmail(value);
    if (type === 'username') setUsername(value);
    if (type === 'content') setContent(value);
  }
  const array = ['fuck', ]; // them vao day
  const validateText = text => {
    for(let element of array) {
      const regex = new RegExp(element, 'g');
      if (regex.test(text)) return false;
    }
    return true;
  };
  const deleteComment = (e, index) => {
    setListComment(listComment.filter((item, _index) => index !== _index));
  };

  const [stars, setStars] = useState([false, false, false, false, false]);
  const [appreciateNum, setAppreciateNum] = useState(2000);

  const formatNum = (num) => {
    if (num < 1000 && num > 0) return `${num}`;
    else if (num > 1000) return `${num/1000}k`;
    else return null;
  }
  const handleClickStar = (e, index) => {
    if (index === 0 && stars[0] && !stars[1]) setStars([false, false, false, false, false]) // click sao thứ 1 khi đang ở 1 sao thì sẽ trở về chưa đánh giá
    if (index === 0 && stars[0] && stars[1]) setStars([true, false, false, false, false]); // click sao thứ 1 khi đang ở 2 sao trở lên sẽ trở về 1 sao
    if (index === 1) setStars([true, true, false, false, false]);
    if (index === 2) setStars([true, true, true, false, false]);
    if (index === 3) setStars([true, true, true, true, false]);
    if (index === 4) setStars([true, true, true, true, true]);
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
          {data.title}
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
          {data.content}
        </p>
      </div>
      <div className="tag_icon">
        <i className="singlePostIcon fas fa-tags"></i>
      </div>
      <div className="tags_list">
        { data.tags && data.tags.map((item, index) => {
          return (
            <div className="element_tag" key={`tag-${index}`}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="stars">
        {stars.map((item, index) => (
          <div className="star" key={`star-${index}`} onClick={e => handleClickStar(e, index)}>
            { item ? <YellowStar /> : <GrayStar />}
          </div>
        ))}
      </div>
      <div style={{ fontSize: '12px', marginLeft: '20px', marginBottom: '20px', fontFamily: 'monospace'}}>
        { appreciateNum > 0 && (
          formatNum(appreciateNum).concat(' đánh giá')
        )}
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
                  <div className="delete_comment" onClick={e => deleteComment(e, index)}>
                    <DeleteIcon />
                  </div>
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
