import "./write.css";
import { requestMgr } from "../../RequestMgr";

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
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
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
        <div className="writeFormGroup">
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
