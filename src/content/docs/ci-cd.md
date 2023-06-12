---
title: "CI/CD"
description: "CI/CD utilizado en el proyecto"
---

El CI/CD (Continuous Integration / Continuous Delivery) es un proceso que nos permite automatizar el despliegue de una aplicación web
con tan solo subir los cambios al repositorio.

Este proceso se encarga de ejecutar un script en un servidor cada vez que se hace un push a una rama determinada.

Antes de usar Vercel, configuré Github Actions manualmente para automatizar el despliegue de la aplicación web en mi servidor VPS y
con otra herramienta llamada **[pm2](https://pm2.io/)**, reiniciaba el servidor automáticamente para que los cambios se aplicaran.

### ¿Cómo funciona?

El funcionamiento es muy sencillo. Cada vez que se hace un push a la rama configurada (por defecto **main**), Github Actions (o el servicio que uses)
ejecuta un script.

Este script se ejecuta en un servidor que te presta Github de forma gratuita aun que tiene ciertas [limitaciones](https://docs.github.com/es/actions/learn-github-actions/usage-limits-billing-and-administration#usage-limits).

Para configurar el script que quieres ejecutar, tienes que crear un archivo en el proyecto llamado **.github/workflows/[nombre].yml**.

Para que te hagas una idea de como es el script, te dejo un ejemplo:

```yaml
# This is a basic workflow to help you get started with Actions

name: CD

# Controls when the action will run.
on:
   # Triggers the workflow on push or pull request events but only for the master branch
   push:
      branches: [master]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
   # This workflow contains a single job called "build"
   build:
      # The type of runner that the job will run on
      runs-on: ubuntu-latest
      concurrency:
         group: ${{ github.workflow }}-${{ github.ref }}
         cancel-in-progress: ${{ github.ref != 'refs/heads/master' }}

      # Steps represent a sequence of tasks that will be executed as part of the job
      steps:
         - name: Deploy using ssh
           uses: appleboy/ssh-action@master
           with:
              host: ${{ secrets.HOST }}
              username: root
              key: ${{ secrets.SSH_KEY}}
              port: 22
              script: |
                 export NVM_DIR=~/.nvm
                 source ~/.nvm/nvm.sh
                 cd /var/www/webmarks-docs
                 git pull
                 git status
                 npm run build
```