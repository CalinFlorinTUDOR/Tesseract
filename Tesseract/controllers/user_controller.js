const User = require('../modules/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
  try{
    const users = await User.find();
    res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching users'})
}
};

const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    if (!user){
      return res.status(404).json({ error: 'No user found!'});
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching users'})
  };
};

const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true } // To return the updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'No user found!' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params._id);

    if (!deletedUser) {
      return res.status(404).json({ error: 'No user found!' });
    }

    res.status(200).json({ success: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the comment' });
  }
};

const createUser = async (req,res) => {
  try {
    const user = new User(req.body);
    console.log(user)
    await user.save()
    res.status(201).json({ success: 'User created'});
  } catch (err) {
    
    return res.status(404).json({ err: 'No user created!'});
  }
}



const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if the user with the provided email exists
    const foundUser = await User.findOne({ email: email });
    if (!foundUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Compare the provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    // If the user is found and the password is correct, respond with success
    res.status(200).json({ success: 'Login successful' });
    
    const userId = foundUser._id;
    const secret = 'trER2367BrDeF'; // Replace with your actual secret key
    const expireTime = '1h'; // Token will expire after 1 hour 
    const token = jwt.sign(userId, secret, expireTime);

    res.setHeader('Authorization', token);
    res.status(200).json({ token }); // Return the token in the response
    
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing the login' });
  }
};

module.exports = { 
  getAllUsers, 
  getUserByID, 
  updateUserById, 
  deleteUserById,
  createUser, 
  login
};
