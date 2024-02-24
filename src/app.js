// Importación de express JS.
import express from 'express'
// Creación de la app de express JS.
const app = express()
// Variable que aloja el número de puerto del servidor.
const PORT = 8080
// Importación de los Routers.
import { productsRouter } from './routes/products.router.js'
import { cartsRouter } from './routes/carts.router.js'

// Función que permite comunicarnos con el servidor en formato JSON.
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Función que retorna la ruta raíz del servidor.
app.get("/", (request, response) => {
      response.send("Hola, te conectaste a la ruta raíz del servidor.")
})

// Endpoints de las rutas de products y carts:
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

// Función que escucha los cambios del servidor en el puerto 8080.
app.listen(PORT, () => {
      console.log(`Escuchando cualquier cambio en el puerto: ${PORT}`)
})

