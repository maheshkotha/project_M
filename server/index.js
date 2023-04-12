const express = require('express');

const app = express();
const port = 3008;

app.get('/', (req, res) => {
    res.send("Hello Exprees application....")
})


app.listen(port, () => {
    console.log(`Example node application run on ${port}...`)
})
