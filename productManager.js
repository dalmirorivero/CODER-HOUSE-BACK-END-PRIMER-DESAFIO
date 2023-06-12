
// PUNTO 1

class ProductManager {
    constructor(products = []){
    this.products = products;
}

// PUNTO 2

addProduct = (title, description, price, thumbnail, code, stock) => {
const product = {
    title, 
    description, 
    price, 
    thumbnail, 
    code, 
    stock
}

if (!title || !description || !price || !thumbnail || !code || !stock){
    console.log ("Campo obligatorio!");
    return;
}
if (this.products.find((p) => p.code === product.code)) {
    console.log("El código del producto ya existe.");
    return;
}

if (this.products.length === 0) {
    product.id = 1
} else {
    product.id = this.products [this.products.length - 1 ].id + 1
}

this.products.push(product);
    console.log("Producto agregado con exito!");
}

// PUNTO 3

getProducts = () => {
    return this.products
}

// PUNTO 4

getProductById = (ProductID) => {
const productIndex = this.products.find(product => product.id === ProductID);

if (!productIndex){
    console.log("Not Found");
    return;
}
return productIndex;
}
}

const manejadorProductos = new ProductManager ();

manejadorProductos.addProduct ('Regla', 'transparente', 80, 'sin imágen', 'ab154', 36 );
manejadorProductos.addProduct ('Lápiz', 'transparente', 100, 'sin imágen', 'ab155', 30 );
manejadorProductos.addProduct ('Birome', 'transparente', 200, 'sin imágen', 'ab156', 15 );

console.log(manejadorProductos.getProducts());
console.log(manejadorProductos.getProductById(4));



