const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ status: 10, message: "Welcome" });
});

module.exports = router;
