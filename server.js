import express from "express";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome To NodeJS Vercel Deploy</h1>");
});
//bhv
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
