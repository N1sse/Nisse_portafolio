
document.getElementById("randomCard").addEventListener("click", function () {
    // Lista de htmls
    const secciones = [
      "paginas/marcas/mementoVivere.html",
      "paginas/marcas/skittyBounce.html",
      "paginas/contacto.html",
      "paginas/diseñoWeb.html",
      "paginas/identidadMarca.html",      
      "paginas/info.html",
      "fotos.html"
    ];

    // link al azar
    const destino = secciones[Math.floor(Math.random() * secciones.length)];

    // redirige al html que agarra
    window.location.href = destino;
});
