const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require('cors');
const port = process.env.PORT || 3000;



// middle ware
app.use(cors());
app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://user-auth:ZsFA9bMGArevkGxU@cluster0.do2y2gc.mongodb.net/user-management-DB?retryWrites=true&w=majority`
  )
  .then(
    console.log("Connecting to mongoDB")
  )
  .catch((err) => {
    console.log("Error Connecting to mongoDB");
  });


  // import routes
  const userRoutes= require('../server/routes/users')

app.use('/users',userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
