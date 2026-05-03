import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createTask = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/tasks",
        formData
      );

      alert("Task Created");

      fetchTasks();

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  const updateStatus = async (id, status) => {

    try {

      await API.put(
        `/tasks/${id}`,
        { status }
      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const fetchTasks = async () => {

    try {

      const response = await API.get("/tasks");

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const totalTasks = tasks.length;

  const todoTasks = tasks.filter(
    (task) => task.status === "To Do"
  ).length;

  const progressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const doneTasks = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  const overdueTasks = tasks.filter((task) => {

    if (!task.dueDate) return false;

    return (
      new Date(task.dueDate) < new Date() &&
      task.status !== "Done"
    );

  }).length;

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>


        {/* DASHBOARD CARDS */}

        <div className="grid grid-cols-5 gap-6 mb-8">

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">
              Total Tasks
            </h2>

            <p className="text-3xl mt-4 font-bold text-blue-600">
              {totalTasks}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">
              To Do
            </h2>

            <p className="text-3xl mt-4 font-bold text-yellow-500">
              {todoTasks}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">
              In Progress
            </h2>

            <p className="text-3xl mt-4 font-bold text-orange-500">
              {progressTasks}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">
              Done
            </h2>

            <p className="text-3xl mt-4 font-bold text-green-600">
              {doneTasks}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">
              Overdue
            </h2>

            <p className="text-3xl mt-4 font-bold text-red-600">
              {overdueTasks}
            </p>
          </div>

        </div>


        {/* TASK FORM */}

        <div className="bg-white p-6 rounded-lg shadow mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Create Task
          </h2>

          <form
            onSubmit={createTask}
            className="flex flex-col gap-4"
          >

            <input
              type="text"
              name="title"
              placeholder="Task Title"
              className="border p-3 rounded"
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Task Description"
              className="border p-3 rounded"
              onChange={handleChange}
            />

            <select
              name="priority"
              className="border p-3 rounded"
              onChange={handleChange}
            >

              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>

            </select>

            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded"
            >
              Create Task
            </button>

          </form>

        </div>


        {/* TASK LIST */}

        <div className="grid grid-cols-3 gap-6">

          {tasks.map((task) => (

            <div
              key={task._id}
              className="bg-white p-6 rounded-lg shadow"
            >

              <h2 className="text-2xl font-bold">
                {task.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {task.description}
              </p>

              <div className="mt-4">

                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded">
                  {task.priority}
                </span>

              </div>

              <div className="mt-4">

                <p className="font-semibold mb-2">
                  Status: {task.status}
                </p>

                <select
                  className="border p-2 rounded"
                  value={task.status}
                  onChange={(e) =>
                    updateStatus(
                      task._id,
                      e.target.value
                    )
                  }
                >

                  <option value="To Do">
                    To Do
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Done">
                    Done
                  </option>

                </select>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;