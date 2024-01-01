import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import physicalProductsRoutes from './routes/physical_products.js';
import digitalProductsRoutes from './routes/digital_products.js';
import physicalCategoriesRoutes from './routes/physical_categories.js';
import physicalSubcategoriesRoutes from './routes/physical_subcategories.js';
import digitalCategoriesRoutes from './routes/digital_categories.js'
import digitalSubcategoriesRoutes from './routes/digital_subcategories.js'
import { connectToDb, getDb } from './db.js'
import cors from 'cors'

// init app
const app = express();
const PORT = 5000;

// db connection
let db
connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`Server running on Port: http://localhost:${PORT}`)
        });
        db = getDb()
    }
})

app.use(bodyParser.json());

app.use(cors());

// routes
app.use('/users', usersRoutes)
app.use('/physical_products', physicalProductsRoutes)
app.use('/physical_categories', physicalCategoriesRoutes)
app.use('/physical_subcategories', physicalSubcategoriesRoutes)
app.use('/digital_categories', digitalCategoriesRoutes)
app.use('/digital_subcategories', digitalSubcategoriesRoutes)
app.use('/digital_products', digitalProductsRoutes)

app.get('/', (req, res) => res.send('Hello there'));