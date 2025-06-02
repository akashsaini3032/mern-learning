

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <div id="dashboard">
        Welcome {localStorage.getItem("user")} Email:{" "}
        {localStorage.getItem("email")}
        <a href="#" className="btn btn-dash" onClick={logout}>
          Logout
        </a>
      </div>
      <center className="title">User Dashboard</center>
    </>
  )
}

export default Dashboard;