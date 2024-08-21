const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URL from environment variables
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Comment Schema
const commentSchema = new mongoose.Schema({
    username: String,
    text: String,
    createdAt: { type: Date, default: Date.now },
    replies: [
        {
            username: String,
            text: String,
            createdAt: { type: Date, default: Date.now }
        }
    ]
});

// Comment Model
const Comment = mongoose.model('Comment', commentSchema);

// Add a new comment
app.post('/comments', async (req, res) => {
    const newComment = new Comment(req.body);
    try {
        await newComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all comments
app.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Add a reply to a comment
app.post('/comments/:id/reply', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment) {
            comment.replies.push(req.body);
            await comment.save();
            res.status(201).json(comment);
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

