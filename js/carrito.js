let carrito = JSON.parse(
    localStorage.getItem("venoraCarrito")
) || [];

function guardarCarrito() {
    localStorage.setItem(
        "venoraCarrito",
        JSON.stringify(carrito)
    );
}

function actualizarContador() {

    const contador =
        document.getElementById("contador");

    if (!contador) return;

    let cantidad = 0;

    carrito.forEach(producto => {
        cantidad += producto.cantidad;
    });

    contador.textContent = cantidad;
}

function agregarCarrito(producto) {

    const encontrado = carrito.find(
        item => item.nombre === producto.nombre
    );

    if (encontrado) {
        encontrado.cantidad++;
    } else {
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    guardarCarrito();
    actualizarContador();

    if (typeof mostrarCarrito === "function") {
        mostrarCarrito();
    }
}

function eliminarCarrito(nombre) {

    carrito = carrito.filter(
        producto => producto.nombre !== nombre
    );

    guardarCarrito();
    actualizarContador();

    if (typeof mostrarCarrito === "function") {
        mostrarCarrito();
    }
}

actualizarContador();
