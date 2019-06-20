const express = require('express');
const router = express.Router();

const Animals = require('./animalsModel');

router.get('/', async (req, res) => {
    Animals.getAll()
    .then(animals => {
        res.status(200).json(animals);
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/', (req, res) => {
    Animals.insert(req.body, "id")
    .then(animal => {
        res.status(201).json(animal)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})


module.exports = router;