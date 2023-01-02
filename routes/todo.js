import express from 'express';
import { v4 } from 'uuid';

const router = express.Router();

const mockSuggestionsDB = [{ id: v4(), value: 'Clean room' }, { id: v4(), value: 'Pick up bread' }, { id: v4(), value: 'Eat food' }];
const mockTodoDB = [];

router.route('/').get((req, res) => {
    res.status(200);
    res.send(JSON.stringify(mockTodoDB))
}).post((req, res) => {
    mockTodoDB.push(req.body);
    res.header('content-type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(mockTodoDB))
}).delete((req, res) => {
    const { id } = req.query;
    const indexOfObject = mockTodoDB.findIndex((obj) => obj.id === id);
    mockTodoDB.splice(indexOfObject, 1);
    res.status(200);
    res.send(JSON.stringify(mockTodoDB))
})

router.route('/suggestion').get((req, res) => {
    res.status(200);
    res.send(JSON.stringify(mockSuggestionsDB))
}).delete((req, res) => {

    const { suggestionId } = req.query;
    const indexOfObject = mockSuggestionsDB.findIndex((obj) => obj.id === suggestionId);
    mockSuggestionsDB.splice(indexOfObject, 1);

    res.status(200);
    res.send(JSON.stringify(mockSuggestionsDB))
})

export default router;