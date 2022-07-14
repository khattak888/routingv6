import { useLocation } from "react-router-dom";
const Logout = () => {
  const location = useLocation();
  return (
    <div>
      Logout page
      <h2>{location.state.name}</h2>
      <h2>{location.state.age}</h2>
      <h2>{location.state.email}</h2>
    </div>
  );
};

export default Logout;
