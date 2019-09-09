const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const PORT = 3000

const connectDB = require('./config/db')
connectDB();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json({ extented:false }))

app.use('/home', require('./routes/home'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))