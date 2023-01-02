import express from 'express';

import todoRouter from './routes/todo.js';
import finishedTodoRouter from './routes/finishedtodo.js';
import accountRouter from './routes/account.js';
import headersMiddleware from './middlewares/headersMiddleware.js';

const app = express();

const port = 3000;

app.use(express.json());
app.use(headersMiddleware)

app.use('/api/todo', todoRouter);
app.use('/api/finishedtodo', finishedTodoRouter);
app.use('/api/account', accountRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})