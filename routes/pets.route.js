const express = require('express');
const router = express.Router();
const {
    getPetsController,
    postPetsController,
    putPetsController,
    deletePetsController
}= require('../controller/index');
router.get('/pets',getPetsController);
router.post('/',);
router.put('/',);
router.delete('/',);
module.exports = router;