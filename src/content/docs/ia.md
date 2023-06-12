---
title: "Inteligencia Artificial"
description: "Como se ha usado la inteligencia artificial en el proyecto"
---

En esta página te explicaré como se ha usado la inteligencia artificial en el proyecto.

![Inteligencia Artificial](/ai-tags.png)

La inteligencia artificial se ha usado en el proyecto para generar etiquetas de los marcadores.

### ¿Cómo funciona?

El servidor hace una petición a la página del marcador, obtiene del código fuente solo las etiquetas
`h1`, `h2`, `h3`, `p`, `a` y el título de la página, a partir de estos datos se genera una petición
utilizando la API de [OpenAI](https://openai.com/) para recibir la respuesta de la inteligencia artificial.

Esta petición contiene el siguiente texto:

```js
const content = `
I will give you a website source and you will give me the keywords of this website.
In case of no data after the double colon, just leave it empty.
If you know what the website is about, generate a few keywords for it.
Example of answer: News, Technology, Science, etc.
Do not add spaces, just one word speparated by comma.
Do not add special characters, just letters.
Try to generate keywords that are related to the content of the website.
If you understand the content of the website, you can generate keywords that could be related to the content of the website.
If the keyword is not descriptive enough, do not add it.
Every keyword should have maximum 10 letters and maximum 2 words.
Limit the answer to 5 elements separated by commas:

${JSON.stringify(HTMLResult)}
`;
```

y se envía de la siguiente manera:

```js
const completion = await openai.createChatCompletion({
   model: 'gpt-3.5-turbo',
   messages: [{ role: 'user', content }]
});

return completion.data.choices[0].message?.content.split(',').map((item) => item.trim());
```

Como ves se usa el modelo `gpt-3.5-turbo` que es el que mejor resultados ha dado y el más rápido.

![Inteligencia Artificial](/ia.gif)