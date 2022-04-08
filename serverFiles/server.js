const express = require('express');
const createPassword = require('./createPassword');
const app = express();
const PORT = 5000;

app.get('/', (req, res, next) => {
    const query = req.query;
    const newPassword = createPassword(query.passwordLength, query.specialChars);
    res.status(200).send(newPassword);
})


app.listen(PORT, () => {console.log('Server is live on port ' + PORT)});