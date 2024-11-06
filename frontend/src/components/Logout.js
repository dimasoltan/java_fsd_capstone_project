import React from 'react';
import {useNavigate} from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger w-10">
      Logout
    </button>
  );
}

export default Logout;