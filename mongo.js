// const { MongoClient } = require("mongodb");

// // Connect Mongod, call function to create db, disconnect from db
// async function main() {
//   // uri - unifrom resourse identifier
//   const uri =
//     "mongodb+srv://lk:lk@cluster0.gzzji.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(uri);

//   try {
//     await client.connect();

//     await listDatabases(client);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// // list databases

// async function listDatabases(client) {
//   const dbList = await client.db().admin().listDatabases();

//   console.log("Databases: ");
//   dbList.databases.forEach((db) => {
//     console.log(` - ${db.name}`);
//   });
// }
