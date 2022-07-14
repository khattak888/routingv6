import { useLocation } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  return (
    <div>
      Login
      <h2>{location.state.st}</h2>
    </div>
  );
};

export default Login;
