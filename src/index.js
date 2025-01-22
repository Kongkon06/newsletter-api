const express = require('express');
const { subscribe } = require('./routes/subscriber');
const newsletter = require('./routes/newsletter');
const emailHanlder = require('./routes/email');
const connectDB = require('./config/database');

const app = express();

app.use(express.json());
app.use('/subscriber',subscribe);
app.use('/newsletter',newsletter);
app.use('/emailhandler',emailHanlder);

connectDB();
app.listen(3000,()=>console.log("Server is running"));