# Fase 4 — Revisión de capturas y diagramas

## Capturas del Manual de Usuario

Las 18 capturas se revisaron visualmente en conjunto y se consideraron internamente. Ninguna se copia a `public/`: contienen datos de inventario, valores, datos personales, ubicaciones, historiales o ajustes operativos según la pantalla. “Posible tras sanitizar” significa que puede evaluarse una versión recortada/anonimizada y autorizada; no es aprobación para publicarla.

| Archivo | Hallazgo de privacidad (categoría) | Decisión |
|---|---|---|
| `01-login.png` | La pantalla de acceso y su presentación requieren confirmar que no muestre dirección interna ni detalles de autenticación. | Posible tras revisar/recortar y aprobar. |
| `02-dashboard.png` | Panel con indicadores y valores patrimoniales; contradice métricas aún no conciliadas. | Excluir hasta redacción/anonimización y aprobación de cifras. |
| `03-inventario-catalogo.png` | Catálogo con identificadores, bienes y ubicaciones. | Excluir hasta anonimización completa. |
| `04-ficha-bien.png` | Ficha con detalle patrimonial y ubicación. | Excluir hasta anonimización completa. |
| `05-edicion-bien.png` | Formulario con códigos/datos de un activo. | Excluir hasta anonimización completa. |
| `06-nuevo-movimiento.png` | Formulario de movimiento y selección de áreas/personas. | Excluir hasta anonimización completa. |
| `07-acta-traslado.png` | Acta con información patrimonial y trazabilidad. | Excluir hasta anonimización y autorización específica. |
| `08-control-mural.png` | Tabla con activos, dependencias y valores/campos patrimoniales. | Excluir hasta anonimización completa. |
| `09-verificaciones.png` | Registro de verificaciones y responsables. | Excluir hasta anonimización completa. |
| `10-reporte-bm1.png` | Datos agregados y filas de activos; cifras sujetas a conciliación. | Excluir hasta redacción y aprobación de métricas. |
| `11-reporte-bm2.png` | Datos de desincorporaciones y valores. | Excluir hasta anonimización y aprobación. |
| `12-reporte-bm3.png` | Filas de movimientos e indicadores agregados. | Excluir hasta anonimización y aprobación. |
| `13-reporte-bm4.png` | Resumen con valores y agregados patrimoniales. | Excluir hasta conciliación de métricas y anonimización. |
| `14-auditoria.png` | Historial de usuarios/acciones y trazabilidad operativa. | Excluir; preparar una captura sintética solo con autorización. |
| `15-gestion-usuarios.png` | Nombres/cuentas, estados y controles de usuario. | Excluir hasta anonimización completa. |
| `16-nuevo-usuario.png` | Formulario de datos personales y acceso. | Excluir; no usar formularios con campos reales. |
| `17-editar-usuario.png` | Datos de cuenta y controles de restablecimiento. | Excluir por riesgo de identidad y seguridad. |
| `18-configuracion.png` | Parámetros de correo/servidor y configuración. | Excluir por exposición operativa y de seguridad. |

## Diagramas del Manual Técnico

| Archivo | Hallazgo | Decisión |
|---|---|---|
| `01-diagrama-clases.jpeg` | Presenta clases/controladores y detalles del modelo de datos; la legibilidad no elimina la exposición técnica. | No publicar la imagen fuente; si se solicita, redibujar una vista general aprobada sin campos ni detalles operativos. |
| `02-diagrama-casos-de-uso.png` | Expone permisos por perfil y cinco perfiles, en discrepancia con otra fuente que resume tres. | No publicar hasta conciliar roles; redibujar solo con aprobación. |
| `03-mapa-mental-modulos.png` | Muestra módulos; incluye mantenimiento, que no coincide claramente con el alcance funcional presentado en otras secciones. | No publicar hasta confirmar módulos vigentes y autorización; se puede redibujar una vista general validada. |

## Implementación derivada

- No hay capturas ni diagramas internos bajo `public/`.
- La sección de recorrido funcional contiene una síntesis textual de módulos descritos en manuales. No incorpora capturas ni datos patrimoniales. La SPA no implementa autenticación ni restricción de audiencia; si se publica, su contenido será accesible a quien tenga la URL.
- De las fotos de campo, la 01 muestra papeles en varios escritorios; la 02 también incluye documentos; la 05/06 muestran una URL local de desarrollo y documentos; la 07 contiene documentos impresos sobre la mesa. Todas siguen en la carpeta fuente privada de assets y no se sirven desde `public/`.
- La foto de fachada `08-fachada-maternidad-concepcion-palacios.jpg` es la única imagen fotográfica puesta en `public/`; no se observan documentos o datos patrimoniales en ella.
- La fotografía `06-pantalla-service-unavailable-no-publicar.jpg` no se utiliza.

## Pendientes antes de ampliar la galería

El equipo puede proveer capturas sintéticas o versiones con datos cubiertos de manera irreversible y confirmar el permiso para divulgarlas. La revisión debe repetirse sobre el archivo final exportado; aplicar CSS visual o difuminado reversible no cuenta como anonimización segura.
