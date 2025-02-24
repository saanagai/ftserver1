import express from "express";
import { getMovie } from "./data-base/mongodb";
import { error } from "console";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/movies", async (req, res) => {
  try {
    const { year, imdb } = await req.query;
    const movies = await getMovie(Number(year), Number(imdb));
    res.status(200).json({ message: "success", movies: movies });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
