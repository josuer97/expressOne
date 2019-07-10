const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
});

mongoose.connect("mongodb://localhost:27017/movie");
mongoose.set("useFindAndModify", false);

module.exports = mongoose.model("Movie", MovieSchema);