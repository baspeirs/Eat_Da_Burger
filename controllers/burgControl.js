const express = require("express");
const burger = require("../models/burgModel");

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], result => {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
    //==== DO NOT CALL THIS TWICE!!! res.json({ id: result.insertId }) ========
  });
});

  module.exports = router;