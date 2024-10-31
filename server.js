const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5670;


app.get('/api/contacts', (req, res) => {
    res.send('get all contacts')
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});