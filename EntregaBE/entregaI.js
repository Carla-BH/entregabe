// Importamos el módulo fs
const fs = require('fs')

// Definimos la clase Product
class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title
    this.description = description
    this.price = price
    this.thumbnail = thumbnail
    this.code = code;
    this.stock = stock
  }
}

// Definimos la clase ProductManager
class ProductManager {
  constructor(fileName) {
    this.fileName = fileName
    this.products = []
    this.id = 1
    this.loadProducts()
  }

  addProduct(product) {
    // Validamos que el producto tenga todos los campos obligatorios
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      throw new Error('All fields are required')
    }

    // Validamos que no haya otro producto con el mismo código
    if (this.products.some((p) => p.code === product.code)) {
      throw new Error('Code already exists')
    }

    // Asignamos el id al producto y lo incrementamos
    product.id = this.id
    this.id++

    // Agregamos el producto al arreglo
    this.products.push(product)

    // Guardamos los productos en el archivo
    this.saveProducts()
  }

  getProducts() {
    return this.products
  }

  getProductById(id) {
    // Buscamos el producto por id
    const product = this.products.find((p) => p.id === id)

    // Si lo encontramos, lo devolvemos
    if (product) {
      return product
    }

    // Si no lo encontramos, mostramos un error
    console.error('Not found')
  }

  loadProducts() {
    // Leemos el archivo de forma sincrónica
    try {
      const data = fs.readFileSync(this.fileName, 'utf-8')

      // Si el archivo tiene contenido, lo parseamos como JSON
      if (data) {
        const products = JSON.parse(data);

        // Recorremos el arreglo de productos con un bucle for-of
        for (const product of products) {
          // Creamos un objeto de la clase Product por cada elemento
          const newProduct = new Product(
            product.title,
            product.description,
            product.price,
            product.thumbnail,
            product.code,
            product.stock
          );

          // Le asignamos el id que tenía en el archivo
          newProduct.id = product.id

          // Agregamos el producto al arreglo
          this.products.push(newProduct)

          // Actualizamos el valor del id con el mayor id encontrado más 1
          if (product.id >= this.id) {
            this.id = product.id + 1
          }
        }
      }
    } catch (error) {
      // Si el archivo no existe, lo creamos vacío
      fs.writeFileSync(this.fileName, '')
    }
  }

  saveProducts() {
    // Convertimos el arreglo de productos en una cadena JSON
    const data = JSON.stringify(this.products, null, 2)

    // Escribimos la cadena en el archivo de forma sincrónica
    fs.writeFileSync(this.fileName, data)
  }
}

// Exportamos las clases para poder usarlas desde otro archivo
module.exports = { Product, ProductManager }
