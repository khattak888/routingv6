import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Pnf from "./components/pages/Pnf";
import Post from "./components/pages/Post";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";

function App() {
  let isLogged = true;
  let data = {
    st: "user not logged in",
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Pnf />} />
          <Route path="post/:category" element={<Post />} />
          <Route path="post/:category/:id" element={<Post />} />
          <Route
            path="dashboard"
            element={
              isLogged ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace state={data} />
              )
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
