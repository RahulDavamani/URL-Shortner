const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI')

const connectDB = async () => {
   try {
      await mongoose.connect (db,{ useNewUrlParser: true });
      console.log('MongoDB Connected');
   } catch (error) {
      console.error(error)
      console.log('MongoDB Connection Failed');
   }
}
module.exports = connectDB