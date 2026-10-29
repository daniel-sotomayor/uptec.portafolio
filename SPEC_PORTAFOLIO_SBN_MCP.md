# Especificación maestra — Portafolio web SBN_MCP

**Versión:** 1.0 · **Fecha de preparación:** 28 de octubre de 2026  
**Proyecto:** Sistema para la Automatización de Procesos y Resguardo de Activos del Departamento de Bienes Nacionales en la Maternidad Concepción Palacios.  
**Nombre corto:** Sistema de Gestión de Bienes Nacionales — SBN_MCP.

---

## 1. Propósito del portafolio

Construir un portafolio web que presente de forma profesional y verificable el proyecto sociotecnológico SBN_MCP. Debe explicar:

1. Qué necesidad institucional se identificó.
2. Qué solución se propuso.
3. Cómo el equipo llevó adelante el proyecto.
4. Qué funcionalidades documenta el sistema.
5. Qué evidencias visuales existen del trabajo de campo, desarrollo y revisión.
6. Qué tecnologías y estructura técnica sustentan la solución.
7. Qué resultados se evaluaron y con qué limitaciones.
8. Qué documentos permiten ampliar la información.

El portafolio debe servir para la defensa académica, la consulta del jurado y la presentación del trabajo al personal de la institución. No es una página comercial, una landing de servicios médicos ni una sustitución del sistema de inventario.

## 2. Lineamientos obligatorios del profesor

La transcripción del audio exige que el portafolio:

- Sea un bloque publicado en Internet, alojado en un portal disponible.
- Hable de la experiencia de ejecución del proyecto.
- Explique qué se consiguió, qué se propuso y cómo se implementó.
- Incluya fotografías reales de la ejecución: equipo trabajando, reuniones, interacción con la comunidad, implementación y pruebas, siempre que esas actividades se hayan realizado.
- Incluya dentro de la presentación académica un enlace directo o un código QR que conduzca al portafolio/blog público.

Por tanto, la galería de trabajo de campo no debe ser decorativa ni opcional: es una sección principal del contenido.

## 3. Audiencia y tono

### Audiencias
- Profesorado y jurado evaluador.
- Personal autorizado de la Maternidad Concepción Palacios.
- Comunidad académica del PNF en Informática.
- Personas con interés técnico en comprender la solución.

### Tono
- Español claro, académico y profesional.
- Explicar abreviaturas la primera vez que aparecen.
- Evitar afirmaciones publicitarias, hipérboles y estadísticas sin fuente.
- Distinguir hechos documentados de mejoras propuestas y próximos pasos.
- No presentar el sistema como desplegado de forma permanente en la infraestructura del hospital sin confirmación.

## 4. Datos de identidad del proyecto

Usar como información de proyecto, tras conservar la redacción oficial del documento:

- **Nombre completo:** Sistema para la Automatización de Procesos y Resguardo de Activos del Departamento de Bienes Nacionales en la Maternidad Concepción Palacios.
- **Nombre corto:** SBN_MCP.
- **Institución beneficiaria:** Maternidad Concepción Palacios.
- **Casa de estudios:** Universidad Politécnica Territorial de Caracas “Mariscal Sucre” (UPTEC-MS).
- **Programa:** Programa Nacional de Formación en Informática.
- **Modalidad:** Proyecto sociotecnológico, Trayecto II. El documento principal indica Sección 7102; confirmar antes de publicar si debe mostrarse.
- **Integrantes documentados:** Karina Goyo, Arianny Martínez, Swndiry Pérez y Daniel Sotomayor.
- **Tutor documentado en manuales:** Ing. Luis Sánchez. El documento principal también presenta a Alfredo Oliveros en el contexto tutorial; confirmar el crédito académico oficial antes de fijarlo en la web.
- **Año académico del material:** 2026.

No asignar tareas individuales a integrantes sin una fuente confirmada.

## 5. Referencia visual

Referencia: https://dtsr-pied.vercel.app/

Tomar como inspiración general:
- Portada de impacto con titular fuerte y dos acciones principales.
- Menú superior limpio y persistente.
- Secciones bien diferenciadas con títulos y descripciones breves.
- Tarjetas visuales para destacar módulos o capacidades.
- Proyecto como elemento central y evidencia visual.
- Jerarquía tipográfica, espacios amplios y composición profesional.

No copiar textos personales, cifras, secciones comerciales, estilo de marca, código ni activos del sitio de referencia. DTSR.dev es un portafolio personal; SBN_MCP debe presentarse como proyecto sociotecnológico de equipo e institución pública.

## 6. Dirección visual propuesta

### Paleta
- Fondo principal: azul noche/navy muy oscuro para el Hero y el cierre.
- Superficies de contenido: blanco o gris muy claro.
- Acento: azul institucional brillante.
- Texto: gris carbón sobre fondo claro y blanco sobre oscuro.
- Colores de estado solo donde aporten significado, no como decoración.

Guardar tokens de color como variables CSS (`--color-bg`, `--color-surface`, `--color-primary`, `--color-text`, `--color-muted`, etc.). No fijar colores dispersos por cada componente.

### Tipografía
Tipografía sans-serif legible (por ejemplo Inter o una alternativa de sistema). No depender de una fuente externa para que la página se vea correctamente.

### Estilo
- Profesional, tecnológico, sobrio y accesible.
- Tarjetas de bordes suaves y sombras discretas.
- Iconografía coherente (Lucide o equivalente).
- Animación limitada y respetando `prefers-reduced-motion`.
- Fotografías auténticas y capturas propias; no usar imágenes genéricas para fingir actividad institucional.
- No sobrecargar la página con animaciones de contadores, barras de destreza ni métricas decorativas.

## 7. Navegación

### Menú principal
1. Inicio
2. El proyecto
3. Experiencia
4. Funcionalidades
5. Tecnología
6. Resultados
7. Documentación
8. Equipo

Botón destacado: **Abrir SBN_MCP**.

En móvil, el menú debe funcionar con teclado, estado expandido comprensible y cierre tras seleccionar un enlace.

### Enlaces externos de proyecto
- Landing institucional: https://mcp.gt.tc/MCP/?i=1
- Login de SBN_MCP: https://mcp.gt.tc/MCP/apps/SBN_MCP/public/login?i=1
- Dashboard: https://mcp.gt.tc/MCP/apps/SBN_MCP/public/dashboard

El CTA principal “Abrir SBN_MCP” debe apuntar al login, que es la entrada de acceso indicada por el equipo. El enlace directo al dashboard será secundario y solo se mostrará si se verifica su utilidad para una sesión nueva. Probar los enlaces antes de publicar. No incluir credenciales.

## 8. Arquitectura de la página y contenido propuesto

La página puede ser de una sola ruta con secciones ancladas. Crear componentes reutilizables, por ejemplo: `Navbar`, `Hero`, `SectionHeading`, `FeatureCard`, `EvidenceGallery`, `SystemScreenshotGallery`, `MetricCard`, `TechStack`, `DocumentCard`, `TeamCard` y `Footer`.

### Sección 1 — Hero / Inicio
**Objetivo:** presentar el sistema en segundos.

Copy recomendado:
- Eyebrow: `PROYECTO SOCIOTECNOLÓGICO · PNF EN INFORMÁTICA · 2026`
- Título: `SBN_MCP`
- Subtítulo: `Gestión patrimonial con más control y trazabilidad.`
- Descripción: `Sistema web orientado a centralizar la información de los bienes nacionales, gestionar sus movimientos y facilitar el seguimiento patrimonial de la Maternidad Concepción Palacios.`
- CTA principal: `Explorar el proyecto`
- CTA secundario: `Abrir SBN_MCP`
- Microtexto: `Desarrollado por estudiantes de la UPTEC-MS como proyecto sociotecnológico.`

Visual principal recomendado: captura del dashboard extraída del manual, pero solo después de revisar/anonimizar los valores y datos de muestra. Si no puede utilizarse todavía, emplear una composición con módulos e iconos sin fingir que es la pantalla real.

### Sección 2 — El proyecto en breve
**Objetivo:** contextualizar de qué se trata, sin métricas dudosas.

Tarjetas:
- `Inventario centralizado` — Registro y consulta estructurada de los activos.
- `Movimientos documentados` — Seguimiento de traslados y sus actas.
- `Reportes patrimoniales` — Generación de formularios y resúmenes documentados.
- `Trazabilidad` — Registro de las operaciones y consulta de su historial.

No incluir contadores de bienes, número de usuarios ni porcentajes en esta sección hasta validar qué datos del entorno actual son publicables.

### Sección 3 — Problema identificado
**Título:** `El desafío: información patrimonial dispersa`

Texto recomendado:
`El diagnóstico descrito en el proyecto identificó una gestión apoyada en libros de actas, documentos físicos y hojas de cálculo separadas. Esta dinámica dificultaba mantener registros consistentes, localizar activos, documentar movimientos y preparar reportes patrimoniales de forma oportuna.`

Puntos visuales:
- Registros dispersos.
- Riesgo de duplicidad e inconsistencias.
- Dificultad para conocer ubicación y responsable.
- Elaboración manual de reportes.

Visual: comparación “Proceso manual” frente a “Proceso centralizado”, basada en el diagnóstico del documento. No presentar ilustraciones como si fueran fotografías documentales.

### Sección 4 — Propuesta y objetivos
**Título:** `Una solución web para centralizar la gestión de bienes`

Texto recomendado:
`SBN_MCP se diseñó para apoyar la administración de bienes nacionales mediante una plataforma que reúne el registro, la consulta, el seguimiento de ubicaciones, los movimientos, las verificaciones y la generación de documentación patrimonial.`

Objetivo general resumido:
`Desarrollar un sistema web para automatizar procesos y fortalecer el resguardo de los activos del Departamento de Bienes Nacionales de la Maternidad Concepción Palacios.`

Objetivos específicos en pasos:
1. Diagnosticar los procesos de gestión de bienes.
2. Planificar la arquitectura funcional.
3. Implementar la solución web.
4. Evaluar el sistema desarrollado.

### Sección 5 — Experiencia de ejecución y trabajo con la comunidad
**Requisito central del profesor.**

**Título:** `Del diagnóstico al desarrollo`

**Introducción:**
`El proyecto comprendió actividades de acercamiento institucional, revisión de procesos administrativos y desarrollo de una solución web orientada a las necesidades identificadas en la gestión de bienes nacionales. La galería reúne registros del entorno de trabajo, la interacción con personal institucional y la presentación de la interfaz desarrollada.`

Crear una galería con 4–7 fotografías seleccionadas. Mostrar:
- Fotografía auténtica.
- Pie breve.
- Etapa de trabajo, si se confirma.
- Fecha solo si está confirmada; los nombres de archivo sugieren fechas, pero no tratarlas como fecha oficial sin validar.

Pies de foto iniciales sugeridos:
- `Visita de trabajo en el entorno administrativo de la institución.`
- `Intercambio con personal institucional durante una actividad relacionada con el proyecto.`
- `Presentación de la interfaz web desarrollada para SBN_MCP.`
- `Reunión de trabajo y revisión del proyecto frente a un equipo informático.`
- `Maternidad Concepción Palacios, institución beneficiaria del proyecto.`

No afirmar que una imagen documenta “prueba formal”, “aceptación del usuario”, “implementación en producción” o “capacitación” si el equipo no confirma esa actividad.

### Sección 6 — Funcionalidades del sistema
**Título:** `Módulos que articulan el control patrimonial`

Mostrar tarjetas agrupadas:

1. **Autenticación y acceso** — Inicio de sesión, recuperación y cambio de contraseña según el manual.
2. **Dashboard** — Resumen visual e indicadores disponibles en el sistema.
3. **Inventario** — Registro, edición, búsqueda y consulta de fichas de activos.
4. **Movimientos y actas** — Solicitudes de asignación/traslado, aprobación o rechazo, cambios de ubicación y documentación asociada.
5. **Control Mural y verificaciones** — Consulta de activos por área y registro de verificación física.
6. **Reportes BM-1 a BM-4** — Listados y resúmenes patrimoniales documentados.
7. **Auditoría y trazabilidad** — Consulta del historial de operaciones.
8. **Usuarios y roles** — Administración de cuentas, perfiles y permisos.
9. **Configuración y respaldos** — Mostrar solo las funciones que se confirmen en la versión actual.
10. **Notificaciones** — Mostrar solo si el mecanismo está implementado y comprobado.

Cada tarjeta puede abrir un panel de detalle o desplazarse a una captura real. No afirmar que una característica opera en producción únicamente porque aparezca en el manual.

### Sección 7 — Recorrido visual / demostración
**Título:** `Así se organiza el trabajo en SBN_MCP`

Galería de capturas de la aplicación, preferiblemente con ampliación accesible en un diálogo o lightbox:
- Acceso.
- Dashboard.
- Catálogo de inventario.
- Ficha del bien.
- Registro/edición del bien.
- Formulario de movimiento y acta.
- Control Mural/verificación.
- Reportes BM-1, BM-2, BM-3 y BM-4.
- Auditoría.

Para cada captura: título, breve descripción de lo que ilustra y texto alternativo. No poner capturas de páginas diferentes bajo un título que no les corresponda.

**Privacidad:** las capturas extraídas de los manuales están en `assets/solo_revision/`. No copiarlas a `public/` hasta revisar y difuminar/ocultar nombres personales, cédulas, correos, teléfonos, IP, valores patrimoniales, identificadores de bienes, ubicaciones internas y cualquier dato no autorizado para publicación. Si no puede anonimizarse con certeza, no utilizarla públicamente.

### Sección 8 — Arquitectura y tecnologías
**Título:** `La arquitectura detrás de la solución`

Explicación breve:
`La documentación técnica describe una arquitectura web cliente-servidor con el patrón Modelo–Vista–Controlador (MVC), que separa la presentación, la lógica de procesamiento y el acceso a los datos.`

Stack a presentar de forma visual:
- PHP — lógica del lado servidor.
- HTML5 — estructura de interfaces.
- CSS3 — presentación visual.
- JavaScript — interacción y validación del lado cliente cuando aplica.
- MySQL/MariaDB — persistencia relacional.
- MVC — separación de responsabilidades.
- Apache/Nginx y XAMPP — entorno de servidor/desarrollo documentado.

No fijar números de versión en el portafolio hasta confirmar la versión real desplegada. Los manuales mencionan rangos compatibles y pueden corresponder a requisitos, no necesariamente a la versión exacta que ejecuta el host.

Diagramas de referencia: arquitectura/clases, casos de uso y mapa de módulos, en `assets/solo_revision/diagramas_manual_tecnico/`. Mejorar su legibilidad o redibujarlos en SVG/HTML si la imagen original es difícil de leer. No reconstruir relaciones técnicas no respaldadas por la documentación.

### Sección 9 — Seguridad, perfiles y control
**Título:** `Acceso controlado y trazabilidad de operaciones`

Contenido documentado para revisar antes de publicación:
- Control de acceso basado en roles.
- Contraseñas almacenadas mediante hash bcrypt (según manual técnico).
- Protección de formularios CSRF (según manual).
- Control de intentos fallidos (según manual).
- Bitácora con operaciones auditadas.

No presentar estas características como certificación de seguridad ni como auditoría independiente. Evitar publicar detalles operativos que faciliten ataques.

**Discrepancia de roles:** el Manual de Usuario distingue Administrador, Gerencia de Bienes Nacionales, Registrador, Controlador de Inventario y Validador de Inventario; el documento del proyecto describe tres perfiles principales en otro apartado. Codex debe crear el contenido editable y marcarlo pendiente de confirmación, no decidir unilateralmente. Hasta validación, usar una descripción general: `Los permisos de acceso se organizan de acuerdo con el perfil y las responsabilidades del usuario.`

### Sección 10 — Resultados y evaluación
**Título:** `Resultados observados durante la evaluación`

Explicar que la evaluación del proyecto comparó procesos manuales con las funciones automatizadas. Presentar los resultados con transparencia y contexto.

**Métricas que necesitan conciliación previa a publicación:**
- El documento reporta que el BM-4 pasó de aproximadamente 12–15 días hábiles a menos de cinco segundos.
- Otra tabla presenta una optimización del 99 %, valor que no se corresponde claramente con esos tiempos.
- Se reporta un 99,8 % de localización exitosa de activos; otros pasajes comparan precisión anterior con posterior de modo que conviene confirmar la definición, muestra y método de medición.

No publicar estas cifras como indicadores finales hasta que el equipo revise la versión definitiva del documento, su método de cálculo y qué datos pueden compartirse. Codex debe crear un archivo de datos configurable con estado `approved: false` o dejar inicialmente una narrativa cualitativa sin cifras destacadas. No corregir automáticamente los números ni inventar una metodología.

Texto cualitativo provisional:
`La evaluación documentada describe mejoras en la disponibilidad de información patrimonial, la generación de reportes y el seguimiento de ubicaciones y movimientos. Los indicadores cuantitativos se incorporarán cuando el equipo valide su método de medición y versión definitiva.`

### Sección 11 — Documentación
**Título:** `Documentación del proyecto`

Tarjetas sugeridas:
- Manual de Usuario SBN_MCP.
- Manual Técnico SBN_MCP.
- Documento principal del Proyecto Sociotecnológico.
- Diagrama de casos de uso.
- Diagrama de clases/arquitectura.
- Mapa de módulos.

Los documentos fuente permanecen en `contexto_privado/` y no se sirven como archivos públicos por defecto. Crear enlaces de descarga solo cuando el equipo apruebe versiones sanitizadas para difusión académica. Si no hay documento público aprobado, mostrar una tarjeta sin botón de descarga o dejarla fuera.

### Sección 12 — Equipo y metodología
**Título:** `Equipo de desarrollo`

Integrantes que aparecen en manuales:
- Karina Goyo.
- Arianny Martínez.
- Swndiry Pérez.
- Daniel Sotomayor.

Institución académica: Universidad Politécnica Territorial de Caracas “Mariscal Sucre”, PNF en Informática.

Metodología descrita por el proyecto: Investigación-Acción Participativa (IAP) y marco ágil Scrum. Explicar en palabras simples: acercamiento a la comunidad para comprender el proceso, definición de necesidades, ciclos de desarrollo y revisión de la solución.

No crear perfiles personales, cargos o contribuciones individuales sin confirmación.

### Sección 13 — Alcance, limitaciones y próximos pasos
**Título:** `Estado actual y siguientes pasos`

Texto recomendado:
`El proyecto delimita su alcance a la gestión de bienes nacionales tangibles del Departamento de Bienes Nacionales. La documentación también identifica condiciones de infraestructura que deben considerarse para una operación institucional sostenida.`

La memoria del proyecto indica que el hospital no disponía de servidor propio para el despliegue al redactarse el documento. Ahora el equipo ha facilitado URLs alojadas en `mcp.gt.tc`; confirmar si corresponden a una demostración temporal, un host de desarrollo o un despliegue autorizado. No llamar a la versión actual “producción institucional” sin confirmar hosting, protección de datos, respaldo y autorización.

Posibles próximos pasos (rotular como pendientes, no como entregados): validación con usuarios autorizados, alojamiento definitivo, capacitación, revisión de seguridad, política de respaldos y mantenimiento.

### Sección 14 — CTA final y footer

Texto de cierre:
`Una solución desarrollada para apoyar una gestión patrimonial más organizada, trazable y accesible.`

Botones:
- `Abrir SBN_MCP` → enlace de login.
- `Volver al inicio`.

Footer:
- Nombre corto del sistema.
- Proyecto Sociotecnológico / PNF en Informática / UPTEC-MS / 2026.
- Enlaces internos de navegación.
- Enlace a la landing institucional cuando sea útil.
- No publicar correos personales ni formularios que no tengan backend.

## 9. Fotografías del proyecto

El usuario confirmó que el equipo tiene permiso para utilizar las fotografías proporcionadas. Mantener los archivos originales en `assets/fotos_campo/` y usar un manifiesto para controlar los pies de foto.

Selección primaria sugerida:
- `01-visita-entorno-administrativo.jpg` — visita/contexto de trabajo.
- `02-interaccion-personal-institucional.jpg` — interacción visible con personal.
- `04-visita-oficina-seguimiento.jpg` — imagen alternativa; comparar con otras antes de publicar.
- `05-presentacion-interfaz-laptop-angulo1.jpg` — interfaz azul en portátil; no demuestra por sí sola que todos los módulos funcionen.
- `06-presentacion-interfaz-laptop-angulo2.jpg` — ángulo alternativo; evitar repetir la misma escena si la galería queda saturada.
- `07-reunion-revision-laptop.jpg` — reunión frente a un portátil; no llamarla validación formal sin confirmación.
- `08-fachada-maternidad-concepcion-palacios.jpg` — contexto de institución beneficiaria; confirmar procedencia en créditos si es posible.

`03-visita-oficina-plano-general.jpg` es alternativa redundante. Las fotos de `assets/solo_revision/fotos_opcionales/` requieren revisión; en particular, el archivo de pantalla “Service Unavailable” no debe usarse como evidencia de prueba exitosa.

Pies de foto deben describir lo visible, sin inventar fechas ni tareas. Si se muestran fechas, obtener confirmación del equipo; las fechas incrustadas en nombre de archivo no bastan por sí solas para describir toda la actividad.

## 10. QR y entrega de la defensa

El profesor exige que la presentación académica tenga un enlace o un QR que lleve al portafolio. Por ello:
1. Publicar el portafolio y confirmar URL final.
2. Generar el QR con esa URL estable, no con `localhost`, previsualizaciones temporales ni URL de build.
3. Añadir QR y enlace escrito a la presentación de defensa.
4. Probar el QR desde otro teléfono y una red diferente.

No es obligatorio mostrar un QR que apunte a sí mismo dentro del sitio web. El QR principal pertenece a las diapositivas o al material de defensa. El sitio puede tener “copiar enlace” como función adicional si se implementa de forma real.

## 11. Reglas de datos y privacidad

- Tratar las capturas de manuales como recursos internos hasta su revisión.
- No publicar credenciales ni datos de acceso.
- No presentar datos del inventario como información pública si pueden revelar activos, ubicación, valor, serial, responsables o vulnerabilidades.
- No inventar datos, indicadores, testimonios ni autorizaciones.
- No incluir un formulario de contacto ficticio sin backend.
- No usar `target="_blank"` sin `rel="noopener noreferrer"` en enlaces externos.
- Revisar que el contenido pueda usarse por teclado y lector de pantalla.

## 12. Implementación técnica del portafolio

### Stack recomendado
- React + Vite + TypeScript.
- Una sola página con navegación por anclas inicialmente.
- CSS modular o Tailwind CSS; escoger una estrategia y mantenerla consistente.
- `lucide-react` opcional para iconos.
- No crear backend ni una base de datos para el portafolio.
- No modificar el sistema SBN_MCP original.

### Estructura sugerida
```
portafolio-sbn-mcp/
├── AGENTS.md
├── README.md
├── SPEC_PORTAFOLIO_SBN_MCP.md
├── PROMPTS_CODEX.md
├── public/
│   ├── images/
│   │   ├── evidencias/
│   │   ├── sistema/      # solo capturas aprobadas y anonimizadas
│   │   └── diagramas/    # diagramas aprobados/legibles
│   └── docs/             # solo documentos aprobados para descarga
├── src/
│   ├── components/
│   ├── sections/
│   ├── data/
│   │   ├── project.ts
│   │   ├── evidence.ts
│   │   ├── features.ts
│   │   └── results.ts
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
└── tests/                # si el stack de pruebas lo requiere
```

No mover automáticamente `contexto_privado/` ni `assets/solo_revision/` a `public/`.

### Contenido configurable
Mover enlaces, textos de tarjetas, créditos, gallery metadata y métricas a archivos de datos, evitando fragmentos de texto duplicados en múltiples componentes.

### Interacciones reales
- Menú responsive.
- Navegación por anclas.
- Modal/lightbox accesible para las capturas si se implementa.
- Enlaces externos al login.
- Descargas solo de recursos aprobados.
- Ningún formulario falso ni botón sin acción.

## 13. Criterios de aceptación

El trabajo se considerará listo para revisión cuando:

1. La página tenga todas las secciones definidas y textos en español.
2. La navegación funciona con mouse, teclado y pantalla móvil.
3. El botón principal lleva al login de SBN_MCP.
4. Las fotografías de ejecución aparecen en una galería con pies de foto honestos.
5. La galería de sistema solo usa capturas aprobadas y anonimizadas.
6. No se publican los documentos fuente privados.
7. Las métricas pendientes no se muestran como afirmaciones finales.
8. El diseño se adapta a 360 px, 768 px, 1024 px y pantallas amplias.
9. Existe buen contraste, foco visible, textos alternativos y soporte para movimiento reducido.
10. `npm run build` termina sin errores.
11. Los enlaces se prueban y los errores se documentan.
12. README explica cómo ejecutar y desplegar.
13. La URL pública definitiva está documentada y el QR se genera solo después de confirmarla.

## 14. Referencias técnicas útiles

- Referencia visual compartida: https://dtsr-pied.vercel.app/
- Buenas prácticas oficiales para Codex: https://learn.chatgpt.com/docs/learn/best-practices
- Guía `AGENTS.md`: https://learn.chatgpt.com/docs/agent-configuration/agents-md
- W3C WCAG: https://www.w3.org/TR/WCAG22/
- Vercel/Vite docs: https://vercel.com/docs/frameworks/frontend/vite

## 15. Pendientes de confirmación humana antes de publicar

1. ¿Qué perfiles de usuario deben aparecer: los cinco detallados en el Manual de Usuario o un resumen de tres perfiles del documento principal?
2. ¿Cuál es el crédito de tutoría definitivo para el footer?
3. ¿Cuáles métricas de resultados y metodología de medición aprueba el equipo para divulgar?
4. ¿El alojamiento `mcp.gt.tc` es temporal, de demostración o aprobado para uso institucional?
5. ¿Cuáles capturas del sistema pueden compartirse tras anonimización?
6. ¿Cuáles documentos se autorizan como descargas públicas?
7. ¿Cuáles fotos corresponden específicamente a diagnóstico, reunión, presentación, pruebas o seguimiento? No inferirlo solo desde la imagen.
