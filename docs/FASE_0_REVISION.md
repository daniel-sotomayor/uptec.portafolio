# Fase 0 — Orientación y revisión de fuentes

## Arquitectura propuesta

- SPA de una página en React, Vite y TypeScript, con anclas estables y estilos CSS propios.
- Componentes/sections en `src/`, contenidos editables en `src/data/` y tokens visuales globales.
- Evidencias fotográficas seleccionadas en `public/images/evidencias/`; capturas y documentos privados fuera del árbol público.
- Enlaces externos configurados en `src/data/project.ts`; no se modifica ni incorpora código del sistema PHP.

## Inventario de recursos

| Recurso | Estado | Decisión inicial |
|---|---|---|
| Foto 08 de fachada | Permiso indicado por equipo; revisión visual hecha | Única fotografía copiada a `public/`; no se observan datos/documentos patrimoniales. |
| Fotos de oficina y pantallas | Permiso de uso indicado, pero revisión completa muestra documentos y/o dirección local en pantallas | Se conservan los originales en `assets/`; no se publican hasta sanitizar de forma segura. |
| Fotos 03 y 04 | Opcionales/redundantes | No usar inicialmente. |
| Fotos opcionales 05/06/08 | Revisión previa; 06 expresamente no es prueba de éxito | No publicar. La interfaz observada en laptop no verifica los módulos. |
| Capturas de manual (18) | `Review before public` | Excluidas de `public/`; requieren inspección de datos y anonimización. |
| Diagramas de manual (3) | `Review before public` | Excluidos de `public/`; falta confirmar legibilidad y vigencia. |
| DOCX en `contexto_privado/` | Fuentes privadas | No publicar ni servir como descargas. |

## Hechos documentados y discrepancias

- El nombre oficial del proyecto, institución beneficiaria, UPTEC-MS, PNF en Informática, Trayecto II y año académico 2026 aparecen en la especificación y documentos.
- Los manuales documentan funciones de inventario, movimientos, Control Mural, verificaciones, reportes, auditoría y administración. Esto acredita contenido documental, no disponibilidad actual ni producción.
- Los manuales identifican cuatro integrantes: Karina Goyo, Arianny Martínez, Swndiry Pérez y Daniel Sotomayor. No se atribuyen cargos ni contribuciones individuales.
- El Manual Técnico nombra a Ing. Luis Sánchez como asesor/tutor; la memoria del proyecto también menciona a Alfredo Oliveros en contexto tutorial. Crédito definitivo pendiente; no se muestra tutor en la web.
- El Manual Técnico describe cinco perfiles (Administrador, Gerencia, Registrador, Controlador y Validador); la especificación advierte que el documento principal habla de tres. Se usa descripción general de permisos.
- Resultados cuantitativos no conciliados: tiempos de reporte, porcentaje de optimización y precisión/localización usan cifras y comparaciones cuya muestra y método requieren validación. Se muestran únicamente hallazgos cualitativos provisionales.
- La memoria menciona falta de servidor institucional propio al momento de redactarse; se entregaron URLs bajo `mcp.gt.tc`, pero no consta si son demostración, desarrollo o despliegue institucional autorizado.
- Metodología IAP/Scrum está descrita en el proyecto; no se atribuyen etapas a fotografías concretas.
- No se muestran cargos individuales, sección 7102, tutor ni fechas de imágenes mientras no se confirme la redacción pública definitiva.

## Riesgos de privacidad

- Capturas y diagramas pueden exponer nombres, identificadores personales, ubicación interna, inventario, importes, direcciones IP, rutas o configuración. Permanecen fuera de `public/`.
- Las fotos autorizadas muestran personas y espacios de trabajo; algunas contienen monitores o documentos en segundo plano. La selección evita fotos centradas en pantallas. Se mantienen captions generales sin fechas.
- Las URL externas pueden permitir acceso a un sistema con información patrimonial. No se ofrecen credenciales, dashboard secundario ni afirmación de que el host sea institucional/producción.
- No se publican documentos fuente, resultados cuantitativos pendientes ni detalles de control técnico que puedan confundirse con auditoría de seguridad.

## Plan por etapas y comprobaciones

1. Fase 1: base SPA, identidad visual, navegación responsive, anclas, hero y footer; build.
2. Fase 2: todas las secciones y contenido editable en datos; sin cifras no aprobadas.
3. Fase 3: solo se integra la foto de fachada que no muestra datos patrimoniales; el resto queda en revisión.
4. Fase 4: clasificar cada captura/diagrama; no exponer hasta autorización y anonimización; placeholder explícito.
5. Fase 5: lint/build y revisión responsive, teclado, foco, movimiento reducido, enlaces y recursos.
6. Fase 6: contraste de afirmaciones con especificación y fuentes; pendientes identificados.
7. Fase 7: README de instalación/build y preparación Vercel sin publicar; QR pendiente de URL final.

Verificaciones clave: build exitoso, enlaces centralizados, ausencia de DOCX y `assets/solo_revision/` bajo `public/`, CTA al login documentado, métricas pendientes ocultas y sin despliegue automático.
