                                        //Mongo is connected through our server.js instead
// require("dotenv").config();

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.MONGO_URI;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);

// // async function main() {
// //     const MongoClient = require('mongodb').MongoClient;
// //     const uri =
// //       `mongodb+srv://aminatac1010:<aminatac1010>@cluster0.dcu5m.mongodb.net/sample_airbnb?retryWrites=true&w=majority`;
// //     const client = new MongoClient(uri, { useNewUrlParser: true });
  
// //     // Connect to the client and query
// //     await client.connect();
// //     findListings(client, 5);
// //     client.close();
// //   }
  
// //   main().catch(console.error);
  
// //   async function findListings(client, resultsLimit) {
// //     const cursor = client
// //       .db('sample_airbnb')
// //       .collection('listingsAndReviews')
// //       .find()
// //       .limit(resultsLimit);
  
// //     const results = await cursor.toArray();
// //     if (results.length > 0) {
// //       console.log(`Found ${results.length} listing(s):`);
// //       results.forEach((result, i) => {
// //         date = new Date(result.last_review).toDateString();
  
// //         console.log();
// //         console.log(`${i + 1}. name: ${result.name}`);
// //         console.log(`   _id: ${result._id}`);
// //         console.log(`   bedrooms: ${result.bedrooms}`);
// //         console.log(`   bathrooms: ${result.bathrooms}`);
// //         console.log(
// //           `   most recent review date: ${new Date(
// //             result.last_review
// //           ).toDateString()}`
// //         );
// //       });
// //     }
// //   }