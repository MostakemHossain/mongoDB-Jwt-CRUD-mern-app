const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb+srv://user-auth:ZsFA9bMGArevkGxU@cluster0.do2y2gc.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(
    console.log("Connecting to mongoDB")
  )
  .catch((err) => {
    console.log("Error Connecting to mongoDB");
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
