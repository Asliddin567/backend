const express = require("express");
const router = express.Router();
const districtController = require("../controller/District.controller");

/**
 * @swagger
 * tags:
 *   name: Districts
 *   description: Tuman va shaharlar boshqaruvi
 */

/**
 * @swagger
 * /api/districts:
 *   post:
 *     summary: Yangi tuman qo'shish
 *     tags: [Districts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - region_id
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tuman nomi
 *               region_id:
 *                 type: integer
 *                 description: Viloyat ID
 *     responses:
 *       201:
 *         description: Tuman yaratildi
 */
router.post("/districts", districtController.createDistrict);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     summary: Barcha tumanlarni olish
 *     tags: [Districts]
 *     responses:
 *       200:
 *         description: Tumanlar ro'yxati
 */
router.get("/districts", districtController.getDistricts);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     summary: Bitta tumanni olish
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Tuman ID
 *     responses:
 *       200:
 *         description: Tuman ma'lumotlari
 *       404:
 *         description: Tuman topilmadi
 */
router.get("/districts/:id", districtController.getDistrictById);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     summary: Tumanni yangilash
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Tuman ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tuman yangilandi
 */
router.put("/districts/:id", districtController.updateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     summary: Tumanni o'chirish
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Tuman ID
 *     responses:
 *       200:
 *         description: Tuman o'chirildi
 */
router.delete("/districts/:id", districtController.deleteDistrict);

module.exports = router;