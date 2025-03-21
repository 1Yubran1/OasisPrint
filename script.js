function agregarComentario() {
    let input = document.getElementById("comentarioInput");
    let lista = document.getElementById("comentariosLista");

    if (input.value.trim() !== "") {
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = input.value;
        lista.appendChild(nuevoComentario);
        input.value = "";
    } else {
        alert("Por favor, escribe un comentario.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const catalogo = document.getElementById("catalogo");
    const modalTitulo = document.getElementById("productoModalLabel");
    const modalImagenPrincipal = document.getElementById("modalImagenPrincipal");
    const modalImagenesSecundarias = document.getElementById("modalImagenesSecundarias");
    const modalDescripcion = document.getElementById("modalDescripcion");
    const modalTallas = document.getElementById("modalTallas");
    const modalPrecio = document.getElementById("modalPrecio");

    const productos = [
        { 
            titulo: "Camisa Negra", 
            talla: "S, M, L, XL", 
            precio: "$15", 
            imagen: "img/logo.jpg", 
            descripcion: "Camisa de algodón 100% negra, ideal para cualquier ocasión.",
            imagenes: ["img/logo.jpg", "img/logo.jpg", "img/logo.jpg"]
        },
        { 
            titulo: "Camisa Blanca", 
            talla: "S, M, L", 
            precio: "$14", 
            imagen: "img/logo.jpg", 
            descripcion: "Clásica camisa blanca de alta calidad, cómoda y fresca.",
            imagenes: ["img/logo.jpg", "img/logo.jpg"]
        },
        { 
            titulo: "Camisa Roja", 
            talla: "M, L, XL", 
            precio: "$16", 
            imagen: "img/logo.jpg", 
            descripcion: "Camisa roja vibrante con tela transpirable.",
            imagenes: ["img/logo.jpg", "img/logo.jpg"]
        }
    ];

    productos.forEach((producto, index) => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.titulo}</h5>
                        <p class="card-text"><strong>Tallas:</strong> ${producto.talla}</p>
                        <p class="card-text"><strong>Precio:</strong> ${producto.precio}</p>
                        <button class="btn btn-primary" onclick="abrirModal(${index})" data-bs-toggle="modal" data-bs-target="#productoModal">Ver más</button>
                    </div>
                </div>
            </div>
        `;
        catalogo.innerHTML += card;
    });

    window.abrirModal = function(index) {
        const producto = productos[index];
        modalTitulo.textContent = producto.titulo;
        modalImagenPrincipal.src = producto.imagen;
        modalDescripcion.textContent = producto.descripcion;
        modalTallas.textContent = producto.talla;
        modalPrecio.textContent = producto.precio;

        modalImagenesSecundarias.innerHTML = "";
        producto.imagenes.forEach(img => {
            const imgElement = document.createElement("img");
            imgElement.src = img;
            imgElement.alt = producto.titulo;
            imgElement.onclick = () => { modalImagenPrincipal.src = img };
            modalImagenesSecundarias.appendChild(imgElement);
        });
    }
});
