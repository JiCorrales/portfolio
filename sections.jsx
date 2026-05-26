/* global React */
const { useState: useS, useEffect: useE, useRef: useR } = React;

// ================ HERO ==================
function Hero() {
  const [time, setTime] = useS('');
  useE(() => {
    const upd = () => {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, '0');
      const m = String(d.getMinutes()).padStart(2, '0');
      setTime(`${h}:${m}`);
    };
    upd();
    const id = setInterval(upd, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid"></div>
      <div className="wrap">
        <div className="hero-status">
          <span className="dot"></span>
          <span>DISPONIBLE · Q2 2026</span>
        </div>
        <h1 className="hero-title">
          <span className="line">Software <em>crafted</em></span>
          <span className="line">in <span className="accent">Cartago,</span></span>
          <span className="line"><em>shipped</em> worldwide.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-tag">
            Soy <strong style={{color:'var(--ink)'}}>Jose Corrales</strong> — ingeniero de software construyendo landing pages, e-commerce y sistemas a la medida para negocios que quieren algo más que una plantilla.
          </p>
          <div className="hero-meta">
            <div><strong>CARTAGO, CR</strong> · {time} UTC-6</div>
            <div>2+ YRS EXPERIENCE</div>
            <div>PRESS ANY KEY ↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================ MARQUEE ==================
function Marquee() {
  const items = ['Landing Pages', 'E-Commerce', 'Sistemas a la Medida', 'Inventario', 'APIs', 'DevOps', 'Integraciones'];
  const row = (
    <span>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span>{t}</span>
          <span className="dot"></span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row}{row}
      </div>
    </div>
  );
}

// ================ WORK ==================
const PROJECTS = [
  { num: '01', name: 'Learning Commons TEC', tag: 'Sistema · Asistencia', year: '2025', tech: ['Angular 21', 'Express', 'PostgreSQL', 'TypeScript'], desc: 'Sistema de gestión operativa para el Learning Commons y Biblioteca BJFF del TEC. Controla logs de asistencia en 7 modalidades, reservas de cubículos, horas trabajadas y RBAC para administradores y asistentes en dos sedes.' },
  {
    num: '02',
    slug: 'paa-tec',
    name: 'Examen Práctica PAA TEC',
    tag: 'Plataforma · Educación',
    year: '2026',
    tech: ['React 19', 'TypeScript', 'Vite 7', 'Vitest', 'JWT'],
    techBack: ['.NET', 'SQL Server', 'C#'],
    cover: 'screenshots/paa-tec/04-welcome.png',
    link: 'https://tec.ac.cr/admision/practicaexamen',
    desc: 'Plataforma con la que cualquier persona puede practicar el examen de admisión del TEC en las mismas condiciones del examen real: preguntas con tiempo cronometrado, retroalimentación inmediata y revisión de resultados por área para llegar mejor preparada el día de la prueba.',
    press: [
      { outlet: 'TEC · Comunicado oficial', date: '2026-05-19', url: 'https://www.tec.ac.cr/nueva-practica-linea-permitira-prepararse-mejor-examen-admision-tec' },
      { outlet: 'Delfino', date: '2026-05-19', url: 'https://delfino.cr/2026/05/tec-habilita-plataforma-en-linea-para-practicar-para-su-examen-de-admision' },
      { outlet: 'La Teja', date: '2026-05-19', url: 'https://www.lateja.cr/nacional/quiere-estudiar-en-el-tec-habilitan-nueva-practica/O57WJKCYCVHLXAAU44FE3VWUZA/story/' },
      { outlet: 'Telenoticias', date: '2026-05-20', medium: 'TV', clip: 'media/paa-tec/telenoticias-tv-20may.mp4', poster: 'media/paa-tec/telenoticias-tv-20may.jpg' },
      { outlet: 'Telenoticias Radio', date: '2026-05-20', medium: 'Radio', clip: 'media/paa-tec/telenoticias-radio-20may.mp3' },
      { outlet: 'La Nación', date: '2026-05-21', url: 'https://www.nacion.com/el-pais/tec-habilita-nueva-practica-interactiva-en-linea/7NJGWOILV5DALGOUJP2RDA3HQE/story/' },
      { outlet: 'Velero Informativo', date: '2026-05-21', url: 'https://velero.cr/2026/05/nueva-practica-en-linea-permitira-prepararse-mejor-para-el-examen-de-admision-al-tec/' },
      { outlet: 'Periódico Mensaje', date: '2026-05-21', url: 'https://www.periodicomensaje.com/educacion/14854-nueva-practica-en-linea-permitira-prepararse-mejor-para-el-examen-de-admision-al-tec-nueva-practica-en-linea-permitira-prepararse-mejor-para-el-examen-de-admision-al-tec' },
      { outlet: 'Noticias Repretel', date: '2026-05-22', medium: 'TV', clip: 'media/paa-tec/repretel-tv-22may.mp4', poster: 'media/paa-tec/repretel-tv-22may.jpg' },
      { outlet: 'Repretel', date: '2026-05-25', url: 'https://www.repretel.com/noticia/va-para-el-examen-del-tec-lanzan-herramienta-que-podria-ayudarle-a-prepararse/' },
      { outlet: 'Noticias Columbia', date: '2026-05-25', medium: 'Radio', clip: 'media/paa-tec/columbia-radio-25may.mp3' },
    ],
    gallery: [
      { src: 'screenshots/paa-tec/01-login.png',            step: '01',  label: 'Login',               sub: 'Auth con cédula y código' },
      { src: 'screenshots/paa-tec/02-consent.png',          step: '02',  label: 'Consentimiento',      sub: 'Consentimiento informado' },
      { src: 'screenshots/paa-tec/03-consent-rejected.png', step: '03',  label: 'Consent rechazado',   sub: 'Edge case · usuario rechaza' },
      { src: 'screenshots/paa-tec/04-welcome.png',          step: '04',  label: 'Bienvenida',          sub: 'Onboarding' },
      { src: 'screenshots/paa-tec/05-instructions.png',     step: '05',  label: 'Instrucciones',       sub: 'Reglas del examen' },
      { src: 'screenshots/paa-tec/06-exam.png',             step: '06',  label: 'Examen',              sub: 'Pregunta sin contestar' },
      { src: 'screenshots/paa-tec/06b-exam-answered.png',   step: '06b', label: 'Pregunta contestada', sub: 'Selección guardada' },
      { src: 'screenshots/paa-tec/06c-finalize-dialog.png', step: '06c', label: 'Finalizar',           sub: 'Dialog de confirmación' },
      { src: 'screenshots/paa-tec/07-results.png',          step: '07',  label: 'Resultados',          sub: 'Score por área (Mat/Verbal)' },
      { src: 'screenshots/paa-tec/08-review.png',           step: '08',  label: 'Revisión',            sub: 'Review pregunta por pregunta' },
    ],
  },
  { num: '03', name: 'BJFF Book Locator', tag: 'Sistema · Biblioteca', year: '2026', tech: ['Astro', 'React 19', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL'], desc: 'Sistema de localización de libros para la Biblioteca José Figueres Ferrer del TEC. Parser de clasificación normalizada, motor de búsqueda por rangos en estanterías y módulo admin para mapear la estructura física de la biblioteca sobre la base de datos.' },
  { num: '04', name: 'Creador de Horario TEC', tag: 'SPA · Chrome Extension', year: '2025', tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind', 'jsPDF', 'Chrome Extension MV3'], link: 'https://creadordehorario.vercel.app/', imgs: ['screenshots/creador-de-horario.png', 'screenshots/creador-de-horario-2.png'], desc: 'SPA para armar el horario universitario del TEC de forma visual, con exportación a PDF y Excel. Acompañada de una extensión de Chrome que extrae los cursos directamente del sistema de matrícula institucional y los importa en un clic.' },
];

function Work() {
  const [open, setOpen] = useS(null);
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-label label">/ 01 · SELECTED WORK</div>
        <h2 className="section-title">Proyectos <em>seleccionados.</em></h2>
        <div className="work-list">
          {PROJECTS.map(p => {
            const imgs = p.imgs || (p.img ? [p.img] : []);
            const cover = p.cover || imgs[0] || (p.gallery && p.gallery[0]?.src);
            const hasMedia = (p.gallery && p.gallery.length > 0) || imgs.length > 0;
            const hasPage = !!p.slug;
            const itemClass = `work-item ${open === p.num ? 'open' : ''} ${hasPage ? 'work-item--has-page' : ''}`;
            const handleClick = () => {
              if (hasPage) {
                window.location.hash = `#/proyectos/${p.slug}`;
              } else {
                setOpen(open === p.num ? null : p.num);
              }
            };
            return (
            <div key={p.num} className={itemClass} onClick={handleClick} data-hover>
              <div className="num">{p.num}</div>
              <h3>{p.name}</h3>
              <div className="tag-group">
                <div className="tag">{p.tag}</div>
                {p.press && p.press.length > 0 && (
                  <div className="press-badge" title={`Cobertura en ${p.press.length} medios`}>
                    <span className="press-badge-dot"></span>EN MEDIOS
                  </div>
                )}
              </div>
              <div className="year">{p.year}</div>
              <div className="arrow">
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11 L11 3 M11 3 H5 M11 3 V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              </div>
              <div className="preview" data-preview="">
                {cover
                  ? <img src={cover} alt={p.name} className="work-shot-img" />
                  : <div className="work-shot-nda work-shot-nda--sm"><span>CONFIDENTIAL</span></div>}
              </div>
              {!hasPage && <div className="work-expand">
                <div className={`work-expand-inner ${!hasMedia ? 'work-expand-inner--no-media' : ''}`}>
                  <div className="spacer"></div>
                  {hasMedia && (
                    <div className="work-gallery">
                      {p.gallery && p.gallery.length > 0 ? (
                        <div className="journey-gallery">
                          <div className="journey-label">/ User journey · {p.gallery.length} pasos</div>
                          <div className="journey-filmstrip">
                            {p.gallery.map((g, i) => (
                              <button
                                key={g.step}
                                type="button"
                                className="journey-step"
                                data-hover
                                onClick={e => {
                                  e.stopPropagation();
                                  window.dispatchEvent(new CustomEvent('lightbox:open', {
                                    detail: { gallery: p.gallery, index: i, project: p.name }
                                  }));
                                }}
                                title={`${g.label}${g.sub ? ' — ' + g.sub : ''}`}
                              >
                                <div className="journey-step-thumb">
                                  <img src={g.src} alt={`${p.name} · ${g.label}`} loading="lazy" />
                                </div>
                                <div className="journey-step-meta">
                                  <span className="journey-step-num">{g.step}</span>
                                  <span className="journey-step-label">{g.label}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        imgs.map((src, i) => (
                          <div key={i} className="work-shot" data-label="">
                            <img src={src} alt={`${p.name} ${i + 1}`} className="work-shot-img" />
                          </div>
                        ))
                      )}
                    </div>
                  )}
                  <div className="work-meta">
                    <p>{p.desc}</p>
                    <div className="stack">
                      {p.tech.map(t => <span key={t} className="chip">{t}</span>)}
                    </div>
                    {p.press && p.press.length > 0 && (
                      <div className="press">
                        <div className="press-label">/ En medios</div>
                        <ul className="press-list">
                          {p.press.map((m, i) => (
                            <li key={i}>
                              {m.url ? (
                                <a
                                  href={m.url}
                                  target="_blank"
                                  rel="noopener"
                                  onClick={e => e.stopPropagation()}
                                  data-hover
                                >
                                  <span className="press-outlet">{m.outlet}{m.medium ? ` · ${m.medium}` : ''}</span>
                                  <span className="press-date">{m.date}</span>
                                  <span className="press-arrow">→</span>
                                </a>
                              ) : (
                                <span className="press-static">
                                  <span className="press-outlet">{m.outlet}{m.medium ? ` · ${m.medium}` : ''}</span>
                                  <span className="press-date">{m.date}</span>
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {p.link && (
                      <a
                        className="work-link"
                        href={p.link}
                        target="_blank"
                        rel="noopener"
                        onClick={e => e.stopPropagation()}
                        data-hover
                      >
                        <span>Visitar sitio</span>
                        <span>→</span>
                      </a>
                    )}
                    {p.slug && (
                      <a
                        className="work-link work-link-page"
                        href={`#/proyectos/${p.slug}`}
                        onClick={e => e.stopPropagation()}
                        data-hover
                      >
                        <span>Ver página completa</span>
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>}
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}

// ================ SERVICES ==================
const SERVICES = [
  {
    tier: 'I · STARTER', name: 'Landing Page', sub: 'Captación de clientes',
    desc: 'Página web profesional con diseño responsivo y llamado a acción directo a WhatsApp.',
    includes: [
      'Diseño responsivo moderno',
      'Hasta 5 secciones',
      'Botón directo a WhatsApp',
      'Formulario de contacto',
      'Optimización SEO básica',
      'Hosting + dominio (1 año)',
    ],
    excludes: ['Carrito de compras', 'Panel de administración'],
  },
  {
    tier: 'II · PROFESIONAL', name: 'E-Commerce', sub: 'Tienda online completa', featured: true,
    desc: 'Tienda online con carrito, pasarela de pago y gestión de productos.',
    includes: [
      'Todo lo del plan Starter',
      'Carrito de compras completo',
      'Pasarela de pago integrada',
      'Catálogo de productos',
      'Panel admin de productos',
      'Notificaciones email/WhatsApp',
      'Filtros y búsqueda',
    ],
    excludes: ['Inventario avanzado', 'Reportes y analíticas'],
  },
  {
    tier: 'III · BUSINESS', name: 'Sistema + Inventario', sub: 'Control en tiempo real',
    desc: 'Sistema web con inventario, reportes y panel de administración completo.',
    includes: [
      'Todo lo del plan Profesional',
      'Inventario en tiempo real',
      'Dashboard con métricas',
      'Gestión de usuarios y roles',
      'Historial de movimientos',
      'Exportación CSV/PDF',
      'Alertas de stock bajo',
    ],
    excludes: ['Integraciones ERP', 'App móvil nativa'],
  },
  {
    tier: 'IV · ENTERPRISE', name: 'A la Medida', sub: 'Software personalizado',
    desc: 'Desarrollo completo. Arquitectura escalable, integraciones y soporte continuo.',
    includes: [
      'Arquitectura personalizada',
      'Integraciones APIs externas',
      'Microservicios o monolito',
      'CI/CD y DevOps incluido',
      'BD optimizada',
      'Documentación completa',
      'Soporte post-lanzamiento',
    ],
    excludes: [],
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-label label">/ 02 · SERVICIOS</div>
        <h2 className="section-title">Cuatro formas <em>de trabajar</em> juntos.</h2>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className={`service ${s.featured ? 'featured' : ''}`}>
              {s.featured && <div className="featured-badge">Destacado</div>}
              <div className="service-tier">{s.tier}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-sub">{s.sub}</div>
              <p className="service-desc">{s.desc}</p>
              <ul>
                {s.includes.map((t, j) => <li key={j}>{t}</li>)}
                {s.excludes.map((t, j) => <li key={'e'+j} className="excl">{t}</li>)}
              </ul>
              <a
                className="service-cta"
                href={`https://wa.me/50687204622?text=${encodeURIComponent(`Hola Jose, me interesa el plan ${s.name}`)}`}
                target="_blank" rel="noopener"
                data-hover
                onClick={e => e.stopPropagation()}
              >
                <span>Iniciar proyecto</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================ NOW ==================
function Now() {
  const now = [
    { when: '/NOW', what: 'BJFF Book Locator — localizador de libros para la Biblioteca del TEC', p: 65 },
    { when: '/NEXT', what: 'organizador-web + bot de Telegram sobre Postgres compartido', p: 40 },
    { when: '/SOON', what: 'Integración creadordehorario ↔ organizador-web vía envelope JSON', p: 15 },
    { when: '/SOON', what: 'Tienda BARCA Agroforestal — e-commerce para productos forestales', p: 5 },
  ];
  const stack = ['TypeScript', 'React', 'Next.js', 'Node.js', 'Postgres', 'Docker', 'AWS', 'Tailwind', 'Prisma', 'tRPC'];
  return (
    <section id="now">
      <div className="wrap">
        <div className="section-label label">/ 03 · CURRENTLY</div>
        <h2 className="section-title">Lo que estoy <em>construyendo</em> ahora.</h2>
        <div className="now-grid">
          <div className="now-card">
            <h4>En el escritorio · Abril 2026</h4>
            <ul className="now-list">
              {now.map((n, i) => (
                <li key={i}>
                  <span className="when">{n.when}</span>
                  <span className="what">{n.what}</span>
                  <span className="bar" style={{ '--p': n.p + '%' }}></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="now-card">
            <h4>Stack preferido</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {stack.map(t => (
                <span key={t} style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 12,
                  padding: '6px 12px',
                  border: '1px solid var(--line)',
                  borderRadius: 999,
                  color: 'var(--ink-dim)',
                  letterSpacing: '0.05em',
                }}>{t}</span>
              ))}
            </div>
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px dashed var(--line-soft)', fontSize: 13, color: 'var(--ink-dim)' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 8 }}>Escuchando</div>
              <div>Tame Impala · Currents — loop infinito mientras compilo.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================ ABOUT ==================
function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-label label">/ 04 · ABOUT</div>
        <div className="about-grid">
          <div className="about-text">
            <p>Escribo <strong>código</strong> como quien afina un teclado mecánico — cada detalle importa, pero el objetivo es que sientas la diferencia sin tener que explicarla.</p>
            <p>Llevo <strong>dos años</strong> ayudando a negocios en Costa Rica a dejar atrás las plantillas y construir productos digitales que realmente <strong>funcionan</strong>.</p>
            <p>Si lo que tienes en mente no entra en un paquete predefinido — <strong>mejor</strong>. Ahí es donde las cosas se ponen interesantes.</p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <div className="n">24+</div>
              <div className="l">Proyectos entregados</div>
            </div>
            <div className="stat">
              <div className="n">2yr</div>
              <div className="l">Construyendo software</div>
            </div>
            <div className="stat">
              <div className="n">6</div>
              <div className="l">Países atendidos</div>
            </div>
            <div className="stat">
              <div className="n">100%</div>
              <div className="l">Clientes recurrentes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================ TESTIMONIALS ==================
function Testimonials() {
  const items = [
    { q: 'Entregó exactamente lo que necesitábamos, y el panel admin es tan fácil de usar que hasta mi mamá lo maneja.', n: 'María Jiménez', r: 'Tostadora del Valle', a: 'MJ', c: 'pink' },
    { q: 'Jose no solo programa — entiende el negocio. Nos ayudó a ver cosas que ni habíamos considerado.', n: 'Carlos Rojas', r: 'Clínica Oriente', a: 'CR', c: 'blue' },
    { q: 'El sistema de inventario nos ahorra 10 horas a la semana. La inversión se pagó en tres meses.', n: 'Andrés Vargas', r: 'Ferretería Orosi', a: 'AV', c: 'amber' },
  ];
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-label label">/ 05 · TESTIMONIALS</div>
        <h2 className="section-title">Lo que dicen los <em>clientes.</em></h2>
        <div className="test-grid">
          {items.map((t, i) => (
            <div key={i} className="test">
              <p className="test-q">{t.q}</p>
              <div className="test-who">
                <div className="test-avatar" style={{ background: `var(--k-${t.c})` }}>{t.a}</div>
                <div>
                  <div className="test-name">{t.n}</div>
                  <div className="test-role">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================ CONTACT ==================
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="section-label label">/ 04 · CONTACT</div>
        <h2 className="contact-title">¿Tienes una<br/><em>idea</em> en mente?</h2>
        <div className="contact-links">
          <a className="contact-link" href="https://wa.me/50687204622" target="_blank" rel="noopener" data-hover>
            <div>
              <div className="k">WhatsApp</div>
              <div className="v">+506 8720 4622</div>
            </div>
            <div style={{ fontSize: 24 }}>→</div>
          </a>
          <a className="contact-link" href="mailto:jocorrales.dev@gmail.com" data-hover>
            <div>
              <div className="k">Email</div>
              <div className="v">Jose Corrales</div>
            </div>
            <div style={{ fontSize: 24 }}>→</div>
          </a>
          <a className="contact-link" href="https://cal.com/jicorrales" target="_blank" rel="noopener" data-hover>
            <div>
              <div className="k">Agenda una llamada</div>
              <div className="v">cal.com/jicorrales · 30 min</div>
            </div>
            <div style={{ fontSize: 24 }}>→</div>
          </a>
          <a className="contact-link" href="https://linkedin.com" target="_blank" rel="noopener" data-hover>
            <div>
              <div className="k">LinkedIn</div>
              <div className="v">@jicorrales</div>
            </div>
            <div style={{ fontSize: 24 }}>→</div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ================ LIGHTBOX ==================
function Lightbox() {
  const [state, setState] = useS({ open: false, gallery: [], index: 0, project: '' });

  useE(() => {
    const onOpen = (e) => setState({
      open: true,
      gallery: e.detail.gallery,
      index: e.detail.index,
      project: e.detail.project,
    });
    window.addEventListener('lightbox:open', onOpen);
    return () => window.removeEventListener('lightbox:open', onOpen);
  }, []);

  useE(() => {
    if (!state.open) return;
    const onKey = (ev) => {
      if (ev.key === 'Escape') setState(s => ({ ...s, open: false }));
      else if (ev.key === 'ArrowRight') setState(s => ({ ...s, index: Math.min(s.index + 1, s.gallery.length - 1) }));
      else if (ev.key === 'ArrowLeft') setState(s => ({ ...s, index: Math.max(s.index - 1, 0) }));
      else if (ev.key === 'Home') setState(s => ({ ...s, index: 0 }));
      else if (ev.key === 'End') setState(s => ({ ...s, index: s.gallery.length - 1 }));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [state.open]);

  if (!state.open) return null;
  const current = state.gallery[state.index];
  if (!current) return null;
  const goto = (i) => setState(s => ({ ...s, index: Math.max(0, Math.min(i, s.gallery.length - 1)) }));
  const close = () => setState(s => ({ ...s, open: false }));

  return (
    <div className="lightbox-overlay" onClick={close} role="dialog" aria-modal="true">
      <div className="lightbox-frame" onClick={e => e.stopPropagation()}>
        <div className="lightbox-header">
          <div className="lightbox-counter">
            <span className="lightbox-counter-current">{String(state.index + 1).padStart(2, '0')}</span>
            <span className="lightbox-counter-divider"> / </span>
            <span className="lightbox-counter-total">{String(state.gallery.length).padStart(2, '0')}</span>
          </div>
          <div className="lightbox-title">
            <span className="lightbox-project">{state.project}</span>
            <span className="lightbox-step"> · {current.step} · {current.label}</span>
            {current.sub && <span className="lightbox-sub"> — {current.sub}</span>}
          </div>
          <button type="button" className="lightbox-close" onClick={close} aria-label="Cerrar" data-hover>✕</button>
        </div>
        <div className="lightbox-stage">
          <button
            type="button"
            className="lightbox-nav lightbox-nav-prev"
            onClick={() => goto(state.index - 1)}
            disabled={state.index === 0}
            aria-label="Anterior"
            data-hover
          >←</button>
          <img className="lightbox-img" src={current.src} alt={current.label} />
          <button
            type="button"
            className="lightbox-nav lightbox-nav-next"
            onClick={() => goto(state.index + 1)}
            disabled={state.index === state.gallery.length - 1}
            aria-label="Siguiente"
            data-hover
          >→</button>
        </div>
        <div className="lightbox-stepper">
          {state.gallery.map((g, i) => (
            <button
              key={g.step}
              type="button"
              className={`lightbox-tick ${i === state.index ? 'active' : ''}`}
              onClick={() => goto(i)}
              title={`${g.step} · ${g.label}`}
              data-hover
            >
              <span className="lightbox-tick-num">{g.step}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ================ PROJECT PAGE · PAA TEC ==================
function ProjectPaaTec() {
  const p = PROJECTS.find(x => x.slug === 'paa-tec');
  if (!p) return null;
  return (
    <div className="project-page">
      <nav className="project-page-nav">
        <a className="project-back-link" href="#work" data-hover>
          <span>←</span>
          <span>Volver al portfolio</span>
        </a>
        <a className="project-page-nav-meta" href="#work" data-hover>
          <span>/ {p.num}</span>
        </a>
      </nav>

      <header className="project-page-hero">
        <div className="project-hero-grid">
          <div className="project-hero-content">
            <div className="project-page-meta">
              <span>/ {p.num}</span>
              <span>·</span>
              <span>{p.year}</span>
              <span>·</span>
              <span>{p.tag}</span>
              {p.press && p.press.length > 0 && (
                <span className="press-badge">
                  <span className="press-badge-dot"></span>EN MEDIOS
                </span>
              )}
            </div>
            <h1 className="project-page-title">{p.name}</h1>
            <p className="project-page-desc">{p.desc}</p>
            <p className="project-page-desc project-page-desc--extra">
              Es la primera práctica interactiva en línea del TEC para su examen de admisión 2026-2027. Permite a quienes aspiran a ingresar ensayar el examen completo —desde que se identifican hasta que revisan cada respuesta—, ver su puntaje por área (Matemática y Verbal) y repetir la práctica las veces que quieran para reforzar lo que más les cuesta. Funciona igual desde el celular o la computadora, con una idea simple: que ningún estudiante llegue al examen real sin haberlo vivido antes.
            </p>
            <div className="project-page-cta-row">
              {p.link && (
                <a
                  className="work-link"
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  data-hover
                >
                  <span>Ver en vivo</span>
                  <span>→</span>
                </a>
              )}
              <a
                className="work-link work-link-page"
                href="#journey"
                data-hover
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('journey');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <span>Ver el flujo</span>
                <span>↓</span>
              </a>
              {p.press && p.press.length > 0 && (
                <a
                  className="work-link"
                  href="#press"
                  data-hover
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('press');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <span>En medios</span>
                  <span>↓</span>
                </a>
              )}
            </div>
          </div>
          {p.cover && (
            <div className="project-hero-visual">
              <div className="project-hero-visual-frame">
                <div className="project-hero-visual-dots">
                  <span></span><span></span><span></span>
                </div>
                <img src={p.cover} alt={`${p.name} · preview`} className="project-hero-visual-img" />
              </div>
              <div className="project-hero-visual-label">
                <span>preview.live</span>
                <span>·</span>
                <span>{p.year}</span>
              </div>
            </div>
          )}
        </div>
      </header>


      {p.gallery && p.gallery.length > 0 && (
        <section className="project-page-section" id="journey">
          <h2 className="project-page-section-title">/ User journey · {p.gallery.length} pasos</h2>
          <p className="project-page-section-lead">
            El flujo real del estudiante, desde el login con cédula hasta la revisión pregunta por pregunta. Click en cualquier paso abre el viewer fullscreen — navegación con flechas o ESC para cerrar.
          </p>
          <div className="journey-gallery project-journey">
            <div className="journey-filmstrip">
              {p.gallery.map((g, i) => (
                <button
                  key={g.step}
                  type="button"
                  className="journey-step"
                  data-hover
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('lightbox:open', {
                      detail: { gallery: p.gallery, index: i, project: p.name }
                    }));
                  }}
                  title={`${g.label}${g.sub ? ' — ' + g.sub : ''}`}
                >
                  <div className="journey-step-thumb">
                    <img src={g.src} alt={`${p.name} · ${g.label}`} loading="lazy" />
                  </div>
                  <div className="journey-step-meta">
                    <span className="journey-step-num">{g.step}</span>
                    <span className="journey-step-label">{g.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.press && p.press.length > 0 && (
        <section className="project-page-section" id="press">
          <h2 className="project-page-section-title">/ En medios</h2>
          <p className="project-page-section-lead">
            Cobertura nacional sostenida del lanzamiento, del 19 al 25 de mayo 2026: 11 apariciones entre el comunicado oficial del TEC, prensa digital, TV y radio. Delfino y La Teja rompieron la noticia; le siguieron Telenoticias, La Nación, Repretel, Columbia y más. Los segmentos de TV y radio se pueden ver y escuchar acá mismo.
          </p>
          <div className="press project-press">
            <ul className="press-list">
              {p.press.map((m, i) => (
                <li key={i}>
                  {m.url ? (
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener"
                      data-hover
                    >
                      <span className="press-outlet">{m.outlet}{m.medium ? ` · ${m.medium}` : ''}</span>
                      <span className="press-date">{m.date}</span>
                      <span className="press-arrow">→</span>
                    </a>
                  ) : m.clip ? (
                    <div className="press-clip">
                      <span className="press-static">
                        <span className="press-outlet">{m.outlet}{m.medium ? ` · ${m.medium}` : ''}</span>
                        <span className="press-date">{m.date}</span>
                      </span>
                      {m.clip.endsWith('.mp4') ? (
                        <video className="press-video" controls preload="none" poster={m.poster} src={m.clip}></video>
                      ) : (
                        <audio className="press-audio" controls preload="none" src={m.clip}></audio>
                      )}
                    </div>
                  ) : (
                    <span className="press-static">
                      <span className="press-outlet">{m.outlet}{m.medium ? ` · ${m.medium}` : ''}</span>
                      <span className="press-date">{m.date}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="project-page-section" id="stack">
        <h2 className="project-page-section-title">/ Stack</h2>
        <div className="project-stack-groups">
          <div className="project-stack-group">
            <span className="stack-extra-label">Frontend</span>
            <div className="project-stack">
              {p.tech.map(t => <span key={t} className="chip chip-lg">{t}</span>)}
            </div>
          </div>
          {p.techBack && p.techBack.length > 0 && (
            <div className="project-stack-group">
              <span className="stack-extra-label">Backend</span>
              <div className="project-stack">
                {p.techBack.map(t => <span key={t} className="chip chip-lg">{t}</span>)}
              </div>
            </div>
          )}
        </div>
        <div className="project-stack-extras">
          <div className="stack-extra">
            <span className="stack-extra-label">Accesibilidad</span>
            <span className="stack-extra-value">WCAG 2.2 AA ~98% · Lighthouse a11y 100 · axe 0 violaciones</span>
          </div>
          <div className="stack-extra">
            <span className="stack-extra-label">Org</span>
            <span className="stack-extra-value">DATIC - ITCR</span>
          </div>
          <div className="stack-extra">
            <span className="stack-extra-label">Rol</span>
            <span className="stack-extra-value">Software Architect</span>
          </div>
        </div>
      </section>

      <footer className="project-page-footer">
        <a className="project-back-link" href="#work" data-hover>
          <span>←</span>
          <span>Volver al portfolio</span>
        </a>
      </footer>
    </div>
  );
}

Object.assign(window, { Hero, Marquee, Work, Services, Now, About, Testimonials, Contact, Lightbox, ProjectPaaTec });
