import express from 'express';
import { ObjectId } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../db.js';

const router = express.Router();


router.get('/', (req, res) => {
    let products = []

    getDb().collection('physical_products')
        .find()
        .forEach(product => products.push(product))
        .then(() => {
            res.status(200).json(products)
        })
})

router.post('/', (req, res) => {
    products.push({ id: uuidv4(), ...req.body });
    res.send(products)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    getDb().collection('physical_products')
        .findOne({ _id: ObjectId(id) })
        .then(product => {
            res.status(200).json(product)
        })
})

export default router;