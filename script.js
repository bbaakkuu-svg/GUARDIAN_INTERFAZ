// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // PARTE 1: Estructura y Generación Dinámica del DOM (Criterio d)
    // =========================================================================
    const usuarioRegistrado = localStorage.getItem('usuarioRegistrado') || localStorage.getItem('usuario');

    if (usuarioRegistrado) {
        const contenedor = document.getElementById('contenedor-bienvenida');

        if (contenedor) {
            // 1. Crear dinámicamente el elemento de encabezado (H2)
            const encabezado = document.createElement('h2');
            const textoEncabezado = document.createTextNode('¡Bienvenido de nuevo!');
            encabezado.appendChild(textoEncabezado);

            // 2. Crear dinámicamente el elemento de párrafo (P)
            const parrafo = document.createElement('p');
            const textoParrafo = document.createTextNode('Nos alegramos de que sigas con nosotros.');
            parrafo.appendChild(textoParrafo);

            // 3. Inyectar los nuevos elementos dentro del contenedor usando appendChild()
            contenedor.appendChild(encabezado);
            contenedor.appendChild(parrafo);
        }
    }

    // =========================================================================
    // PARTE 2: Formulario y Modificación del Aspecto (Criterio c)
    // =========================================================================
    const selectorColor = document.getElementById('selector-color');
    const selectorTema = document.getElementById('selector-tema');

    //Cambio del selector de color  aplicando document.body.style.backgroundColor
    if (selectorColor) {
        selectorColor.addEventListener('input', (evento) => {
            document.body.style.backgroundColor = evento.target.value;
        });
    }

    //Cambio del menú desplegable modificando clases con element.classList.add()
    if (selectorTema) {
        selectorTema.addEventListener('change', (evento) => {
            const temaSeleccionado = evento.target.value;

            // Se limpia el estilo en línea para que las propiedades de la clase CSS tomen efecto
            document.body.style.backgroundColor = '';

            if (temaSeleccionado === 'oscuro') {
                document.body.classList.add('tema-oscuro');
                document.body.classList.remove('tema-claro');
            } else {
                document.body.classList.add('tema-claro');
                document.body.classList.remove('tema-oscuro');
            }
        });
    }
});