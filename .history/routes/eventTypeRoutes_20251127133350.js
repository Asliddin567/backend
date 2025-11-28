const express = require("express");
const router = express.Router();
const can = require("../controller/VenueType.controller");

/**
 * @swagger
 * tags:
 *   name: EventsTypes
 *   description: Maydoncha turlari (stadion, teatr, klub, arena va h.k.)
 */

/**
 * @swagger
 * /api/venue-types:
 *   post:
 *     summary: Yangi maydoncha turi yaratish
 *     tags: [VenueTypes]
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
 *                 example: "Stadion"
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Maydoncha turi yaratildi
 */
router.post("/venue-types", can.createVenueType);


/**
 * @swagger
 * /api/venue-types:
 *   get:
 *     summary: Barcha maydoncha turlarini olish
 *     tags: [VenueTypes]
 *     responses:
 *       200:
 *         description: Ro'yxat
 */
router.get("/venue-types", can.getVenueTypes);


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
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Ma'lumotlar
 */
router.get("/venue-types/:id", can.getVenueTypeById);


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
 *                 example: "Teatr"
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Yangilandi
 */
router.put("/venue-types/:id", can.updateVenueType);


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
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: O'chirildi
 */

router.delete("/venue-types/:id", can.deleteVenueType);

module.exports = router;
