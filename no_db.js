const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World! Let\'s Working with NoSQL Databases')
})


const { MongoClient } = require("mongodb");
const uri = "mongodb://Sarus:000000@localhost:27017/?authMechanism=DEFAULT&authSource=admin";
// const uri = "mongodb://localhost:27017";
const connectDB = async () => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log(`MongoDB connected successfully.`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

connectDB();
