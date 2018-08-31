const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

const articleSeed = [
  {
    title: "title1",
    url: "url1",
    date: new Date(Date.now())
  },
  {
    title: "title2",
    url: "url2",
    date: new Date(Date.now())
  },
  {
    title: "title3",
    url: "url3",
    date: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log("data.insertedIds.length===" + data.insertedIds.length);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
