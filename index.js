import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.adviceslip.com/advice";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const response = await axios.get(API_URL);
  res.render("index.ejs", {
    content: response.data.slip.advice,
  });
});

app.post("/get-advice", async (req, res) => {
  const response = await axios.get(API_URL);
  res.render("index.ejs", {
    content: response.data.slip.advice,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
