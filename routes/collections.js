const express = require('express');
const router = express.Router();

const Collection = require('../models/collection');
const Garbage = require('../models/garbage');

// Save the donation on database
router.get('/', (req, res, next) => {
    Garbage.find({status: 'pending'}).sort({ createdAt: 1 })
    .then((data) => {
        return res.json(data);
    })
    .catch(next);
})
router.post('/', (req, res, next) => {
    const {data, name} = req.body.data;
    Garbage.findByIdAndUpdate(data._id,{ status: 'reserved' },{new: true})
        .then((data) => {
            Collection.create({
                volunteer_name: name ,
                _garbage: data,
            }).then((data) => {
                return(data);
            })
            
        })
    .catch(next);
    
})

module.exports = router;