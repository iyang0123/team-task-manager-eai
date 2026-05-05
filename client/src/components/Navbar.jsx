import { Link } from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/";

  };

  return (

    <nav className="bg-black text-white p-6 flex justify-between items-center">

      <h1 className="text-3xl font-bold">
        Team Task Manager
      </h1>

      <div className="flex gap-6 items-center">

        {!token ? (

          <>

            <Link
              to="/"
              className="hover:text-gray-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hover:text-gray-300"
            >
              Register
            </Link>

          </>

        ) : (

          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>

        )}

      </div>

    </nav>

  );
}

export default Navbar;