const { Router } = require("express");
const router = new Router();
const fs = require("fs");
// const uuid = require("uuid-random");
const DataStore = require("nedb-promise");

const Meetdata = new DataStore({
  filename: "db/meets.db",
  autoload: true,
});
console.log(Meetdata);

router.get("/", async (req, res) => {
  const meet = fs.createReadStream("data/meet.json");
  meet.pipe(res);
});

module.exports = router;
