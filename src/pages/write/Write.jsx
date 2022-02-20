import { useState, useRef } from 'react';
import "./write.css";
import { requestMgr } from "../../RequestMgr";
import { CloseIcon } from '../../icon';

function sendAddPost() {
//   axios({
//     url : process.env.REACT_APP_API_URL,
//     method : "post",
//     data : {
//         "cmd" : 2,
//         "excerpt" : document.getElementById("excerptInput"),
//         "title" : document.getElementById("writeInput"),
//         "content" : document.getElementById("writeInput writeText"),
//     }
// }).then(function (response) {
//     console.log(response);
// });
  console.log(123);
  let excerpt = "abc";
  let title = "abc";
  let content = "abc";
  requestMgr.sendAddPost(excerpt, title, content);
}
export default function Write() {
  const [imgUrl, setImgUrl] = useState(null);
  const handleOnChange = e => {
      const file = e.target.files[0];
      console.log(file)
      if (file) {
        setImgUrl(URL.createObjectURL(file));
      }
  };
  const tagInput = useRef(null);
  const [tags, setTags] = useState([]);
  const deleteTag = (e, index) => {
    setTags(tags.filter((item, _index) => _index !== index));
  }
  const addTag = () => {
    if (tagInput && tagInput.current && tagInput.current.value) {
      setTags([...tags, { content: tagInput.current.value}]);
      tagInput.current.value = '';
    }
  }
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup writeFormGroup_responsive">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" multiple="false" type="file" style={{ display: "none" }} onChange={handleOnChange} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
          <input
            className="writeInput"
            placeholder="Excerpt"
            type="text"
            autoFocus={true}
          />
          <button id="btnSubmit" className="writeSubmit" type="submit" onClick={sendAddPost}>
            SUBMIT
          </button>
        </div>
        { imgUrl && (
          <div className="image_preview">
            <img src={imgUrl} alt="img_post"/>
          </div>
        )}
        <div className="tags">
          <div>
            Tags
          </div>
          <div className="add_tag">
            <input type="text" ref={tagInput} />
            <button type="button" onClick={addTag}>Add</button>
          </div>
          <div className="tag_list">
            { tags && tags.map((item, index) => {

              return (
                <div className="tag" key={`tag-${index}`}>
                  {item.content}
                  <div className="close_icon" onClick={e => deleteTag(e, index)}>
                    <CloseIcon />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="writeFormGroup content">
          <div className="write_text_header">
            Nội dung
          </div>
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
      </form>
    </div>
  );
}
