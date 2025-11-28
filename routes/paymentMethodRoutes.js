const express = require("express");
const router = express.Router();
const paymentMethodController = require("../controller/PaymentMethod.controller");

/**
 * @swagger
 * tags:
 *   name: PaymentMethods
 *   description: To'lov usullari boshqaruvi
 */

/**
 * @swagger
 * /api/payment-methods:
 *   post:
 *     summary: Yangi to'lov usuli qo'shish
 *     tags: [PaymentMethods]
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
 *                 description: To'lov usuli nomi (Click, Payme, Cash va h.k.)
 *     responses:
 *       201:
 *         description: To'lov usuli yaratildi
 */
router.post("/payment-methods", paymentMethodController.createPaymentMethod);

/**
 * @swagger
 * /api/payment-methods:
 *   get:
 *     summary: Barcha to'lov usullarini olish
 *     tags: [PaymentMethods]
 *     responses:
 *       200:
 *         description: To'lov usullari ro'yxati
 */
router.get("/payment-methods", paymentMethodController.getPaymentMethods);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   get:
 *     summary: Bitta to'lov usulini olish
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: To'lov usuli ID
 *     responses:
 *       200:
 *         description: To'lov usuli ma'lumotlari
 *       404:
 *         description: To'lov usuli topilmadi
 */
router.get("/payment-methods/:id", paymentMethodController.getPaymentMethodById);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   put:
 *     summary: To'lov usulini yangilash
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: To'lov usuli ID
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
 *         description: To'lov usuli yangilandi
 */
router.put("/payment-methods/:id", paymentMethodController.updatePaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   delete:
 *     summary: To'lov usulini o'chirish
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: To'lov usuli ID
 *     responses:
 *       200:
 *         description: To'lov usuli o'chirildi
 */
router.delete("/payment-methods/:id", paymentMethodController.deletePaymentMethod);

module.exports = router;