const { Lang } = require("../models");

exports.createLang = async (req, res) => {
  try {
    const lang = await Lang.create(req.body);
    res.status(201).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLangs = async (req, res) => {
  try {
    const langs = await Lang.findAll();
    res.status(200).send(langs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLangById = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Lang topilmadi");
    res.status(200).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateLang = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Lang topilmadi");
    await lang.update(req.body);
    res.status(200).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteLang = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Lang topilmadi");

    const langData = lang.toJSON();
    await lang.destroy();
    res.status(200).send(langData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};