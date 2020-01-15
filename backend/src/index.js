const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://arthurdb1999:arthurdb1999@researchroom-vdqcn.mongodb.net/DevRadar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333);