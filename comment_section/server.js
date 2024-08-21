const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://badhonhasanhasan:TASJU5HUR55RlHZY@rapid.xo9j9.mongodb.net/?retryWrites=true&w=majority&appName=rapidyour-mongodb-connection-string-here', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Comment Schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    replies: [{
        name: String,
        reply: String
    }],
    date: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

// Routes
app.post('/addComment', (req, res) => {
    const newComment = new Comment(req.body);
    newComment.save()
        .then(() => res.json('Comment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/comments', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
