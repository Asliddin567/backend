const express = require("express");
const router = express.Router();
const {
  createVenuePhoto,
  getVenuePhotos,
  getVenuePhotoById,
  updateVenuePhoto,
  deleteVenuePhoto,
} = require("../controller/VenuePhoto.controller");

/**
 * @swagger
 * tags:
 *   name: VenuePhotos
 *   description: Maydoncha rasmlari
 */

/**
 * @swagger
 * /api/venue-photos:
 *   post:
 *     summary: Maydoncha uchun rasm yuklash
 *     tags: [VenuePhotos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [venue_id, url]
 *             properties:
 *               venue_id:
 *                 type: integer
 *                 example: 1
 *               url:
 *                 type: string
 *                 example: "https://example.com/photo1.jpg"
 *     responses:
 *       201:
 *         description: Rasm yuklandi
 */

/**
 * @swagger
 * /api/venue-photos:
 *   get:
 *     summary: Barcha maydoncha rasmlarini olish
 *     tags: [VenuePhotos]
 *     responses:
 *       200:
 *         description: Rasmlar ro‘yxati
 */

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   get:
 *     summary: Bitta rasmni olish
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Rasm ma'lumotlari
 */

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   put:
 *     summary: Rasm URL ni yangilash
 *     tags: [VenuePhotos]
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
 *               url:
 *                 type: string
 *                 example: "https://newurl.com/photo.jpg"
 *     responses:
 *       200:
 *         description: Rasm yangilandi
 */

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   delete:
 *     summary: Rasmni o'chirish
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Rasm o‘chirildi
 */

// Route’lar — birinchi CREATE!
router.post("/venue-photos", createVenuePhoto);
router.get("/venue-photos", getVenuePhotos);
router.get("/venue-photos/:id", getVenuePhotoById);
router.put("/venue-photos/:id", updateVenuePhoto);
router.delete("/venue-photos/:id", deleteVenuePhoto);

module.exports = router;