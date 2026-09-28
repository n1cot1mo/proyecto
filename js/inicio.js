const productosBase = [

    {
        id: 1,
        nombre: "Urban Black",
        precio: 129900,
        categoria: "camisas",
        genero: "unisex",
        imagen: "imagenes/blackcamisa.jfif"
    },

    {
        id: 2,
        nombre: "Essential Beige",
        precio: 99900,
        categoria: "vestidos",
        genero: "mujer",
        imagen: "imagenes/vestidobeige.jfif"
    },

    {
        id: 3,
        nombre: "Night Edition",
        precio: 189900,
        categoria: "chaquetas",
        genero: "unisex",
        imagen: "imagenes/chaquetita.jfif"
    },

    {
        id: 4,
        nombre: "Street Denim",
        precio: 159900,
        categoria: "pantalones",
        genero: "hombre",
        imagen: "imagenes/pantsoscuros.jfif"
    }

];


let productos =
    JSON.parse(
        localStorage.getItem("venoraProductos")
    ) || productosBase;


function precio(numero) {

    return "$" +
        Number(numero).toLocaleString("es-CO");

}


function mostrarRopa() {

    const caja =
        document.getElementById("ropa-inicio");

    if (!caja) return;


    const populares =
        productos.slice(0, 4);


    caja.innerHTML =
        populares.map(producto => `

            <article class="prenda">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                >

                <div class="info">

                    <span>
                        ${producto.categoria.toUpperCase()}
                        ·
                        ${producto.genero.toUpperCase()}
                    </span>

                    <h3>
                        ${producto.nombre}
                    </h3>

                    <strong>
                        ${precio(producto.precio)}
                    </strong>

                </div>

            </article>

        `).join("");

}


function actualizarCarrito() {

    const carrito =
        JSON.parse(
            localStorage.getItem("venoraCarrito")
        ) || [];


    const contador =
        document.getElementById("contador");


    if (!contador) return;


    let cantidad = 0;


    carrito.forEach(producto => {

        cantidad += producto.cantidad;

    });


    contador.textContent = cantidad;

}


mostrarRopa();

actualizarCarrito();
