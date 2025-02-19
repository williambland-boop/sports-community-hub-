const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sports-community-hub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const projectsRouter = require('./routes/projects');
const eventsRouter = require('./routes/events');
const blogsRouter = require('./routes/blogs');
const sponsorshipRouter = require('./routes/sponsorship');

app.use('/api/projects', projectsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/sponsorship', sponsorshipRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
