import express from "express";
import { createFood } from "./data-base/food";
import { createStudents } from "./data-base/students";
// import { getMovie } from "./data-base/mongodb";
// import { error } from "console";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});
// app.get("/movies", async (req, res) => {
//   try {
//     const { year, imdb } = await req.query;
//     const movies = await getMovie(Number(year), Number(imdb));
//     res.status(200).json({ message: "success", movies: movies });
//   } catch (error) {
//     res.status(500).json({ message: "error", error });
//   }
// });
// app.post("/food", async (req, res) => {
//   try {
//     const food = await createFood();
//     res.status(200).json({ message: "hoolnuud amjilltai nemegdlee", food });
//   } catch (error) {
//     res.status(500).json({ message: "aldaa garlaa", error });
//   }
// });

app.post("/students", async (req, res) => {
  try {
    const students = await createStudents();
    res.status(200).json({ message: "new students added success!", students });
  } catch (error) {
    res.status(500).json({ message: "error-garla", error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
