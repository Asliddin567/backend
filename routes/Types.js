const express = require("express");
const router = express.Router();
const typeController = require("../controller/Types.controller");

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Qo'shimcha turlar (lookup jadval)
 */

/**
 * @swagger
 * /api/types:
 *   post:
 *     summary: Yangi tur qo'shish
 *     tags: [Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tur nomi
 *     responses:
 *       201:
 *         description: Tur yaratildi
 */
router.post("/types", typeController.createType);

/**
 * @swagger
 * /api/types:
 *   get:
 *     summary: Barcha turlarni olish
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: Turlar ro'yxati
 */
router.get("/types", typeController.getTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     summary: Bitta turni olish
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Tur ID
 *     responses:
 *       200:
 *         description: Tur ma'lumotlari
 *       404:
 *         description: Tur topilmadi
 */
router.get("/types/:id", typeController.getTypeById);

/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     summary: Turni yangilash
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Tur ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Yangi nomi
 *     responses:
 *       200:
 *         description: Tur yangilandi
 */
router.put("/types/:id", typeController.updateType);

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     summary: Turni o'chirish
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Tur ID
 *     responses:
 *       200:
 *         description: Tur o'chirildi
 */
router.delete("/types/:id", typeController.deleteType);

module.exports = router;