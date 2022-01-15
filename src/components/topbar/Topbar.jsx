import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar(props) {
  const {currentUser,setCurrentUser} = props;
  return (
  <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem"><Link className="link" to="/about">
              ABOUT ME
            </Link>
          </li>
          <li className="topListItem"><Link className="link" to="/contact">
              CONTACT
            </Link> </li>
          <li className="topListItem"><Link className="link" to="/write">
              WRITE
            </Link> </li>
        </ul>
      </div>
      <div className="topRight">
    
            <Link className="link" to="/login" onClick={()=>setCurrentUser(false)}>
              {currentUser ? "LOGOUT" : "LOGIN" }
            </Link>
            <i className="topSearchIcon fas fa-search"></i>
        
          </div>

          </div>
  );
}
