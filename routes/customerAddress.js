const express = require("express");
const router = express.Router();
const controller = require("../controller/CustomerAddress.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: Customer Address management
 */

/**
 * @swagger
 * /api/customer-addresses:
 *   post:
 *     tags: [CustomerAddress]
 *     summary: Create customer address
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer_id
 *               - country
 *               - city
 *               - district
 *               - street
 *             properties:
 *               customer_id:
 *                 type: integer
 *                 example: 3
 *               country:
 *                 type: string
 *                 example: Uzbekistan
 *               city:
 *                 type: string
 *                 example: Tashkent
 *               district:
 *                 type: string
 *                 example: Chilonzor
 *               street:
 *                 type: string
 *                 example: "Furqat ko'chasi"
 *               postal_code:
 *                 type: string
 *                 example: "100200"
 *     responses:
 *       201:
 *         description: Address created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/customer-addresses", controller.createCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all customer addresses
 *     responses:
 *       200:
 *         description: List of customer addresses
 *       500:
 *         description: Server error
 */
router.get("/customer-addresses", controller.getCustomerAddresses);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get customer address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Single address data
 *       404:
 *         description: Address not found
 *       500:
 *         description: Server error
 */
router.get("/customer-addresses/:id", controller.getCustomerAddressById);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   put:
 *     tags: [CustomerAddress]
 *     summary: Update customer address
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
 *               customer_id:
 *                 type: integer
 *                 example: 3
 *               country:
 *                 type: string
 *                 example: Uzbekistan
 *               city:
 *                 type: string
 *                 example: Tashkent
 *               district:
 *                 type: string
 *                 example: Chilonzor
 *               street:
 *                 type: string
 *                 example: "Furqat ko'chasi"
 *               postal_code:
 *                 type: string
 *                 example: "100200"
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Address not found
 *       500:
 *         description: Server error
 */
router.put("/customer-addresses/:id", controller.updateCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   delete:
 *     tags: [CustomerAddress]
 *     summary: Delete customer address
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Address not found
 *       500:
 *         description: Server error
 */
router.delete("/customer-addresses/:id", controller.deleteCustomerAddress);

module.exports = router;
