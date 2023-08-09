const { ProductManager } = require("./ProductManager");
//creo la instancia de "ProductManager"
const PM = new ProductManager();

//Llamo “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(
  "llamo “getProducts” recién creada la instancia, debe devolver un arreglo vacío []"
);
console.log(PM.getProducts());

//Llamo al método “addProduct” con los campos sugeridos:
console.log("Llamo al método “addProduct” con los campos sugeridos");
const camposTesting = [
  "producto prueba",
  "Este es un producto prueba",
  150,
  "Sin imagen",
  "Tomate",
  25,
];

PM.addProduct(...camposTesting);

//llamo al método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(
  "llamo al método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado"
);
console.log(PM.getProducts());

//llamo al método “addProduct” con los mismos campos de arriba,debe arrojar un error porque el código estará repetido.
console.log(
  "llamo al método “addProduct” con los mismos campos de arriba,debe arrojar un error porque el código estará repetido."
);
PM.addProduct(...camposTesting);

//creo otros productos para llenar el array
console.log("Creo otros productos para rellenar el array")
PM.addProduct("Semillas Cherry", "Agroecologicas, alto % de germinación", 399.99, "fotocherry.jpg", 100);
PM.addProduct("Semillas Morrón", "Agroecologicas, alto % de germinación", 399.99, "fotomorron", 100);
PM.addProduct("Semillas Jalapeño", "Agroecologicas, alto % de germinación", 399.99, "fotojalapa", 100);
PM.addProduct("Semillas Chille de Arbol", "Agroecologicas, alto % de germinación", 399.99, "fotochilearebol", 100);
console.log(PM.getProducts());

//evaluo getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log(
  "Llamo al metodo getProductById y que muestre el procuto id:3"
);
console.log(PM.getProductById(3));

//busco un ID que no existe y devuelve el error 'Not Found'
console.log("Busco un ID que no existe y devuelve  el error 'Not Found'")
console.log(PM.getProductById(100));
