import "./header.css";


export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span> My Daily Blog </span>
        <span> Team 11</span>
        <div className="HeaderIcon">
        {/* <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i> */}
      </div>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=pexels-s-migaj-747964.jpg&fm=jpg"
        alt=""
      />
     

  
    </div>
  );
}
