import express from 'express'

import connectToDataBase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Hi there</h2>')
});

await connectToDataBase();

app.listen(3000);