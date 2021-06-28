const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGO_URI } = require('./account');
const bodyParser = require('body-parser');

//body-parser
app.use(bodyParser.json());

//import routes
const postsRoutes = require('./routes/items');
app.use('/items', postsRoutes);

//hello
app.get('/', (req, res) => {
    res.send('Hello there!');
})

//connect to MongoDB
mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('You are connected to the DB.'))
    .catch(err => console.log(err));

//listen to the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));