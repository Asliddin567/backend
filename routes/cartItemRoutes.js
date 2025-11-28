const express = require("express");
const router = express.Router();
const cartItemController = require("../controller/CartItem.controller");

/**
 * @swagger
 * tags:
 *   name: CartItem
 *   description: Savatdagi elementlar
 */

/**
 * @swagger
 * /api/cart-items:
 *   post:
 *     summary: Savatga chipta qo'shish
 *     tags: [CartItem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cart_id
 *               - ticket_id
 *             properties:
 *               cart_id:
 *                 type: integer
 *                 description: Savat ID
 *               ticket_id:
 *                 type: integer
 *                 description: Chipta ID
 *     responses:
 *       201:
 *         description: Element qo'shildi
 */
router.post("/cart-items", cartItemController.createCartItem);

/**
 * @swagger
 * /api/cart-items:
 *   get:
 *     summary: Barcha savat elementlarini olish
 *     tags: [CartItem]
 *     responses:
 *       200:
 *         description: Elementlar ro'yxati
 */
router.get("/cart-items", cartItemController.getCartItems);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   get:
 *     summary: Bitta elementni olish
 *     tags: [CartItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Element ID
 *     responses:
 *       200:
 *         description: Element ma'lumotlari
 *       404:
 *         description: Element topilmadi
 */
router.get("/cart-items/:id", cartItemController.getCartItemById);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   delete:
 *     summary: Savatdan chipta o'chirish
 *     tags: [CartItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Element ID
 *     responses:
 *       200:
 *         description: Element o'chirildi
 */
router.delete("/cart-items/:id", cartItemController.deleteCartItem);

module.exports = router;