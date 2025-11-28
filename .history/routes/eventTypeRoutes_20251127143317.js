
const express = require("express");
const router = express.Router();
const can = require("../controller/EventType.controller");

/**
 * @swagger
 * tags:
 *   name: EventTypes
 *   description: Event turlari
 */

/**
 * @swagger
 * /api/event-types:
 *   post:
 *     summary: Yangi event type yaratish
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
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Yaraldi
 */
router.post("/", can.createEventType);

/**
 * @swagger
 * /api/event-types:
 *   get:
 *     summary: Barcha event turlarini olish
 *     tags: [EventTypes]
 *     responses:
 *       200:
 *         description: Ro‘yxat
 */
router.get("/", can.getEventTypes);

/**
 * @swagger
 * /api/event-types/{id}:
 *   get:
 *     summary: Bitta event turini olish
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ma'lumot
 */
router.get("/:id", can.getEventTypeById);

/**
 * @swagger
 * /api/event-types/{id}:
 *   put:
 *     summary: Event turini yangilash
 *     tags: [EventTypes]
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
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Yangilandi
 */
router.put("/:id", can.updateEventType);

/**
 * @swagger
 * /api/event-types/{id}:
 *   delete:
 *     summary: Event turini o‘chirish
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: O‘chirildi
 */
router.delete("/:id", can.deleteEventType);

module.exports = router;
