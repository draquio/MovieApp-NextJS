# Movie Web App - Ing. Sergio Mercado.

Proyecto realizado como prueba técnica por Ing. Sergio Mercado
## Tecnologías:
- NextJs
- Tailwind
- Shadcn

### Enlaces directos
- [MovieWebApp desplegada](https://movieapp-draquio.vercel.app/ "TheMovieApp")
- [MovieWebApp Imagen en Docker](https://hub.docker.com/repository/docker/draquio/movieweb-nextjs-sergiomercado/ "docker image")
- [Codigo fuente del proyecto - GitHub](https://github.com/draquio/MovieApp-NextJS" "Github")
- [Desarrollador por Ing. Sergio Mercado](https://draquioportfolio.vercel.app/ "portfolio")

![](https://movieapp-draquio.vercel.app/movie_b.webp)
---

## Características de la prueba
- Proyecto creado con NextJs y Tailwind
- Consumo una API externa
- Filtros
- Buscador
- Paginación
- Responsive
- Animaciones
- Server Side Rendering
- Web optimizada
- Desplegada
- Dockerizada (cuenta con imagen en docker hub)
- Test unitario de funciones y componentes

![](https://i.ibb.co/DM2Mm2b/image.png)
![](https://i.ibb.co/6bdFhqH/1727373657856.jpg)


## Instalación de proyecto en local
Para instalar el proyecto en local debe seguir un par de pasos.
1. Clonar el repositorio 
```
git clone https://github.com/draquio/MovieApp-NextJS
```
2. Ingresar en la carpeta raiz con `cd movie-web-nextjs` e instalar las dependencias con `npm install`
3. Solicitar acceso a la apiKey en `https://www.omdbapi.com/`
4. Crear en la carpeta raíz `.env.local` y definir la api key `API_KEY="aqui-va-la-apikey"`
5. Levantar la web con `npm run dev`

### Opcional
6. Correr las pruebas unitarias con `npm test`
---

## Descargar imagen de Docker
Para poder correr el proyecto en local con Docker sin una API debe descargar la imagen y correrla con:
```
docker run -p 3000:3000 draquio/movieweb-nextjs-sergiomercado
```

**Desarrollador por Ing. Sergio Mercado - FullStack developer**
- [Portfolio personal](https://draquioportfolio.vercel.app/ "Title")
- [Linkedin](https://www.linkedin.com/in/sergio-mercado-galarza-4a4b42274/ "Title")
- [Github](https://github.com/draquio/ "Title")

