const express = require('express');
const app = express();
const port = 4200;



app.listen(function() {
    console.log(`Server on - http://localhost:${port}`);
})