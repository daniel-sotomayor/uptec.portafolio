export const project = {
  fullName: 'Sistema para la Automatización de Procesos y Resguardo de Activos del Departamento de Bienes Nacionales en la Maternidad Concepción Palacios',
  shortName: 'SBN_MCP',
  institution: 'Maternidad Concepción Palacios',
  university: 'Universidad Politécnica Territorial de Caracas “Mariscal Sucre”',
  program: 'Programa Nacional de Formación en Informática',
  year: '2026',
  loginUrl: 'https://mcp.gt.tc/MCP/apps/SBN_MCP/public/login?i=1',
  institutionalUrl: 'https://mcp.gt.tc/MCP/?i=1',
  dashboardUrl: 'https://mcp.gt.tc/MCP/apps/SBN_MCP/public/dashboard',
}

export const navigation = [
  ['Inicio', '#inicio'], ['El proyecto', '#proyecto'], ['Experiencia', '#experiencia'],
  ['Funcionalidades', '#funcionalidades'], ['Tecnología', '#tecnologia'],
  ['Resultados', '#resultados'], ['Equipo', '#equipo'],
] as const

export const features = [
  { icon: 'KeyRound', title: 'Acceso y perfiles', text: 'Inicio de sesión y administración de permisos descritos en los manuales.' },
  { icon: 'LayoutDashboard', title: 'Panel de consulta', text: 'Vista de resumen para acceder a información y módulos del sistema.' },
  { icon: 'PackageSearch', title: 'Inventario', text: 'Registro, actualización, búsqueda y consulta de fichas patrimoniales.' },
  { icon: 'ArrowLeftRight', title: 'Movimientos, actas y bajas', text: 'Gestión documentada de solicitudes, traslados, actas y desincorporaciones.' },
  { icon: 'ClipboardCheck', title: 'Control y verificación', text: 'Consulta por área y registro de verificaciones físicas.' },
  { icon: 'FileBarChart', title: 'Reportes BM', text: 'Generación de reportes patrimoniales BM-1 a BM-4, según documentación.' },
  { icon: 'History', title: 'Auditoría', text: 'Consulta del historial de operaciones descrito en el manual.' },
]

export const fieldPhotos = [
  { src: '/images/evidencias/institucion.jpg', alt: 'Fachada de la Maternidad Concepción Palacios.', caption: 'Maternidad Concepción Palacios, institución beneficiaria.' },
]

export const team = ['Karina Goyo', 'Arianny Martínez', 'Swndiry Pérez', 'Daniel Sotomayor']
