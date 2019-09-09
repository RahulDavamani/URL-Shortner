const express = require('express')
const app = express();
const PORT = 3000
const connectDB = require('./config/db')

connectDB();

app.use(express.json({ extented:false }))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))