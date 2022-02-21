import { useState, useRef } from 'react';
import "./write.css";
import { requestMgr } from "../../RequestMgr";
import { CloseIcon } from '../../icon';

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
  const [excerpt, setExcerpt] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const onChange = (e, type) => {
    const value = e.target.value;
    if (type === 'excerpt') setExcerpt(value);
    else if (type === 'title') setTitle(value);
    else if (type === 'content') setContent(value);
  }
  function sendAddPost() {
      requestMgr.sendAddPost(excerpt, title, content).then(response => {
      if (tags && tags.length > 0) {
        Promise.all(
          tags.map((tag, index) => {
            return requestMgr.sendAddTag(tag.content);
          })
        ).then(_response => {
          Promise.all(
            _response.map((tagId, index) => {
              return requestMgr.sendAddPostTag(tagId.data, response.data);
            })
          )
        });
      }
      });

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
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e => onChange(e, 'title')}
          />
          <input
            className="writeInput"
            placeholder="Excerpt"
            type="text"
            autoFocus={true}
            onChange={e => onChange(e, 'excerpt')}
          />
        </div>
        <label htmlFor="fileInput">
            <div className="add_image">Thêm ảnh <i className="writeIcon fas fa-plus"></i></div>
        </label>
        <input id="fileInput" multiple="false" type="file" style={{ display: "none" }} onChange={handleOnChange} />
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
            onChange={e => onChange(e, 'content')}
          />
        </div>
      </form>
      <div className="btn_submit">
          <button id="btnSubmit" className="writeSubmit" type="button" onClick={sendAddPost}>
            SUBMIT
          </button>
      </div>
    </div>
  );
}
