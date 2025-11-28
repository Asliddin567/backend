const { HumanCategory } = require("../models");
const { validateHumanCategory } = require("../validations/humanCategoryValidation");

exports.createHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const category = await HumanCategory.create(req.body);
    res.status(201).send(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumanCategories = async (req, res) => {
  try {
    const categories = await HumanCategory.findAll();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumanCategoryById = async (req, res) => {
  try {
    const category = await HumanCategory.findByPk(req.params.id);
    if (!category) return res.status(404).send("HumanCategory topilmadi");
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const category = await HumanCategory.findByPk(req.params.id);
    if (!category) return res.status(404).send("HumanCategory topilmadi");
    await category.update(req.body);
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHumanCategory = async (req, res) => {
  try {
    const category = await HumanCategory.findByPk(req.params.id);
    if (!category) return res.status(404).send("HumanCategory topilmadi");

    const categoryData = category.toJSON();
    await category.destroy();
    res.status(200).send(categoryData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};