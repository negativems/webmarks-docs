---
title: "Instalacion"
description: "Instalacion del proyecto"
---

> **Nota:**
> Antes de nada, este proyecto requiere un conocimiento mínimo de [Node.js](https://nodejs.org/es/), [Nuxt.js](https://nuxtjs.org/) y [Supabase](https://supabase.io/).
> También requiere conocimientos para generar API de OpenAI, Google Auth y tokens de Github.

Antes de instalar el proyecto, debes tener instalado [Node.js](https://nodejs.org/es/) y [Git](https://git-scm.com/).

Para instalar el proyecto, primero debes clonar el repositorio:

```bash
git clone https://github.com/negativems/webmarks-nuxt.git
```

Una vez clonado el repositorio, debes instalar las dependencias:

```bash
# Dentro del directorio del proyecto ejecuta
npm install
```

Una vez instaladas las dependencias, debes renombrar el archivo `.env.example` a `.env` y rellenar las variables de entorno.

Las variables de entorno son las siguientes:

```bash
OPENAI_API_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
SUPABASE_URL=
SUPABASE_KEY=
GITHUB_ID=
GITHUB_SECRET=
NITRO_PORT=

DEV_REDIRECT_URL=
PROD_REDIRECT_URL=
```

Para rellenarlas dependes de:

1. **OPENAI_API_KEY:** [OpenAI](https://beta.openai.com/) es una API de inteligencia artificial que uso para generar descripciones de los bookmarks. Para obtener la API key debes registrarte en la beta y crear un proyecto.
2. **GOOGLE_CLIENT_ID:** [Google Developers Console](https://console.developers.google.com/) es el panel de control de Google para desarrolladores. Para obtener el client id debes crear un proyecto y activar la API de Google OAuth.
3. **GOOGLE_CLIENT_SECRET:** Para obtener el client secret debes crear unas credenciales OAuth 2.0 en el panel de control de Google.
4. **SUPABASE_URL:** [Supabase](https://supabase.io/) es una plataforma de código abierto que proporciona bases de datos y servicios de backend. Para obtener la url debes registrarte en la plataforma y crear un proyecto.
5. **SUPABASE_KEY:** Para obtener la key debes ir a la sección de configuración del proyecto y copiar la key de la sección API.
6. **GITHUB_ID:** [GitHub Developers](https://www.github.com/settings/developers) es el panel de control de GitHub para desarrolladores. Para obtener el client id debes crear una nueva aplicación OAuth.
7. **GITHUB_SECRET:** Para obtener el client secret debes crear una nueva aplicación OAuth en el panel de control de GitHub.
8. **NITRO_PORT:** Puerto en el que se ejecutará el servidor de [Nuxt Nitro](https://nitro.unjs.io/).
9. **DEV_REDIRECT_URL:** URL de redirección para el entorno de desarrollo.