const express = require("express");
const router = express.Router();
const deliveryMethodController = require("../controller/DeliveryMethod.controller");

/**
 * @swagger
 * tags:
 *   name: DeliveryMethods
 *   description: Yetkazib berish usullari boshqaruvi
 */

/**
 * @swagger
 * /api/delivery-methods:
 *   post:
 *     summary: Yangi yetkazib berish usuli qo'shish
 *     tags: [DeliveryMethods]
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
 *                 description: Yetkazib berish usuli nomi (Kuryer, Pochta, Elektron va h.k.)
 *     responses:
 *       201:
 *         description: Yetkazib berish usuli yaratildi
 */
router.post("/delivery-methods", deliveryMethodController.createDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods:
 *   get:
 *     summary: Barcha yetkazib berish usullarini olish
 *     tags: [DeliveryMethods]
 *     responses:
 *       200:
 *         description: Yetkazib berish usullari ro'yxati
 */
router.get("/delivery-methods", deliveryMethodController.getDeliveryMethods);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   get:
 *     summary: Bitta yetkazib berish usulini olish
 *     tags: [DeliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Yetkazib berish usuli ID
 *     responses:
 *       200:
 *         description: Yetkazib berish usuli ma'lumotlari
 *       404:
 *         description: Yetkazib berish usuli topilmadi
 */
router.get("/delivery-methods/:id", deliveryMethodController.getDeliveryMethodById);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   put:
 *     summary: Yetkazib berish usulini yangilash
 *     tags: [DeliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Yetkazib berish usuli ID
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
 *         description: Yetkazib berish usuli yangilandi
 */
router.put("/delivery-methods/:id", deliveryMethodController.updateDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   delete:
 *     summary: Yetkazib berish usulini o'chirish
 *     tags: [DeliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Yetkazib berish usuli ID
 *     responses:
 *       200:
 *         description: Yetkazib berish usuli o'chirildi
 */
router.delete("/delivery-methods/:id", deliveryMethodController.deleteDeliveryMethod);

module.exports = router;