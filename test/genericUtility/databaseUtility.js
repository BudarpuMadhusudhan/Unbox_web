// const { MongoClient } = require("mongodb")
// const uri = "mongodb+srv://DemoUser:Demo123@cluster0.hv0pktr.mongodb.net/?retryWrites=true&w=majority"

// connect()
// async function connect() {
//     const client = new MongoClient(uri);
//     try {
//         //Connection
//         await client.connect();
//         //Name of the data base
//         const db = client.db("sample_mflix");
//         console.log(`Database Name is ${db.databaseName}`);
//         //------------------------------------------Reading Data from Data Base-----------------------------------------------------//
//         //Getting all the collections
//         const collections = await db.collections()
//         collections.forEach(c => console.log(c.collectionName));
//         //Go to specific collection by giving the name
//         const collection = db.collection("comments");
//         //find() will everything but inside find we can send object as parameter then it will get the data based on property
//         const searchCursor = collection.find({"name":"Swaraj"});
//         const result = await searchCursor.toArray();
//         console.log(result[0].name);//Use the property key to get the corresponding value
//         console.log(result.length);
//         /* console.table(result[0,1,2,3,4,5])// this way we can print the desired results based on index 
//         console.table(result);// use this line to get the data in the form of table
//         console.log(result.length);
//         console.log(await searchCursor.hasNext());// gives promise as true if there is value in it
//         //Below loop will print all the data inside the particular collection on demand so better way is to store in array
//         while(await searchCursor.hasNext()){
//             console.log(await searchCursor.next());
//         } */
//         //-----------------------------------------Inserting Data into Data Base-----------------------------------------------------//
//         /* const insertCursor = await collection.insertMany([
//             {
//                 "name": "Swaraj",
//                 "text": "Sample Insertion",
//                 "email": "swaraj@gmail.com",
//                 "date": "",
//                 "movie_id": ""
//             },
//             {
//                 "name": "Swaraj123",
//                 "text": "Sample Insertion",
//                 "email": "swaraj123@gmail.com",
//                 "date": "",
//                 "movie_id": ""
//             }
//         ])
//         console.log(insertCursor.insertedCount); */

//         //-----------------------------------------Updating Data into Data Base-----------------------------------------------------//

//         /* const updateCursor = await collection.updateOne(
//             { "name": "Swaraj123" },
//             { "$set": { "name": "SWARAJ123" } } //If there is number pass it as number dont enclose in ""
//         )
//         console.log(updateCursor.modifiedCount) */

//         //-----------------------------------------Delete Data from Data Base-----------------------------------------------------//

//         /* const deleteCursor = await collection.deleteOne({ "name": "SWARAJ123" }) //If there is number pass it as number dont enclose in ""
//         console.log(deleteCursor.deletedCount) */

//     }
//     catch (exception) {
//         console.error("Error Occurred" + exception)

//     }
//     finally {
//         await client.close()
//         console.log("Conection close successfully");
//     }
// }