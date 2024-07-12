const negocios = [
    { nombre: 'Tienda 1', descripcion: 'Descripción de la Tienda 1' },
    { nombre: 'Tienda 2', descripcion: 'Descripción de la Tienda 2' },
    // Más negocios...
];

const contenedorNegocios = document.getElementById('negocios');

negocios.forEach(negocio => {
    const div = document.createElement('div');
    div.classList.add('negocio');
    div.innerHTML = `<h2>${negocio.nombre}</h2><p>${negocio.descripcion}</p>`;
    contenedorNegocios.appendChild(div);
});
