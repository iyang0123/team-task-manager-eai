import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (
    <div className="bg-black text-white px-6 py-4 flex justify-between">

      <h1 className="text-xl font-bold">
        Team Task Manager
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;