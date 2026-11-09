# Documentación del Proyecto: Guardian Interfaz

> **Módulo:** Desarrollo Web en Entorno Cliente / Entornos de Desarrollo  
> **Curso:** 1º DAW (Desarrollo de Aplicaciones Web)  
> **Proyecto:** Personalización y Persistencia de la Interfaz mediante DOM y Cookies  

---

## 1. Descripción General del Proyecto

**Guardian Interfaz** es una aplicación web interactiva que permite a los usuarios personalizar en tiempo real el aspecto visual de la página (color de fondo y tema claro/oscuro) y persistir estas preferencias entre sesiones mediante el uso de cookies. Asimismo, genera bloques de contenido dinámico en el DOM si el usuario ya ha interactuado previamente con el sistema.

---

## 2. Estructura del Proyecto

```plaintext
GUARDIAN_INTERFAZ/
├── docs/
│   └── DOCUMENTACION.md          # Documento técnico del proyecto
├── index.html                    # Estructura principal y formulario
├── README.md                     # Información introductoria del repositorio
├── script.js                     # Lógica JavaScript (DOM, eventos y cookies)
└── style.css                     # Estilos visuales y clases de temas
```

---

## 3. Criterios Técnicos y Partes Desarrolladas

### Parte 1: Generación Dinámica del DOM (Criterio d)
* **Objetivo:** Inyectar contenido en un contenedor vacío con `id="contenedor-bienvenida"` sin utilizar `document.write()`.
* **Métodos DOM utilizados:**
  * `document.createElement("h2")` y `document.createElement("p")`: Creación de los nodos de elementos.
  * `document.createTextNode(...)`: Creación de los nodos de texto.
  * `appendChild(...)`: Inserción de los nodos dentro del contenedor.
* **Comportamiento:** Si existe una cookie con el nombre del usuario registrado, se genera automáticamente un encabezado `<h2>` y un párrafo `<p>` con un mensaje personalizado.

### Parte 2: Formulario y Modificación del Aspecto (Criterio c)
* **Objetivo:** Manipular el diseño visual de forma inmediata mediante eventos.
* **Controles del formulario:**
  1. `input[type="text"]` (`#nombre-usuario`): Nombre del usuario.
  2. `input[type="color"]` (`#color-fondo`): Selector de color de fondo.
  3. `select` (`#tema-visual`): Menú desplegable para modo claro u oscuro.
* **Eventos implementados:**
  * **Evento `input`:** Modifica el fondo en tiempo real mediante `document.body.style.backgroundColor`.
  * **Evento `change`:** Altera las clases CSS del `<body>` utilizando `classList.add()` y `classList.remove()`. No se aplican estilos en línea para los temas, respetando las clases predefinidas `.tema-claro` y `.tema-oscuro` de `style.css`.

### Parte 3: Almacenamiento y Recuperación en Cookies
* **Objetivo:** Guardar y restaurar las preferencias del usuario.
* **Evento:** `submit` del formulario, interceptado con `evento.preventDefault()`.
* **Política de cookies:**
  1. `nombre_usuario`: Caducidad calculada a **7 días** en el futuro con el objeto `Date` (`fecha.setDate(fecha.getDate() + 7)`).
  2. `color_fondo`: Caducidad calculada a **7 días** con el objeto `Date`.
  3. `tema_visual`: **Cookie de sesión** (se guarda sin atributos `Expires` ni `Max-Age`, expirando al cerrar el navegador).
* **Recuperación al recargar:** En el evento `DOMContentLoaded`, el script comprueba si existen cookies almacenadas; si es así, rellena los campos del formulario, aplica el color de fondo y activa las clases de tema.

### Parte 4: Restablecer Interfaz
* **Objetivo:** Devolver la aplicación a su estado inicial y limpiar el almacenamiento.
* **Evento:** `click` en el botón secundario `#btn-restablecer`.
* **Acciones realizadas:**
  1. **Eliminación de cookies:** Se establece la fecha de caducidad en el pasado (`Thu, 01 Jan 1970 00:00:00 GMT`).
  2. **Restablecimiento visual:** Se vacía `document.body.style.backgroundColor = ""` y se eliminan las clases CSS del body (`classList.remove("tema-oscuro", "tema-claro")`).
  3. **Limpieza del formulario:** Se reasignan los valores iniciales a los inputs.
  4. **Eliminación en el DOM:** Se retiran el encabezado `<h2>` y el párrafo `<p>` del saludo mediante el método `contenedorBienvenida.removeChild()`.

---

## 4. Referencia de Funciones (`script.js`)

### `crearCookie(nombre, valor, dias)`
* **Descripción:** Almacena una cookie en el navegador.
* **Parámetros:**
  * `{string} nombre` - Clave identificadora de la cookie.
  * `{string} valor` - Contenido o valor a almacenar.
  * `{number|null} dias` - Días de validez. Si es `null` o no se pasa, se almacena como cookie de sesión.

### `leerCookie(nombre)`
* **Descripción:** Recorre `document.cookie`, separa los pares clave-valor y obtiene el valor de la cookie indicada.
* **Parámetros:**
  * `{string} nombre` - Nombre de la cookie a buscar.
* **Retorno:**
  * `{string|null}` - Valor de la cookie decodificado o `null` si no existe.

### `borrarCookie(nombre)`
* **Descripción:** Elimina una cookie del navegador asignando su fecha de expiración al 1 de enero de 1970 (Época Unix).
* **Parámetros:**
  * `{string} nombre` - Nombre de la cookie a eliminar.

---

## 5. Despliegue en GitHub Pages

La aplicación está desplegada en **GitHub Pages** a través de la configuración nativa del repositorio:
* **Origen de despliegue:** Rama `main` desde la raíz (`/root`).
* **URL pública:** `https://bbaakkuu-svg.github.io/GUARDIAN_INTERFAZ/`
