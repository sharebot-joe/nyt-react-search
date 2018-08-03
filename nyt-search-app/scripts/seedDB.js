const mongoose = require("mongoose");
const dbModels = require("../models");
mongoose.Promise = global.Promise;


// This file empties the Books collection and inserts the books below

db = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "(1)Ali Sells Jersey House And Moves to Chicago",
    date: "1974-07-18T00:00:00Z",
    url:
      "http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE"
  },
  {
    title: "(2)Ali Sells Jersey House And Moves to Chicago",
    date: "1974-07-18T00:00:00Z",
    url:
      "http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE"
  },
  {
    title: "(3)Ali Sells Jersey House And Moves to Chicago",
    date: "1974-07-18T00:00:00Z",
    url:
      "http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE"
  }
];

db.dbModels.Article
  .remove({})
  .then(() => dbModels.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
