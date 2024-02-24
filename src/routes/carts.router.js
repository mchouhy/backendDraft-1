// Importación del Router de Express JS.
import { Router } from "express"
// Creación del Router de Carts.
const cartsRouter = Router()

//Array para almacenar usuarios
//const users = [];

// Rutas de carts:
cartsRouter.get("/", async (request, response) => {
      try {
          //const carts = await cartsManager.getProducts()
          //return response.json(products);
      } catch (error) {
          //console.log('Error al obtener los productos:', error);
          //response.status(500).json({ error: 'Error al obtener los productos' });
      }
  })
 
//router.post("/", (req, res) => {
//    const nuevoUsuario = req.body;
//    users.push(nuevoUsuario);
//   res.send({status:"success", message: "Usuario creado correctamente!"});
//})
export { cartsRouter }
