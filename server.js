const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
const notes = require('./routes/notes.js');
const api = require('./routes/index.js');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);
app.use('/notes', notes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});