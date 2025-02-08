const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/blog-app')
  .then(() => console.log('Connected!')).catch(err => console.log(err));

app.use(cors());
app.use(express.json());

const schema = new mongoose.Schema({
        title: String,
        description: String,
        time: { type: Date, default: Date.now } ,
        image: String
    }
);

const Blog = mongoose.model('Blog', schema);


app.get('/api/blogs', async (req, res) => { 
    try {
        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/blogs' , async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.json({ message: 'Blog created' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.listen(port, () => console.log(`Server is running on port ${port}`));
