import React from "react";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import About from "./pages/about/About";
import { Register } from "./pages/register/register";
import { Footer } from "./components/footer/footer";
import './main.css';
import { Profile } from "./pages/profile/profile";

function App() {
  const [currentUser,setCurrentUser]=React.useState(false);
  console.log(window.location.pathname)
  return (
    <Router>
      <Topbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path="/">
        {currentUser ? <Homepage /> : <Login  setCurrentUser={setCurrentUser}/>}
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login  setCurrentUser={setCurrentUser}/>}</Route>
        <Route path="/register">{currentUser ? <Homepage /> : <Register  setCurrentUser={setCurrentUser}/>}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login setCurrentUser={setCurrentUser} />}</Route>
        <Route path="/profile">{currentUser ? <Profile /> : <Login setCurrentUser={setCurrentUser} />}</Route>
        <Route path="/aboutme">
            <About/>
        </Route>
      </Switch>
      { window.location.pathname !== '/login' && window.location.pathname !== '/register' && (
        <Footer />
      )}
    </Router>
  );
}

export default App;
