import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Producto } from 'src/interfaces/producto.interface';
import { ProductoService } from './producto.service';
import { CreateProductoDTO } from 'src/dto/create-producto';

@Controller('producto')
export class ProductoController {
    constructor(private readonly _productoService: ProductoService) {}

    @Post('agregarProducto')
    async create(@Body() createProductoDTO: CreateProductoDTO) {
        this._productoService.guardarProducto(createProductoDTO);
    }

    @Get()
    async findAll(): Promise<Producto[]> {
        return this._productoService.obtenerProductos();
    }

    @Delete('borrarProducto/:title')
    async delete(@Param('title') title) {
        this._productoService.borrarProducto(title);
    }
}
