const { ok } = require('assert');
const express = require('express');
const app = express();
const port = 3001;

const data = [
    {
        id: 1,
        name: 'Kim',
        score: 80
    },
    {
        id: 2,
        name: 'Lee',
        score: 90
    },
    {
        id: 3,
        name: 'Choi',
        score: 100
    }
]

app.get('/', (req, res) => {
    res.send({message: 'ok', data: data})
})

app.listen(port, () => {
    console.log('서버 오픈');
})