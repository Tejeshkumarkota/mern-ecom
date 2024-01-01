import express from 'express';
import { ObjectId } from 'mongodb';
import { getDb } from '../db.js';

const router = express.Router();

router.get('/', (req, res) => {
    let digital_subcategories = []

    getDb().collection('digital_subcategories')
        .find()
        .sort({ 'product_name': 1 })
        .forEach(digital_subcategory => digital_subcategories.push(digital_subcategory))
        .then(() => {
            res.status(200).json(digital_subcategories)
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    getDb().collection('digital_subcategories')
        .findOne({ _id: ObjectId(id) })
        .then(digital_subcategories => {
            res.status(200).json(digital_subcategories)
        })
})

export default router;