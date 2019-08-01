const mongoDb = require('mongodb').MongoClient;
require('dotenv').config();

exports.connectMongo = (req, res) => {
  mongoDb
    .connect(
      process.env.url_mongo,
      {
        useNewUrlParser: true,
        ssl: true
      }
    )
    .then((client) => {
      if (client.db()) {
        console.log("Connection Success.");
      } else {
        throw new Error("DataBase not initialized!");
      }
    })
    .catch(error => {
      console.error("Connection Failed.", error);
    });
}
