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

router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log(condition + " = condition");

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    result => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
  module.exports = router;