# Prueba API

Este proyecto es una API de biblioteca para crear un registro y catálogo de libros. Asi como también la gestión de préstamos y reservas

## Estructura base de datos

Esta sería la estructura que tendría la base de datos para el proyecto.

![Diagrama de entidad relación](./img/diagrama.png)

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- Node.js: https://nodejs.org
- MySQL: https://www.mysql.com

Además de esto, es necesario mencionar que los paquetes usados fueron las siguientes:

- cookie-parser: Para el manejo de las cookies al momento de realizar la autenticación respectiva en cada ruta necesaria.
- dotenv: Para usar variables de entorno.
- express: Para realizar el montaje del servidor y de la api como tal.
- jose: Para el uso del Json Web Token (JWT).
- mysql2: Para poder hacer una conexión a nuestra base de datos.
- yup: Para el DTO, es decir, la validación en la transferencia de datos.

## Configuración

1.  Clona este repositorio en tu máquina local.
1.  Abre una terminal en la carpeta raíz del proyecto.
1.  Ejecuta el siguiente comando para instalar las dependencias necesarias:

        npm install

1.  Crea un archivo .env en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

        MY_CONFIG={"host":"localhost", "user":"root","database": NOMBRE_DB,"password":"", "port":3306}
        MY_SERVER={"hostname":"127.20.20.1", "port":5000}
        JWT_PRIVATE_KEY="PalabraSecreta"

    ###### Asegurate de cambiar NOMBRE_DB y demás configuraciones según tus necesidades

## Base de datos

Para obtener la base de datos, ejecuta el archivo `db.sql` que esta ubicado en la carpeta utils dentro de la carpeta src. Ya sea en alguna extensión de tu editor de texto que te permita hacer conexión a tu base local o en tu programa de preferencia puedes copiar y pegar el script.

## Ejecución

Para ejecutar correctamente el servidor debes asegurarte de tener `nodemon`, ya teniendo esta dependencia, solo escribes en la consola:

        npm run dev

## Autorización

Para usar nuestra api debes tener en cuenta que no todos los usuarios tienen acceso a las ruta, solo aquel que tiene el rol de administrador (id:2), puede tener acceso completo a todas las rutas, los clientes (id:1), solo tendran acceso a una cantidad reducida de ellas.

Estos es posible gracias al uso de JWT y la autenticación de credenciales a través de una consulta a las tabla `users`.

Los pasos que usamos para crear todo lo anterior son los siguientes.

###### RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`. Los valores de cada dato acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

1.  El usuario (sea administrador o lector o ambas) deberá logearse a través del siguiente endpoint

    - URL: `http://127.20.30.1:5005/api/post/login`
    - Método: `POST`
    - Datos de entrada (body):
      ```
        {
            "id":1,
            "telefono":"+1234567890"
        }
      ```
    - Datos de salida: Nos devolverá el token creado y guardado en un cookie llamada `User`

## Endpoints de obtención de data

###### RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`. Los valores de cada dato acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

Para poder acceder a los datos registrados en la base de datos, usaremos los siguientes endpoints:

1.  Obtener todos los autores y sus nacionalidades

    - URL: `http://127.20.30.1:5005/api/get/obtenerAutores`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - tos de salida:

      ```
          [
              {
              "nombre": "Gabriel",
              "apellido": "García Márquez",
              "nacionalidad": "Colombiano"
              },
              {
              "nombre": "J.K.",
              "apellido": "Rowling",
              "nacionalidad": "Británico"
              },
              {
              "nombre": "Stephen",
              "apellido": "King",
              "nacionalidad": "Estadounidense"
              },
              {
              "nombre": "Isabel",
              "apellido": "Allende",
              "nacionalidad": "Chileno"
              },
              {
              "nombre": "Haruki",
              "apellido": "Murakami",
              "nacionalidad": "Japonés"
              },
              {
              "nombre": "Jane",
              "apellido": "Austen",
              "nacionalidad": "Británico"
              },
              {
              "nombre": "Ernest",
              "apellido": "Hemingway",
              "nacionalidad": "Estadounidense"
              },
              {
              "nombre": "Mario",
              "apellido": "Vargas Llosa",
              "nacionalidad": "Peruano"
              },
              {
              "nombre": "Emily",
              "apellido": "Brontë",
              "nacionalidad": "Británico"
              },
              {
              "nombre": "Leo",
              "apellido": "Tolstoy",
              "nacionalidad": "Ruso"
              }
          ]
      ```

1.  Obtener categorias disponibles

    - URL: `http://127.20.30.1:5005/api/get/categoriasDisponibles`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
      [
            {
            "nombre": "Novela"
            },
            {
            "nombre": "Poesía"
            },
            {
            "nombre": "Ciencia Ficción"
            },
            {
            "nombre": "Historia"
            },
            {
            "nombre": "Fantasía"
            },
            {
            "nombre": "Biografía"
            },
            {
            "nombre": "Ensayo"
            },
            {
            "nombre": "Drama"
            },
            {
            "nombre": "Aventura"
            },
            {
            "nombre": "Romance"
            }
      ]
      ```

1.  Obtener editoriales y sus direcciones

    - URL: `http://127.20.30.1:5005/api/get/obtenerEditoriales`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
      [
          {
              "nombre": "Editorial Alfaguara",
              "direccion": "Calle del Libro, 123"
          },
          {
              "nombre": "Editorial Salamandra",
              "direccion": "Avenida de los Escritores, 456"
          },
          {
              "nombre": "Editorial Anagrama",
              "direccion": "Plaza de la Cultura, 789"
          },
          {
              "nombre": "Editorial Planeta",
              "direccion": "Calle de los Editores, 101"
          },
          {
              "nombre": "Editorial Penguin Random House",
              "direccion": "Avenida de las Letras, 202"
          },
          {
              "nombre": "Editorial RBA Libros",
              "direccion": "Paseo de la Literatura, 303"
          },
          {
              "nombre": "Editorial Tusquets",
              "direccion": "Avenida de los Escritores, 123"
          },
          {
              "nombre": "Editorial Seix Barral",
              "direccion": "Calle del Autor, 404"
          },
          {
              "nombre": "Editorial Galaxia Gutenberg",
              "direccion": "Plaza de los Libros, 505"
          },
          {
              "nombre": "Editorial Sudamericana",
              "direccion": "Avenida de los Escritores, 303"
          }
      ]
      ```

1.  Obtener estado de libros y descripción

    - URL: `http://127.20.30.1:5005/api/get/estadoLibros`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
        [
            {
                "titulo": "Cien años de soledad",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            },
            {
                "titulo": "Harry Potter y la piedra filosofal",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            },
            {
                "titulo": "It",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            },
            {
                "titulo": "La casa de los espíritus",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            },
            {
                "titulo": "Tokio blues (Norwegian Wood)",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            },
            {
                "titulo": "Orgullo y prejuicio",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            },
            {
                "titulo": "El viejo y el mar",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            },
            {
                "titulo": "La ciudad y los perros",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            },
            {
                "titulo": "Cumbres borrascosas",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            },
            {
                "titulo": "Ana Karenina",
                "estado": "Disponible",
                "descripcion": "El libro está disponible para préstamo o reserva"
            }
        ]
      ```

1.  Obtener libros con autor y editorial

    - URL: `http://127.20.30.1:5005/api/get/obtenerLibros`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
      [
          {
              "titulo": "Cien años de soledad",
              "autor": "Gabriel",
              "editorial": "Editorial Alfaguara"
          },
          {
              "titulo": "Harry Potter y la piedra filosofal",
              "autor": "J.K.",
              "editorial": "Editorial Salamandra"
          },
          {
              "titulo": "It",
              "autor": "Stephen",
              "editorial": "Editorial Anagrama"
          },
          {
              "titulo": "La casa de los espíritus",
              "autor": "Isabel",
              "editorial": "Editorial Planeta"
          },
          {
              "titulo": "Tokio blues (Norwegian Wood)",
              "autor": "Haruki",
              "editorial": "Editorial Penguin Random House"
          },
          {
              "titulo": "Orgullo y prejuicio",
              "autor": "Jane",
              "editorial": "Editorial Salamandra"
          },
          {
              "titulo": "El viejo y el mar",
              "autor": "Ernest",
              "editorial": "Editorial RBA Libros"
          },
          {
              "titulo": "La ciudad y los perros",
              "autor": "Mario",
              "editorial": "Editorial Tusquets"
          },
          {
              "titulo": "Cumbres borrascosas",
              "autor": "Emily",
              "editorial": "Editorial Seix Barral"
          },
          {
              "titulo": "Ana Karenina",
              "autor": "Leo",
              "editorial": "Editorial Galaxia Gutenberg"
          }
      ]
      ```

1.  Obtener prestamos con fechas y estados

    - URL: `http://127.20.30.1:5005/api/get/obtenerPrestamos`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
      [
          {
              "nombreUsuario": "Juan",
              "apellidoUsuario": "Pérez",
              "nombreLibro": "Harry Potter y la piedra filosofal",
              "fechaPrestamo": "2023-07-10T05:00:00.000Z",
              "fechaDevolucion": "2023-07-17T05:00:00.000Z",
              "estado": "Devuelto"
          },
          {
              "nombreUsuario": "María",
              "apellidoUsuario": "Gómez",
              "nombreLibro": "Tokio blues (Norwegian Wood)",
              "fechaPrestamo": "2023-07-11T05:00:00.000Z",
              "fechaDevolucion": "2023-07-18T05:00:00.000Z",
              "estado": "Devuelto"
          },
          {
              "nombreUsuario": "Pedro",
              "apellidoUsuario": "López",
              "nombreLibro": "El viejo y el mar",
              "fechaPrestamo": "2023-07-12T05:00:00.000Z",
              "fechaDevolucion": "2023-07-19T05:00:00.000Z",
              "estado": "Prestado"
          },
          {
              "nombreUsuario": "Laura",
              "apellidoUsuario": "Hernández",
              "nombreLibro": "Ana Karenina",
              "fechaPrestamo": "2023-07-13T05:00:00.000Z",
              "fechaDevolucion": "2023-07-20T05:00:00.000Z",
              "estado": "Prestado"
          },
          {
              "nombreUsuario": "Carlos",
              "apellidoUsuario": "García",
              "nombreLibro": "It",
              "fechaPrestamo": "2023-07-14T05:00:00.000Z",
              "fechaDevolucion": "2023-07-21T05:00:00.000Z",
              "estado": "Devuelto"
          },
          {
              "nombreUsuario": "Ana",
              "apellidoUsuario": "Martínez",
              "nombreLibro": "La ciudad y los perros",
              "fechaPrestamo": "2023-07-15T05:00:00.000Z",
              "fechaDevolucion": "2023-07-22T05:00:00.000Z",
              "estado": "Devuelto"
          },
          {
              "nombreUsuario": "José",
              "apellidoUsuario": "Rodríguez",
              "nombreLibro": "La casa de los espíritus",
              "fechaPrestamo": "2023-07-16T05:00:00.000Z",
              "fechaDevolucion": "2023-07-23T05:00:00.000Z",
              "estado": "Devuelto"
          },
          {
              "nombreUsuario": "Sofía",
              "apellidoUsuario": "Fernández",
              "nombreLibro": "Cien años de soledad",
              "fechaPrestamo": "2023-07-17T05:00:00.000Z",
              "fechaDevolucion": "2023-07-24T05:00:00.000Z",
              "estado": "Prestado"
          },
          {
              "nombreUsuario": "Manuel",
              "apellidoUsuario": "Torres",
              "nombreLibro": "Cumbres borrascosas",
              "fechaPrestamo": "2023-07-18T05:00:00.000Z",
              "fechaDevolucion": "2023-07-25T05:00:00.000Z",
              "estado": "Prestado"
          },
          {
              "nombreUsuario": "Isabel",
              "apellidoUsuario": "Díaz",
              "nombreLibro": "Orgullo y prejuicio",
              "fechaPrestamo": "2023-07-19T05:00:00.000Z",
              "fechaDevolucion": "2023-07-26T05:00:00.000Z",
              "estado": "Devuelto"
          }
      ]
      ```

1.  Obtener reservas con fechas y estados

    - URL: `http://127.20.30.1:5005/api/get/obtenerReservas`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
        [
                {
                    "nombreUsuario": "Juan",
                    "apellidoUsuario": "Pérez",
                    "nombreLibro": "It",
                    "desde": "2023-07-10T05:00:00.000Z",
                    "hasta": "2023-07-17T05:00:00.000Z",
                    "estado": "Confirmada"
                },
                {
                    "nombreUsuario": "María",
                    "apellidoUsuario": "Gómez",
                    "nombreLibro": "Orgullo y prejuicio",
                    "desde": "2023-07-11T05:00:00.000Z",
                    "hasta": "2023-07-18T05:00:00.000Z",
                    "estado": "Pendiente"
                },
                {
                    "nombreUsuario": "Pedro",
                    "apellidoUsuario": "López",
                    "nombreLibro": "La ciudad y los perros",
                    "desde": "2023-07-12T05:00:00.000Z",
                    "hasta": "2023-07-19T05:00:00.000Z",
                    "estado": "Pendiente"
                },
                {
                    "nombreUsuario": "Laura",
                    "apellidoUsuario": "Hernández",
                    "nombreLibro": "Cien años de soledad",
                    "desde": "2023-07-13T05:00:00.000Z",
                    "hasta": "2023-07-20T05:00:00.000Z",
                    "estado": "Confirmada"
                },
                {
                    "nombreUsuario": "Carlos",
                    "apellidoUsuario": "García",
                    "nombreLibro": "La casa de los espíritus",
                    "desde": "2023-07-14T05:00:00.000Z",
                    "hasta": "2023-07-21T05:00:00.000Z",
                    "estado": "Confirmada"
                },
                {
                    "nombreUsuario": "Ana",
                    "apellidoUsuario": "Martínez",
                    "nombreLibro": "Ana Karenina",
                    "desde": "2023-07-15T05:00:00.000Z",
                    "hasta": "2023-07-22T05:00:00.000Z",
                    "estado": "Pendiente"
                },
                {
                    "nombreUsuario": "José",
                    "apellidoUsuario": "Rodríguez",
                    "nombreLibro": "El viejo y el mar",
                    "desde": "2023-07-16T05:00:00.000Z",
                    "hasta": "2023-07-23T05:00:00.000Z",
                    "estado": "Confirmada"
                },
                {
                    "nombreUsuario": "Sofía",
                    "apellidoUsuario": "Fernández",
                    "nombreLibro": "Harry Potter y la piedra filosofal",
                    "desde": "2023-07-17T05:00:00.000Z",
                    "hasta": "2023-07-24T05:00:00.000Z",
                    "estado": "Pendiente"
                },
                {
                    "nombreUsuario": "Manuel",
                    "apellidoUsuario": "Torres",
                    "nombreLibro": "Cumbres borrascosas",
                    "desde": "2023-07-18T05:00:00.000Z",
                    "hasta": "2023-07-25T05:00:00.000Z",
                    "estado": "Confirmada"
                },
                {
                    "nombreUsuario": "Isabel",
                    "apellidoUsuario": "Díaz",
                    "nombreLibro": "Tokio blues (Norwegian Wood)",
                    "desde": "2023-07-19T05:00:00.000Z",
                    "hasta": "2023-07-26T05:00:00.000Z",
                    "estado": "Pendiente"
                }
        ]
      ```

1.  Obtener libros disponibles

    - URL: `http://127.20.30.1:5005/api/get/librosDisponibles`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
        [
                {
                    "titulo": "Cien años de soledad",
                    "categoria": "Novela",
                    "autor": "Gabriel",
                    "editorial": "Editorial Alfaguara"
                },
                {
                    "titulo": "Harry Potter y la piedra filosofal",
                    "categoria": "Novela",
                    "autor": "J.K.",
                    "editorial": "Editorial Salamandra"
                },
                {
                    "titulo": "It",
                    "categoria": "Ciencia Ficción",
                    "autor": "Stephen",
                    "editorial": "Editorial Anagrama"
                },
                {
                    "titulo": "La casa de los espíritus",
                    "categoria": "Novela",
                    "autor": "Isabel",
                    "editorial": "Editorial Planeta"
                },
                {
                    "titulo": "Tokio blues (Norwegian Wood)",
                    "categoria": "Poesía",
                    "autor": "Haruki",
                    "editorial": "Editorial Penguin Random House"
                },
                {
                    "titulo": "Orgullo y prejuicio",
                    "categoria": "Novela",
                    "autor": "Jane",
                    "editorial": "Editorial Salamandra"
                },
                {
                    "titulo": "El viejo y el mar",
                    "categoria": "Ensayo",
                    "autor": "Ernest",
                    "editorial": "Editorial RBA Libros"
                },
                {
                    "titulo": "La ciudad y los perros",
                    "categoria": "Biografía",
                    "autor": "Mario",
                    "editorial": "Editorial Tusquets"
                },
                {
                    "titulo": "Cumbres borrascosas",
                    "categoria": "Poesía",
                    "autor": "Emily",
                    "editorial": "Editorial Seix Barral"
                },
                {
                    "titulo": "Ana Karenina",
                    "categoria": "Novela",
                    "autor": "Leo",
                    "editorial": "Editorial Galaxia Gutenberg"
                }
      ]
      ```

1.  Obtener libros prestados

    - URL: `http://127.20.30.1:5005/api/get/obtenerLibrosPrestado`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
        [
                {
                    "nombreUsuario": "Pedro",
                    "apellidoUsuario": "López",
                    "nombreLibro": "El viejo y el mar",
                    "fechaDevolucion": "2023-07-19T05:00:00.000Z"
                },
                {
                    "nombreUsuario": "Laura",
                    "apellidoUsuario": "Hernández",
                    "nombreLibro": "Ana Karenina",
                    "fechaDevolucion": "2023-07-20T05:00:00.000Z"
                },
                {
                    "nombreUsuario": "Sofía",
                    "apellidoUsuario": "Fernández",
                    "nombreLibro": "Cien años de soledad",
                    "fechaDevolucion": "2023-07-24T05:00:00.000Z"
                },
                {
                    "nombreUsuario": "Manuel",
                    "apellidoUsuario": "Torres",
                    "nombreLibro": "Cumbres borrascosas",
                    "fechaDevolucion": "2023-07-25T05:00:00.000Z"
                }
        ]
      ```

1.  Obtener usuarios y correos

    - URL: `http://127.20.30.1:5005/api/get/obtenerUsuarios`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
        [
            {
                "nombre": "Juan",
                "apellido": "Pérez",
                "email": "juan.perez@example.com"
            },
            {
                "nombre": "María",
                "apellido": "Gómez",
                "email": "maria.gomez@example.com"
            },
            {
                "nombre": "Pedro",
                "apellido": "López",
                "email": "pedro.lopez@example.com"
            },
            {
                "nombre": "Laura",
                "apellido": "Hernández",
                "email": "laura.hernandez@example.com"
            },
            {
                "nombre": "Carlos",
                "apellido": "García",
                "email": "carlos.garcia@example.com"
            },
            {
                "nombre": "Ana",
                "apellido": "Martínez",
                "email": "ana.martinez@example.com"
            },
            {
                "nombre": "José",
                "apellido": "Rodríguez",
                "email": "jose.rodriguez@example.com"
            },
            {
                "nombre": "Sofía",
                "apellido": "Fernández",
                "email": "sofia.fernandez@example.com"
            },
            {
                "nombre": "Manuel",
                "apellido": "Torres",
                "email": "manuel.torres@example.com"
            },
            {
                "nombre": "Isabel",
                "apellido": "Díaz",
                "email": "isabel.diaz@example.com"
            }
        ]
      ```

1.  Obtener libros por autor

    - URL: `http://127.20.30.1:5005/api/get/obtenerLibrosPorAutor?nombre=Gabriel García Márquez`
    - Método: `GET`
    - Datos de entrada (query): nombre, recuerda reemplazar el valor de nombre por el nombre del autor que realmente necesitas.
    - Datos de salida:

      ```
        [
            {
                "titulo": "Cien años de soledad",
                "categoria": "Novela",
                "editorial": "Editorial Alfaguara"
            }
        ]
      ```

1.  Obtener libros por categoría

    - URL: `http://127.20.30.1:5005/api/get/obtenerLibrosPorCategoria?categoria=Novela`
    - Método: `GET`
    - Datos de entrada (query): categoria, recuerda reemplazar el valor de categoria por el nombre de la categoria que realmente necesitas.
    - Datos de salida:

      ```
        [
            {
                "titulo": "Cien años de soledad",
                "autor": "Gabriel",
                "editorial": "Editorial Alfaguara"
            },
            {
                "titulo": "Harry Potter y la piedra filosofal",
                "autor": "J.K.",
                "editorial": "Editorial Salamandra"
            },
            {
                "titulo": "La casa de los espíritus",
                "autor": "Isabel",
                "editorial": "Editorial Planeta"
            },
            {
                "titulo": "Orgullo y prejuicio",
                "autor": "Jane",
                "editorial": "Editorial Salamandra"
            },
            {
                "titulo": "Ana Karenina",
                "autor": "Leo",
                "editorial": "Editorial Galaxia Gutenberg"
            }
        ]
      ```

1.  Obtener prestamos por usuario

    - URL: `http://127.20.30.1:5005/api/get/obtenerPrestamosPorUsuario?usuario=Juan Pérez`
    - Método: `GET`
    - Datos de entrada (query): usuario, recuerda reemplazar el valor de usuario por el nombre del usuario que realmente necesitas.
    - Datos de salida:

      ```
        [
            {
                "nombreUsuario": "Juan",
                "apellidoUsuario": "Pérez",
                "nombreLibro": "Harry Potter y la piedra filosofal",
                "fechaPrestamo": "2023-07-10T05:00:00.000Z",
                "fechaDevolucion": "2023-07-17T05:00:00.000Z",
                "estado": "Devuelto"
            }
        ]
      ```

1.  Obtener libros de más de 500 páginas con sus autores

    - URL: `http://127.20.30.1:5005/api/get/obtenerLibrosExtensos`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
        [
            {
                "titulo": "It",
                "categoria": "Ciencia Ficción",
                "autor": "Stephen",
                "editorial": "Editorial Anagrama",
                "paginas": 1138
            },
            {
                "titulo": "Ana Karenina",
                "categoria": "Novela",
                "autor": "Leo",
                "editorial": "Editorial Galaxia Gutenberg",
                "paginas": 1273
            }
        ]
      ```

1.  Obtener prestamos por usuario

    - URL: `http://127.20.30.1:5005/api/get/librosPrestadosPorUser?usuario=Pedro López`
    - Método: `GET`
    - Datos de entrada (query): usuario, recuerda reemplazar el valor de usuario por el nombre del usuario que realmente necesitas.
    - Datos de salida:

      ```
        [
            {
                "nombreUsuario": "Pedro",
                "apellidoUsuario": "López",
                "nombreLibro": "El viejo y el mar",
                "fechaPrestamo": "2023-07-12T05:00:00.000Z",
                "fechaDevolucion": "2023-07-19T05:00:00.000Z",
                "estado": "Prestado"
            }
        ]
      ```

1.  Obtener libros de autor japonés

        - URL: `http://127.20.30.1:5005/api/get/librosJaponeses`
        - Método: `GET`
        - Datos de entrada (query): Ninguno.
        - Datos de salida:

          ```
            [
                {
                    "titulo": "Tokio blues (Norwegian Wood)",
                    "categoria": "Poesía",
                    "autor": "Haruki",
                    "editorial": "Editorial Penguin Random House",
                    "paginas": 389
                }
            ]
          ```

## DTO con YUP

## Validación de datos (DTO)

- Se realizó la validación de datos a través de la librería `YUP`. La librería Yup permite definir un esquema que describe la forma en que los datos deben ser validados.

- Al utilizar Yup para los DTO, puedes definir un esquema que especifique las reglas de validación que se deben aplicar a cada campo del DTO. Estas reglas pueden incluir validaciones como requerido, tipo de dato, longitud mínima o máxima, formato específico, entre otros.

- Un ejemplo de uno de los esquemas que se pueden crear es este:

  ```
  const addProductValidator = async (req, res, next) => {
    try {
      const productSchema = object({
        nombre: string()
          .strict()
          .matches(/^[a-z A-Z]+$/, "Is not in correct format")
          .required(),
        descripcion: string().optional(),
        estado: number().max(1).required(),
        created_by: number().nullable().optional(),
        update_by: number().nullable().optional(),
        created_at: date().nullable().optional(),
        updated_at: date().nullable().optional(),
        deleted_at: date().nullable().optional(),
      });
      await productSchema.validate(req.body);
      next();
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.errors });
    }
  };
  ```

- Se creó un middleware, donde se valida la composición de los datos dentro de la request. Se instancia un objeto que describe el esquema de la request y se valida el body o el query según lo escrito en el esquema. El `validate()` es una promesa que generas una excepción en caso de no pasar la validación, y dentro del catch se hace la validación de excepciones, respondiendo un status `400` y un mensaje de error. Si la request sale OK, se ejecuta un `next`, que le avisa a express de debe ejecutar el siguiente middleware (en este caso, el endpoint o servicio que genera y responde a una consulta).

### Autora: Emily Nieves
