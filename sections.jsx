/* global React, useLang */
const { useState: useS, useEffect: useE, useRef: useR } = React;

// ================ HERO ==================
function Hero() {
  const { t } = useLang();
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
          <span>{t('hero.status')}</span>
        </div>
        <h1 className="hero-title">
          <span className="line">{t('hero.l1a')} <em>{t('hero.l1b')}</em></span>
          <span className="line">{t('hero.l2a')} <span className="accent">{t('hero.l2b')}</span></span>
          <span className="line"><em>{t('hero.l3a')}</em> {t('hero.l3b')}</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-tag">
            {t('hero.tagPre')}<strong style={{color:'var(--ink)'}}>Jose Corrales</strong>{t('hero.tagPost')}
          </p>
          <div className="hero-meta">
            <div><strong>CARTAGO, CR</strong> · {time} UTC-6</div>
            <div>{t('hero.meta2')}</div>
            <div>{t('hero.meta3')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================ MARQUEE ==================
const MARQUEE = {
  en: ['Web Platforms', 'AI Agents', 'Back-office Systems', 'E-Invoicing (CR)', 'APIs', 'DevOps', 'Integrations'],
  es: ['Plataformas Web', 'Agentes IA', 'Sistemas Back-office', 'Facturación Electrónica', 'APIs', 'DevOps', 'Integraciones'],
};
function Marquee() {
  const { pick } = useLang();
  const items = pick(MARQUEE);
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
// Text fields are { en, es }; everything else is language-neutral.
const PROJECTS = [
  {
    num: '01',
    slug: 'paa-tec',
    name: { en: 'TEC Admission Exam Practice', es: 'Práctica Examen TEC' },
    tag: { en: 'Platform · Education', es: 'Plataforma · Educación' },
    year: '2026',
    tech: ['React 19', 'TypeScript', 'Vite 7', 'Vitest', 'JWT'],
    techBack: ['.NET', 'SQL Server', 'C#'],
    cover: 'screenshots/paa-tec/04-welcome.png',
    link: 'https://tec.ac.cr/admision/practicaexamen',
    desc: {
      en: 'Platform that lets anyone rehearse the TEC admission exam under the same conditions as the real test: timed questions, immediate feedback and results by area, so applicants arrive better prepared on exam day.',
      es: 'Plataforma con la que cualquier persona puede practicar el examen de admisión del TEC en las mismas condiciones del examen real: preguntas con tiempo cronometrado, retroalimentación inmediata y revisión de resultados por área para llegar mejor preparada el día de la prueba.',
    },
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
      { src: 'screenshots/paa-tec/01-login.png',            step: '01',  label: { en: 'Login', es: 'Login' },                          sub: { en: 'ID number + access code', es: 'Auth con cédula y código' } },
      { src: 'screenshots/paa-tec/02-consent.png',          step: '02',  label: { en: 'Consent', es: 'Consentimiento' },               sub: { en: 'Informed consent', es: 'Consentimiento informado' } },
      { src: 'screenshots/paa-tec/03-consent-rejected.png', step: '03',  label: { en: 'Consent rejected', es: 'Consent rechazado' },   sub: { en: 'Edge case · user declines', es: 'Edge case · usuario rechaza' } },
      { src: 'screenshots/paa-tec/04-welcome.png',          step: '04',  label: { en: 'Welcome', es: 'Bienvenida' },                   sub: { en: 'Onboarding', es: 'Onboarding' } },
      { src: 'screenshots/paa-tec/05-instructions.png',     step: '05',  label: { en: 'Instructions', es: 'Instrucciones' },           sub: { en: 'Exam rules', es: 'Reglas del examen' } },
      { src: 'screenshots/paa-tec/06-exam.png',             step: '06',  label: { en: 'Exam', es: 'Examen' },                          sub: { en: 'Unanswered question', es: 'Pregunta sin contestar' } },
      { src: 'screenshots/paa-tec/06b-exam-answered.png',   step: '06b', label: { en: 'Answered', es: 'Pregunta contestada' },         sub: { en: 'Selection saved', es: 'Selección guardada' } },
      { src: 'screenshots/paa-tec/06c-finalize-dialog.png', step: '06c', label: { en: 'Finish', es: 'Finalizar' },                     sub: { en: 'Confirmation dialog', es: 'Dialog de confirmación' } },
      { src: 'screenshots/paa-tec/07-results.png',          step: '07',  label: { en: 'Results', es: 'Resultados' },                   sub: { en: 'Score by area (Math/Verbal)', es: 'Score por área (Mat/Verbal)' } },
      { src: 'screenshots/paa-tec/08-review.png',           step: '08',  label: { en: 'Review', es: 'Revisión' },                      sub: { en: 'Question-by-question review', es: 'Review pregunta por pregunta' } },
    ],
  },
  {
    num: '02', name: { en: 'License Hub', es: 'License Hub' }, tag: { en: 'Infrastructure · Licensing', es: 'Infraestructura · Licencias' }, year: '2026',
    tech: ['Node.js', 'TypeScript', 'Fastify', 'PostgreSQL (Drizzle)', 'React', 'PASETO/Ed25519'],
    desc: {
      en: 'Central licensing platform for my own product portfolio: deny-by-default gating with offline-verifiable PASETO v4.public (Ed25519) tokens, self-service portal, admin panel and an embeddable SDK. In production on its own domain, with dev/staging environments and CI.',
      es: 'Plataforma central de licencias para mi propia cartera de productos: gating deny-by-default con tokens PASETO v4.public (Ed25519) verificables offline, portal de autoservicio, panel admin y SDK embebible. En producción con dominio propio, ambientes dev/staging y CI.',
    },
  },
  {
    num: '03', name: { en: 'Hostel Reservation Console', es: 'Consola de Reservas (Hostel)' }, tag: { en: 'Own product · AI agent', es: 'Producto propio · Agente IA' }, year: '2026',
    tech: ['Node.js', 'TypeScript', 'Fastify', 'Socket.io', 'React', 'Anthropic SDK', 'PostgreSQL'],
    desc: {
      en: "Human-in-the-loop console piloted with a boutique hostel: a Claude agent watches the channel manager (Beds24) and proposes reservation changes — rates, availability, conflicts — that the operator approves with one tap before anything is written. Deployed on the client's production VPS with the Beds24 integration live; approval workflow in development.",
      es: 'Consola human-in-the-loop piloteada con un hostel boutique: un agente con Claude vigila el channel manager (Beds24) y propone cambios de reserva — tarifas, disponibilidad, conflictos — que el operador aprueba con un toque antes de escribirse. Desplegada en el VPS de producción del cliente con la integración Beds24 activa; flujo de aprobación en desarrollo.',
    },
  },
  {
    num: '04', name: { en: 'Electronic Invoicing (Costa Rica)', es: 'Facturación Electrónica CR' }, tag: { en: 'Platform · Invoicing', es: 'Plataforma · Facturación' }, year: '2026',
    tech: ['Node.js', 'TypeScript', 'Express', 'Drizzle ORM', 'PostgreSQL', 'XAdES-EPES', 'React 19'],
    desc: {
      en: "REST middleware that issues digitally signed electronic documents (invoice, credit/debit note, ticket) against the Costa Rican tax authority's API. Encapsulates XAdES-EPES signing with a P12 certificate and the OAuth2 flow — validated in production with real documents accepted by the DGT.",
      es: 'Middleware REST que emite comprobantes electrónicos firmados (factura, nota de crédito/débito, tiquete) contra la API del Ministerio de Hacienda de Costa Rica. Encapsula la firma XAdES-EPES con certificado P12 y el flujo OAuth2 — validado en producción con documentos reales aceptados por Hacienda.',
    },
  },
  {
    num: '05', name: { en: 'FacturAI', es: 'FacturAI' }, tag: { en: 'Own product · Restaurants', es: 'Producto propio · Restaurantes' }, year: '2026',
    tech: ['Astro', 'React (islands)', 'Express 5', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Anthropic (Claude)'],
    desc: {
      en: 'Billing and POS software for restaurants with an AI advisor that flags expiring inventory, purchase timing and financial patterns, plus automated supplier purchase coordination over WhatsApp. MVP deployed across two client apps (desktop POS/admin + mobile PWA for waitstaff), 23 screens.',
      es: 'Software de facturación y caja para restaurantes con un asesor IA que detecta vencimientos, momentos de compra y patrones financieros, más coordinación automática de compras con proveedores por WhatsApp. MVP desplegado en dos apps cliente (caja/admin desktop + PWA móvil para meseros), 23 pantallas.',
    },
  },
  {
    num: '06', name: { en: 'Learning Commons TEC', es: 'Learning Commons TEC' }, tag: { en: 'System · Attendance', es: 'Sistema · Asistencia' }, year: '2025',
    tech: ['Angular 21', 'Express', 'PostgreSQL', 'TypeScript'],
    desc: {
      en: "Operations-management system for the TEC's Learning Commons and BJFF Library: attendance logs by area type, cubicle reservations, staff hours and role-based access control for admins and assistants across two campuses.",
      es: 'Sistema de gestión operativa para el Learning Commons y Biblioteca BJFF del TEC. Controla logs de asistencia por tipo de área, reservas de cubículos, horas trabajadas y RBAC para administradores y asistentes en dos sedes.',
    },
  },
  {
    num: '07', name: { en: 'BJFF Book Locator', es: 'BJFF Book Locator' }, tag: { en: 'System · Library', es: 'Sistema · Biblioteca' }, year: '2026',
    tech: ['Astro', 'React 19', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL'],
    desc: {
      en: "Book-location system for the TEC's José Figueres Ferrer Library: normalized classification parser, shelf-range search engine and an admin module to map the library's physical layout onto the database.",
      es: 'Sistema de localización de libros para la Biblioteca José Figueres Ferrer del TEC. Parser de clasificación normalizada, motor de búsqueda por rangos en estanterías y módulo admin para mapear la estructura física de la biblioteca sobre la base de datos.',
    },
  },
];

function PressList({ press, pick }) {
  return (
    <ul className="press-list">
      {press.map((m, i) => (
        <li key={i}>
          {m.url ? (
            <a href={m.url} target="_blank" rel="noopener" onClick={e => e.stopPropagation()} data-hover>
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
  );
}

function Work() {
  const { t, pick } = useLang();
  const [open, setOpen] = useS(null);
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-label label">{t('work.label')}</div>
        <h2 className="section-title">{t('work.titleA')}<em>{t('work.titleB')}</em></h2>
        <div className="work-list">
          {PROJECTS.map(p => {
            const name = pick(p.name);
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
              <h3>{name}</h3>
              <div className="tag-group">
                <div className="tag">{pick(p.tag)}</div>
                {p.press && p.press.length > 0 && (
                  <div className="press-badge" title={t('work.pressTitle', p.press.length)}>
                    <span className="press-badge-dot"></span>{t('work.press')}
                  </div>
                )}
              </div>
              <div className="year">{p.year}</div>
              <div className="arrow">
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11 L11 3 M11 3 H5 M11 3 V9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              </div>
              <div className="preview" data-preview="">
                {cover
                  ? <img src={cover} alt={name} className="work-shot-img" />
                  : <div className="work-shot-nda work-shot-nda--sm"><span>{t('work.confidential')}</span></div>}
              </div>
              {!hasPage && <div className="work-expand">
                <div className={`work-expand-inner ${!hasMedia ? 'work-expand-inner--no-media' : ''}`}>
                  <div className="spacer"></div>
                  {hasMedia && (
                    <div className="work-gallery">
                      {p.gallery && p.gallery.length > 0 ? (
                        <div className="journey-gallery">
                          <div className="journey-label">{t('work.journey', p.gallery.length)}</div>
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
                                    detail: { gallery: p.gallery, index: i, project: name }
                                  }));
                                }}
                                title={`${pick(g.label)}${g.sub ? ' — ' + pick(g.sub) : ''}`}
                              >
                                <div className="journey-step-thumb">
                                  <img src={g.src} alt={`${name} · ${pick(g.label)}`} loading="lazy" />
                                </div>
                                <div className="journey-step-meta">
                                  <span className="journey-step-num">{g.step}</span>
                                  <span className="journey-step-label">{pick(g.label)}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        imgs.map((src, i) => (
                          <div key={i} className="work-shot" data-label="">
                            <img src={src} alt={`${name} ${i + 1}`} className="work-shot-img" />
                          </div>
                        ))
                      )}
                    </div>
                  )}
                  <div className="work-meta">
                    <p>{pick(p.desc)}</p>
                    <div className="stack">
                      {p.tech.map(t => <span key={t} className="chip">{t}</span>)}
                    </div>
                    {p.press && p.press.length > 0 && (
                      <div className="press">
                        <div className="press-label">{t('work.pressList')}</div>
                        <PressList press={p.press} pick={pick} />
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
                        <span>{t('work.visit')}</span>
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
                        <span>{t('work.fullPage')}</span>
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
const SERVICES = {
  en: [
    {
      tier: 'I · STARTER', name: 'Landing Page', sub: 'Lead capture',
      desc: 'Professional website with responsive design and a direct call to action to WhatsApp.',
      includes: ['Modern responsive design', 'Up to 5 sections', 'Direct WhatsApp button', 'Contact form', 'Basic SEO', 'Hosting + domain (1 year)'],
      excludes: ['Shopping cart', 'Admin panel'],
    },
    {
      tier: 'II · PROFESSIONAL', name: 'E-Commerce', sub: 'Complete online store', featured: true,
      desc: 'Online store with cart, payment gateway and product management.',
      includes: ['Everything in Starter', 'Full shopping cart', 'Integrated payment gateway', 'Product catalog', 'Product admin panel', 'Email/WhatsApp notifications', 'Filters and search'],
      excludes: ['Advanced inventory', 'Reports and analytics'],
    },
    {
      tier: 'III · BUSINESS', name: 'System + Inventory', sub: 'Real-time control',
      desc: 'Web system with inventory, reports and a complete admin panel.',
      includes: ['Everything in Professional', 'Real-time inventory', 'Dashboard with metrics', 'Users and roles', 'Movement history', 'CSV/PDF export', 'Low-stock alerts'],
      excludes: ['ERP integrations', 'Native mobile app'],
    },
    {
      tier: 'IV · ENTERPRISE', name: 'Custom', sub: 'Tailored software',
      desc: 'Full development. Scalable architecture, integrations, AI agents and ongoing support.',
      includes: ['Custom architecture', 'External API integrations', 'LLM agents with human-in-the-loop', 'CI/CD and DevOps included', 'Optimized database', 'Full documentation', 'Post-launch support'],
      excludes: [],
    },
  ],
  es: [
    {
      tier: 'I · STARTER', name: 'Landing Page', sub: 'Captación de clientes',
      desc: 'Página web profesional con diseño responsivo y llamado a acción directo a WhatsApp.',
      includes: ['Diseño responsivo moderno', 'Hasta 5 secciones', 'Botón directo a WhatsApp', 'Formulario de contacto', 'Optimización SEO básica', 'Hosting + dominio (1 año)'],
      excludes: ['Carrito de compras', 'Panel de administración'],
    },
    {
      tier: 'II · PROFESIONAL', name: 'E-Commerce', sub: 'Tienda online completa', featured: true,
      desc: 'Tienda online con carrito, pasarela de pago y gestión de productos.',
      includes: ['Todo lo del plan Starter', 'Carrito de compras completo', 'Pasarela de pago integrada', 'Catálogo de productos', 'Panel admin de productos', 'Notificaciones email/WhatsApp', 'Filtros y búsqueda'],
      excludes: ['Inventario avanzado', 'Reportes y analíticas'],
    },
    {
      tier: 'III · BUSINESS', name: 'Sistema + Inventario', sub: 'Control en tiempo real',
      desc: 'Sistema web con inventario, reportes y panel de administración completo.',
      includes: ['Todo lo del plan Profesional', 'Inventario en tiempo real', 'Dashboard con métricas', 'Gestión de usuarios y roles', 'Historial de movimientos', 'Exportación CSV/PDF', 'Alertas de stock bajo'],
      excludes: ['Integraciones ERP', 'App móvil nativa'],
    },
    {
      tier: 'IV · ENTERPRISE', name: 'A la Medida', sub: 'Software personalizado',
      desc: 'Desarrollo completo. Arquitectura escalable, integraciones, agentes de IA y soporte continuo.',
      includes: ['Arquitectura personalizada', 'Integraciones APIs externas', 'Agentes LLM con human-in-the-loop', 'CI/CD y DevOps incluido', 'BD optimizada', 'Documentación completa', 'Soporte post-lanzamiento'],
      excludes: [],
    },
  ],
};

function Services() {
  const { t, pick } = useLang();
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-label label">{t('services.label')}</div>
        <h2 className="section-title">{t('services.titleA')}<em>{t('services.titleB')}</em>{t('services.titleC')}</h2>
        <div className="services-grid">
          {pick(SERVICES).map((s, i) => (
            <div key={i} className={`service ${s.featured ? 'featured' : ''}`}>
              {s.featured && <div className="featured-badge">{t('services.featured')}</div>}
              <div className="service-tier">{s.tier}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-sub">{s.sub}</div>
              <p className="service-desc">{s.desc}</p>
              <ul>
                {s.includes.map((x, j) => <li key={j}>{x}</li>)}
                {s.excludes.map((x, j) => <li key={'e'+j} className="excl">{x}</li>)}
              </ul>
              <a
                className="service-cta"
                href={`https://wa.me/50687204622?text=${encodeURIComponent(t('services.wa', s.name))}`}
                target="_blank" rel="noopener"
                data-hover
                onClick={e => e.stopPropagation()}
              >
                <span>{t('services.cta')}</span>
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
const NOW = {
  en: [
    { when: '/NOW',  what: 'License Hub — production live; promoting client invitations + manual payments from dev to staging/prod', p: 85 },
    { when: '/NOW',  what: 'Hostel console — reservations/agenda view + multi-channel reception bot over Chatwoot', p: 60 },
    { when: '/NEXT', what: 'FacturAI — real e-invoicing through the Hacienda middleware + multi-tenant onboarding', p: 40 },
    { when: '/SOON', what: 'Facturación POS — Dockerfile/CI, VPS deploy and sandbox pilot in a real store', p: 20 },
  ],
  es: [
    { when: '/NOW',  what: 'License Hub — producción en vivo; promoviendo invitaciones + pagos manuales de dev a staging/prod', p: 85 },
    { when: '/NOW',  what: 'Consola del hostel — vista reservas/agenda + bot de recepción multicanal sobre Chatwoot', p: 60 },
    { when: '/NEXT', what: 'FacturAI — facturación electrónica real vía el middleware de Hacienda + onboarding multi-tenant', p: 40 },
    { when: '/SOON', what: 'Facturación POS — Dockerfile/CI, deploy al VPS y piloto sandbox en un comercio real', p: 20 },
  ],
};
function Now() {
  const { t, pick } = useLang();
  return (
    <section id="now">
      <div className="wrap">
        <div className="section-label label">{t('now.label')}</div>
        <h2 className="section-title">{t('now.titleA')}<em>{t('now.titleB')}</em>{t('now.titleC')}</h2>
        <div className="now-grid">
          <div className="now-card">
            <h4>{t('now.card')}</h4>
            <ul className="now-list">
              {pick(NOW).map((n, i) => (
                <li key={i}>
                  <span className="when">{n.when}</span>
                  <span className="what">{n.what}</span>
                  <span className="bar" style={{ '--p': n.p + '%' }}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================ ABOUT ==================
function About() {
  const { t } = useLang();
  const stats = [
    { n: String(PROJECTS.length), l: t('about.s1') },
    { n: '3', l: t('about.s2') },
    { n: '8', l: t('about.s3') },
    { n: 'C1', l: t('about.s4') },
  ];
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-label label">{t('about.label')}</div>
        <div className="about-grid">
          <div className="about-text">
            <p>{t('about.p1a')}<strong>{t('about.p1b')}</strong>{t('about.p1c')}</p>
            <p>{t('about.p2a')}<strong>{t('about.p2b')}</strong>{t('about.p2c')}</p>
            <p>{t('about.p3a')}<strong>{t('about.p3b')}</strong>{t('about.p3c')}</p>
          </div>
          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="stat">
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ================ CONTACT ==================
function Contact() {
  const { t } = useLang();
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="section-label label">{t('contact.label')}</div>
        <h2 className="contact-title">{t('contact.titleA')}<br/><em>{t('contact.titleB')}</em>{t('contact.titleC')}</h2>
        <div className="contact-links">
          <a className="contact-link" href="https://wa.me/50687204622" target="_blank" rel="noopener" data-hover>
            <div>
              <div className="k">{t('contact.wa')}</div>
              <div className="v">+506 8720 4622</div>
            </div>
            <div style={{ fontSize: 24 }}>→</div>
          </a>
          <a className="contact-link" href="mailto:jocorrales.dev@gmail.com" data-hover>
            <div>
              <div className="k">{t('contact.email')}</div>
              <div className="v">jocorrales.dev@gmail.com</div>
            </div>
            <div style={{ fontSize: 24 }}>→</div>
          </a>
          <a className="contact-link" href="https://cal.com/jicorrales" target="_blank" rel="noopener" data-hover>
            <div>
              <div className="k">{t('contact.call')}</div>
              <div className="v">{t('contact.callV')}</div>
            </div>
            <div style={{ fontSize: 24 }}>→</div>
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/jicorrales" target="_blank" rel="noopener" data-hover>
            <div>
              <div className="k">{t('contact.li')}</div>
              <div className="v">linkedin.com/in/jicorrales</div>
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
  const { t, pick } = useLang();
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
            <span className="lightbox-step"> · {current.step} · {pick(current.label)}</span>
            {current.sub && <span className="lightbox-sub"> — {pick(current.sub)}</span>}
          </div>
          <button type="button" className="lightbox-close" onClick={close} aria-label={t('lb.close')} data-hover>✕</button>
        </div>
        <div className="lightbox-stage">
          <button
            type="button"
            className="lightbox-nav lightbox-nav-prev"
            onClick={() => goto(state.index - 1)}
            disabled={state.index === 0}
            aria-label={t('lb.prev')}
            data-hover
          >←</button>
          <img className="lightbox-img" src={current.src} alt={pick(current.label)} />
          <button
            type="button"
            className="lightbox-nav lightbox-nav-next"
            onClick={() => goto(state.index + 1)}
            disabled={state.index === state.gallery.length - 1}
            aria-label={t('lb.next')}
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
              title={`${g.step} · ${pick(g.label)}`}
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
  const { t, pick } = useLang();
  const p = PROJECTS.find(x => x.slug === 'paa-tec');
  if (!p) return null;
  const name = pick(p.name);
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="project-page">
      <nav className="project-page-nav">
        <a className="project-back-link" href="#work" data-hover>
          <span>←</span>
          <span>{t('paa.back')}</span>
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
              <span>{pick(p.tag)}</span>
              {p.press && p.press.length > 0 && (
                <span className="press-badge">
                  <span className="press-badge-dot"></span>{t('work.press')}
                </span>
              )}
            </div>
            <h1 className="project-page-title">{name}</h1>
            <p className="project-page-desc">{pick(p.desc)}</p>
            <p className="project-page-desc project-page-desc--extra">{t('paa.extra')}</p>
            <div className="project-page-cta-row">
              {p.link && (
                <a className="work-link" href={p.link} target="_blank" rel="noopener" data-hover>
                  <span>{t('paa.live')}</span>
                  <span>→</span>
                </a>
              )}
              <a className="work-link work-link-page" href="#journey" data-hover onClick={scrollToId('journey')}>
                <span>{t('paa.flow')}</span>
                <span>↓</span>
              </a>
              {p.press && p.press.length > 0 && (
                <a className="work-link" href="#press" data-hover onClick={scrollToId('press')}>
                  <span>{t('paa.pressBtn')}</span>
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
                <img src={p.cover} alt={`${name} · preview`} className="project-hero-visual-img" />
              </div>
              <div className="project-hero-visual-label">
                <span>{t('paa.preview')}</span>
                <span>·</span>
                <span>{p.year}</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {p.gallery && p.gallery.length > 0 && (
        <section className="project-page-section" id="journey">
          <h2 className="project-page-section-title">{t('paa.journeyTitle', p.gallery.length)}</h2>
          <p className="project-page-section-lead">{t('paa.journeyLead')}</p>
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
                      detail: { gallery: p.gallery, index: i, project: name }
                    }));
                  }}
                  title={`${pick(g.label)}${g.sub ? ' — ' + pick(g.sub) : ''}`}
                >
                  <div className="journey-step-thumb">
                    <img src={g.src} alt={`${name} · ${pick(g.label)}`} loading="lazy" />
                  </div>
                  <div className="journey-step-meta">
                    <span className="journey-step-num">{g.step}</span>
                    <span className="journey-step-label">{pick(g.label)}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.press && p.press.length > 0 && (
        <section className="project-page-section" id="press">
          <h2 className="project-page-section-title">{t('paa.pressTitle')}</h2>
          <p className="project-page-section-lead">{t('paa.pressLead')}</p>
          <div className="press project-press">
            <ul className="press-list">
              {p.press.map((m, i) => (
                <li key={i}>
                  {m.url ? (
                    <a href={m.url} target="_blank" rel="noopener" data-hover>
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
        <h2 className="project-page-section-title">{t('paa.stack')}</h2>
        <div className="project-stack-groups">
          <div className="project-stack-group">
            <span className="stack-extra-label">{t('paa.frontend')}</span>
            <div className="project-stack">
              {p.tech.map(x => <span key={x} className="chip chip-lg">{x}</span>)}
            </div>
          </div>
          {p.techBack && p.techBack.length > 0 && (
            <div className="project-stack-group">
              <span className="stack-extra-label">{t('paa.backend')}</span>
              <div className="project-stack">
                {p.techBack.map(x => <span key={x} className="chip chip-lg">{x}</span>)}
              </div>
            </div>
          )}
        </div>
        <div className="project-stack-extras">
          <div className="stack-extra">
            <span className="stack-extra-label">{t('paa.a11y')}</span>
            <span className="stack-extra-value">{t('paa.a11yV')}</span>
          </div>
          <div className="stack-extra">
            <span className="stack-extra-label">{t('paa.org')}</span>
            <span className="stack-extra-value">DATIC - ITCR</span>
          </div>
          <div className="stack-extra">
            <span className="stack-extra-label">{t('paa.role')}</span>
            <span className="stack-extra-value">{t('paa.roleV')}</span>
          </div>
        </div>
      </section>

      <footer className="project-page-footer">
        <a className="project-back-link" href="#work" data-hover>
          <span>←</span>
          <span>{t('paa.back')}</span>
        </a>
      </footer>
    </div>
  );
}

Object.assign(window, { Hero, Marquee, Work, Services, Now, About, Contact, Lightbox, ProjectPaaTec, PROJECTS });
