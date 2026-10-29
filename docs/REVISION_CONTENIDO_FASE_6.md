# Fase 6 — Auditoría de afirmaciones

| Afirmación incluida | Fuente | Estado editorial |
|---|---|---|
| Nombre completo SBN_MCP e institución beneficiaria | Especificación, Manual Técnico, documento principal | Incluida. |
| UPTEC-MS, PNF en Informática, Trayecto II y año 2026 | Especificación/documentos académicos | Incluidos conforme al texto de fuentes. Se omite Sección 7102 hasta confirmación. |
| El diagnóstico describe libros, documentos físicos y hojas separadas | Memoria del proyecto y texto aprobado de especificación | Presentado como hallazgo documentado; no se atribuye a una medición independiente. |
| Alcance: bienes nacionales tangibles, inventario, movimientos, verificaciones, reportes y trazabilidad | Manual Técnico y Manual de Usuario | Descrito como funciones documentadas; se aclara que eso no prueba el estado del host público. |
| Seguridad, acceso y trazabilidad descritos por manuales | Manuales | Presentación general, sin exponer implementación sensible ni reclamar certificación. Roles específicos quedan en general por discrepancia. |
| Tecnologías PHP, HTML, CSS, JavaScript, MySQL/MariaDB, MVC y XAMPP | Manual Técnico | Incluidas como documentación del stack, sin versiones. |
| Mejoras cualitativas en disponibilidad de datos, reportes y seguimiento | Especificación (narrativa cualitativa provisional) | Incluidas con atribución a evaluación documentada; métricas permanecen ocultas. |
| Métricas BM-4/optimización/localización | Memoria y especificación | Excluidas por conciliación pendiente de definición, muestra y método. |
| Cuatro integrantes | Manuales y especificación | Incluidos como equipo sin cargos ni contribuciones individuales. |
| Tutoría | Manual Técnico: Ing. Luis Sánchez; documento principal: referencia a Alfredo Oliveros | Omitida hasta crédito definitivo. |
| Roles de usuario | Manuales con cinco perfiles; memoria con tres perfiles | No se enumeran; se usa una descripción general y se marca pendiente. |
| Estado de `mcp.gt.tc` | URLs del equipo y memoria con falta de servidor institucional en el momento de redacción | No se llama producción. Se indica estado/autorización pendientes; enlaces probados retornaron HTTP 200. |
| Fecha y propósito de las fotografías | ASSET_MANIFEST y observación visual | No se asignan fechas ni actividades concretas. Solo está publicada la fachada; las de oficina se retienen por documentos/pantallas visibles. |
| Capturas, diagramas y documentos descargables | Recursos privados/manifest | Ninguno se publica ni se ofrece para descargar; queda pendiente de autorización y sanitización. |
| URL pública definitiva / QR | No disponible | No se genera QR; documentación deja la URL final pendiente. |

## Prueba de enlaces (28 de octubre de 2026)

Se realizó una solicitud GET a cada URL entregada. Landing, login y dashboard devolvieron HTTP 200. Esto comprueba respuesta HTTP; no confirma una sesión nueva, autorización del host, estado de producción ni aprobación institucional. En particular, el dashboard puede requerir autenticación.

## Pendientes de validación antes de aprobar el sitio

Confirmar crédito tutorial, sección académica, roles, métricas, estado del alojamiento, fotos de actividades con fondos sanitizados, capturas/diagramas públicos y documentos descargables. Los controles de privacidad del sitio deben volver a revisarse contra los archivos finales antes de desplegar.
