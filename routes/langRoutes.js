const express = require("express");
const router = express.Router();
const langController = require("../controller/Lang.controller");

/**
 * @swagger
 * tags:
 *   name: Languages
 *   description: Tillar boshqaruvi
 */

/**
 * @swagger
 * /api/languages:
 *   post:
 *     summary: Yangi til qo'shish
 *     tags: [Languages]
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
 *                 description: Til nomi (uz, ru, en)
 *     responses:
 *       201:
 *         description: Til yaratildi
 */
router.post("/languages", langController.createLang);

/**
 * @swagger
 * /api/languages:
 *   get:
 *     summary: Barcha tillarni olish
 *     tags: [Languages]
 *     responses:
 *       200:
 *         description: Tillar ro'yxati
 */
router.get("/languages", langController.getLangs);

/**
 * @swagger
 * /api/languages/{id}:
 *   get:
 *     summary: Bitta tilni olish
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Til ID
 *     responses:
 *       200:
 *         description: Til ma'lumotlari
 *       404:
 *         description: Til topilmadi
 */
router.get("/languages/:id", langController.getLangById);

/**
 * @swagger
 * /api/languages/{id}:
 *   put:
 *     summary: Tilni yangilash
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Til ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Yangi til nomi
 *     responses:
 *       200:
 *         description: Til yangilandi
 */
router.put("/languages/:id", langController.updateLang);

/**
 * @swagger
 * /api/languages/{id}:
 *   delete:
 *     summary: Tilni o'chirish
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Til ID
 *     responses:
 *       200:
 *         description: Til o'chirildi
 */
router.delete("/languages/:id", langController.deleteLang);

module.exports = router;