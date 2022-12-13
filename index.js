const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const customerRouter = require('./controller/cutomerCtrl')
const app = express();
require("dotenv").config();
// console.log(process.env.PORT)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const url= "mongodb+srv://cluster0:cluster0@cluster0.9vjkkz8.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use("/customer", customerRouter);
app.listen(process.env.PORT || 8000, () => {
    console.log(`app listening on port 5000}`)
  })

  if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }