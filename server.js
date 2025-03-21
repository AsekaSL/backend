const app = require('./app.js');
const mongoose = require('mongoose');
const port = 3000;
const host = "127.0.0.1";
const uri = "mongodb+srv://saranga:saranga123@cluster0.vca0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log("Connected to the database");
    }
    catch(err){
        console.log(err);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Server is running on ${server.address().port}`);
});