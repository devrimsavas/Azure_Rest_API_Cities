var express = require("express");
var db = require("../models");
var CityService = require("../services/CityService");
var cityService = new CityService(db);

var router = express.Router();

//show all

router.get("/", async (req, res) => {
  let title = "All Cities";
  const cities = await cityService.getAll();
  res.render("cities", {
    cities: cities,
    title: title,
  });
});

//show all as json

router.get("/jcity", async (req, res) => {
  const cities = await cityService.getAll();
  res.json({
    cities: cities,
  });
});

router.post("/", async (req, res) => {
  const { Name, Country } = req.body;

  if (!Name || !Country) {
    res.status(400).send("prodive name and country");
    return;
  }
  await cityService.create(Name, Country);
  res.status(201).send(`city ${Name} in Country ${Country} is created`);
});

router.delete("/", async (req, res) => {
  const { Name } = req.body;

  if (!Name) {
    res.status(400).send("Provide the city name to delete");
    return;
  }

  try {
    await cityService.deleteOne(Name);
    res.status(200).send(`City ${Name} has been deleted successfully.`);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put("/", async (req, res) => {
  const { oldCityName, oldCountryName, newCityName, newCountryName } = req.body;

  if (!oldCityName || !oldCountryName || !newCityName || !newCountryName) {
    res
      .status(400)
      .send("Provide all fields (old and new names and countries) for update.");
    return;
  }

  try {
    await cityService.updateOne(
      oldCityName,
      oldCountryName,
      newCityName,
      newCountryName
    );
    res
      .status(200)
      .send(
        `City ${oldCityName} has been updated to ${newCityName} in ${newCountryName}`
      );
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
