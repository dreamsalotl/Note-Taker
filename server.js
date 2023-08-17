const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
const api = require('./routes/index.js');
const notes = require('./routes/notes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/api/notes', notes);

app.use(express.static('public'));


app.get('/api', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => 
    console.log(`API server now on port ${PORT}!`)
);