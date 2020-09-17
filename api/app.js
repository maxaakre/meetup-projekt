const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const meetRouter = require("./routes/meets");

app.use("/api/meets", meetRouter);
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public", "index.html"))
);

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
