import { Link } from "react-router-dom";
import "./post.css";

export default function Post({key, img, item}) {
  return (
    <div className="post" key={key}>
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {
            item.tags && item.tags.map((tag, _index) => {

              return (
                <span className="postCat" key={`tag-${_index}`}>
                  <Link className="link" to="/posts?cat=Music">
                    {tag}
                  </Link>
              </span>
              );
            })
          }
        </div>
        <span className="postTitle">
          <Link to={{
            pathname: `/post/${item.postID}`,
            state: item
          }} className="link">
            {item.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
    
  );
}
