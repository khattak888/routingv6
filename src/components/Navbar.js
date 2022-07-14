import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "black" : "" };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "yellow" : "" };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="post/mobile"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "blue" : "" };
            }}
          >
            Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="post/mobile/1"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "orange" : "" };
            }}
          >
            Post with Id
          </NavLink>
        </li>
        <li>
          <NavLink
            to="*"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "aqua" : "" };
            }}
          >
            Page Not Found{" "}
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
