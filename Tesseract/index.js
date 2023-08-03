// Import dependencies

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose'); // Import the mongoose
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
dotenv.config();

const userRouter = require('./routers/user_router');  // Import the userRouter
const shiftsRouter = require('./routers/shifts_router.js');  // Import the shiftsRouter
const commentRouter = require('./routers/comment_router.js'); // Import the commentRouter
const permissionRouter = require('./routers/permission_router.js');  // Import the permissionRouter

// Connect to MongoDB using Mongoose

mongoose.connect('mongodb+srv://calinftudor:calinescu6@tesseract.askaihc.mongodb.net/Tesseract?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
		useUnifiedTopology: true,

});

app.use('/api/user', userRouter);  // Use the userRouter for /api/user route
app.use('/api/shifts', shiftsRouter);  // Use the shiftsRouter for /api/shifts route
app.use('/api/comment', commentRouter);  // Use the commentRouter for /api/comment route
app.use('/api/permission', permissionRouter);  // Use the permissionRouter for /api/permission route

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});