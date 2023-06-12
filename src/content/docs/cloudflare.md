---
title: "Cloudflare"
description: "Aplicación de Cloudflare en el proyecto"
---

[Cloudflare](https://cloudflare.com) es una plataforma que ofrece servicios de seguridad, rendimiento y fiabilidad para sitios web entre muchos otros.
<br>

![Cloudflare landing page](/cloudflare-landing.png)

Si nunca has oido hablar de Cloudflare, es una de las empresas más grandes de internet
y a lo largo de la historia ha tenido que lidiar con ataques DDoS de más de 1Tbps (terabit por segundo).

Te recomiendo que investigues sobre [su historia y las controversias](https://es.wikipedia.org/wiki/Cloudflare#Controversias)
que ha tenido a lo largo de los años para que te hagas una idea de la importancia que tiene esta empresa.

En mi caso, he utilizado Cloudflare para varios propósitos:

### 1. Comprar y alojar el dominio

Entre los servicios que ofrece Cloudflare, está la posibilidad de comprar y alojar un dominio.

Aunque para esto suelo comparar precios con otras empresas porque no importa donde compres el dominio ya que luego puedes
configurarlo en el panel de Cloudflare.

### 2. Proteger el dominio

Los servicios de seguridad que ofrece Cloudflare son de lo mejor que existe a día de hoy.

Llevo años protegiendo todos mis dominios con Cloudflare y aun que parezca mentira, he recibido ataques que Cloudflare a bloqueado sin ningún problema.
Esta es la principal razón por la que yo utilizo Cloudflare, ya que ofrece una protección contra ataques DDoS y otras amenazas.

La protección de Cloudflare consiste en utilizar sus servidores como proxy, de forma que todas las peticiones a tu dominio pasan primero por
los servidores de Cloudflare y luego llegan a tu servidor. De esta manera puedes ocultar la IP real de tu servidor y protegerlo de ataques.

A de más de esto, utilizar el proxy de Cloudflare te permite sacar una analítica de las peticiones que recibe tu servidor.

![Cloudflare analytics first](/cloudflare-analytics-1.png)
![Cloudflare analytics first](/cloudflare-analytics-2.png)


### 3. SSL

Cloudflare ofrece certificados SSL **GRATUITOS** para todos los dominios que alojes en su plataforma.

Esto es muy importante ya que los certificados SSL son necesarios para que tu sitio web sea seguro y no muestre el mensaje de "No seguro" en el navegador.

![Cloudflare landing page](/cloudflare-ssl.png)


### 4. DNS

El servicio de DNS de Cloudflare es la razón por la que utilizo esta plataforma.

Todos mis dominios están configurados en Cloudflare y utilizo su servicio de DNS para redirigir los dominios y subdominios a los servidores
donde están alojados mis proyectos.

![Cloudflare landing page](/cloudflare-dns-panel.png)
