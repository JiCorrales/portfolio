/* global React */
const { useState: uS, useEffect: uE } = React;

function Tweaks({ state, setState }) {
  const [open, setOpen] = uS(false);
  const [editModeOn, setEditModeOn] = uS(false);

  uE(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') { setEditModeOn(true); setOpen(true); }
      if (e.data.type === '__deactivate_edit_mode') { setEditModeOn(false); setOpen(false); }
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (key, val) => {
    const next = { ...state, [key]: val };
    setState(next);
    try { localStorage.setItem('jc-tweaks', JSON.stringify(next)); } catch {}
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  };

  if (!editModeOn) return null;

  const Opt = ({ k, v, label }) => (
    <button className={state[k] === v ? 'on' : ''} onClick={() => update(k, v)}>{label}</button>
  );

  return (
    <>
      <div id="tweaks" className={open ? 'open' : ''}>
        <h5>
          <span>⚙ TWEAKS</span>
          <span className="close" onClick={() => setOpen(false)}>×</span>
        </h5>

        <div className="group">
          <div className="group-label">Acento</div>
          <div className="opts">
            <Opt k="accent" v="lime" label="Lime" />
            <Opt k="accent" v="amber" label="Amber" />
            <Opt k="accent" v="pink" label="Pink" />
            <Opt k="accent" v="blue" label="Blue" />
          </div>
        </div>

        <div className="group">
          <div className="group-label">Footer</div>
          <div className="opts">
            <Opt k="footer" v="manifesto" label="Manifesto" />
            <Opt k="footer" v="terminal" label="Terminal" />
          </div>
        </div>

        <div className="group">
          <div className="row">
            <span>Sonido transport</span>
            <div className={`toggle ${state.sound ? 'on' : ''}`} onClick={() => update('sound', !state.sound)}></div>
          </div>
          <div className="row">
            <span>Cursor personalizado</span>
            <div className={`toggle ${state.cursor ? 'on' : ''}`} onClick={() => update('cursor', !state.cursor)}></div>
          </div>
        </div>
      </div>
      {!open && <div className="tweaks-fab show" onClick={() => setOpen(true)}>⚙</div>}
    </>
  );
}

// ============= APP ROOT =============
function App() {
  const DEFAULTS = window.__TWEAK_DEFAULTS || {};
  const [state, setState] = uS(() => {
    try {
      const s = JSON.parse(localStorage.getItem('jc-tweaks') || 'null');
      if (s) return { ...DEFAULTS, ...s };
    } catch {}
    return DEFAULTS;
  });

  uE(() => {
    document.body.dataset.accent = state.accent || 'lime';
    document.body.dataset.footer = state.footer || 'manifesto';
    window.__audioEnabled = !!state.sound;
  }, [state]);

  uE(() => {
    if (!state.cursor) {
      document.body.classList.remove('cursor-on');
      return;
    }
    document.body.classList.add('cursor-on');
    const dot = document.getElementById('c-dot');
    const ring = document.getElementById('c-ring');
    if (!dot || !ring) return;
    let rx = 0, ry = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
    };
    const onOver = (e) => {
      if (e.target.closest('[data-hover], a, button')) document.body.classList.add('cursor-hover');
    };
    const onOut = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest('[data-hover], a, button')) document.body.classList.remove('cursor-hover');
    };
    let raf;
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [state.cursor]);

  const [active, setActive] = uS('top');
  uE(() => {
    const ids = ['top', 'work', 'services', 'now', 'contact'];
    const onScroll = () => {
      let cur = 'top';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < 200) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      {state.cursor && (
        <>
          <div id="c-dot" className="cursor-dot"></div>
          <div id="c-ring" className="cursor-ring"></div>
        </>
      )}
      <nav className="topnav" data-hover>
        <a className={active === 'top' ? 'active' : ''} onClick={() => jump('top')}>Home</a>
        <a className={active === 'work' ? 'active' : ''} onClick={() => jump('work')}>Work</a>
        <a className={active === 'services' ? 'active' : ''} onClick={() => jump('services')}>Services</a>
        <a className={active === 'contact' ? 'active' : ''} onClick={() => jump('contact')}>Contact</a>
      </nav>

      <window.Hero />
      <window.Marquee />
      <window.Work />
      <window.Services />
      <window.Now />
      <window.Contact />
      <window.ConsoleFooter variant={state.footer || 'manifesto'} />

      <Tweaks state={state} setState={setState} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
