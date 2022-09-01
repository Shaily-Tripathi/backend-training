const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")
const memesController= require("../controllers/memesController")
const weatherController= require("../controllers/weatherController")

router.get("/cowin/getByDistrict", cowinController.getByDistrict)
router.get("/getMemes", memesController.getMemes)
router.post("/getParticularMemes", memesController.getParticularMemes)
router.get("/getWeather", weatherController.getWeather)
router.get("/getTemp", weatherController.getTemp)
router.get("/sortCitiesTemp", weatherController.sortCitiesTemp)

module.exports = router;