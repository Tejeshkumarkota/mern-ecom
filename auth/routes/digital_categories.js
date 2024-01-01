import express from 'express';
import { ObjectId } from 'mongodb';
import { getDb } from '../db.js';

const router = express.Router();


router.get('/', (req, res) => {
    let digital_categories = []

    getDb().collection('digital_categories')
        .find()
        .sort({ 'product_name': 1 })
        .forEach(digital_category => digital_categories.push(digital_category))
        .then(() => {
            res.status(200).json(digital_categories)
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    getDb().collection('digital_categories')
        .findOne({ _id: ObjectId(id) })
        .then(digital_categories => {
            res.status(200).json(digital_categories)
        })
})

export default router;