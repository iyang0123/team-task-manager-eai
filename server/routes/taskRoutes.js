const express = require("express");
const Task = require("../models/Task");

const router = express.Router();


// CREATE TASK
router.post("/", async (req, res) => {

  try {

    const task = await Task.create(req.body);

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// GET ALL TASKS
// UPDATE TASK STATUS
router.put("/:id", async (req, res) => {

  try {

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});
router.get("/", async (req, res) => {

  try {

    const tasks = await Task.find().populate(
      "assignedTo",
      "name email"
    );

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


module.exports = router;