const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comment-system', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

// Define a schema for comments
const commentSchema = new mongoose.Schema({
    text: String,
    date: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

// Endpoint to get all comments
app.get('/api/comments', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
});

// Endpoint to add a new comment
app.post('/api/comments', async (req, res) => {
    const newComment = new Comment({
        text: req.body.text
    });
    await newComment.save();
    res.json(newComment);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
