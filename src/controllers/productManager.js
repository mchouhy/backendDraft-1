// Importación del módulo nativo de Node: "FileSystem", específicamente el de promesas, asignado a la variable "fs".
import { promises as fs } from "fs"

//Función de clase constructora que recibe la ruta a trabajar desde el momento de generar la instancia.
export class ProductManager {

      constructor(path) {
            this.path = path
      }

      // Función que lee el archivo json en el cual se guardan los objetos de productos, ejecuta el "parse" para transformar el JSON a objeto y devuelve el array de objetos de productos contenidos el archivo JSON.
      getProducts = async () => {
            try {
                  const productsDB = await this.readDB()
                  return productsDB
            } catch (error) {
                  console.log("Error al consultar el stock de la base de datos.")
            }
      }
      
      readDB = async () => {
            try {
                  const response = await fs.readFile(this.path, "utf-8")
                  const productsDBContent = JSON.parse(response)
                  return productsDBContent

            } catch (error) {
                  console.log('Error al leer la base de datos', error)
                  throw error
            }

      }
}
