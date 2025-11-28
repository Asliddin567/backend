const express = require("express");
const router = express.Router();
const customerCardController = require("../controller/CustomerCard.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerCards
 *   description: Mijoz karta ma'lumotlari
 */

/**
 * @swagger
 * /api/customer-cards:
 *   post:
 *     summary: Yangi karta qo'shish
 *     tags: [CustomerCards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer_id
 *               - name
 *             properties:
 *               customer_id:
 *                 type: integer
 *                 description: Mijoz ID
 *               name:
 *                 type: string
 *                 description: Karta egasi ismi
 *               phone:
 *                 type: string
 *                 description: Telefon
 *               year:
 *                 type: string
 *                 description: Amal qilish yili (YYYY)
 *               month:
 *                 type: string
 *                 description: Amal qilish oyi (MM)
 *               is_active:
 *                 type: boolean
 *                 description: Faolmi
 *               is_main:
 *                 type: boolean
 *                 description: Asosiy kartami
 *     responses:
 *       201:
 *         description: Karta qo'shildi
 */
router.post("/customer-cards", customerCardController.createCustomerCard);

/**
 * @swagger
 * /api/customer-cards:
 *   get:
 *     summary: Barcha kartalarni olish
 *     tags: [CustomerCards]
 *     responses:
 *       200:
 *         description: Kartalar ro'yxati
 */
router.get("/customer-cards", customerCardController.getCustomerCards);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   get:
 *     summary: Bitta kartani olish
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Karta ID
 *     responses:
 *       200:
 *         description: Karta ma'lumotlari
 *       404:
 *         description: Karta topilmadi
 */
router.get("/customer-cards/:id", customerCardController.getCustomerCardById);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   put:
 *     summary: Kartani yangilash
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Karta ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               is_main:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Karta yangilandi
 */
router.put("/customer-cards/:id", customerCardController.updateCustomerCard);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   delete:
 *     summary: Kartani o'chirish
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Karta ID
 *     responses:
 *       200:
 *         description: Karta o'chirildi
 */
router.delete("/customer-cards/:id", customerCardController.deleteCustomerCard);

module.exports = router;