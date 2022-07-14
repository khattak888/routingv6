import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const data = {
    name: "bilal",
    age: 23,
    email: "bilalktk868@gmail.com",
  };
  return (
    <div>
      Dashboard
      <button onClick={() => navigate("/logout", { state: data })}>
        Button
      </button>
    </div>
  );
};

export default Dashboard;
