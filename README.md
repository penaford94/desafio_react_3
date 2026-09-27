# Pizzería Mamma Mía - Hito 2

Aplicación desarrollada con React, Vite y Bootstrap para el **Hito 2 de Pizzería Mamma Mía**. En este proyecto implementé los formularios de registro e inicio de sesión utilizando estados, eventos y validaciones.

Esta versión corresponde a una mejora de mi implementación inicial. Después de revisar el funcionamiento comprendí que, aunque era posible validar los inputs directamente con botones y eventos `onClick`, semánticamente era más correcto utilizar formularios HTML reales con `<form>`, `onSubmit` y botones de tipo `submit`.

## Objetivo del proyecto

El objetivo del hito fue implementar:

- Un formulario de registro con email, contraseña y confirmación de contraseña.
- Un formulario de inicio de sesión con email y contraseña.
- Validaciones mediante JavaScript y estados de React.
- Mensajes de error y éxito según el resultado de cada validación.
- Una presentación visual coherente con la estética del Hito 1.

## Tecnologías utilizadas

- React
- Vite
- JavaScript ES6+
- Bootstrap 5
- CSS3

## Instalación y ejecución

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
cd desafio_react_2
```

Instalar dependencias:

```bash
npm install
```

Iniciar el proyecto:

```bash
npm run dev
```

Comprobar la calidad y compilación:

```bash
npm run lint
npm run build
```

## Estructura principal

```text
src/
|-- assets/
|   `-- Header.jpg
|-- components/
|   |-- CardPizza.jsx
|   |-- Footer.jsx
|   |-- Header.jsx
|   |-- Home.jsx
|   |-- Login.jsx
|   |-- Navbar.jsx
|   `-- Register.jsx
|-- utils/
|   `-- formatCurrency.js
|-- App.jsx
|-- index.css
`-- main.jsx
```

## Funcionalidades implementadas

### Registro

El componente `Register.jsx` permite ingresar:

- Email.
- Contraseña.
- Confirmación de contraseña.

Sus validaciones comprueban que:

- Todos los campos tengan información.
- El email no contenga únicamente espacios.
- La contraseña tenga al menos seis caracteres.
- Ambas contraseñas sean iguales.

### Inicio de sesión

El componente `Login.jsx` permite ingresar:

- Email.
- Contraseña.

Sus validaciones comprueban que:

- Ambos campos sean obligatorios.
- La contraseña tenga al menos seis caracteres.

## Mejora semántica de los formularios

En mi primera versión agrupé visualmente los inputs y ejecuté las validaciones con `onClick`. Luego entendí que un conjunto de campos destinado a enviar información debe representarse mediante la etiqueta semántica `<form>`.

La estructura corregida utiliza:

```jsx
<form onSubmit={handleSubmit}>
  {/* Campos del formulario */}

  <button type="submit">
    Enviar
  </button>
</form>
```

Esta opción es mejor porque:

- Describe correctamente el propósito del contenido.
- Permite enviar el formulario presionando Enter.
- Facilita la navegación con teclado y el uso de tecnologías de asistencia.
- Centraliza el envío y la validación en un único evento `onSubmit`.
- Evita depender exclusivamente del clic sobre un botón.

Dentro de `handleSubmit` utilizo:

```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  // Validaciones
};
```

`event.preventDefault()` evita que el navegador recargue la página al enviar el formulario. De esta manera React conserva el control de la interfaz y de sus estados.

## Estados e inputs controlados

Cada campo recibe su valor desde un estado y lo actualiza mediante `onChange`:

```jsx
const [email, setEmail] = useState("");

<input
  type="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>
```

Elegí mantener los inputs controlados porque el estado de React se convierte en la fuente de verdad. Esto facilita validar, limpiar y utilizar posteriormente los datos.

## Corrección de operadores lógicos

En la primera versión utilicé el operador binario `&` para unir condiciones. Aunque podía producir un resultado verdadero o falso al convertir los valores en `1` y `0`, comprendí que el operador apropiado para condiciones booleanas es `&&`:

```jsx
if (
  email.length > 0 &&
  password.length > 0 &&
  passwordConfirmation.length > 0
) {
  // Datos completos
}
```

`&&` expresa correctamente una operación lógica y detiene la evaluación cuando encuentra una condición falsa.

## Tipo correcto de los campos

También corregí el tipo de cada input:

```jsx
<input type="email" />
<input type="password" />
```

`type="email"` comunica al navegador el tipo de información esperada, mientras que `type="password"` oculta visualmente los caracteres ingresados.

Además, cada campo tiene un `label` asociado mediante `htmlFor` e `id`:

```jsx
<label htmlFor="login-email">Email</label>
<input id="login-email" type="email" />
```

Esta asociación mejora la accesibilidad y permite enfocar el input al seleccionar su etiqueta.

## Mensajes administrados con estado

En lugar de depender únicamente de `alert()`, guardé el resultado de la validación en un estado:

```jsx
const [feedback, setFeedback] = useState(null);
```

Según el resultado, actualizo el mensaje:

```jsx
setFeedback({
  type: "success",
  message: "¡Inicio de sesión exitoso!",
});
```

Después lo muestro utilizando las alertas de Bootstrap:

```jsx
{feedback && (
  <div
    className={`alert alert-${feedback.type}`}
    role="alert"
  >
    {feedback.message}
  </div>
)}
```

Con esta solución el mensaje forma parte de la interfaz, no bloquea el navegador y puede adoptar estilos diferentes para éxito y error.

## Estilos con Bootstrap y CSS

Bootstrap se instala con:

```bash
npm install bootstrap
```

Y se importa globalmente desde `main.jsx`:

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
```

Utilicé clases de Bootstrap como:

- `card`, `card-body` y `shadow-lg` para el contenedor del formulario.
- `form-label` y `form-control` para etiquetas e inputs.
- `btn` y `w-100` para el botón principal.
- `alert-success` y `alert-danger` para los mensajes.
- `p-4`, `mb-3` y `mt-4` para manejar el espaciado.

También incorporé CSS personalizado para conservar la identidad del Hito 1:

- Navbar y Footer oscuros.
- Imagen de pizzas como fondo.
- Capa oscura para mantener el contraste.
- Tarjeta blanca centrada.
- Botones rojos asociados a la identidad de la pizzería.
- Diseño responsivo para pantallas pequeñas.

## Visualización de cada componente

Durante la evaluación muestro un formulario a la vez desde `App.jsx`. Por ejemplo, para probar Login:

```jsx
<div className="app">
  <Navbar />

  <main className="auth-main">
    <Login />
  </main>

  <Footer />
</div>
```

Para probar Register reemplazo `<Login />` por `<Register />`. Esto mantiene la pantalla ordenada y permite comparar cada formulario con el diseño solicitado.

## Casos de prueba

### Registro

| Entrada | Resultado esperado |
| --- | --- |
| Campos vacíos | Mensaje de campos obligatorios |
| Contraseña menor a 6 caracteres | Mensaje de longitud mínima |
| Contraseñas diferentes | Mensaje indicando que no coinciden |
| Datos válidos | Registro exitoso y limpieza de campos |

### Login

| Entrada | Resultado esperado |
| --- | --- |
| Campos vacíos | Mensaje de campos obligatorios |
| Contraseña menor a 6 caracteres | Mensaje de longitud mínima |
| Datos válidos | Inicio de sesión exitoso y limpieza de campos |

## Principales aprendizajes

Al comparar ambas versiones comprendí que una aplicación no solo debe funcionar visualmente. También debe utilizar una estructura que comunique correctamente la función de cada elemento.

Las mejoras más importantes fueron:

- Utilizar `<form>` y `onSubmit` para representar un formulario real.
- Usar `event.preventDefault()` para evitar recargar la aplicación.
- Reemplazar `&` por el operador lógico `&&`.
- Usar inputs controlados por React.
- Asociar correctamente los `label` con sus inputs.
- Utilizar `type="password"` para proteger visualmente las contraseñas.
- Mostrar feedback dentro de la interfaz mediante estados y Bootstrap.
- Separar cada vista para conservar una presentación clara.

## Autor

Proyecto desarrollado y mejorado por **penaford94** como parte del desafío **Pizzería Mamma Mía - Hito 2**.
