const express = require("express");
const router = express.Router();
const {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} = require("../controller/Admin.controller");

/**
 * @swagger
 * /api/admin:
 *   post:
 *     summary: Yangi admin yaratish
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Admin created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/admin", createAdmin);

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Tizim adminlari boshqaruvi (faqat super admin ishlatadi)
 */

/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     summary: Bitta adminni ID bo'yicha olish
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin topildi
 *       404:
 *         description: Admin topilmadi
 *       500:
 *         description: Server error
 */
router.get("/admin/:id", getAdminById);

/**
 * @swagger
 * /api/admin:
 *   get:
 *     summary: Barcha adminlarni olish
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Adminlar ro'yxati
 */
router.get("/admin", getAdmins);

/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     summary: Admin ma'lumotlarini yangilash
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Admin yangilandi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 admin:
 *                   type: object
 *       404:
 *         description: Admin topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/admin/:id", updateAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     summary: Adminni o'chirish
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin o'chirildi
 *       404:
 *         description: Admin topilmadi
 */
router.delete("/admin/:id", deleteAdmin);

module.exports = router;
