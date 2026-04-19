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
  { num: '02', name: 'Examen Práctica PAA TEC', tag: 'Plataforma · Educación', year: '2026', tech: ['React 19', 'TypeScript', 'Vite', 'Vitest'], desc: 'Aplicación web para practicar el examen de admisión del TEC. Arquitectura feature-first con flujo completo de login, consentimiento, examen cronometrado y revisión de resultados, con soporte mobile y cobertura de pruebas automatizadas.' },
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
            const cover = imgs[0];
            return (
            <div key={p.num} className={`work-item ${open === p.num ? 'open' : ''}`} onClick={() => setOpen(open === p.num ? null : p.num)} data-hover>
              <div className="num">{p.num}</div>
              <h3>{p.name}</h3>
              <div className="tag">{p.tag}</div>
              <div className="year">{p.year}</div>
              <div className="arrow">
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11 L11 3 M11 3 H5 M11 3 V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              </div>
              <div className="preview" data-preview="">
                {cover
                  ? <img src={cover} alt={p.name} className="work-shot-img" />
                  : <div className="work-shot-nda work-shot-nda--sm"><span>CONFIDENTIAL</span></div>}
              </div>
              <div className="work-expand">
                <div className="work-expand-inner">
                  <div className="spacer"></div>
                  <div className="work-gallery">
                    {imgs.length > 0 ? (
                      imgs.map((src, i) => (
                        <div key={i} className="work-shot" data-label="">
                          <img src={src} alt={`${p.name} ${i + 1}`} className="work-shot-img" />
                        </div>
                      ))
                    ) : (
                      <div className="work-shot" data-label="">
                        <div className="work-shot-nda">
                          <span>CONFIDENTIAL</span>
                          <small>Sin preview pública · bajo acuerdo de confidencialidad</small>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="work-meta">
                    <p>{p.desc}</p>
                    <div className="stack">
                      {p.tech.map(t => <span key={t} className="chip">{t}</span>)}
                    </div>
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
                  </div>
                </div>
              </div>
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
    { when: '/IDLE', what: 'Puliendo Examen Práctica PAA TEC para release', p: 80 },
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

Object.assign(window, { Hero, Marquee, Work, Services, Now, About, Testimonials, Contact });
