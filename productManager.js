
// 1 Realizar una clase “ProductManager” que gestione un conjunto de productos.
// 2 Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

class ProductManager {
    constructor(products = []){
    this.products = products;
}

// 3 Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
// 4 Cada producto que gestione debe contar con las propiedades title, description, price, thumbnail, code, stock.

addProduct = (title, description, price, thumbnail, code, stock) => {
const product = {
    title, 
    description, 
    price, 
    thumbnail, 
    code, 
    stock
}

// 5 Validar que no se repita el campo “code” y que todos los campos sean obligatorios.

if (!title || !description || !price || !thumbnail || !code || !stock){
    console.log ("Campo obligatorio!");
    return;
}
if (this.products.find((p) => p.code === product.code)) {
    console.log("El código del producto ya existe.");
    return;
}

// 6 Debe crearse con un id autoincrementable.

if (this.products.length === 0) {
    product.id = 1
} else {
    product.id = this.products [this.products.length - 1 ].id + 1
}

this.products.push(product);
    console.log("Producto agregado con exito!");
}

// 7 Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento.

getProducts = () => {
    return this.products
}

// 8 Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id.

getProductById = (ProductID) => {
const productIndex = this.products.findIndex(product => product.id === ProductID);

// 9 En caso de no coincidir ningún id, mostrar en consola un error “Not found”.

if (productIndex === -1){
    console.log("Not Found");
    return;
}
}
}

const manejadorProductos = new ProductManager ();

manejadorProductos.addProduct ('Regla', 'transparente', 80, 'sin imágen', 'ab155', 36 );
manejadorProductos.addProduct ('Lápiz', 'transparente', 100, 'sin imágen', 'ab154', 30 );
manejadorProductos.addProduct ('Birome', 'transparente', 200, 'sin imágen', 'ab156', 15 );

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);

console.log(manejadorProductos.getProducts());

