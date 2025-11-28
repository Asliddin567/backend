const { Admin } = require("../models");
const { createAdminSchema, updateAdminSchema } = require("../validations/adminValidation");

exports.createAdmin = async (req, res) => {
  const { error } = createAdminSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const admin = await Admin.create(req.body);
    const { hashed_password, ...safeAdmin } = admin.toJSON();
    res.status(201).json(safeAdmin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll({
      attributes: { exclude: ["hashed_password", "hashed_refresh_token"] },
    });
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id, {
      attributes: { exclude: ["hashed_password", "hashed_refresh_token"] },
    });
    if (!admin) return res.status(404).json({ message: "Admin topilmadi" });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAdmin = async (req, res) => {
  const { error } = updateAdminSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin topilmadi" });

    await admin.update(req.body);
    const { hashed_password, ...safeAdmin } = admin.toJSON();
    res.json(safeAdmin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin topilmadi" });
    await admin.destroy();
    res.json({ message: "Admin o'chirildi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};