const { Router } = require("express");
const router = new Router();
const Newevent = require("../models/Newevent");
const auth = require("./verifytoken");

//GET ALL PRODUCTS
router.get("/products", async (req, res) => {
  const products = await Newevent.getAll();
  res.status(201).json(products);
});
// //GET ONE PRODUCT
// router.get("/:id", async (req, res) => {
//   const products = await Newevent.get(req.params.id);
//   if (products) {
//     res.status(201).json(products);
//   } else {
//     res.status(401).json({ message: "Event not found!" });
//   }
// });
//CREATE NEW PRODUCT
router.post("/event", async (req, res) => {
  if (req.user.role === "customer") {
    const products = await Newevent.create(req.body);
    res.status(201).json(products);
  } else {
    res.status(401).json({ message: "Not aloud to put in Event!" });
  }
});
module.exports = router;
