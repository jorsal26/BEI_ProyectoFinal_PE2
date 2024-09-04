import { Console } from 'console'
import fs from 'fs/promises'
import path, { parse } from 'path'

const carritosFilePath = path.resolve('data', 'carrito.json')

export default class CartManager {
    constructor() {
        this.carts = []
        this.init()
    }

    async init() {
        try {
            const data = await fs.readFile(carritosFilePath, 'utf-8')
            this.carts = JSON.parse(data)
        } catch (error) {
            this.carts = []
        }
    }

    // Metodos
    saveToFile() {
        fs.writeFile(carritosFilePath, JSON.stringify(this.carts, null, 2));
    }

    getAllCarts(limit) {
        if (limit) {
            return this.carts.slice(0, limit)
        }
        return this.carts
    }

    getCartById(id) {
        return this.carts.find(cart => cart.id === id)
    }

    addCart(cart) {
        const newCart = {
        id: this.carts.length ? this.carts[this.carts.length - 1].id + 1 : 1,
        fecha: Date.now(),
        ...cart,
        status: true
        };
        this.carts.push(newCart)
        this.saveToFile()
        return newCart;
    }
    async addProductToCartByCid(cid, pid) {
        try {
            const cartIndex = this.carts.findIndex(cart => cart.id === cid)
            if (cartIndex === -1) return null;

            if (cartIndex) {
                // Agrega el nuevo registro al array 'products' del carrito
                // Crear el nuevo objeto
                const newProduct = {
                    id: pid,
                    quantity: 1
                    };
                if (Array.isArray(this.carts[cartIndex].products)) {
                    this.carts[cartIndex].products.push(newProduct)
                    this.saveToFile()
                } else {
                    console.log('El campo "Products" no es un array.');
                }
            
            } else {
            console.log(`ID ${cid} no existe el carrito`);
            return false;
            }
        } catch (error) {
            `Error Code: ${error.code} | Error al intentar actualizar un elemento por su ID (${cid}).`
        }
    }

    deleteCart(id) {
        const cartIndex = this.carts.findIndex(cart => cart.id === id)
        if (cartIndex === -1) return null;

        const deletedCart = this.carts.splice(cartIndex, 1);
        this.saveToFile()
        return deletedCart[0];
    }
}

