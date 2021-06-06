// import { MongoClient } from "mongodb";

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentiatlly
//  * during API Route usage.
//  * https://github.com/vercel/next.js/pull/17666
//  */
// global.mongo = global.mongo || {};

// let indexesCreated = false;
// export async function createIndexes(db) {
//   await Promise.all([db.collection("meetups").createIndex({ createdAt: -1 })]);
//   indexesCreated = true;
// }

// export default async function database() {
//   if (!global.mongo.client) {
//     global.mongo.client = new MongoClient(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     await global.mongo.client.connect();
//   }
//   dbClient = global.mongo.client;
//   db = global.mongo.client.db(process.env.DB_NAME);
//   return db.collection("meetups");
// }
