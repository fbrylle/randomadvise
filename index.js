import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.adviceslip.com/advice";

app.use(express.static("public"));

async function getAdvise() {
  const response = await axios.get(API_URL);
  return response.data.slip.advice;
}

app.get("/", async (req, res) => {
  try {
    res.render("index.ejs", {
      content: await getAdvise(),
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.post("/get-advice", async (req, res) => {
  res.render("index.ejs", {
    content: await getAdvise(),
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
