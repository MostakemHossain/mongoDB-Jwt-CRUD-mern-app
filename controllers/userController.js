const User = require("../api/models/User");

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).json({
      message: "Error " + err.message,
    });
  }
};
// create user
const createUser = async (req, res) => {
  const { name, email, jobTitle, company } = req.body;
  try {
    const newUser = await User.create({
      name,
      email,
      jobTitle,
      company,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({
      message: "Error " + err.message,
    });
  }
};

// delete user
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
     const deleteuser= await User.findByIdAndDelete(userId);
     if(!deleteuser){
        return res.status(404).json({message:"user not found"})
     }
      res.status(200).json({
        message:"user Deleted successfully",
      });
    } catch (err) {
      res.status(500).json({
        message: "Error " + err.message,
      });
    }
  };

  // delete user
const UpdateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, jobTitle, company } = req.body;
  try {
   const update= await User.findByIdAndUpdate(userId,{ name, email, jobTitle, company },{
    new:true,
    runValidators:true,
   });
 
    res.status(200).json({
      message:"user Updated  successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error " + err.message,
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  UpdateUser,
};
