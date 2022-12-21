const router = require("express").Router();
const Pin = require("../models/Pin");

//Creation of Pin

router.post("/", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all pins
router.get("/", async (req, res) => {
  const pins = await Pin.find();
  try {
    console.log(pins);
    res.status(200).json("Done");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
