import express from 'express';

const router = express.Router();

const mockFinishedTodoDB = [];

router.route('/').get((req, res) => {
    res.status(200);
    res.send(JSON.stringify(mockFinishedTodoDB))
}).post((req, res) => {
    mockFinishedTodoDB.push(req.body);
    res.header('content-type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(mockFinishedTodoDB))
}).delete((req, res) => {
    const { id } = req.query;
    const indexOfObject = mockFinishedTodoDB.findIndex((obj) => obj.id === id);
    mockFinishedTodoDB.splice(indexOfObject, 1);
    res.status(200);
    res.send(JSON.stringify(mockFinishedTodoDB))
})

export default router;