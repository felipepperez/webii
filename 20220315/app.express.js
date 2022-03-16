const express = require("express");
const app = express();

app.use(express.static('www'));

app.use((req,res)=>{
    res.status(404).sendFile(__dirname+'\\404.html');
});

app.listen(3000);