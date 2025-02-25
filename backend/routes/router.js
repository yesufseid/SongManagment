const express = require("express");
const router = express.Router();
const { getallSong, creatSong, getStatices, deletSong, updateSong } = require("../controllers/index");

// Define routes
router.route("/").get(getallSong).post(creatSong);
router.route("/statistics").get(getStatices);
router.route("/song/:id").delete(deletSong).put(updateSong);

module.exports = router; 
