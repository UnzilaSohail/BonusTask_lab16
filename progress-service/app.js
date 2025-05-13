// For all services (change the name per service)
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Course Service is running'));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
