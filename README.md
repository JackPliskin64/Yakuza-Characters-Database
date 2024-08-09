# **PROYECTO 8: API REST FILES** (by Ethan Carranza Serrano)

##  Endpoints del proyecto

### --- -- -***Afiliaciones***- -- ---
### Obtener todas las afiliaciones

- **Método:** `GET`
- **Ruta:** `/api/v1/affiliations`
- **Descripción:** Recupera una lista de todas las afiliaciones.
- **Parámetros:** Ninguno.
- **Respuestas:**
  - **200 OK:** Devuelve una lista de afiliaciones.
  - **400 Bad request:** Error al recuperar los datos.

### Obtener afiliación por chairman

- **Método:** `GET`
- **Ruta:** `/api/v1/affiliations/findByChairman/:chairman`
- **Descripción:** Recupera una afiliación específica por el ID de su chairman.
- **Parámetros:**
  - `id` (path): El ID de la afiliación a recuperar.
- **Respuestas:**
  - **200 OK:** Devuelve la afiliación correspondiente.
  - **404 Not Found:** Si la afiliación no existe.
  - **400 Bad request:** Error al recuperar los datos.

### Obtener afiliación por headquarters

- **Método:** `GET`
- **Ruta:** `/api/v1/affiliations/findByHeadquarters/:headquarters`
- **Descripción:** Recupera una afiliación específica por el ID de su HQ.
- **Parámetros:**
  - `id` (path): El ID de la afiliación a recuperar.
- **Respuestas:**
  - **200 OK:** Devuelve la afiliación correspondiente.
  - **404 Not Found:** Si la afiliación no existe.
  - **400 Bad request:** Error al recuperar los datos.

### Obtener afiliación por miembros

- **Método:** `GET`
- **Ruta:** `/api/v1/affiliations/findByMembers/:members`
- **Descripción:** Recupera una afiliación específica por el número de sus miembros.
- **Parámetros:**
  - `id` (path): El ID de la afiliación a recuperar.
- **Respuestas:**
  - **200 OK:** Devuelve la afiliación correspondiente.
  - **404 Not Found:** Si la afiliación no existe.
  - **400 Bad request:** Error al recuperar los datos.

### Crear una nueva afiliación

- **Método:** `POST`
- **Ruta:** `/api/v1/affiliations`
- **Descripción:** Crea una nueva afiliación.
- **Cuerpo de la solicitud:**
  - `name` (string, requerido): Nombre de la afiliación.
  - `members` (number, requerido): Número de miembros.
  - `chairman` (string, requerido): Nombre del presidente.
  - `headquarters` (string, requerido): Ubicación de la sede.
  - `captains` (array, opcional): Lista de IDs de capitanes.
  - `imgUrl` (string, opcional): URL de la imagen de la afiliación.
- **Respuestas:**
  - **201 Created:** La afiliación ha sido creada exitosamente.
  - **409 Conflict:** Si el cuerpo de la solicitud está duplicado.
  - **400 Bad Request:** Error al crear la afiliación.

### Actualizar una afiliación

- **Método:** `PUT`
- **Ruta:** `/api/v1/affiliations/:id`
- **Descripción:** Actualiza una afiliación existente.
- **Parámetros:**
  - `id` (path): El ID de la afiliación a actualizar.
- **Cuerpo de la solicitud:**
  - `name` (string, opcional): Nuevo nombre de la afiliación.
  - `members` (number, opcional): Nuevo número de miembros.
  - `chairman` (string, opcional): Nuevo nombre del presidente.
  - `headquarters` (string, opcional): Nueva ubicación de la sede.
  - `captains` (array, opcional): Lista actualizada de IDs de capitanes.
  - `imgUrl` (string, opcional): Nueva URL de la imagen de la afiliación.
- **Respuestas:**
  - **200 OK:** La afiliación ha sido actualizada exitosamente.
  - **404 Not Found:** Si la afiliación no existe.
  - **400 Bad Request:** Si el cuerpo de la solicitud es inválido.
  - **500 Internal Server Error:** Error al actualizar la afiliación.

### Eliminar una afiliación

- **Método:** `DELETE`
- **Ruta:** `/api/affiliations/:id`
- **Descripción:** Elimina una afiliación existente.
- **Parámetros:**
  - `id` (path): El ID de la afiliación a eliminar.
- **Respuestas:**
  - **200 OK:** La afiliación ha sido eliminada exitosamente.
  - **404 Not Found:** Si la afiliación no existe.
  - **500 Internal Server Error:** Error al eliminar la afiliación.

### --- -- -***Personajes***- -- ---
### Obtener todos los personajes

- **Método:** `GET`
- **Ruta:** `/api/v1/characters`
- **Descripción:** Recupera una lista de todos los personajes.
- **Parámetros:** Ninguno.
- **Respuestas:**
  - **200 OK:** Devuelve una lista de afiliaciones.
  - **400 Bad request:** Error al recuperar los datos.

### Obtener los personajes por edad

- **Método:** `GET`
- **Ruta:** `/api/v1/characters/findByAge/:age`
- **Descripción:** Recupera una lista de todos los personajes con edad igual o menor a la proporcionada.
- **Parámetros:** `age` (path): la edad por la que filtrar.
- **Respuestas:**
  - **200 OK:** Devuelve una lista de los personajes.
  - **400 Bad request:** Error al recuperar los datos.
  -    **404 Not Found:** Si no encuentra personajes con esa edad.

### Crear un nuevo personaje

- **Método:** `POST`
- **Ruta:** `/api/v1/characters`
- **Descripción:** Crea un nuevo personaje.
- **Cuerpo de la solicitud:**
  - `name` (string, requerido): Nombre del personaje.
  - `age` (string, requerido): Edad del personaje.
  - `imgUrl` (string, opcional): URL de la imagen del personaje.
- **Respuestas:**
  - **201 Created:** El personaje ha sido creado exitosamente.
  - **409 Conflict:** Si el cuerpo de la solicitud está duplicado.
  - **400 Bad Request:** Error al crear el personaje.
  

### Actualizar personaje

- **Método:** `PUT`
- **Ruta:** `/api/v1/characters/:id`
- **Descripción:** Actualiza un personaje existente.
-  **Parámetros:** `id` (path): id por el que buscar.
- **Cuerpo de la solicitud:**
  - `name` (string, requerido): Nombre del personaje.
  - `age` (string, requerido): Edad del personaje.
  - `imgUrl` (string, opcional): URL de la imagen del personaje.
- **Respuestas:**
  - **200 Ok:** El personaje ha sido actualizado exitosamente.
  - **400 Bad Request:** Error al actualizar el personaje.
  - **404 Not Found:** Si no encuentra personaje por el ID dado.

### Eliminar personaje

- **Método:** `DELETE`
- **Ruta:** `/api/v1/characters/:id`
- **Descripción:** Elimina un personaje.
-  **Parámetros:** `id` (path): id por el que buscar.
- **Respuestas:**
  - **200 Ok:** El personaje ha sido eliminado exitosamente.
  - **400 Bad Request:** Error al eliminar al personaje.
  - **404 Not Found:** Si no encuentra personaje por el ID dado.