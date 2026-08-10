const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Prototipo de landing para una consultora de riesgos y seguros: coberturas bien pensadas, asesoramiento cercano y acompañamiento real." />
  <meta name="theme-color" content="#102821" />
  <title>Protección con criterio — Prototipo web</title>
  <style>
    :root {
      --ink:#17231f; --forest:#15372e; --forest-2:#214b3f; --sage:#9eae91;
      --cream:#f4f0e7; --paper:#fbfaf6; --white:#fff; --gold:#b68a49;
      --muted:#64716b; --line:rgba(23,35,31,.14); --shadow:0 28px 80px rgba(21,55,46,.14);
      --radius:22px; --max:1200px;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;color:var(--ink);background:var(--paper);font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55}
    button,a{font:inherit}
    a{color:inherit}
    button:focus-visible,a:focus-visible{outline:3px solid rgba(182,138,73,.45);outline-offset:3px}
    .prototype-bar{min-height:38px;background:#0d211b;color:rgba(255,255,255,.78);display:flex;align-items:center;justify-content:center;gap:10px;padding:8px 24px;font-size:12px;letter-spacing:.02em;text-align:center}
    .prototype-dot{width:7px;height:7px;border-radius:50%;background:#d0a668;box-shadow:0 0 0 4px rgba(208,166,104,.12)}
    .shell{max-width:var(--max);margin:0 auto;padding:0 32px}
    .nav{height:86px;display:flex;align-items:center;justify-content:space-between;gap:28px}
    .brand{display:flex;align-items:center;gap:13px;text-decoration:none;min-width:0}
    .brand-mark{width:42px;height:42px;border:1px solid rgba(21,55,46,.22);display:grid;place-items:center;border-radius:50%;position:relative}
    .brand-mark:before,.brand-mark:after{content:"";position:absolute;border:1px solid var(--forest);transform:rotate(45deg)}
    .brand-mark:before{width:14px;height:14px}
    .brand-mark:after{width:25px;height:25px;border-color:rgba(21,55,46,.3)}
    .brand-copy{display:grid;line-height:1.18}
    .brand-copy strong{font-family:Georgia,"Times New Roman",serif;font-size:18px;letter-spacing:.01em}
    .brand-copy span{color:var(--muted);font-size:10px;text-transform:uppercase;letter-spacing:.13em;margin-top:4px}
    .nav-links{display:flex;align-items:center;gap:28px;font-size:14px}
    .nav-links a{text-decoration:none;color:#3e4b46}
    .nav-links a:hover{color:var(--forest)}
    .button{border:1px solid transparent;min-height:48px;padding:12px 19px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:9px;text-decoration:none;font-weight:700;cursor:pointer;transition:.2s ease}
    .button:hover{transform:translateY(-2px)}
    .button.primary{background:var(--forest);color:white;box-shadow:0 12px 30px rgba(21,55,46,.18)}
    .button.primary:hover{background:var(--forest-2)}
    .button.secondary{border-color:rgba(21,55,46,.22);background:rgba(255,255,255,.68);color:var(--forest)}
    .button.small{min-height:40px;padding:9px 15px;font-size:13px}
    .hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#eef0e6 0%,#f7f3ea 45%,#ede8dc 100%);border-top:1px solid rgba(21,55,46,.07)}
    .hero:before{content:"";position:absolute;inset:auto -12% -45% auto;width:720px;height:720px;border-radius:50%;border:1px solid rgba(21,55,46,.12);box-shadow:0 0 0 90px rgba(255,255,255,.12),0 0 0 180px rgba(21,55,46,.035)}
    .hero-grid{min-height:650px;display:grid;grid-template-columns:1.08fr .92fr;align-items:center;gap:70px;padding-top:74px;padding-bottom:86px;position:relative;z-index:1}
    .eyebrow{display:flex;align-items:center;gap:10px;color:var(--forest);text-transform:uppercase;letter-spacing:.14em;font-size:11px;font-weight:800}
    .eyebrow:before{content:"";width:34px;height:1px;background:var(--gold)}
    h1{font-family:Georgia,"Times New Roman",serif;font-weight:500;font-size:clamp(48px,6.1vw,82px);line-height:.99;letter-spacing:-.045em;margin:23px 0 25px;max-width:780px}
    h1 em{font-weight:500;color:var(--forest)}
    .hero-lead{font-size:18px;line-height:1.65;color:#4f5d57;max-width:660px;margin:0 0 33px}
    .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
    .hero-foot{display:flex;gap:26px;align-items:center;margin-top:34px;color:#53605b;font-size:12px}
    .hero-foot span{display:flex;align-items:center;gap:7px}
    .check{width:18px;height:18px;border-radius:50%;display:grid;place-items:center;background:rgba(21,55,46,.09);color:var(--forest);font-size:11px;font-weight:900}
    .clarity-card{position:relative;background:rgba(255,255,255,.78);border:1px solid rgba(21,55,46,.13);box-shadow:var(--shadow);border-radius:28px;padding:30px;backdrop-filter:blur(12px)}
    .card-kicker{text-transform:uppercase;letter-spacing:.12em;color:var(--muted);font-size:10px;font-weight:800}
    .card-title{font-family:Georgia,"Times New Roman",serif;font-size:29px;line-height:1.12;margin:8px 0 24px}
    .risk-row{border-top:1px solid var(--line);padding:17px 0;display:grid;grid-template-columns:42px 1fr auto;gap:13px;align-items:center}
    .risk-icon{width:38px;height:38px;border-radius:12px;background:#eef0e8;display:grid;place-items:center;color:var(--forest);font-weight:800}
    .risk-copy strong{display:block;font-size:14px}
    .risk-copy span{color:var(--muted);font-size:12px}
    .risk-state{font-size:11px;font-weight:800;padding:5px 9px;border-radius:999px;background:#e1eadf;color:#2c5a45}
    .risk-state.warn{background:#f4e9d4;color:#805f2b}
    .card-note{margin-top:9px;padding:15px;border-radius:14px;background:var(--forest);color:white;display:flex;justify-content:space-between;align-items:center;gap:16px}
    .card-note span{color:rgba(255,255,255,.68);font-size:11px;display:block}
    .card-note strong{font-family:Georgia,"Times New Roman",serif;font-size:18px;font-weight:500}
    .trust-strip{border-bottom:1px solid var(--line);background:white}
    .trust-grid{display:grid;grid-template-columns:repeat(3,1fr);min-height:105px}
    .trust-item{padding:24px 28px;border-right:1px solid var(--line);display:flex;gap:14px;align-items:center}
    .trust-item:first-child{padding-left:0}.trust-item:last-child{border-right:0}
    .trust-number{font-family:Georgia,"Times New Roman",serif;color:var(--gold);font-size:28px}
    .trust-item strong{display:block;font-size:13px}.trust-item span{font-size:12px;color:var(--muted)}
    .survey-fab{position:fixed;right:22px;bottom:22px;z-index:20;background:#c99a54;color:#17231f;border:0;box-shadow:0 16px 38px rgba(39,39,25,.25)}
    .arrow{font-size:18px;line-height:1}
    @media(max-width:920px){.nav-links a:not(.button){display:none}.hero-grid{grid-template-columns:1fr;gap:44px}.clarity-card{max-width:650px}.trust-grid{grid-template-columns:1fr}.trust-item{border-right:0;border-bottom:1px solid var(--line);padding-left:0}.trust-item:last-child{border-bottom:0}.hero:before{right:-55%;bottom:-15%}}
    @media(max-width:620px){.shell{padding-left:20px;padding-right:20px}.nav{height:76px}.brand-copy span{display:none}.nav-links{gap:10px}.nav-links .button{padding:8px 12px}.hero-grid{padding-top:55px;padding-bottom:70px}.hero-lead{font-size:16px}.hero-actions{display:grid}.hero-actions .button{width:100%}.hero-foot{display:grid;gap:10px}.clarity-card{padding:22px}.survey-fab{left:20px;right:20px;bottom:16px}.trust-number{font-size:23px}}
  </style>
</head>
<body>
  <div class="prototype-bar"><span class="prototype-dot"></span>Prototipo para discusión interna · Los textos, prioridades y llamados a la acción están abiertos a decisión</div>
  <header class="shell nav" aria-label="Navegación principal">
    <a class="brand" href="#inicio" aria-label="Inicio">
      <span class="brand-mark" aria-hidden="true"></span>
      <span class="brand-copy"><strong>Protección con criterio</strong><span>Riesgos · Seguros · Acompañamiento</span></span>
    </a>
    <nav class="nav-links">
      <a href="#propuesta">Cómo trabajamos</a><a href="#soluciones">Soluciones</a><a href="#equipo">Nosotros</a>
      <button class="button secondary small" data-open-survey>Opinar sobre la web</button>
    </nav>
  </header>
  <main>
    <section class="hero" id="inicio">
      <div class="shell hero-grid">
        <div>
          <div class="eyebrow">Asesoramiento en riesgos y seguros</div>
          <h1>No se trata solo de tener una póliza. Se trata de estar <em>bien protegido.</em></h1>
          <p class="hero-lead">Analizamos tus riesgos, traducimos la letra chica y comparamos coberturas para que puedas decidir con claridad. Si ocurre un siniestro, seguimos a tu lado.</p>
          <div class="hero-actions">
            <a class="button primary" href="#contacto">Revisar mis coberturas <span class="arrow">→</span></a>
            <a class="button secondary" href="#propuesta">Conocer cómo trabajamos</a>
          </div>
          <div class="hero-foot">
            <span><i class="check">✓</i> Coberturas a medida</span>
            <span><i class="check">✓</i> Compañías de primera línea</span>
            <span><i class="check">✓</i> Acompañamiento en siniestros</span>
          </div>
        </div>
        <aside class="clarity-card" aria-label="Ejemplo de revisión de cobertura">
          <div class="card-kicker">Una mirada clara de tu protección</div>
          <div class="card-title">Mapa inicial de riesgos</div>
          <div class="risk-row"><div class="risk-icon">01</div><div class="risk-copy"><strong>Patrimonio y operación</strong><span>Bienes, continuidad y responsabilidad</span></div><span class="risk-state">Revisado</span></div>
          <div class="risk-row"><div class="risk-icon">02</div><div class="risk-copy"><strong>Personas clave</strong><span>Equipo, terceros y entorno</span></div><span class="risk-state warn">A validar</span></div>
          <div class="risk-row"><div class="risk-icon">03</div><div class="risk-copy"><strong>Procedimientos críticos</strong><span>Prevención y respuesta ante incidentes</span></div><span class="risk-state">Revisado</span></div>
          <div class="card-note"><div><span>Próximo paso sugerido</span><strong>Revisar prioridades</strong></div><span class="arrow">→</span></div>
        </aside>
      </div>
    </section>
    <section class="trust-strip">
      <div class="shell trust-grid">
        <div class="trust-item"><span class="trust-number">01</span><div><strong>Criterio antes que precio</strong><span>Una diferencia pequeña puede cambiar mucho la cobertura.</span></div></div>
        <div class="trust-item"><span class="trust-number">02</span><div><strong>Claridad para decidir</strong><span>Comparamos, traducimos y explicamos lo importante.</span></div></div>
        <div class="trust-item"><span class="trust-number">03</span><div><strong>Humanos cuando importa</strong><span>Estamos presentes antes, durante y después del siniestro.</span></div></div>
      </div>
    </section>
    <section id="propuesta" aria-label="Contenido en desarrollo"></section>
  </main>
  <button class="button survey-fab" data-open-survey>Ayudanos a decidir esta web <span class="arrow">↗</span></button>
  <script>
    document.querySelectorAll('[data-open-survey]').forEach(button => button.addEventListener('click', () => {
      alert('La encuesta de decisiones se incorporará en la siguiente parte del prototipo.');
    }));
  </script>
</body>
</html>`;

export default {
  async fetch(request) {
    const pathname = new URL(request.url).pathname.replace(/\/$/, "") || "/";
    if (pathname !== "/") return new Response("Not found", { status: 404 });
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  },
};
