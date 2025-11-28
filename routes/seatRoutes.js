const express = require("express");
const router = express.Router();
const seatController = require("../controller/Seat.controller");

/**
 * @swagger
 * tags:
 *   name: Seats
 *   description: O‘rindiqlar boshqaruvi
 */

/**
 * @swagger
 * /api/seats:
 *   post:
 *     summary: Yangi o‘rindiq yaratish
 *     tags: [Seats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - venue_id
 *               - seat_type_id
 *             properties:
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               sector:
 *                 type: integer
 *               row_number:
 *                 type: integer
 *               number:
 *                 type: integer
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       201:
 *         description: O‘rindiq yaratildi
 */
router.post("/seats", seatController.createSeat);

/**
 * @swagger
 * /api/seats:
 *   get:
 *     summary: Barcha o‘rindiqlarni olish
 *     tags: [Seats]
 *     responses:
 *       200:
 *         description: O‘rindiqlar ro‘yxati
 */
router.get("/seats", seatController.getSeats);

/**
 * @swagger
 * /api/seats/{id}:
 *   get:
 *     summary: Bitta o‘rindiqni olish
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O‘rindiq ID
 *     responses:
 *       200:
 *         description: O‘rindiq ma’lumotlari
 *       404:
 *         description: Topilmadi
 */
router.get("/seats/:id", seatController.getSeatById);

/**
 * @swagger
 * /api/seats/{id}:
 *   put:
 *     summary: O‘rindiqni yangilash
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O‘rindiq ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               sector:
 *                 type: integer
 *               row_number:
 *                 type: integer
 *               number:
 *                 type: integer
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       200:
 *         description: O‘rindiq yangilandi
 */
router.put("/seats/:id", seatController.updateSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     summary: O‘rindiqni o‘chirish
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O‘rindiq ID
 *     responses:
 *       200:
 *         description: O‘rindiq o‘chirildi
 */
router.delete("/seats/:id", seatController.deleteSeat);

module.exports = router;
