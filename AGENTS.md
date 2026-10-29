# AGENTS.md — Portafolio SBN_MCP

## Objetivo
Construir un portafolio web en español para presentar el proyecto sociotecnológico SBN_MCP de forma profesional, visual, fiel a las fuentes y apta para revisión académica.

## Primero leer
- `SPEC_PORTAFOLIO_SBN_MCP.md` (fuente principal de requisitos y contenido).
- `PROMPTS_CODEX.md` (flujo por etapas).
- `contexto_privado/Proyecto_MCP_2026.docx`.
- `contexto_privado/Manual_Usuario_SBN.docx`.
- `contexto_privado/Manual_Tecnico_SBN.docx`.
- `ASSET_MANIFEST.csv`.

## Límites fundamentales
- No modificar ni reescribir la aplicación PHP existente SBN_MCP. El portafolio es un proyecto independiente.
- No inventar métricas, pruebas, roles, funcionalidades, fechas de trabajo, cargos individuales ni resultados.
- Distinguir claramente entre lo descrito en documentos, lo visible en capturas y lo comprobado en el sistema actual.
- No mostrar públicamente las copias de `contexto_privado/` ni recursos en `assets/solo_revision/`.
- No copiar pantallas del manual directamente a `public/` hasta revisar y, si hace falta, anonimizar datos visibles.
- No usar la fotografía `06-pantalla-service-unavailable-no-publicar.jpg` como prueba exitosa.
- Las fotografías de campo cuentan con permiso de uso confirmado por el usuario, pero aun así se deben revisar los datos o documentos que puedan aparecer en el fondo.
- No publicar contraseñas, tokens, credenciales, nombres/identificadores personales, IP, rutas internas, inventario real ni valores patrimoniales sensibles.
- No presentar la aplicación como producción institucional si no se confirma su estado de despliegue y autorización.
- No mostrar métricas del proyecto marcadas en la especificación como pendientes de reconciliación hasta que el equipo apruebe el texto y el contexto de medición.

## Stack de portafolio
- React + Vite + TypeScript.
- CSS modular o una estrategia coherente de CSS. No mezclar múltiples sistemas de estilo sin necesidad.
- `lucide-react` para iconografía, si se necesita.
- Sitio de una sola página con anclas; no añadir router ni backend salvo que haya un requisito comprobado.
- El sitio SBN_MCP seguirá siendo una aplicación externa, accesible por enlaces configurables.

## Diseño
- Inspiración estructural en https://dtsr-pied.vercel.app/, pero no copiar código, textos, estadísticas ni identidad de ese portafolio.
- Identidad visual sobria de proyecto tecnológico institucional: azul profundo, azul de acento, superficies claras y contrastes accesibles.
- Diseño responsive y accesible, sin animaciones excesivas.
- Priorizar capturas reales, fotografías de campo y diagramas legibles.
- Evitar stock fotográfico genérico como sustituto de evidencias reales.
- Todo control interactivo debe hacer lo que promete; no crear formularios falsos, barras de habilidades decorativas ni números animados ficticios.

## Accesibilidad y calidad
- Objetivo WCAG 2.2 AA razonable: estructura semántica, foco visible, teclado, contraste, labels, texto alternativo y respeto por `prefers-reduced-motion`.
- Los botones de enlaces externos indican claramente el destino y usan `rel="noopener noreferrer"` cuando proceda.
- Optimizar imágenes, mantener alt text descriptivo y evitar texto importante incrustado solo en imágenes.
- Ejecutar build, lint y pruebas disponibles. Corregir errores antes de declarar terminado.
- Revisar vistas móviles, tablet y escritorio.

## Definición de terminado
1. El contenido coincide con la especificación y las fuentes.
2. Los enlaces se pueden configurar desde un único archivo de contenido.
3. Las secciones y galerías funcionan en desktop y móvil.
4. Capturas pendientes de privacidad no se sirven públicamente.
5. `npm run build` pasa.
6. Se documentan instalación, ejecución local y publicación.
7. El QR de la defensa queda pendiente hasta disponer de la URL pública final.
