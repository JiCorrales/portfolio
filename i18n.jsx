/* global React */
// Minimal i18n: English is the source of truth, Spanish mirrors it.
// `t(key)` for UI strings, `pick(value)` for content objects shaped { en, es }.

const I18N = {
  en: {
    'meta.title': 'Jose Corrales — Software Engineer · Cartago, CR',
    'nav.home': 'Home', 'nav.work': 'Work', 'nav.services': 'Services', 'nav.contact': 'Contact',
    'lang.switch': 'ES', 'lang.switchTitle': 'Cambiar a español',

    'hero.status': 'OPEN TO WORK · 2026',
    'hero.l1a': 'Software', 'hero.l1b': 'crafted',
    'hero.l2a': 'in', 'hero.l2b': 'Cartago,',
    'hero.l3a': 'shipped', 'hero.l3b': 'to production.',
    'hero.tagPre': "I'm ", 'hero.tagPost': ' — a software engineer building web platforms, back-office systems and AI agents for businesses that want more than a template.',
    'hero.meta2': 'FULL-STACK · AI AGENTS', 'hero.meta3': 'SCROLL ↓',

    'work.label': '/ 01 · SELECTED WORK', 'work.titleA': 'Selected ', 'work.titleB': 'projects.',
    'work.press': 'IN THE PRESS', 'work.pressTitle': (n) => `${n} media appearances`,
    'work.journey': (n) => `/ User journey · ${n} steps`,
    'work.visit': 'Visit site', 'work.fullPage': 'See full page', 'work.pressList': '/ In the press',
    'work.confidential': 'CONFIDENTIAL',

    'services.label': '/ 02 · SERVICES', 'services.titleA': 'Four ways ', 'services.titleB': 'to work', 'services.titleC': ' together.',
    'services.featured': 'Featured', 'services.cta': 'Start project',
    'services.wa': (name) => `Hi Jose, I'm interested in the ${name} plan`,

    'now.label': '/ 03 · CURRENTLY', 'now.titleA': "What I'm ", 'now.titleB': 'building', 'now.titleC': ' now.',
    'now.card': 'On the desk · September 2026',

    'about.label': '/ 04 · ABOUT',
    'about.p1a': 'I write ', 'about.p1b': 'code', 'about.p1c': " the way you'd tune a mechanical keyboard — every detail matters, but the goal is that you feel the difference without having to explain it.",
    'about.p2a': 'Since 2025 I help institutions and businesses in Costa Rica leave templates behind and build digital products that actually ', 'about.p2b': 'work', 'about.p2c': '.',
    'about.p3a': "If what you have in mind doesn't fit a predefined package — ", 'about.p3b': 'better', 'about.p3c': ". That's where things get interesting.",
    'about.s1': 'Published projects', 'about.s2': 'Own products deployed', 'about.s3': 'National outlets (PAA launch)', 'about.s4': 'English',

    'contact.label': '/ 05 · CONTACT', 'contact.titleA': 'Got an', 'contact.titleB': 'idea', 'contact.titleC': ' in mind?',
    'contact.wa': 'WhatsApp', 'contact.email': 'Email', 'contact.call': 'Book a call', 'contact.callV': 'cal.com/jicorrales · 30 min', 'contact.li': 'LinkedIn',

    'paa.back': 'Back to portfolio',
    'paa.extra': "It is the TEC's first interactive online practice for its 2026-2027 admission exam. Applicants can rehearse the full exam — from signing in to reviewing every answer — see their score by area (Math and Verbal) and repeat the practice as often as they want to reinforce what they find hardest. It works the same on a phone or a computer, with one simple idea: no student should sit the real exam without having lived it first.",
    'paa.live': 'See it live', 'paa.flow': 'See the flow', 'paa.pressBtn': 'In the press',
    'paa.journeyTitle': (n) => `/ User journey · ${n} steps`,
    'paa.journeyLead': 'The real student flow, from ID login to question-by-question review. Click any step to open the fullscreen viewer — arrow keys to navigate, ESC to close.',
    'paa.pressTitle': '/ In the press',
    'paa.pressLead': "Sustained national coverage of the launch, May 19-25, 2026: 10 appearances across 8 outlets (digital press, TV and radio) plus the TEC's official announcement. Delfino and La Teja broke the story; Telenoticias, La Nación, Repretel, Columbia and others followed. The TV and radio segments can be watched and heard right here.",
    'paa.stack': '/ Stack', 'paa.frontend': 'Frontend', 'paa.backend': 'Backend',
    'paa.a11y': 'Accessibility', 'paa.a11yV': 'WCAG 2.2 AA ~98% · Lighthouse a11y 100 · 0 automated violations',
    'paa.org': 'Org', 'paa.role': 'Role', 'paa.roleV': 'Software Engineer · end-to-end build',
    'paa.preview': 'preview.live',

    'lb.close': 'Close', 'lb.prev': 'Previous', 'lb.next': 'Next',

    'term.hello': '// jose@cartago — type a command or click a chip below',
    'term.cleared': '// cleared · type `help` to see commands',
    'term.status': 'open to work · 2026',
    'term.opening': '→ opening WhatsApp…',
    'term.notFound': 'command not found:', 'term.try': 'try',
    'term.h.about': '— who I am', 'term.h.work': '— scroll to projects', 'term.h.services': '— scroll to services',
    'term.h.contact': '— scroll to contact', 'term.h.social': '— list socials', 'term.h.hire': '— opens WhatsApp', 'term.h.clear': '— clears the terminal',
    'mani.comment': '// jose.corrales — manifesto.js', 'mani.believes': '"every detail matters — but only if you can feel it"',
    'mani.exec': '// ↓ run it to hire me', 'mani.built': 'BUILT BY HAND · NO TEMPLATES',
    'wa.fromPortfolio': 'Hi Jose, I come from your portfolio',

    'tw.accent': 'Accent', 'tw.footer': 'Footer', 'tw.sound': 'Transport sound', 'tw.cursor': 'Custom cursor',
  },
  es: {
    'meta.title': 'Jose Corrales — Ingeniero de Software · Cartago, CR',
    'nav.home': 'Inicio', 'nav.work': 'Trabajo', 'nav.services': 'Servicios', 'nav.contact': 'Contacto',
    'lang.switch': 'EN', 'lang.switchTitle': 'Switch to English',

    'hero.status': 'DISPONIBLE · 2026',
    'hero.l1a': 'Software', 'hero.l1b': 'hecho',
    'hero.l2a': 'en', 'hero.l2b': 'Cartago,',
    'hero.l3a': 'puesto', 'hero.l3b': 'en producción.',
    'hero.tagPre': 'Soy ', 'hero.tagPost': ' — ingeniero de software construyendo plataformas web, sistemas back-office y agentes de IA para negocios que quieren algo más que una plantilla.',
    'hero.meta2': 'FULL-STACK · AGENTES IA', 'hero.meta3': 'DESLIZÁ ↓',

    'work.label': '/ 01 · TRABAJO SELECCIONADO', 'work.titleA': 'Proyectos ', 'work.titleB': 'seleccionados.',
    'work.press': 'EN MEDIOS', 'work.pressTitle': (n) => `${n} apariciones en medios`,
    'work.journey': (n) => `/ Recorrido de usuario · ${n} pasos`,
    'work.visit': 'Visitar sitio', 'work.fullPage': 'Ver página completa', 'work.pressList': '/ En medios',
    'work.confidential': 'CONFIDENCIAL',

    'services.label': '/ 02 · SERVICIOS', 'services.titleA': 'Cuatro formas ', 'services.titleB': 'de trabajar', 'services.titleC': ' juntos.',
    'services.featured': 'Destacado', 'services.cta': 'Iniciar proyecto',
    'services.wa': (name) => `Hola Jose, me interesa el plan ${name}`,

    'now.label': '/ 03 · AHORA', 'now.titleA': 'Lo que estoy ', 'now.titleB': 'construyendo', 'now.titleC': ' ahora.',
    'now.card': 'En el escritorio · Setiembre 2026',

    'about.label': '/ 04 · SOBRE MÍ',
    'about.p1a': 'Escribo ', 'about.p1b': 'código', 'about.p1c': ' como quien afina un teclado mecánico — cada detalle importa, pero el objetivo es que sientas la diferencia sin tener que explicarla.',
    'about.p2a': 'Desde 2025 ayudo a instituciones y negocios en Costa Rica a dejar atrás las plantillas y construir productos digitales que realmente ', 'about.p2b': 'funcionan', 'about.p2c': '.',
    'about.p3a': 'Si lo que tienes en mente no entra en un paquete predefinido — ', 'about.p3b': 'mejor', 'about.p3c': '. Ahí es donde las cosas se ponen interesantes.',
    'about.s1': 'Proyectos publicados', 'about.s2': 'Productos propios desplegados', 'about.s3': 'Medios nacionales (lanzamiento PAA)', 'about.s4': 'Inglés',

    'contact.label': '/ 05 · CONTACTO', 'contact.titleA': '¿Tienes una', 'contact.titleB': 'idea', 'contact.titleC': ' en mente?',
    'contact.wa': 'WhatsApp', 'contact.email': 'Email', 'contact.call': 'Agenda una llamada', 'contact.callV': 'cal.com/jicorrales · 30 min', 'contact.li': 'LinkedIn',

    'paa.back': 'Volver al portfolio',
    'paa.extra': 'Es la primera práctica interactiva en línea del TEC para su examen de admisión 2026-2027. Permite a quienes aspiran a ingresar ensayar el examen completo —desde que se identifican hasta que revisan cada respuesta—, ver su puntaje por área (Matemática y Verbal) y repetir la práctica las veces que quieran para reforzar lo que más les cuesta. Funciona igual desde el celular o la computadora, con una idea simple: que ningún estudiante llegue al examen real sin haberlo vivido antes.',
    'paa.live': 'Ver en vivo', 'paa.flow': 'Ver el flujo', 'paa.pressBtn': 'En medios',
    'paa.journeyTitle': (n) => `/ Recorrido de usuario · ${n} pasos`,
    'paa.journeyLead': 'El flujo real del estudiante, desde el login con cédula hasta la revisión pregunta por pregunta. Click en cualquier paso abre el visor a pantalla completa — navegación con flechas o ESC para cerrar.',
    'paa.pressTitle': '/ En medios',
    'paa.pressLead': 'Cobertura nacional sostenida del lanzamiento, del 19 al 25 de mayo de 2026: 10 apariciones en 8 medios (prensa digital, TV y radio) más el comunicado oficial del TEC. Delfino y La Teja rompieron la noticia; le siguieron Telenoticias, La Nación, Repretel, Columbia y más. Los segmentos de TV y radio se pueden ver y escuchar acá mismo.',
    'paa.stack': '/ Stack', 'paa.frontend': 'Frontend', 'paa.backend': 'Backend',
    'paa.a11y': 'Accesibilidad', 'paa.a11yV': 'WCAG 2.2 AA ~98% · Lighthouse a11y 100 · 0 violaciones automáticas',
    'paa.org': 'Org', 'paa.role': 'Rol', 'paa.roleV': 'Software Engineer · construcción de punta a punta',
    'paa.preview': 'preview.live',

    'lb.close': 'Cerrar', 'lb.prev': 'Anterior', 'lb.next': 'Siguiente',

    'term.hello': '// jose@cartago — escribí un comando o tocá un chip de abajo',
    'term.cleared': '// cleared · escribí `help` para ver comandos',
    'term.status': 'disponible · 2026',
    'term.opening': '→ abriendo WhatsApp…',
    'term.notFound': 'comando no encontrado:', 'term.try': 'probá',
    'term.h.about': '— quién soy', 'term.h.work': '— scroll a proyectos', 'term.h.services': '— scroll a servicios',
    'term.h.contact': '— scroll a contacto', 'term.h.social': '— listado de socials', 'term.h.hire': '— abre WhatsApp', 'term.h.clear': '— limpia la terminal',
    'mani.comment': '// jose.corrales — manifesto.js', 'mani.believes': '"cada detalle importa — pero solo si se siente"',
    'mani.exec': '// ↓ ejecutá para contratar', 'mani.built': 'HECHO A MANO · SIN PLANTILLAS',
    'wa.fromPortfolio': 'Hola Jose, vengo del portfolio',

    'tw.accent': 'Acento', 'tw.footer': 'Footer', 'tw.sound': 'Sonido transport', 'tw.cursor': 'Cursor personalizado',
  },
};

const LangCtx = React.createContext('en');

function useLang() {
  const lang = React.useContext(LangCtx);
  const t = (key, ...args) => {
    const v = I18N[lang][key] ?? I18N.en[key] ?? key;
    return typeof v === 'function' ? v(...args) : v;
  };
  const pick = (v) => (v && typeof v === 'object' && ('en' in v) ? (v[lang] ?? v.en) : v);
  return { lang, t, pick };
}

function readLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'es') return q;
    const s = localStorage.getItem('jc-lang');
    if (s === 'en' || s === 'es') return s;
  } catch {}
  return 'en';
}

Object.assign(window, { I18N, LangCtx, useLang, readLang });
