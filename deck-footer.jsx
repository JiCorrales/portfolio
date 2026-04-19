/* global React */
const { useState: uSs, useEffect: uEe, useRef: uRr } = React;

const WA_URL = 'https://wa.me/50687204622';
const EMAIL = 'jocorrales.dev@gmail.com';

// ============ TERMINAL CLI FOOTER ============
function TerminalFooter() {
  const initialLines = [
    { type: 'comment', text: '// jose@cartago — escribí un comando o tocá un chip de abajo' },
    { type: 'cmd', cmd: 'about' },
    {
      type: 'out', html: (
        <>
          <div><span className="k">name</span> <span className="dim">·</span> <span className="v">Jose Corrales</span></div>
          <div><span className="k">role</span> <span className="dim">·</span> <span className="v">Software Engineer</span></div>
          <div><span className="k">where</span> <span className="dim">·</span> <span className="v">Cartago, CR</span> <span className="dim">(UTC-6)</span></div>
          <div><span className="k">stack</span> <span className="dim">·</span> <span className="s">TypeScript · React · Next.js · Node · Postgres</span></div>
          <div><span className="k">status</span> <span className="dim">·</span> <span className="hl">available Q2 2026</span></div>
        </>
      )
    },
    { type: 'cmd', cmd: 'social -l' },
    {
      type: 'out', html: (
        <>
          <div><span className="dim">→</span> <a href={WA_URL} target="_blank" rel="noopener">whatsapp</a>   <span className="dim">+506 8720 4622</span></div>
          <div><span className="dim">→</span> <a href={`mailto:${EMAIL}`}>email</a>      <span className="dim">{EMAIL}</span></div>
          <div><span className="dim">→</span> <a href="https://linkedin.com" target="_blank" rel="noopener">linkedin</a>   <span className="dim">@josecorralescr</span></div>
          <div><span className="dim">→</span> <a href="https://github.com" target="_blank" rel="noopener">github</a>     <span className="dim">@josecorrales</span></div>
        </>
      )
    },
  ];

  const [lines, setLines] = uSs(initialLines);
  const [input, setInput] = uSs('');
  const inputRef = uRr(null);
  const bodyRef = uRr(null);

  uEe(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const run = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    const newLines = [...lines, { type: 'cmd', cmd }];
    const parts = cmd.split(/\s+/);
    const head = parts[0].toLowerCase();

    if (head === 'about') {
      newLines.push({
        type: 'out', html: (
          <>
            <div><span className="k">name</span> <span className="dim">·</span> <span className="v">Jose Corrales</span></div>
            <div><span className="k">role</span> <span className="dim">·</span> <span className="v">Software Engineer</span></div>
            <div><span className="k">where</span> <span className="dim">·</span> <span className="v">Cartago, CR</span></div>
            <div><span className="k">status</span> <span className="dim">·</span> <span className="hl">available Q2 2026</span></div>
          </>
        )
      });
    } else if (head === 'contact') {
      newLines.push({ type: 'out', html: <div><span className="dim">→</span> <span className="s">scroll: #contact</span></div> });
      setTimeout(() => scrollTo('contact'), 80);
    } else if (head === 'work') {
      newLines.push({ type: 'out', html: <div><span className="dim">→</span> <span className="s">scroll: #work</span></div> });
      setTimeout(() => scrollTo('work'), 80);
    } else if (head === 'services') {
      newLines.push({ type: 'out', html: <div><span className="dim">→</span> <span className="s">scroll: #services</span></div> });
      setTimeout(() => scrollTo('services'), 80);
    } else if (head === 'social') {
      newLines.push({
        type: 'out', html: (
          <>
            <div><span className="dim">→</span> <a href={WA_URL} target="_blank" rel="noopener">whatsapp</a>   <span className="dim">+506 8720 4622</span></div>
            <div><span className="dim">→</span> <a href={`mailto:${EMAIL}`}>email</a>      <span className="dim">{EMAIL}</span></div>
            <div><span className="dim">→</span> <a href="https://linkedin.com" target="_blank" rel="noopener">linkedin</a>   <span className="dim">@josecorralescr</span></div>
            <div><span className="dim">→</span> <a href="https://github.com" target="_blank" rel="noopener">github</a>     <span className="dim">@josecorrales</span></div>
          </>
        )
      });
    } else if (head === 'hire') {
      newLines.push({ type: 'out', html: <div><span className="hl">→ abriendo WhatsApp…</span></div> });
      setTimeout(() => window.open(WA_URL + '?text=' + encodeURIComponent('Hola Jose, vengo del portfolio'), '_blank'), 350);
    } else if (head === 'help') {
      newLines.push({
        type: 'out', html: (
          <>
            <div><span className="k">about</span>      <span className="dim">— quién soy</span></div>
            <div><span className="k">work</span>       <span className="dim">— scroll a proyectos</span></div>
            <div><span className="k">services</span>   <span className="dim">— scroll a servicios</span></div>
            <div><span className="k">contact</span>    <span className="dim">— scroll a contacto</span></div>
            <div><span className="k">social -l</span>  <span className="dim">— listado de socials</span></div>
            <div><span className="k">hire</span>       <span className="dim">— abre WhatsApp</span></div>
            <div><span className="k">clear</span>      <span className="dim">— limpia la terminal</span></div>
          </>
        )
      });
    } else if (head === 'clear') {
      setLines([{ type: 'comment', text: '// cleared · escribí `help` para ver comandos' }]);
      setInput('');
      return;
    } else {
      newLines.push({ type: 'out', html: <div><span className="n">error</span> <span className="dim">—</span> comando no encontrado: <span className="v">{cmd}</span>. probá <span className="s">help</span>.</div> });
    }

    setLines(newLines);
    setInput('');
  };

  const Prompt = () => (
    <span className="term-prompt">
      <span className="host">jose@cartago</span>
      <span className="sep">:</span>
      <span className="dir">~/portfolio</span>
      <span className="sep">$</span>
    </span>
  );

  return (
    <div className="term-wrap">
      <div className="term" onClick={() => inputRef.current && inputRef.current.focus()}>
        <div className="term-bar">
          <span className="term-dot r"></span>
          <span className="term-dot y"></span>
          <span className="term-dot g"></span>
          <span className="term-title">jose@cartago <span className="path">~/portfolio</span></span>
          <div className="term-tabs">
            <span className="term-tab active">bash</span>
            <span className="term-tab">zsh</span>
            <span className="term-tab">ssh</span>
          </div>
        </div>

        <div className="term-body" ref={bodyRef}>
          {lines.map((ln, i) => {
            if (ln.type === 'comment') return <div key={i} className="term-line comment">{ln.text}</div>;
            if (ln.type === 'cmd') return (
              <div key={i} className="term-line">
                <Prompt />
                <span className="term-cmd">{ln.cmd}</span>
              </div>
            );
            if (ln.type === 'out') return <div key={i} className="term-out">{ln.html}</div>;
            return null;
          })}

          <div className="term-input-row">
            <Prompt />
            <input
              ref={inputRef}
              className="term-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') run(input); }}
              spellCheck={false}
              autoComplete="off"
              data-hover
            />
            <span className="term-caret"></span>
          </div>

          <div className="term-suggest">
            <span className="lbl">try</span>
            {['about', 'work', 'services', 'contact', 'social -l', 'hire', 'help'].map(c => (
              <button key={c} className="term-chip" onClick={() => run(c)} data-hover>{c}</button>
            ))}
          </div>
        </div>

        <div className="term-statusbar">
          <div className="left">
            <span>JOSE@CARTAGO</span>
            <span>BASH · UTF-8</span>
            <span>v2.6</span>
          </div>
          <div className="right">
            <span>LINE 01</span>
            <span className="live">ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ MANIFESTO / CODE FOOTER ============
function ManifestoFooter() {
  const [exec, setExec] = uSs(false);
  const [running, setRunning] = uSs(false);
  const hireRef = uRr(null);

  const runHire = () => {
    if (running) return;
    setRunning(true);
    setExec(true);
    if (hireRef.current) {
      hireRef.current.classList.remove('running');
      // eslint-disable-next-line no-unused-expressions
      void hireRef.current.offsetWidth;
      hireRef.current.classList.add('running');
    }
    setTimeout(() => {
      window.open(WA_URL + '?text=' + encodeURIComponent('Hola Jose, vengo del portfolio'), '_blank');
      setRunning(false);
    }, 650);
  };

  // eslint-disable-next-line no-unused-vars
  const K = ({ c, children }) => <span className={c}>{children}</span>;

  // Build code content as array of line nodes so gutter matches
  const lines = [
    <><K c="com">// jose.corrales — manifesto.js</K></>,
    <><K c="kw">const</K> <K c="var">jose</K> <K c="pun">=</K> <K c="pun">{'{'}</K></>,
    <>  <K c="key">name</K><K c="pun">:</K> <K c="str">"Jose Corrales"</K><K c="pun">,</K></>,
    <>  <K c="key">role</K><K c="pun">:</K> <K c="str">"Software Engineer"</K><K c="pun">,</K></>,
    <>  <K c="key">where</K><K c="pun">:</K> <K c="str">"Cartago, Costa Rica"</K><K c="pun">,</K></>,
    <>  <K c="key">available</K><K c="pun">:</K> <K c="num">true</K><K c="pun">,</K></>,
    <>  <K c="key">social</K><K c="pun">:</K> <K c="pun">{'{'}</K></>,
    <>    <K c="key">whatsapp</K><K c="pun">:</K> <a className="link-str" href={WA_URL} target="_blank" rel="noopener" data-hover>"wa.me/50687204622"</a><K c="pun">,</K></>,
    <>    <K c="key">email</K><K c="pun">:</K>    <a className="link-str" href={`mailto:${EMAIL}`} data-hover>"jocorrales.dev@gmail.com"</a><K c="pun">,</K></>,
    <>    <K c="key">linkedin</K><K c="pun">:</K> <a className="link-str" href="https://linkedin.com" target="_blank" rel="noopener" data-hover>"@jicorrales"</a><K c="pun">,</K></>,
    <>    <K c="key">github</K><K c="pun">:</K>   <a className="link-str" href="https://github.com" target="_blank" rel="noopener" data-hover>"@JiCorrales"</a><K c="pun">,</K></>,
    <>  <K c="pun">{'}'}</K><K c="pun">,</K></>,
    <>  <K c="key">believes</K><K c="pun">:</K> <K c="str">"cada detalle importa — pero solo si se siente"</K><K c="pun">,</K></>,
    <>  <K c="fn">hire</K><K c="pun">:</K> <K c="pun">()</K> <K c="kw">{'=>'}</K> <K c="kw">window</K><K c="pun">.</K><K c="fn">open</K><K c="pun">(</K><K c="str">"wa.me/50687204622"</K><K c="pun">)</K><K c="pun">,</K></>,
    <><K c="pun">{'}'}</K><K c="pun">;</K></>,
    <>{'\u00A0'}</>,
    <><K c="com">// ↓ ejecutá para contratar</K></>,
    <><K c="var">jose</K><K c="pun">.</K><button ref={hireRef} className="hire" onClick={runHire} data-hover><K c="fn">hire</K><K c="pun">()</K></button><K c="pun">;</K></>,
  ];

  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');

  return (
    <div className="mani-wrap">
      <div className="mani-label">/ 07 · MANIFESTO</div>
      <div className="mani-code">
        <div className="mani-gutter">
          {lines.map((_, i) => <div key={i}>{String(i + 1).padStart(2, '0')}</div>)}
        </div>
        <div className="mani-content">
          {lines.map((ln, i) => <div key={i}>{ln}</div>)}
        </div>
      </div>

      <div className={`mani-exec ${exec ? 'show' : ''}`}>
        <span className="tag">▸ exec</span>
        <span className="out">opening wa.me/50687204622 …</span>
      </div>

      <div className="mani-foot">
        <div className="left">
          <span>JOSE CORRALES · © 2026</span>
          <span>CARTAGO · CR</span>
          <span>{hh}:{mm} UTC-6</span>
        </div>
        <div>BUILT BY HAND · NO TEMPLATES</div>
      </div>
    </div>
  );
}

// ============ ROOT ============
function ConsoleFooter({ variant }) {
  const v = variant || 'manifesto';
  return v === 'terminal' ? <TerminalFooter /> : <ManifestoFooter />;
}

Object.assign(window, { ConsoleFooter, TerminalFooter, ManifestoFooter });
