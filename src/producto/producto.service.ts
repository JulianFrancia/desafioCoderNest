import { Injectable } from '@nestjs/common';
import { Producto } from '../interfaces/producto.interface';

@Injectable()
export class ProductoService {
    private readonly productos: Array<Producto> = [];

    guardarProducto(producto) {
        this.productos.push(producto);
    }

    obtenerProductos() {
        return this.productos;
    }

    borrarProducto(title) {
        const pos = this.productos.map(producto => producto.title).indexOf(title)
        this.productos.splice(pos,1);
    }
}
