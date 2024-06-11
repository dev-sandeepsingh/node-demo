import express, { Request, Response } from 'express';

const app = express();
const host = '127.0.0.1';
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Welcome to express!!');
});

app.get('/health', (req: Request, res: Response) => {
    res.sendStatus(200);
    console.log('Health check')
});

app.listen(port, () => {
    console.log(`Server listening at http://${host}:${port}`);
});