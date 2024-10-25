const express = require('express');
const {
  registerPet,
  getPets,
  getPetById,
  updatePet,
  deletePet,
} = require('../controllers/petController');
const upload = require('../config/multer'); 

const router = express.Router();

router.post('/', upload.single('image'), registerPet);
router.get('/', getPets);
router.get('/:id', getPetById);
router.put('/:id', upload.single('image'), updatePet); 
router.delete('/:id', deletePet);

module.exports = router;
