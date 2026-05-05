import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
        "/auth/register",
        formData
      );

      alert(response.data.message);

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
            Register
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="border p-3 rounded"
              onChange={handleChange}
            />

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
  Register
</button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;