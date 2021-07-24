const express = require("express");
const router = express.Router();
const { Quotes } = require("../models/Quotes");
const { auth } = require("../middleware/auth");

router.post("/createQuote", (req, res) => {
  const quote = new Quotes(req.body);

  quote.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.get("/getQuotes", auth, (req, res) => {
  Quotes.find({}, (err, result) => {
    if (err) {
      res.status(400).json({ success: false, err });
    } else {
      return res.status(200).json({
        success: true,
        data: result,
      });
    }
  });
});

module.exports = router;
