const express = require("express");
const router = express.Router();
const humanCategoryController = require("../controller/HumanCategory.controller");

/**
 * @swagger
 * tags:
 *   name: HumanCategories
 *   description: Yosh toifalari boshqaruvi
 */

/**
 * @swagger
 * /api/human-categories:
 *   post:
 *     summary: Yangi yosh toifasi qo'shish
 *     tags: [HumanCategories]
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
 *                 description: Toifa nomi
 *               start_age:
 *                 type: integer
 *                 description: Boshlanish yoshi
 *               finish_age:
 *                 type: integer
 *                 description: Tugash yoshi
 *               gender:
 *                 type: string
 *                 enum: [male, female, both]
 *                 description: Jins
 *     responses:
 *       201:
 *         description: Yosh toifasi yaratildi
 */
router.post("/human-categories", humanCategoryController.createHumanCategory);

/**
 * @swagger
 * /api/human-categories:
 *   get:
 *     summary: Barcha yosh toifalarini olish
 *     tags: [HumanCategories]
 *     responses:
 *       200:
 *         description: Yosh toifalari ro'yxati
 */
router.get("/human-categories", humanCategoryController.getHumanCategories);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   get:
 *     summary: Bitta yosh toifasini olish
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Yosh toifasi ID
 *     responses:
 *       200:
 *         description: Yosh toifasi ma'lumotlari
 *       404:
 *         description: Yosh toifasi topilmadi
 */
router.get("/human-categories/:id", humanCategoryController.getHumanCategoryById);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   put:
 *     summary: Yosh toifasini yangilash
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Yosh toifasi ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: integer
 *               finish_age:
 *                 type: integer
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: Yosh toifasi yangilandi
 */
router.put("/human-categories/:id", humanCategoryController.updateHumanCategory);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   delete:
 *     summary: Yosh toifasini o'chirish
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Yosh toifasi ID
 *     responses:
 *       200:
 *         description: Yosh toifasi o'chirildi
 */
router.delete("/human-categories/:id", humanCategoryController.deleteHumanCategory);

module.exports = router;