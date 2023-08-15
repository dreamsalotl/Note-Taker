const express = require('express');
const notesRouter = require('./notes.js');
const app = express();

app.use('/api/notes', notesRouter);


module.exports = app;