const express = require("express");

const app = express();

//Init MiddleWare
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === "development") {
  app.get("/", (req, res) => res.send("API Running"));
}
const PORT = process.env.PORT || 5000;

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../", "build", "index.html"));
  });
}
console.log(process.env.NODE_ENV);
app.listen(PORT, () => console.log("Server live on port " + PORT));
