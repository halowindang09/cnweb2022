import { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu } from "../../icon";
import "./topbar.css";

export default function Topbar(props) {
  const {currentUser,setCurrentUser} = props;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="top active_top">
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
      {/* Down menu */}
      <div className="topbar_menu active_top_menu">
          <div className="menu_icon" onClick={() => setShowMenu(!showMenu)}>
            <Menu />
          </div>
          { showMenu && (
            <div className="menu_container">
            <div className="top_menu">
              {
                currentUser && (
                  <Link className="link" to="/profile">
                    <div className="profile_menu"></div>
                  </Link>
                )
              }
              <Link className="link link_login" to="/login" onClick={()=> {
                setCurrentUser(false);
                setShowMenu(false);
              }}>
                <div className="login_logout">{currentUser ? "LOGOUT" : "LOGIN" }</div>
              </Link>
              <div style={{width: '10px'}}></div>
              {
                !currentUser && (
                  <Link className="link" to="/register" onClick={()=> {
                    setCurrentUser(false);
                    setShowMenu(false);
                  }}>
                    <div className="register_link">REGISTER</div>
                  </Link>
                )
              }
            </div>
            <hr/>
            <div className="main_menu">
              <div className="menu_item" onClick={() => setShowMenu(false)}>
                <Link className="link" to="/">
                  HOME
                </Link>
              </div>
              <div className="menu_item" onClick={() => setShowMenu(false)}>
                <Link className="link" to="/about">
                  ABOUT ME
                </Link>
              </div>
              <div className="menu_item" onClick={() => setShowMenu(false)}>
                <Link className="link" to="/contact">
                  CONTACT
                </Link> </div>
              <div className="menu_item" onClick={() => setShowMenu(false)}>
                <Link className="link" to="/write">
                  WRITE
                </Link> </div>
            </div>
            </div>
          )}
          
      </div>
    </>
  );
}
