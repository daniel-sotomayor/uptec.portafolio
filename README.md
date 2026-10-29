# Portafolio web SBN_MCP

Sitio académico de una sola página para presentar el proyecto sociotecnológico SBN_MCP. La aplicación PHP original no forma parte de este proyecto y no se modifica aquí.

## Requisitos

- Node.js 20.19+ o 22.12+ y npm.

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Vite mostrará la URL local en la terminal.

## Comprobación y build

```bash
npm run lint
npm run build
npm run preview
```

La salida estática se genera en `dist/`.

## Publicación en Vercel (preparada, no ejecutada)

La configuración está en `vercel.json`: instala con `npm ci`, ejecuta `npm run build` y publica `dist/`. Importa el repositorio en Vercel y deja que detecte esa configuración. No se ha publicado este sitio. Antes de publicarlo se deben resolver los pendientes de `docs/REVISION_HUMANA_ANTES_DE_PUBLICAR.md`, confirmar la URL pública definitiva y revisar todos los recursos públicos. No distribuir archivos fuente privados ni `assets/solo_revision/`.

URL final del portafolio: **pendiente de publicación y confirmación**.

El QR para la defensa se generará después de confirmar esa URL estable y se probará contra ella. No usar URL local ni previsualización.

## Contenido y privacidad

Los enlaces y datos de proyecto se configuran en `src/data/project.ts`; contenidos de funcionalidades, equipo, tecnología y evidencias también residen en `src/data/`. Los manuales fuente están en `contexto_privado/` y no se sirven desde `public/`. Las capturas del sistema no se publican hasta aprobación y anonimización. Las métricas pendientes de conciliación no aparecen como resultados.
