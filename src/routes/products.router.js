// Importación del Router de Express JS.
import { Router } from "express"
// Importación del manejador de archivos.
import { ProductManager } from '../controllers/productManager.js'
// Creación del Router de Products.
const productsRouter = Router()
const productManager = new ProductManager('../../src/models/productsDB.json')

// Rutas de productos:
productsRouter.get("/", async (request, response) => {
    try {
        const products = await productManager.getProducts()
        return response.json(products)
    } catch (error) {
        console.log('Error al obtener los productos:', error);
        response.status(500).json({ error: 'Error al obtener los productos' });
    }
})

export { productsRouter }