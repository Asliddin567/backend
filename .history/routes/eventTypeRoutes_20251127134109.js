const express = require("express");
const router = express.Router();
const can = require("../controller/EventType.controller");

/**
 * @swagger
 * tags:
 *   name: EventTypes
 *   description: Maydoncha turlari (stadion, teatr, klub, arena va h.k.)
 */

/**
 * @swagger
 * /Event-types:
 *   post:
 *     summary: Yangi maydoncha turi yaratish
 *     tags: [EventTypes]
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
router.post("/", can.createEventType);

/**
 * @swagger
 * /api/Event-types:
 *   get:
 *     summary: Barcha maydoncha turlarini olish
 *     tags: [EventTypes]
 *     responses:
 *       200:
 *         description: Ro'yxat
 */
router.get("/", can.getEventTypes);

/**
 * @swagger
 * Event-types/{id}:
 *   get:
 *     summary: Bitta maydoncha turini olish
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Ma'lumotlar
 */
router.get("/:id", can.getEventTypeById);

/**
 * @swagger
 * Event-types/{id}:
 *   put:
 *     summary: Maydoncha turini yangilash
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
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
router.put("/:id", can.updateEventType);

/**
 * @swagger
 * Event-types/{id}:
 *   delete:
 *     summary: Maydoncha turini o'chirish
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: O'chirildi
 */

router.delete("/:id", can.deleteEventType);

module.exports = router;
