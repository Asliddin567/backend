const express = require("express");
const router = express.Router();
const regionController = require("../controller/Region.controller"); // yoki "../controller/Region.controller"

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Viloyatlar (Region) boshqaruvi
 */

/**
 * @swagger
 * /api/regions:
 *   post:
 *     summary: Yangi viloyat qo'shish
 *     tags: [Region]
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
 *                 example: "Toshkent viloyati"
 *     responses:
 *       201:
 *         description: Viloyat yaratildi
 */
router.post("/regions", regionController.createRegion);

/**
 * @swagger
 * /api/regions:
 *   get:
 *     summary: Barcha viloyatlarni olish
 *     tags: [Region]
 *     responses:
 *       200:
 *         description: Viloyatlar ro'yxati
 */
router.get("/regions", regionController.getRegions);

/**
 * @swagger
 * /api/regions/{id}:
 *   get:
 *     summary: Bitta viloyatni olish
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Viloyat topildi
 *       404:
 *         description: Viloyat topilmadi
 */
router.get("/regions/:id", regionController.getRegionById);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     summary: Viloyatni yangilash
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Toshkent viloyati (yangilandi)"
 *     responses:
 *       200:
 *         description: Viloyat yangilandi
 */
router.put("/regions/:id", regionController.updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     summary: Viloyatni o'chirish
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Viloyat o'chirildi
 */
router.delete("/regions/:id", regionController.deleteRegion);

module.exports = router;