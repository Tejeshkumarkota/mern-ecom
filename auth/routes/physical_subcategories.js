import express from 'express';
import { ObjectId } from 'mongodb';
import { getDb } from '../db.js';

const router = express.Router();


router.get('/', (req, res) => {
    let physical_subcategories = []

    getDb().collection('physical_subcategories')
        .find()
        .sort({ 'product_name': 1 })
        .forEach(physical_subcategory => physical_subcategories.push(physical_subcategory))
        .then(() => {
            res.status(200).json(physical_subcategories)
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    getDb().collection('physical_subcategories')
        .findOne({ _id: ObjectId(id) })
        .then(physical_subcategory => {
            res.status(200).json(physical_subcategory)
        })
})

export default router;