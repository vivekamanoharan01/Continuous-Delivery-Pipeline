const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('continuous delivery pipeline is an automated software release process everytime there is code change it automatically deploy the changes'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
