const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user.model.js");
const dotdenv = require("dotenv").config();
const cors = require("cors");
const { error } = require("console");


const app = express();
app.use(cors());  
app.use(express.json());

const port = process.env.PORT || 4000;

app.get("/getUsers", async (req, res) => {
  try {
    const getUser = await userModel.find({});
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/getUsers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getUserById = await userModel.findById(id);
    res.status(200).json(getUserById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/user", async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log("app is running in port "+ port);
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
