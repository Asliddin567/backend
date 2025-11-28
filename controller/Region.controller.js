const { Region } = require("../models");

exports.createRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body);
    res.status(201).send(region);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getRegions = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.status(200).send(regions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getRegionById = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).send("Region topilmadi");
    res.status(200).send(region);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).send("Region topilmadi");
    await region.update(req.body);
    res.status(200).send(region);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).send("Region topilmadi");

    const regionData = region.toJSON();
    await region.destroy();
    res.status(200).send(regionData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};