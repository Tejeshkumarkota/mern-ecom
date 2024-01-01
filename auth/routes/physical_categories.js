import express from 'express';
import { ObjectId } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../db.js';

const router = express.Router();


router.get('/', (req, res) => {
    let physical_categories = []

    getDb().collection('physical_categories')
        .find()
        .sort({ 'product_name': 1 })
        .forEach(physical_category => physical_categories.push(physical_category))
        .then(() => {
            res.status(200).json(physical_categories)
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    getDb().collection('physical_categories')
        .findOne({ _id: ObjectId(id) })
        .then(physical_category => {
            res.status(200).json(physical_category)
        })
})

export default router;