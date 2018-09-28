productos = [];
ventas = [];

var agregarProducto = function(codigo, descripcion, tipo, precioCompra, precioVenta, stock){
    producto = {};

    producto.codigo = codigo;
    producto.descrpcion = descripcion;
    producto.tipo = tipo;
    producto.precioCompra = precioCompra;
    producto.precioVenta = precioVenta;
    producto.stock = stock;
}

var modificarStock = function(idProducto, nuevoStock){
    productos.forEach((element,index) => {
        if(element.codigo===idProducto){
            producto[index].stock=nuevoStock;
            return "modificacion hecha";
        }
    });
    return "no existe el producto";     
}

var registrarVenta = function(idProducto,cantidad){
    productos.forEach((element,index) => {
        if(element.codigo===idProducto){
            if((element.stock-idProducto)<0){
                return "no se puede hacer";
            }else{
                productos[index].stock -= cantidad;
            }
        }
    });

    return "correctamente";
}