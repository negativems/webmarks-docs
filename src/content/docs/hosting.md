---
title: "Hosting"
description: "Hosting utilizado en el proyecto"
---

Hasta hace un par de semanas, pagaba mensualmente un servidor VPS (Virtual Private Server) para alojar mis proyectos y los de mis clientes.
<br>

Pero tras probar [Vercel](#vercel) y otro servicio me he dado cuenta que las empresas de servicios web han avanzado mucho y ofrecen servicios
muy completos, con un rendimiento mucho mejor que el que podía alcanzar y con planes gratuitos muy generosos.

## Vercel

[Vercel](https://vercel.com) es una plataforma que ofrece servicios de **alojamiento web**, **despliegue continuo** y **dominios** entre otros.

![Vercel landing page](/vercel-landing.png)

Antes de usar Vercel tenía configurado el [CI/CD](/ci-cd) con **Github Actions** en mi servidor VPS, pero tras probarlo y ver la cantidad de
tiempo que me ahorraba al no tener que configurar nada en absoluto, decidí migrar el proyecto a Vercel.

En mi caso, he utilizado el plan gratuito, ya que Vercel ofrece un **plan gratuito muy completo**.

El dominio que he utilizado (webmarks.io) lo compré en [Cloudflare](#cloudflare) (más adelante explicaré que es)
y lo he configurado en Vercel.