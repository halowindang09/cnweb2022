import "./login.css";

export default function Login(props) {
  const {setCurrentUser}=props;
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton" onClick={()=>setCurrentUser(true)}>Login</button>
      </form>
        
    </div>
  );
}
