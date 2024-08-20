const express = require('express');
const bodyParser = require("body-parser");
const app = express();


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://walisantunu:a9O6738PNmv10onl@cluster0.japfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.use(bodyParser.json());

// To parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    console.log(req.body);
    res.send("Submitted Successfully!");
});

app.listen(5000, () => {
    console.log("app is listening")
})