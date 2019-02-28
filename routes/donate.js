const express = require('express');
const router = express.Router();

const Garbage = require('../models/garbage');

// Save the donation on database
router.post('/', (req, res, next) => {
    const {
        username,
        name,
        number,
        location,
    } = req.body;

    const newGarbage = new Garbage({
        username,
        name,
        number,
        location,
    });

    newGarbage.save().then((data) => {
        return res.json(data);
    })
    .catch(next);
})

module.exports = router;