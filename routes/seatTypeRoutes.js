const express = require("express");
const router = express.Router();
const {
  createSeatType,
  getSeatTypes,
  getSeatTypeById,
  updateSeatType,
  deleteSeatType,
} = require("../controller/SeatType.controller");   // sen xohlagan ko‘rinish!

/**
 * @swagger
 * tags:
 *   name: SeatTypes
 *   description: O‘rindiq turlari (VIP, Standart, Premium va h.k.)
 */

/**
 * @swagger
 * /api/seat-types:
 *   post:
 *     summary: Yangi o‘rindiq turi yaratish
 *     tags: [SeatTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "VIP"
 *     responses:
 *       201:
 *         description: O‘rindiq turi yaratildi
 */

/**
 * @swagger
 * /api/seat-types:
 *   get:
 *     summary: Barcha o‘rindiq turlarini olish
 *     tags: [SeatTypes]
 *     responses:
 *       200:
 *         description: Ro‘yxat
 */

/**
 * @swagger
 * /api/seat-types/{id}:
 *   get:
 *     summary: Bitta o‘rindiq turini olish
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Ma'lumotlar
 */

/**
 * @swagger
 * /api/seat-types/{id}:
 *   put:
 *     summary: O‘rindiq turini yangilash
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Premium"
 *     responses:
 *       200:
 *         description: Yangilandi
 */

/**
 * @swagger
 * /api/seat-types/{id}:
 *   delete:
 *     summary: O‘rindiq turini o‘chirish
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: O‘chirildi
 */

// Route’lar — birinchi CREATE!
router.post("/seat-types", createSeatType);
router.get("/seat-types", getSeatTypes);
router.get("/seat-types/:id", getSeatTypeById);
router.put("/seat-types/:id", updateSeatType);
router.delete("/seat-types/:id", deleteSeatType);

module.exports = router;