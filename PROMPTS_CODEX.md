# Prompts listos para Codex — SBN_MCP

Usa cada prompt por separado. No le pidas a Codex que publique el sitio antes de revisar los recursos y las cifras pendientes.

## Fase 0 — Orientación del repositorio y revisión de fuentes

Lee `AGENTS.md`, `SPEC_PORTAFOLIO_SBN_MCP.md`, `ASSET_MANIFEST.csv` y los documentos dentro de `contexto_privado/`. No implementes todavía. Devuelve: (1) arquitectura propuesta, (2) inventario de recursos aprobados y pendientes, (3) hechos confirmados y discrepancias de las fuentes, (4) riesgos de privacidad, (5) plan por etapas y criterios verificables. No resuelvas discrepancias inventando respuestas. Confirma que los documentos privados y recursos de revisión no se servirán en `public/`.

## Fase 1 — Crear la base visual

Implementa la base del portafolio en React + Vite + TypeScript siguiendo `SPEC_PORTAFOLIO_SBN_MCP.md`. Crea `AGENTS.md` en raíz si no está, una estructura limpia de componentes, tokens CSS, navbar responsive, hero, footer y secciones vacías con anclas estables. Inspírate en la estructura general de https://dtsr-pied.vercel.app/ pero no copies contenido ni código. Aún no copies capturas internas a `public/`. Verifica `npm run build` y reporta los archivos creados.

## Fase 2 — Añadir contenido y secciones

Completa los textos y componentes de todas las secciones especificadas. Mantén los textos en archivos de datos separados. No inventes cifras, cargos ni fechas. En la sección Resultados usa solo texto cualitativo provisional o conserva las métricas como ocultas/no aprobadas hasta que una persona autorice su publicación. Señala visualmente que las funciones describen el sistema documentado y no implican por sí mismas que el entorno público esté en producción. El botón principal debe enlazar a `https://mcp.gt.tc/MCP/apps/SBN_MCP/public/login?i=1`.

## Fase 3 — Integrar fotografías de campo

Revisa `ASSET_MANIFEST.csv`. Copia a `public/images/evidencias/` solo las fotografías clasificadas como principales y aprobadas para uso público. La autorización de las fotografías fue confirmada por el equipo. Usa nombres de archivo semánticos y pies de foto honestos, sin inventar actividad exacta ni fecha. No uses archivos de `assets/solo_revision/fotos_opcionales/` por defecto. No deformes las imágenes; usa `object-fit` y variantes responsive. Añade `alt` descriptivo en español y captions.

## Fase 4 — Capturas y diagramas del sistema

Inspecciona `assets/solo_revision/capturas_manual_usuario/` y `assets/solo_revision/diagramas_manual_tecnico/`. No publiques esas imágenes automáticamente. Primero identifica información visible que pudiera ser personal, patrimonial, operativa o de seguridad; produce un informe indicando qué capturas son adecuadas, cuáles requieren anonimización y cuáles deberían excluirse. Si no puedes anonimizar de forma segura, déjalas fuera de `public/` y muestra un placeholder visual sin datos inventados. Para diagramas, redibuja solo si las relaciones están apoyadas por el manual; no inventes arquitectura.

## Fase 5 — Accesibilidad, responsive y QA visual

Prueba la página en anchos aproximados de 360, 768, 1024 y 1440 px. Comprueba menú móvil, anclas, links externos, diálogos/lightbox con teclado, cierre con Escape, foco visible, texto alternativo, contraste, `prefers-reduced-motion`, imágenes ausentes y enlaces rotos. Elimina botones que no hacen nada. Ejecuta lint, pruebas y build disponibles. Corrige errores en lugar de limitarte a informar de ellos.

## Fase 6 — Revisión de contenido y precisión

Audita toda la página contra `SPEC_PORTAFOLIO_SBN_MCP.md` y los documentos fuente. Entrega una tabla de cada afirmación importante indicando su fuente o si requiere confirmación. Verifica específicamente: número de perfiles, atribución de tutores, métricas de resultados, estado del despliegue, fechas de fotos y disponibilidad de documentos públicos. No publiques contenido pendiente ni inventes una solución.

## Fase 7 — Preparar publicación

Prepara configuración y README para desplegar una SPA estática en Vercel. No publiques automáticamente ni afirmes que el despliegue fue completado si no tienes acceso. Documenta comandos de instalación, desarrollo y build. Deja un campo para la URL definitiva del portafolio. Una vez el equipo confirme la URL publicada, genera el QR para usarlo en la presentación de defensa, verifica que decodifica exactamente a esa URL y recomienda incluir el enlace escrito junto al QR.
