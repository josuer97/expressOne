const express = require("express");
const router = express.Router();
const Movie = require('../model/movie');

router.get('/', async (req: any, res: any) => {
  const movies = await Movie.find({});
  res.json(movies);
});

router.post('/', async (req: any, res: any) => {
  let movie = new Movie();
  movie.title = req.body.title;
  const movies = await movie.save();
  res.json(movies);
});

router.put('/', async (req: any, res: any) => {
  const movies = await Movie.findOneAndUpdate({ title: req.body.title }, { $set: {title: req.body.newTitle} });
  res.json(movies);
});

router.delete('/', async (req: any, res: any) => {
  const movie = Movie.findOneAndRemove({ title: req.body.title });
  res.json(movie);
});

module.exports = router;