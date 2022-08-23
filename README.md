# Backend videoclub

---------------

## Índice


- [Teconolgías aplicadas](#tecnologías-aplicadas)
- [Gestión de archivos](#gestión-de-archivos)
- [Perfiles](#perfiles)
- [Usuarios](#usuarios)
- [Peliculas](#peliculas)
- [Pedidos](#pedidos)
- [Endpoints](#endpoints)

## Tecnologías aplicadas


Tecnologías aplicadas: JavaScript, Node.js, Express, APIs,Git, Postman, MongoDB, mongoose, Json Web Token. Desplegado en Heroku y metodologías ágiles con la herramienta Trello.

<img width="634" alt="image" src="https://user-images.githubusercontent.com/102702041/176485148-445ceb5a-12b8-4a43-b566-c1774b35cc73.png">

## Gestión de archivos


El proyecto está separado en 5 bloques:

Routes: Gestión de rutas para los diferentes controllers conectados a la misma vez con index.js.

Middlewares: Lógica de los roles, la generacion y verificacion de tokens.

Models: Modelos de la base de datos.

Controllers: Contienen la lógica de todas las peticiones que se realizarán desde el frontend.

Config: Conexión a la base de datos.

## Perfiles


El usuario accede despues de validarse con un token, en caso de no tener perfil valido puede crear uno él mismo así como borrar solo su perfil y modificarlo. Hay disponibles dos roles, usuario y administrador.

<img width="109" alt="image" src="https://user-images.githubusercontent.com/102702041/176485372-d8254588-928c-4cfc-819a-9000908e6081.png">

## Usuarios


El usuario puede crear un perfil, borrarlo y modificarlo. El administrador puede gestionar todos los usuarios.

<img width="266" alt="image" src="https://user-images.githubusercontent.com/102702041/176485658-f012cb23-10c1-42d5-958f-6b64cf2bb30e.png">

## Peliculas


El usuario podrá realizar busqueda de todas las películas, o de una sola ya sea por identificador, título o actores.

<img width="584" alt="image" src="https://user-images.githubusercontent.com/102702041/176485871-f759f87c-a972-4791-abc4-38e03a448441.png">

## Pedidos

Los usuarios solo pueden tener un alquiler al mismo tiempo, también se gestiona el poder añadir peliculas en caso de ser administrador.

<img width="343" alt="image" src="https://user-images.githubusercontent.com/102702041/176485988-566abb59-51fa-4a41-8841-66432a1fe322.png">

## Endpoints

A continuación se muestran los endpoints disponibles a través del siguiente <a href="https://videoclub-proyecto5.herokuapp.com/">enlace</a>:

Autenticación:

- /api/auth/register: Registra un usuario.
- /api/auth/login: Inicia sesión.

Users:

- GET /api/users: Lista todos los usuarios (Admin).
- GET /api/users/:id: Muestra un usuario.
- PUT /api/users/:id: Actualiza un usuario.
- DELETE /api/users/:id: Elimina un usuario.

Films:

- GET /api/films: Lista todas las películas.
- POST /api/films: Añade una película (Admin).
- GET /api/films/id/:id: Muestra una película por id.
- POST /api/films/title: Muestra una película por titulo.
- POST /api/films/actor: Muestra las peliculas de un solo actor.

Orders:

- GET /api/orders: Lista todos los pedidos (Admin).
- POST /api/orders: Añade un pedido.


- [Volver al principio](#backend-videoclub)
