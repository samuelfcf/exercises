import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/hello", (request, response) => {
  response.send("Meu primeiro servidor!!!")
});

app.listen(5000)