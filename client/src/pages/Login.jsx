import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Login() {

  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      // save token
      localStorage.setItem(
        "token",
        response.data.token
      );

      alert(response.data.message);
      navigate("/dashboard");

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center items-center mt-20">

        <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Login
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="border p-3 rounded"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="border p-3 rounded"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;