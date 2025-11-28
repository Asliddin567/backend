const express = require("express");
const router = express.Router();
const venueTypeController = require("../controller/VenueType.controller");

/**
 * @swagger
 * tags:
 *   name: VenueTypes
 *   description: Maydoncha turlari boshqaruvi
 */

/**
 * @swagger
 * /api/venue-types:
 *   post:
 *     summary: Yangi maydoncha turi qo'shish
 *     tags: [VenueTypes]
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
 *               typeid:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Maydoncha turi yaratildi
 */
router.post("/venue-types", venueTypeController.createVenueType);

/**
 * @swagger
 * /api/venue-types:
 *   get:
 *     summary: Barcha maydoncha turlarini olish
 *     tags: [VenueTypes]
 *     responses:
 *       200:
 *         description: Maydoncha turlari ro'yxati
 */
router.get("/venue-types", venueTypeController.getVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   get:
 *     summary: Bitta maydoncha turini olish
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Maydoncha turi ID
 *     responses:
 *       200:
 *         description: Maydoncha turi ma'lumotlari
 *       404:
 *         description: Maydoncha turi topilmadi
 */
router.get("/venue-types/:id", venueTypeController.getVenueTypeById);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   put:
 *     summary: Maydoncha turini yangilash
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Maydoncha turi ID
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
 *         description: Maydoncha turi yangilandi
 */
router.put("/venue-types/:id", venueTypeController.updateVenueType);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   delete:
 *     summary: Maydoncha turini o'chirish
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Maydoncha turi ID
 *     responses:
 *       200:
 *         description: Maydoncha turi o'chirildi
 */
router.delete("/venue-types/:id", venueTypeController.deleteVenueType);

module.exports = router;