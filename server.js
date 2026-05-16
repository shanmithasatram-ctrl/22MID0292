const express = require('express');
const requestLogger = require('../logging_middleware/requestLogger');

const app = express();

app.use(requestLogger);

app.get('/', (req, res) => {
    res.send('Backend Running');
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
