const express = require("express");
const router = express.Router();
const ticketController = require("../controller/Ticket.controller");

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Chiptalar boshqaruvi
 */

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     summary: Yangi chipta yaratish
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - event_id
 *               - seat_id
 *               - price
 *             properties:
 *               event_id:
 *                 type: integer
 *                 description: Tadbir ID
 *               seat_id:
 *                 type: integer
 *                 description: O'rindiq ID
 *               price:
 *                 type: number
 *                 description: Narxi
 *               service_fee:
 *                 type: number
 *                 description: Xizmat haqqi
 *               status_id:
 *                 type: integer
 *                 description: Holati ID
 *               ticket_type:
 *                 type: integer
 *                 description: Chipta turi
 *     responses:
 *       201:
 *         description: Chipta yaratildi
 */
router.post("/tickets", ticketController.createTicket);

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     summary: Barcha chiptalarni olish
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Chiptalar ro'yxati
 */
router.get("/tickets", ticketController.getTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     summary: Bitta chiptani olish
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Chipta ID
 *     responses:
 *       200:
 *         description: Chipta ma'lumotlari
 *       404:
 *         description: Chipta topilmadi
 */
router.get("/tickets/:id", ticketController.getTicketById);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     summary: Chiptani yangilash
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Chipta ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *               # qolgan fieldlar
 *     responses:
 *       200:
 *         description: Chipta yangilandi
 */
router.put("/tickets/:id", ticketController.updateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     summary: Chiptani o'chirish
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Chipta ID
 *     responses:
 *       200:
 *         description: Chipta o'chirildi
 */
router.delete("/tickets/:id", ticketController.deleteTicket);

module.exports = router;