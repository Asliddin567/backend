const express = require("express");
const router = express.Router();
const ticketStatusController = require("../controller/TicketStatus.controller");

/**
 * @swagger
 * tags:
 *   name: TicketStatuse
 *   description: Chipta holatlari boshqaruvi
 */

/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     summary: Yangi chipta holati qo'shish
 *     tags: [TicketStatuse]
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
 *     responses:
 *       201:
 *         description: Chipta holati yaratildi
 */
router.post("/ticket-statuses", ticketStatusController.createTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses:
 *   get:
 *     summary: Barcha chipta holatlarini olish
 *     tags: [TicketStatuse]
 *     responses:
 *       200:
 *         description: Chipta holatlari ro'yxati
 */
router.get("/ticket-statuses", ticketStatusController.getTicketStatuses);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     summary: Bitta chipta holatini olish
 *     tags: [TicketStatuse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Chipta holati ID
 *     responses:
 *       200:
 *         description: Chipta holati ma'lumotlari
 *       404:
 *         description: Chipta holati topilmadi
 */
router.get("/ticket-statuses/:id", ticketStatusController.getTicketStatusById);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   put:
 *     summary: Chipta holatini yangilash
 *     tags: [TicketStatuse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Chipta holati ID
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
 *         description: Chipta holati yangilandi
 */
router.put("/ticket-statuses/:id", ticketStatusController.updateTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     summary: Chipta holatini o'chirish
 *     tags: [TicketStatuse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Chipta holati ID
 *     responses:
 *       200:
 *         description: Chipta holati o'chirildi
 */
router.delete(
  "/ticket-statuses/:id",
  ticketStatusController.deleteTicketStatus
);

module.exports = router;
