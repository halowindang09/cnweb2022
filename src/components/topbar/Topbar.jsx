import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar(props) {
  const {currentUser,setCurrentUser} = props;
  return (
  <div className="top">
      <div className="topLeft">
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
      {/* <div className="topCenter">

      </div> */}
      <div className="topRight"> 
        {
          currentUser && (
            <Link className="link" to="/profile">
              <div className="profile">

              </div>
            </Link>
          )
        }  
        <Link className="link link_login" to="/login" onClick={()=>setCurrentUser(false)}>
          {currentUser ? "LOGOUT" : "LOGIN" }
        </Link>
        <div style={{width: '10px'}}></div>
        {
          !currentUser && (
            <Link className="link link_register" to="/register" onClick={()=>setCurrentUser(false)}>
              REGISTER
            </Link>
          )
        }
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
