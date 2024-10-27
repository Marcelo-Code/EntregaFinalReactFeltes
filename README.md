# Proyecto Final React: E - Commerce:

## Introducción:

Un proyecto de e-commerce permite a los usuarios navegar, seleccionar y adquirir productos de manera intuitiva. Aunque no incluye
plataforma de pagos, la iniciativa se centra en la gestión del inventario y en la presentación optimizada de productos. Tecnologías como React, FireBase y las dependencias utilizadas contribuyen a una infraestructura robusta, asegurando una actualización y mantenimiento eficiente del inventario en línea.

## Estructura de Carpetas:

- **Assets**: organiza recursos estáticos como imágenes y fuentes.
- **Components**: carpeta que almacena los componentes en general. Por buenas prácticas la mayoría de los componentes han sido separador en archivos contenedores, los cuales almacenan lógica de negocio y archivos presentacionales, los que se encuentran enfocados en el renderizado de los mismos, manteniendo de esta manera el código modularizado y prolijo.

  - **Common**: son los componentes que van a ser reutilizados en las diferentes páginas que componen el proyecto.
    - **CardProduct**: son las tarjetas utilizadas para renderizar los productos en el ItemDetail.
    - **CartWidget**: es el componente dinámico que muestra en el Navbar el ícono del carrito de compras y la cantidad de productos que se encuentran en el mismo.
    - **Counter**: es el componente que cuenta la cantidad de productos que serán agregados al carrito.
  - **Layout**: son los componentes de diseño general que estructuran y organizan el contenido global de la aplicación.
    - **Footer**: sección inferior de cada página.
    - **HamburguerMenu**: menú principal del proyecto.
    - **Switch**: es el componente slider que alterna entre el modo claro y el modo oscuro, ajustando los colores del entorno.
    - **NavBar**: sección superior del proyecto, desde donde se ejecutan los 3 componentes anteriores.
  - **Pages**: son los componentes que al renderizarse generan las páginas que conforman el proyecto.
    - **Cart**: componente el cual, al renderizarse muestra el listado productos agregados al carrito de compras.
    - **CheckOut**: muestra el número de orden de compra, conjuntamente con una tabla la cual detalla los productos, conjuntamente con las cantidades y precios detallados previamente en el carrito de compras.
    - **ItemListContainer**: muestra un listado general de los productos ofrecidos en el e-commerce, los cuales a través de funciones adicionales pueden ser filtrados de acuerdo a categorías.
    - **ItemDetail**: ofrece una vista más detallada del producto seleccionado en el ItemListContainer, además de la posibilidad de agregar dicho producto al carrito de compras mediante el botón correspondiente.
- **Context**: es el contexto en React, que permite compartir datos globales entre componentes sin necesidad de pasar props manualmente a través de cada nivel de la jerarquía. Utiliza un Provider para encapsular la lógica de estado y permite que los
  componentes hijos accedan a esos datos mediante el uso del useContext.

## Dependencias Utilizadas:

- **FontAwesome**: de la cual se implementaron diferentes íconos en el proyecto.
  - [https://fontawesome.com/](https://fontawesome.com/)
- **MaterialUI**: de la misma se implementaron Botones, Cards, Spinners, Skeleton, Widgets, entre otros componentes.
  - [https://mui.com/](https://mui.com/)
- **ReactBurguerMenu**: de esta biblioteca se utilizó el menú lateral slider principal del proyecto, el cual contiene las categorías disponibles.
  - [https://github.com/negomi/react-burger-menu](https://github.com/negomi/react-burger-menu)
  - [https://negomi.github.io/react-burger-menu/](https://negomi.github.io/react-burger-menu/)
- **ReactSlidingPane**: panel lateral slider en el cual se renderiza el carrito de compras.
  - [https://www.npmjs.com/package/react-sliding-pane](https://www.npmjs.com/package/react-sliding-pane)
- **SweetAlert**: mediante la misma se crearon las alertas personalizadas correspondientes.
  - [https://sweetalert2.github.io/](https://sweetalert2.github.io/)

## Funcionalidad:

- La pantalla principal permite una visión general de los productos del e-commerce.
- Mediante el menú lateral, pueden filtrarse los productos por categorías.
- Al seleccionar un producto puede tenerse una vista más detallado del mismo, permitiendo mediante un botón agregar el mismo al carrito(mostrando una alerta previamente) o volver a la página anterior.
- El carrito de compras muestra detalladamente los productos agregados, conjuntamente con sus fotos, cantidades, precios, subtotales y total. Los productos pueden ser eliminados de manera individual o general mediante los botones correspondientes y confirmando sus alertas.
- El botón "CheckOut" del carrito de compras renderiza la página, donde inicialmente se cuenta con un formulario que contiene los inputs en los cuales el usuario debe cargar sus datos (los mismos verifican el formato de los datos cargados).
- Al presionar el botón "Generar Orden de Compra", se obtiene desde FireBase el ID de la orden de compra correspondiente, mostrado el mismo en pantalla, y el detalle de la compra realizada.
- La opción "Reload Stocks" del menú principal, permite llevar al valor original los stocks de los productos en la DB de FireBase.

## Próximos Pasos:

En futuras iteraciones de este proyecto de e-commerce, se planea integrar una pasarela de pagos para permitir a los usuarios realizar transacciones de manera segura y conveniente. Esto mejorará la funcionalidad general de la aplicación, brindando una experiencia de compra más completa. Además, se explorará la implementación de características adicionales, como la gestión de usuarios, historial de compras y recomendaciones personalizadas, con el objetivo de enriquecer la interacción del cliente y optimizar la plataforma.

## Conclusión:

Este proyecto de e-commerce en React no solo sirve como una plataforma de compra moderna, sino que también ha sido una valiosa oportunidad de aprendizaje. A través de su desarrollo, he profundizado en conceptos clave de React, la gestión de estados y la integración con Firebase para la actualización dinámica de stocks. Esta experiencia me ha permitido adquirir habilidades prácticas en la creación de aplicaciones escalables, para poder profundizar conocimientos y enfrentar desafíos más complejos en el futuro.**Assets**:

organiza archivos estáticos como imágenes, fuentes y estilos que la aplicación necesita, facilitando su gestión y mantenimiento.
