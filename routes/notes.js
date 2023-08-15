const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const notes = require('express').Router();

notes.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/api/notes', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

notes.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    console.log(noteId);
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id !== noteId);
            writeToFile('./db/db.json', result);
            res.json(`Item ${noteId} has been deleted 🗑️`);
        });
});

module.exports = notes;