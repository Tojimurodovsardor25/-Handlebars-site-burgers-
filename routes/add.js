const express = require("express");
const router = express();
const Burger = require("../model/Burger");

router.get("/", (req, res) => {
  res.render("add", {
    title: "Add",
    isAdd: true,
  });
});

router.post("/", async (req, res) => {
  const burger = new Burger(req.body.name, req.body.price, req.body.img);
  await burger.save();
  res.redirect("/");
});

router.get("/:id/edit", async (req, res) => {
  const burger = await Burger.getById(req.params.id);

  res.render("edit", {
    name: burger.name,
    price: burger.price,
    img: burger.img,
    id: burger.id,
  });
});

router.post("/edit", async (req, res) => {
  await Burger.update(req.body);

  res.redirect("/");
});

router.get("/:id", async (req, res) => {
  const burger = await Burger.getById(req.params.id);

  res.render("burger", {
    layout: "burger",
    title: burger.name,
    price: burger.price,
    img: burger.img,
    id: burger.id,
  });
});

module.exports = router;
