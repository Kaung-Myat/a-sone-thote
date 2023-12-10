const express = require('express')
const app = express();
require('dotenv').config();
const path = require("path");
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(cors({
    origin:"*"
}))

app.use(express.static(path.join(__dirname,'public')));
require('./routes/mobile.routes')(app);


app.listen(port,()=>{
    console.log("Server is running on port",port);
})