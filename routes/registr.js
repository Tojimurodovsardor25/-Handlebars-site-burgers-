const express = require("express");
const router = express();


router.get("/registr", (req, res) => {
    res.render("registr", {
      title: "LOGIN",
      isAdd: true,
    });
  });
  
module.exports = router