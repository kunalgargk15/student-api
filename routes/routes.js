const express = require("express");
const Model = require("../models/model");
const router = express.Router();

router.get("/students", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(data);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(data);
  }
});

router.post("/students", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
    grade: req.body.grade,
  });

  try {
    const savedData = await data.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const result = await Model.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
