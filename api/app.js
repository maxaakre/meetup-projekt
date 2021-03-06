const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");

const meetRouter = require("./routes/meets");
const userRoutes = require("./routes/users");
const eventRoutes = require("./routes/event");

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);
app.use("/api/meets", meetRouter);
app.use("/api", eventRoutes);

app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public", "index.html"))
);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server up and running on port: ${PORT}`)
);
