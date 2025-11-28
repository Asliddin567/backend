const express = require("express");
const router = express.Router();
const {
  createCart,
  getCarts,
  getCartById,
  updateCart,
  deleteCart,
} = require("../controller/Cart.controller");

/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Mijoz savatlari
 */

/**
 * @swagger
 * /api/carts:
 *   post:
 *     summary: Yangi savat yaratish
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [customer_id]
 *             properties:
 *               customer_id:
 *                 type: integer
 *                 example: 5
 *               status_id:
 *                 type: string
 *                 example: 1
 *     responses:
 *       201:
 *         description: Savat yaratildi
 */

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Barcha savatlarni olish
 *     tags: [Carts]
 *     responses:
 *       200:
 *         description: Savatlar ro‘yxati
 */

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     summary: Bitta savatni olish
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Savat ma'lumotlari
 */

/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     summary: Savatni yangilash (masalan, statusni o‘zgartirish)
 *     tags: [Carts]
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
 *               status_id:
 *                 type: string
 *                 example: 2
 *     responses:
 *       200:
 *         description: Savat yangilandi
 */

/**
 * @swagger
 * /api/carts/{id}:
 *   delete:
 *     summary: Savatni o‘chirish
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Savat o‘chirildi
 */

// Route’lar — birinchi CREATE!
router.post("/carts", createCart);
router.get("/carts", getCarts);
router.get("/carts/:id", getCartById);
router.put("/carts/:id", updateCart);
router.delete("/carts/:id", deleteCart);

module.exports = router;
