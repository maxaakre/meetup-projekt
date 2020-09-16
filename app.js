const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const meetRouter = require("./routes/meets");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/meets", meetRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/public")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(_dirname, "/public", "index.html"));
  });
}
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
