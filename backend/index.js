require('dotenv').config();
const express = require('express')
const { ObjectId } = require('mongodb');

const app = express()
const PORT = process.env.PORT || 1000

const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb configuration

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://shelfspot:rzeOh1RwBIdcqBIb@cluster0.ekzxyvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

    // create a collection of documents
    const bookCollections = client.db("BookInventory").collection("books");
    // insert a book to the db: post method
    app.post("/upload-book",async(req,res)=>{
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.send(result);
    })

    // get all books from db
    app.get("/all-books",async(req, res)=>{
        const books = bookCollections.find();
        const result = await books.toArray();
        res.send(result); 
    })

    //update a book data : path or update method
    app.patch("/book/:id",async(req, res)=>{
        const id = req.params.id;
        console.log(id);
        const updateBookData = req.body;
        const filter = {_id:new ObjectId(id)};
        const options = { upsert: true };

        const updateDoc = {
            $set: {
              ...updateBookData
            },
          };

        //update
        const result = await bookCollections.updateOne(filter, updateDoc, options);
        res.send(result);
    })

    // delete a book data : path or delete method
    app.delete("/book/:id", async (req, res) => {
        const id = req.params.id;
        console.log(`Received request to delete book with id: ${id}`);
      
        try {
          // Ensure the id is a valid ObjectId
          if (!ObjectId.isValid(id)) {
            console.error('Invalid ObjectId');
            return res.status(400).send('Invalid ObjectId');
          }
      
          const filter = { _id: new ObjectId(id) };
      
          // Attempt to delete the book
          const result = await bookCollections.deleteOne(filter);
      
          if (result.deletedCount === 0) {
            console.error('No document found with that id');
            return res.status(404).send('No document found with that id');
          }
      
          console.log('Delete result:', result);
          res.send(result);
        } catch (error) {
          console.error('Error deleting book:', error);
          res.status(500).send('Error deleting book');
        }
      });
      
    // find by category
    app.get("/all-books",async(req, res)=>{
        let query = {};
        if(req.query.category){
            query = {category:req.query.category}
        }
        const result = await bookCollections.find(query);
        res.send(result);

    });  

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})