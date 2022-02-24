import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://img1.kpopmap.com/2019/04/myteen-profile-junseop.jpg"
          alt=""
        />
        <p>
          Chào tất cả mọi người mình tên là Nguyễn Nam A. Chào mừng bạn đến với blog của mình. 
          Đây là nơi mình thường xuyên chia sẻ về những câu chuyện nho nhỏ trong đời sống thường ngày của mình.
           Mình tin rằng, hạnh phúc đến từ những điều giản dị nhất.
            Hi vọng bạn sẽ tìm thấy được sự bình yên và một chút niềm vui khi đọc blog của mình.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">TAGS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


