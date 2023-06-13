---
title: "Tecnologías"
description: "Tecnologías utilizadas en el proyecto"
---

En esta página explicaré las tecnologías utilizadas en todo el proyecto sin profundizar, ya que en el apartado de
[Desarrollador](/desarrollador) se explica con más detalle.

<!-- Imagen de la landing -->

> Antes de comenzar a hablar de tecnicismos, es necesario poner en contexto sobre algunos términos.

A la hora de programar una aplicación web, existen dos partes fundamentales: el **frontend** y el **backend**.
Y para desarrollar cada una de estas partes, existen diferentes frameworks y librerías.
<br>

Los **frameworks** **frontend** más conocidos son [React](https://react.dev), [Vue](https://vuejs.org) y [Angular](https://angular.io).
<br>

Pero si queremos desarrollar una aplicación web que se ejecute en el servidor, necesitamos un framework que nos permita
hacerlo.
<br>

Los frameworks más conocidos para el desarrollo de aplicaciones web que se ejecutan en el servidor son:
[Next](https://nextjs.org) y [Nuxt](https://nuxt.com).

Aun que tengan solo una letra de diferencia, son frameworks totalmente diferentes.
<br>

**Next está desarrollado en React y Nuxt en Vue.**

Tras esta breve introducción, vamos a ver las tecnologías utilizadas en el proyecto.

---

### Frontend

La aplicación web está desarrollada en [Nuxt](https://nuxt.com) tanto la landing como la aplicación web.
<br><br>
Al comenzar a desarrollar el proyecto, me decanté por utilizar **Next**, ya que quería aprender React.
Pero tras un par de semanas y con un problema que no conseguía solucionar ya que era por un error de la última versión de Next,
decidí cambiar a Nuxt, ya que conocía Vue y en mi caso me parece más fácil de aprender que React.




### Backend

El backend al igual que el frontend, está desarrollado en [Nuxt](https://nuxt.com) ya que es un framework que nos permite
desarrollar aplicaciones web que se ejecutan en el servidor.

Toda la página es server-side lo que significa que el servidor genera la página y luego la envía al cliente.
<br><br>
![Server side rendering](/ssr.png)

#### Endpoints

Los endpoints son las rutas que nos permiten acceder a los datos de la base de datos. Algunos lo llaman **API**,
pero el término correcto es **endpoint**. Se podría decir que una API es un conjunto de endpoints.

Por ejemplo, si queremos acceder a los datos de un usuario, la ruta podría ser: `https://dominio.com/api/user/1`

En Webmarks, he creado un endpoint para realizar las **peticiones** a la API de **OpenAI** y de esa forma no exponer mi token
de autenticación en el cliente.

### Base de datos

La base de datos utilizada es [Supabase](https://supabase.io) que es una base de datos open source y con plan gratuito que ofrecen servicios
de autenticación, almacenamiento y bases de datos en tiempo real (muy similar a Firebase).
<br><br>
![Supabase landing page](/supabase.png)

![Supabase](/supabase-bookmarks.png)
(Captura de la tabla principal 'bookmarks' de la base de datos)