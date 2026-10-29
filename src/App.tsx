import { useState } from 'react'
import {
  ArrowDown, ArrowLeftRight, ArrowUpRight, BookOpen, Boxes, Check, ChevronRight,
  ClipboardCheck, FileBarChart, History, KeyRound, LayoutDashboard, Menu,
  PackageSearch, ShieldCheck, X,
} from 'lucide-react'
import {
  SiApache, SiCss, SiHtml5, SiJavascript, SiMariadb, SiMysql, SiNginx, SiPhp,
} from '@icons-pack/react-simple-icons'
import { features, fieldPhotos, navigation, project, team } from './data/project'

const featureIcons = [KeyRound, LayoutDashboard, PackageSearch, ArrowLeftRight, ClipboardCheck, FileBarChart, History]
const technologyIcons = [SiPhp, SiHtml5, SiCss, SiJavascript, SiMysql, SiMariadb, Boxes, SiApache, SiNginx]
const technologyColors = ['#777bb4', '#e34f26', '#1572b6', '#b89b00', '#4479a1', '#003545', '#3578d4', '#d22128', '#009639']

const workStages = [
  { n: '01', title: 'Diagnóstico', text: 'Reconocimiento de los procesos de Bienes Nacionales y de las dificultades asociadas al manejo de registros físicos y hojas de cálculo.', icon: BookOpen },
  { n: '02', title: 'Diseño y planificación', text: 'Organización de objetivos, módulos y estructura de la solución según las necesidades descritas en el proyecto.', icon: LayoutDashboard },
  { n: '03', title: 'Desarrollo', text: 'Construcción de una aplicación web para reunir el registro patrimonial, las consultas y los procesos asociados.', icon: Boxes },
  { n: '04', title: 'Evaluación documentada', text: 'Revisión cualitativa de la propuesta y de los resultados descritos en los documentos del proyecto.', icon: ClipboardCheck },
]

const systemModules = [
  { title: 'Inventario patrimonial', text: 'Organiza fichas de bienes para su registro, actualización, búsqueda y consulta.', icon: PackageSearch, tone: 'blue' },
  { title: 'Movimientos y actas', text: 'Documenta solicitudes, traslados, asignaciones y procesos de desincorporación.', icon: ArrowLeftRight, tone: 'cyan' },
  { title: 'Control y verificación', text: 'Apoya la consulta de bienes por área y el registro de verificaciones físicas.', icon: ClipboardCheck, tone: 'indigo' },
  { title: 'Reportes BM-1 a BM-4', text: 'Reúne la generación de reportes patrimoniales que describen los manuales.', icon: FileBarChart, tone: 'sky' },
  { title: 'Accesos y trazabilidad', text: 'Los documentos describen permisos por perfil y consulta del historial de operaciones.', icon: History, tone: 'navy' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="SBN_MCP, ir al inicio"><span className="brand-mark">S</span><span>SBN<span className="brand-accent">_MCP</span><small>Proyecto sociotecnológico</small></span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
        {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href={project.loginUrl} target="_blank" rel="noopener noreferrer">Abrir SBN_MCP <ArrowUpRight size={17} /></a>
      </nav>
    </header>
    <main id="contenido">
      <section className="hero" id="inicio">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> PROYECTO SOCIOTECNOLÓGICO <i /> PNF EN INFORMÁTICA <i /> 2026</div>
            <h1>Gestión patrimonial<br /><span>con más control</span><br />y trazabilidad.</h1>
            <p className="hero-description">Una solución web orientada a centralizar la información de los bienes nacionales, gestionar sus movimientos y facilitar el seguimiento patrimonial de la Maternidad Concepción Palacios.</p>
            <div className="hero-actions"><a className="button button-light" href="#proyecto">Explorar el proyecto <ArrowDown size={18} /></a></div>
            <div className="hero-credit"><span className="credit-line" /> Desarrollado por estudiantes de la UPTEC-MS</div>
          </div>
          <div className="hero-art" aria-label="Ilustración conceptual de la gestión patrimonial"><div className="art-glow" /><div className="art-window"><div className="window-top"><span /><span /><span /><small>SBN_MCP / Gestión patrimonial</small></div><div className="window-body"><div className="window-sidebar"><b /><b /><b /><b /></div><div className="window-content"><div className="window-heading"><span>Resumen patrimonial</span><span className="live-dot" /></div><div className="window-lines"><i /><i /><i /></div><div className="window-cards"><div><span>Inventario</span><b><PackageSearch /></b></div><div><span>Movimientos</span><b><ArrowLeftRight /></b></div><div><span>Reportes</span><b><FileBarChart /></b></div></div><div className="window-chart"><div className="chart-title">Información organizada</div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div></div></div></div></div><div className="floating-note"><span className="note-icon"><ShieldCheck size={20} /></span><span>Información<br /><b>con trazabilidad</b></span></div><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /></div>
        </div>
        <div className="institution-logos" aria-label="Instituciones vinculadas al proyecto">
          <div className="institution-logo-card"><img src="/images/logos/maternidad-concepcion-palacios.png" alt="Logo de la Maternidad Concepción Palacios" /><span><small>COMUNIDAD BENEFICIARIA</small><b>Maternidad Concepción Palacios</b></span></div>
          <div className="institution-logo-card"><img src="/images/logos/uptec-ms.jpeg" alt="Logo de la Universidad Politécnica Territorial de Caracas Mariscal Sucre" /><span><small>CASA DE ESTUDIOS</small><b>UPTEC “Mariscal Sucre”</b></span></div>
        </div>
        <a href="#proyecto" className="scroll-cue" aria-label="Desplazarse a El proyecto"><span /> Desliza para explorar</a>
      </section>

      <section className="section intro-section" id="proyecto"><div className="section-shell intro-grid"><div><p className="kicker">EL PROYECTO</p><h2>Tecnología al servicio<br />del <span>patrimonio público.</span></h2></div><div className="intro-copy"><p>{project.fullName} propone una plataforma web para apoyar los procesos administrativos vinculados al inventario institucional.</p><p>El proyecto se enfoca en bienes nacionales tangibles y en reunir funciones de registro, consulta, movimientos, verificación y generación de documentación patrimonial.</p><a className="text-link" href="#desafio">Conoce la necesidad <ChevronRight size={18} /></a></div></div></section>

      <section className="section overview-section" id="desafio"><div className="section-shell"><div className="section-heading"><div><p className="kicker">CONTEXTO Y PROPUESTA</p><h2>Una gestión más <span>conectada.</span></h2></div><p>El diagnóstico descrito en el proyecto identificó procesos apoyados en libros de actas, documentos físicos y hojas de cálculo separadas.</p></div><div className="challenge"><div className="challenge-side"><div className="challenge-icon"><BookOpen /></div><span className="mini-label">NECESIDAD IDENTIFICADA</span><h3>Información<br />dispersa</h3><p>La consulta de registros, el seguimiento de ubicación y la preparación de reportes podían requerir revisar varias fuentes documentales.</p><div className="challenge-tags"><span>Registros separados</span><span>Seguimiento manual</span><span>Reportes documentales</span></div></div><div className="challenge-arrow"><ArrowLeftRight /></div><div className="challenge-side challenge-solution"><div className="challenge-icon"><LayoutDashboard /></div><span className="mini-label">PROPUESTA DEL PROYECTO</span><h3>Información<br />centralizada</h3><p>SBN_MCP reúne en una plataforma web funciones para registrar bienes, documentar movimientos y consultar información patrimonial.</p><div className="challenge-tags"><span>Registro y consulta</span><span>Movimientos</span><span>Trazabilidad</span></div></div></div><div className="objectives"><div className="objectives-intro"><p className="kicker">OBJETIVOS DEL PROYECTO</p><p>Un recorrido desde la comprensión de los procesos hasta la evaluación de la solución.</p></div>{[['01','Diagnosticar','Procesos administrativos de gestión de bienes.'],['02','Planificar','La arquitectura funcional de la solución web.'],['03','Implementar','El sistema para la gestión automatizada.'],['04','Evaluar','La solución desarrollada y sus resultados.']].map(([n,title,text])=><div className="objective" key={n}><span>{n}</span><b>{title}</b><small>{text}</small></div>)}</div></div></section>

      <section className="section experience-section" id="experiencia"><div className="section-shell"><div className="section-heading"><div><p className="kicker">EXPERIENCIA DE EJECUCIÓN</p><h2>Del diagnóstico<br />al <span>desarrollo.</span></h2></div><p>El proyecto describe Investigación-Acción Participativa (IAP), que parte de comprender la necesidad con la comunidad, y Scrum, que organiza el desarrollo en ciclos de trabajo y revisión. Esta síntesis presenta las etapas documentadas; no asigna fechas ni afirma actividades específicas no confirmadas.</p></div><div className="experience-layout"><figure className="photo-card photo-1"><img src={fieldPhotos[0].src} alt={fieldPhotos[0].alt} loading="lazy" /><figcaption><span>01</span>{fieldPhotos[0].caption}</figcaption></figure><div className="stage-grid">{workStages.map(({ n, title, text, icon: Icon })=><article className="stage-card" key={n}><div className="stage-card-top"><span className="stage-icon"><Icon size={23} /></span><span className="feature-index">{n}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></div></section>

      <section className="section features-section" id="funcionalidades"><div className="section-shell"><div className="section-heading"><div><p className="kicker">FUNCIONALIDADES DOCUMENTADAS</p><h2>Módulos que articulan<br />el <span>control patrimonial.</span></h2></div><p>Las capacidades siguientes se describen en los manuales del sistema. Su mención no confirma que el sitio enlazado esté desplegado en producción.</p></div><div className="feature-grid">{features.map(({ title, text }, i)=>{const Icon=featureIcons[i];return <article className="feature-card" key={title}><div className="feature-top"><span className={`feature-icon feature-icon-${i % 4}`}><Icon size={24}/></span><span className="feature-index">0{i+1}</span></div><h3>{title}</h3><p>{text}</p></article>})}</div><p className="feature-note"><ShieldCheck size={19} /> Síntesis basada en los manuales entregados; no constituye una auditoría funcional independiente.</p></div></section>

      <section className="section system-section" id="recorrido"><div className="section-shell"><div className="section-heading"><div><p className="kicker kicker-light">RECORRIDO FUNCIONAL</p><h2>Qué permite organizar<br /><span>SBN_MCP.</span></h2></div><p className="system-intro">Una lectura resumida de los procesos descritos en la documentación, presentada sin datos patrimoniales ni capturas internas.</p></div><div className="system-module-grid">{systemModules.map(({ title, text, icon: Icon, tone }, i)=><article className="system-module-card" key={title}><div className={`module-icon module-${tone}`}><Icon size={26}/></div><span className="module-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="system-note"><ShieldCheck size={18}/> Contenido sintetizado de los manuales. No acredita por sí solo el estado actual de alojamiento, despliegue o funcionamiento.</p></div></section>

      <section className="section tech-section" id="tecnologia"><div className="section-shell"><div className="section-heading"><div><p className="kicker">ARQUITECTURA Y TECNOLOGÍA</p><h2>La estructura detrás<br />de <span>SBN_MCP.</span></h2></div><p>La documentación técnica describe una arquitectura web cliente-servidor y el patrón Modelo–Vista–Controlador (MVC), que separa presentación, procesamiento y acceso a datos.</p></div><div className="architecture"><div className="architecture-flow"><div className="arch-node"><span>01</span><b>Interfaz web</b><small>HTML · CSS · JavaScript</small></div><div className="arch-connector"><i /></div><div className="arch-node arch-emphasis"><span>02</span><b>Lógica de aplicación</b><small>PHP · patrón MVC</small></div><div className="arch-connector"><i /></div><div className="arch-node"><span>03</span><b>Persistencia</b><small>MySQL / MariaDB</small></div></div><div className="technology-grid">{projectTechnologies.map(([name, text], i)=>{const Icon=technologyIcons[i];return <div className="tech-card" key={name}><span className="tech-brand-icon" style={{ color: technologyColors[i] }}><Icon size={38} title={name}/></span><div><b>{name}</b><small>{text}</small></div></div>})}</div></div></div></section>

      <section className="section trust-section"><div className="section-shell trust-grid"><div className="trust-icon"><ShieldCheck /></div><div><p className="kicker">SEGURIDAD Y CONTROL</p><h2>Permisos según el perfil<br />y las <span>responsabilidades.</span></h2><p>Los documentos describen controles de acceso y trazabilidad. Los perfiles varían entre fuentes y requieren confirmación; por ello, aquí se presentan de forma general. Estas descripciones no equivalen a una certificación ni a una auditoría independiente.</p></div><div className="trust-points"><div><Check /> Control de acceso descrito en manuales</div><div><Check /> Registro de operaciones documentado</div><div><Check /> Roles específicos pendientes de conciliación</div></div></div></section>

      <section className="section results-section" id="resultados"><div className="section-shell results-grid"><div><p className="kicker">RESULTADOS Y EVALUACIÓN</p><h2>Evaluar también<br />es <span>dar contexto.</span></h2></div><div className="results-copy"><div className="qualitative"><span className="qual-icon"><FileBarChart /></span><div><b>Hallazgos descritos cualitativamente</b><p>La evaluación documentada señala mejoras en la disponibilidad de información patrimonial, la generación de reportes y el seguimiento de ubicaciones y movimientos.</p></div></div><div className="pending-metrics"><span className="pending-mark">i</span><p>Los indicadores cuantitativos no se muestran hasta que el equipo valide la versión definitiva, la metodología de medición y qué datos pueden divulgarse.</p></div></div></div></section>

      <section className="section team-section" id="equipo"><div className="section-shell"><div className="section-heading"><div><p className="kicker">EQUIPO DE DESARROLLO</p><h2>Un proyecto <span>de equipo.</span></h2></div><p>Integrantes documentados en los manuales del sistema. No se atribuyen cargos ni tareas individuales.</p></div><div className="team-grid">{team.map((name, i)=><div className="team-card" key={name}><span className="team-number">0{i+1}</span><span className="team-avatar" aria-hidden="true">{name.split(' ').map(part=>part[0]).join('')}</span><b>{name}</b><small>Integrante del proyecto</small></div>)}</div><div className="institution-strip"><span className="institution-icon"><BookOpen /></span><div><small>CASA DE ESTUDIOS</small><b>{project.university}</b><span>{project.program} · Trayecto II · {project.year}</span></div></div></div></section>

      <section className="section next-section"><div className="section-shell next-panel"><div><p className="kicker kicker-light">ESTADO Y SIGUIENTES PASOS</p><h2>Una solución en ruta<br />hacia su <span>validación.</span></h2><p>La documentación identifica condiciones de infraestructura que deben considerarse para una operación sostenida. El estado y autorización del alojamiento enlazado requieren confirmación.</p></div><div className="next-list"><div><span>01</span><b>Confirmar alojamiento y autorización institucional</b></div><div><span>02</span><b>Validar contenido, perfiles y métricas</b></div><div><span>03</span><b>Revisar capturas y documentos para difusión</b></div><div><span>04</span><b>Definir URL pública final y preparar el QR de defensa</b></div><div><span>05</span><b>Planificar validación con usuarios, capacitación y revisión de seguridad</b></div><div><span>06</span><b>Acordar respaldo y mantenimiento para la operación</b></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="section-shell footer-main"><p className="footer-institution">{project.institution}<br />{project.university} · {project.year}</p><a className="footer-landing" href={project.institutionalUrl} target="_blank" rel="noopener noreferrer"><img src="/images/logos/maternidad-concepcion-palacios.png" alt="" /><span>Landing de la Maternidad Concepción Palacios</span><ArrowUpRight size={20}/></a></div><div className="section-shell footer-bottom"><span>Portafolio académico · {project.year}</span><span>El QR de defensa se generará con la URL pública definitiva.</span></div></footer>
  </>
}

const projectTechnologies: [string, string][] = [
  ['PHP', 'Procesamiento del lado del servidor'], ['HTML5', 'Estructura de las interfaces'],
  ['CSS3', 'Presentación visual'], ['JavaScript', 'Interacción del lado cliente'],
  ['MySQL', 'Base de datos relacional'], ['MariaDB', 'Persistencia relacional documentada'],
  ['MVC', 'Separación de responsabilidades'], ['Apache', 'Servidor web documentado'],
  ['Nginx', 'Servidor web documentado'],
]

export default App
