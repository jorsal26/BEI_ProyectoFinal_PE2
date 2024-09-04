class ProductManager {
    
    constructor() {
      this.products = [];
    };

    getProducts(){
        return this.products;
    };

    addProduct(title, description, thumbnail, stock, price) {

        const productToAdd = {
        id: this.products.length + 1,
        title: title,
        description: description,
        thumbnail: thumbnail,
        stock: stock,
        price: price
        };

        this.products.push(productToAdd);
    };
  
    deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === id);
  
        if (index !== -1) {
            this.products.splice(index, 1)
        } else if (index === -1) {
            return `Error: No se ha encontrado el producto con el id ${id}`;
        };
    };
};
  
const productManager = new ProductManager();


productManager.addProduct("Producto de Prueba 1", "Esta es una descripción de un producto de prueba 1", "https://i.imgur.com/z5EWMUR.png", 25, 1200);
productManager.addProduct("Producto de Prueba 2", "Esta es una descripción de un producto de prueba 2", "https://i.imgur.com/z5EWMUR.png", 10, 200);

// module.exports = productManager;
export default productManager