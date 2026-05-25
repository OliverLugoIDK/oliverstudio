# Oliver Lugo Studio — Web profesional

Web desarrollada en Next.js, TypeScript y Tailwind CSS para vender servicios de diseño gráfico, branding, dirección creativa, redes sociales, flyers, consultoría visual, prompts y cursos próximos.

## Datos configurables

Edita:

```txt
src/config/site.ts
```

Ahí puedes cambiar:

- Nombre de marca
- WhatsApp
- Email
- Instagram
- Mensaje predeterminado de WhatsApp
- Descripción SEO

## Servicios y precios

Edita:

```txt
src/data/services.ts
```

Los precios están como “desde”. Cambia montos, entregables, tiempos y revisiones según tu oferta real.

## Proyectos del portafolio

Edita:

```txt
src/data/projects.ts
```

Reemplaza los covers en:

```txt
public/projects/
```

Archivos actuales:

- daca-sport.svg
- rican2-sport.svg
- la-cabra-store.svg
- novaro.svg
- nexus-os.svg

Puedes sustituirlos por `.webp`, `.jpg`, `.png` o `.svg`. Si cambias el nombre, actualiza el path en `src/data/projects.ts`.

## Logo y foto

Reemplaza:

```txt
public/logo/logo-oliver-lugo.svg
public/images/oliver-profile.svg
```

## Ejecutar local

```bash
npm install
npm run dev
```

Abrir:

```txt
http://localhost:3000
```

## Build de producción

```bash
npm run build
npm run start
```

## Subir a Vercel

1. Sube el proyecto a GitHub.
2. En Vercel, importa el repositorio.
3. Vercel detectará Next.js automáticamente.
4. Deploy.

## Páginas incluidas

- `/`
- `/servicios`
- `/servicios/branding`
- `/servicios/redes-sociales`
- `/servicios/flyers`
- `/servicios/consultoria`
- `/portafolio`
- `/portafolio/[slug]`
- `/sobre-oliver`
- `/consulta`
- `/contacto`
- `/prompts`
- `/cursos`
- `/terminos`
- `/privacidad`

## Nota profesional

No se incluyeron testimonios falsos. La web usa casos de estudio y una estructura de portafolio editable para evitar que se vea genérica o poco confiable.
