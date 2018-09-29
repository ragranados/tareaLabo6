productos = [];
ventas = [];
numProd = 0;

var agregarProducto = function (descripcion, tipo, precioCompra, precioVenta, stock) {
    numProd = numProd + 1;
    var producto = {};

    producto.codigo = numProd;
    producto.descripcion = descripcion;
    producto.tipo = tipo;
    producto.precioCompra = precioCompra;
    producto.precioVenta = precioVenta;
    producto.stock = stock;

    productos.push(producto);
}

var modificarStock = function (idProducto, nuevoStock) {
    productos.forEach((element, index) => {
        if (element.codigo == idProducto) {
            productos[index].stock = nuevoStock;
            return 1;
        }
    });
    return 0;
}

var crearVenta = function (codigo, cantidad, precio) {
    var venta = {};

    venta.codigo = codigo;
    venta.total = cantidad * precio;
    ventas.push(venta);
}

var registrarVenta = function (idProducto, cantidad) {
    productos.forEach((element, index) => {
        if (element.codigo == idProducto) {
            if ((element.stock - cantidad) < 0) {
                console.log("no hay suficiente producto");
                return 1;
            } else {
                productos[index].stock -= cantidad;
                crearVenta(element.codigo, cantidad, element.precioVenta);
                return 1;
            }
        }
    });
    return 0;
}

var promedioVentas = function () {
    let suma = 0;

    for (let e of ventas) {
        suma += e.total;
    }

    return (suma / ventas.length);
}

var productosAgotados = function () {
    aux = "";
    productos.forEach((element, index) => {
        if (element.stock == 0) {
            aux = aux + element.descripcion + " | ";
        }
    });

    console.log(aux);
    return aux;
}

var menu = function () {
    var adentro = true;
    var op;

    while (adentro) {
        op = parseInt(prompt("1. Agregar Producto\n2. Modificar Stock\n3. Registrar Venta\n4. Mostrar promedio\n5. Agotados\n6. Salir"));
        if (op == 1) {
            let descripcion = prompt("Descripcion: ");
            let tipo = prompt("Tipo: ");
            let precioCompra = parseInt(prompt("Ingrese precio de compra: "));
            let precioVenta = parseInt(prompt("Ingrese precio de venta: "));
            let stock = parseInt(prompt("Ingrese stock: "));

            agregarProducto(descripcion, tipo, precioCompra, precioVenta, stock);

        } else if (op == 2) {
            var prods = "";
            for (let prod of productos) {
                prods += prod.codigo + ". " + prod.descripcion + "\n";
            }

            let codigo = prompt(prods + "ingrese codigo: ");
            let nuevoS = prompt("Ingrese nuevo stock: ");

            modificarStock(codigo, nuevoS);
        } else if (op == 3) {
            var prods = "";
            for (let prod of productos) {
                prods += prod.codigo + ". " + prod.descripcion + "\n";
            }

            let codigo = prompt(prods + "ingrese codigo: ");
            let cantidad = prompt("Ingrese cantidad vendida: ");

            registrarVenta(codigo, cantidad);
        } else if (op == 4) {
            promedioVentas();
        } else if (op == 5) {
            productosAgotados();
        } else if (op == 6) {
            adentro = false;
        }
    }
}