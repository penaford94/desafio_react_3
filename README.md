# Pizzería Mamma Mía — Hito 3

Aplicación desarrollada con **React, Vite y Bootstrap** para el Hito 3 del desafío Pizzería Mamma Mía. Esta entrega amplía el trabajo del Hito 2 con renderización dinámica de pizzas y un carrito de compras simulado.

## Cambios respecto del Hito 2

| Área | Hito 2 | Hito 3 |
| --- | --- | --- |
| Vista principal | Formularios de registro e inicio de sesión para su evaluación. | `App.jsx` muestra `Cart` entre `Navbar` y `Footer`; `Home`, `Login` y `Register` permanecen en el proyecto, comentados en `App.jsx`. |
| Datos | Componentes de interfaz y formularios con estado. | `src/utils/pizza.js` contiene `pizzas` (catálogo) y `pizzaCart` (carrito inicial). |
| Catálogo | Tarjetas de pizza. | `Home.jsx` recorre `pizzas` y crea una `CardPizza` por producto; `CardPizza.jsx` muestra los datos recibidos por props y recorre los ingredientes en elementos `<li>`. |
| Carrito | No era la vista de evaluación. | `Cart.jsx` muestra productos, permite modificar cantidades, elimina los que llegan a cero y calcula el total. |
| Estilos | Bootstrap y CSS global. | Se añaden las clases `.cart-title` y `.cart-total` en `index.css` para los encabezados del carrito. |

## Funcionalidades del Hito 3

### Catálogo de pizzas

`Home.jsx` importa el arreglo `pizzas` desde `src/utils/pizza.js` y utiliza `map()` para renderizar seis componentes `CardPizza`. Cada tarjeta recibe nombre, descripción, precio, imagen e ingredientes mediante props. Dentro de `CardPizza.jsx`, los ingredientes se recorren para generar un `<li>` por cada uno.

La vista `Home` está implementada, pero queda comentada en `App.jsx` durante la evaluación del carrito, tal como indica el enunciado del hito.

### Carrito de compras

`Cart.jsx` inicializa su estado con `pizzaCart` y muestra la imagen, el nombre, el precio unitario y la cantidad de cada pizza. Los botones **+** y **−** actualizan la cantidad mediante `setCart`; al disminuir una unidad que tenía cantidad 1, el producto desaparece del arreglo y de la pantalla.

El total se calcula a partir del estado actual:

```js
const total = cart.reduce(
  (sum, pizza) => sum + pizza.price * pizza.count,
  0
);
```

Los importes se muestran con separadores de miles usando `formatCurrency()`. Cuando ya no quedan productos se muestra el mensaje «Tu carrito está vacío» y el total pasa a `$0`. El botón **Pagar** se presenta como parte de la interfaz, pero todavía no ejecuta una compra.

El indicador de total en `Navbar.jsx` permanece estático en esta etapa; el total que responde a los botones es el que aparece dentro de `Cart.jsx`.

### Componentes conservados

`Login.jsx` y `Register.jsx`, desarrollados para el Hito 2, siguen disponibles en `src/components/`. Sus formularios y validaciones se conservan para hitos posteriores. La aplicación aún no utiliza rutas para alternar entre esas pantallas.

## Tecnologías

- React y JavaScript (JSX).
- Vite para desarrollo y compilación.
- Bootstrap 5 para componentes y clases utilitarias.
- CSS personalizado en `src/index.css`.

## Instalación y ejecución

Se requiere Node.js y npm. Desde una terminal:

```bash
git clone https://github.com/penaford94/desafio_react_3.git
cd desafio_react_3
npm install
npm run dev
```

Abrir en el navegador la dirección local que indique Vite. Para ejecutar las comprobaciones disponibles:

```bash
npm run lint
npm run build
```

## Estructura principal

```text
src/
├── components/
│   ├── CardPizza.jsx     # Tarjeta del catálogo e ingredientes
│   ├── Cart.jsx          # Carrito, cantidades y total
│   ├── Home.jsx          # Listado dinámico de pizzas
│   ├── Login.jsx         # Formulario conservado del Hito 2
│   ├── Register.jsx      # Formulario conservado del Hito 2
│   ├── Navbar.jsx
│   └── Footer.jsx
├── utils/
│   ├── pizza.js          # Datos del catálogo y carrito inicial
│   └── formatCurrency.js # Formato de importes
├── App.jsx               # Activa Cart para este hito
├── index.css             # Estilos globales y títulos del carrito
└── main.jsx              # Entrada de React e importación de Bootstrap
```

## Comprobaciones manuales sugeridas

1. Al abrir la aplicación, comprobar que aparecen las tres pizzas iniciales del carrito y un total de **$19.190**.
2. Pulsar **+** en una pizza: su cantidad aumenta y el total suma su precio unitario.
3. Pulsar **−** en una pizza con cantidad 1: se elimina y el total disminuye.
4. Eliminar todas las pizzas: aparece el mensaje de carrito vacío y el total es **$0**.
5. Para revisar el catálogo, activar temporalmente `Home` en `App.jsx` y comentar `Cart`: deben aparecer seis tarjetas y los ingredientes de cada una.

## Alcance actual

El carrito utiliza datos locales y estado de React; al recargar la página vuelve a las cantidades iniciales. Los botones de navegación, **Añadir** de las tarjetas y **Pagar** aún no conectan vistas ni completan una compra. Estas interacciones quedan para los siguientes hitos.

## Autor

Desarrollado por [penaford94](https://github.com/penaford94) para el desafío Pizzería Mamma Mía, Hito 3.
