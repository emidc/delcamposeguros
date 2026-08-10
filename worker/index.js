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
    .section{padding:112px 0}
    .section.soft{background:var(--cream)}
    .section.dark{background:var(--forest);color:white;position:relative;overflow:hidden}
    .section.dark:after{content:"";position:absolute;width:520px;height:520px;border:1px solid rgba(255,255,255,.1);border-radius:50%;right:-160px;top:-250px;box-shadow:0 0 0 80px rgba(255,255,255,.025),0 0 0 160px rgba(255,255,255,.018)}
    .section-head{max-width:800px;margin-bottom:55px}
    .section-head.center{text-align:center;margin-left:auto;margin-right:auto}
    .section-head.center .eyebrow{justify-content:center}
    .section-head h2,.split-copy h2,.contact-copy h2{font-family:Georgia,"Times New Roman",serif;font-size:clamp(37px,4.6vw,59px);font-weight:500;line-height:1.06;letter-spacing:-.035em;margin:19px 0 18px}
    .section-head p,.split-copy>p,.contact-copy>p{font-size:17px;color:var(--muted);max-width:700px}
    .dark .section-head p,.dark .split-copy>p{color:rgba(255,255,255,.66)}
    .audience-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
    .audience-card{min-height:360px;border:1px solid var(--line);border-radius:var(--radius);padding:36px;background:white;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;transition:.25s ease}
    .audience-card:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
    .audience-card.business{background:linear-gradient(145deg,#17392f,#254d41);color:white}
    .audience-card:after{content:"";position:absolute;width:190px;height:190px;border-radius:50%;border:1px solid currentColor;opacity:.1;right:-55px;top:-70px;box-shadow:0 0 0 35px currentColor}
    .card-index{font-family:Georgia,"Times New Roman",serif;font-size:15px;color:var(--gold)}
    .audience-card h3{font-family:Georgia,"Times New Roman",serif;font-size:36px;font-weight:500;margin:50px 0 14px;line-height:1.05}
    .audience-card p{color:var(--muted);max-width:470px;margin:0}
    .audience-card.business p{color:rgba(255,255,255,.68)}
    .link-arrow{margin-top:28px;text-decoration:none;font-weight:800;font-size:13px;display:inline-flex;gap:9px;align-items:center}
    .method-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden}
    .method{background:var(--paper);padding:38px 32px;min-height:305px}
    .method-num{font-family:Georgia,"Times New Roman",serif;font-size:42px;color:var(--gold);display:block;margin-bottom:50px}
    .method h3{font-family:Georgia,"Times New Roman",serif;font-size:25px;font-weight:500;margin:0 0 12px}
    .method p{font-size:14px;color:var(--muted);margin:0}
    .services-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
    .service{border:1px solid var(--line);border-radius:18px;background:white;padding:28px;display:grid;grid-template-columns:52px 1fr;gap:18px;align-items:start}
    .service-icon{width:48px;height:48px;border-radius:15px;background:#edf0e7;color:var(--forest);display:grid;place-items:center;font-family:Georgia,"Times New Roman",serif;font-size:18px}
    .service h3{margin:1px 0 7px;font-size:17px}.service p{margin:0;color:var(--muted);font-size:13px}
    .split{display:grid;grid-template-columns:1fr 1fr;gap:90px;align-items:center;position:relative;z-index:1}
    .principles{display:grid;gap:12px}
    .principle{border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:22px 24px;display:grid;grid-template-columns:auto 1fr;gap:16px;background:rgba(255,255,255,.045)}
    .principle b{color:#d0a668;font-family:Georgia,"Times New Roman",serif;font-size:22px;font-weight:500}
    .principle strong{display:block;margin-bottom:4px}.principle span{font-size:13px;color:rgba(255,255,255,.6)}
    .claim-panel{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}
    .claim-quote{background:#f0eadf;border-radius:var(--radius);padding:48px;position:relative}
    .quote-mark{font-family:Georgia,"Times New Roman",serif;font-size:80px;line-height:.6;color:var(--gold);opacity:.8}
    .claim-quote blockquote{font-family:Georgia,"Times New Roman",serif;font-size:30px;line-height:1.27;margin:22px 0 25px}
    .claim-quote footer{font-size:12px;color:var(--muted)}
    .check-list{display:grid;gap:18px;margin-top:30px}
    .check-line{display:grid;grid-template-columns:30px 1fr;gap:13px}
    .check-line i{width:28px;height:28px;border-radius:50%;background:#e7ece4;color:var(--forest);display:grid;place-items:center;font-style:normal;font-weight:900}
    .check-line strong{display:block;margin-bottom:3px}.check-line span{font-size:13px;color:var(--muted)}
    .team-note{display:grid;grid-template-columns:1fr auto;gap:50px;align-items:end;padding:45px;border:1px solid var(--line);border-radius:var(--radius);background:white}
    .team-note h3{font-family:Georgia,"Times New Roman",serif;font-size:34px;font-weight:500;margin:0 0 12px}
    .team-note p{margin:0;color:var(--muted);max-width:720px}
    .role-pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
    .role-pills span{border:1px solid var(--line);border-radius:999px;padding:7px 11px;font-size:11px;color:#4f5c57;background:#faf9f4}
    .contact{padding:95px 0;background:#ddd9cd}
    .contact-grid{display:grid;grid-template-columns:1fr .9fr;gap:80px;align-items:start}
    .contact-points{display:grid;gap:12px;margin-top:28px;color:#47534e;font-size:14px}
    .contact-card{background:white;border-radius:var(--radius);padding:34px;box-shadow:var(--shadow)}
    .field{display:grid;gap:7px;margin-bottom:16px}.field label{font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-weight:800;color:#56635e}
    .field input,.field select,.field textarea{width:100%;border:1px solid var(--line);border-radius:11px;padding:13px 14px;background:#fdfcf8;color:var(--ink);font:inherit}
    .field textarea{min-height:92px;resize:vertical}.contact-card .button{width:100%}
    .form-note{font-size:11px;color:var(--muted);margin:11px 0 0;text-align:center}
    .footer{background:#0d211b;color:white;padding:50px 0 32px}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:50px;align-items:start}
    .footer .brand-mark{border-color:rgba(255,255,255,.3)}.footer .brand-mark:before{border-color:white}.footer .brand-mark:after{border-color:rgba(255,255,255,.3)}
    .footer .brand-copy span{color:rgba(255,255,255,.5)}.footer-links{display:flex;gap:25px;font-size:13px;color:rgba(255,255,255,.68)}
    .footer-links a{text-decoration:none}.footer-bottom{border-top:1px solid rgba(255,255,255,.12);margin-top:36px;padding-top:20px;display:flex;justify-content:space-between;color:rgba(255,255,255,.46);font-size:11px}
    .survey-overlay{position:fixed;inset:0;z-index:100;background:rgba(7,20,16,.72);display:none;align-items:center;justify-content:center;padding:24px;backdrop-filter:blur(8px)}
    .survey-overlay.open{display:flex}
    .survey-panel{width:min(940px,100%);max-height:min(850px,94vh);background:var(--paper);border-radius:26px;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.32);display:grid;grid-template-rows:auto 1fr auto}
    .survey-head{padding:22px 26px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:18px;background:white}
    .survey-title{display:flex;align-items:center;gap:13px}.survey-title strong{display:block}.survey-title span{display:block;color:var(--muted);font-size:11px}
    .close{width:38px;height:38px;border:1px solid var(--line);border-radius:50%;background:white;cursor:pointer;font-size:20px;color:var(--muted)}
    .progress-track{height:3px;background:#e6e3da}.progress-fill{height:100%;width:10%;background:var(--gold);transition:width .3s ease}
    .survey-body{padding:42px 52px 36px;overflow:auto}
    .step-label{text-transform:uppercase;letter-spacing:.13em;font-size:10px;color:var(--gold);font-weight:900}
    .question-title{font-family:Georgia,"Times New Roman",serif;font-size:34px;font-weight:500;line-height:1.15;margin:14px 0 9px}
    .question-help{color:var(--muted);font-size:14px;margin:0 0 27px}
    .choices{display:grid;grid-template-columns:repeat(2,1fr);gap:11px}
    .choice{border:1px solid var(--line);border-radius:14px;background:white;padding:17px;text-align:left;cursor:pointer;min-height:76px;display:flex;align-items:center;gap:12px;color:var(--ink)}
    .choice:hover{border-color:rgba(21,55,46,.45)}.choice.selected{border-color:var(--forest);background:#edf0e7;box-shadow:inset 0 0 0 1px var(--forest)}
    .choice-mark{width:20px;height:20px;border-radius:50%;border:1px solid #aeb7b0;display:grid;place-items:center;flex:none}.choice.selected .choice-mark{background:var(--forest);border-color:var(--forest);color:white}
    .survey-text{width:100%;min-height:150px;border:1px solid var(--line);border-radius:14px;padding:16px;background:white;font:inherit;resize:vertical}
    .survey-foot{padding:18px 26px;border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;background:white}
    .survey-foot .button{min-width:120px}.survey-count{font-size:12px;color:var(--muted)}
    .summary-list{display:grid;gap:10px;margin-top:25px}.summary-item{border:1px solid var(--line);background:white;border-radius:12px;padding:14px 16px}.summary-item strong{display:block;font-size:11px;color:var(--muted);margin-bottom:3px}.summary-item span{font-size:14px}
    .success-icon{width:54px;height:54px;border-radius:18px;background:#e4ebdf;color:var(--forest);display:grid;place-items:center;font-size:25px;margin-bottom:20px}
    .toast{position:fixed;z-index:200;left:50%;bottom:30px;transform:translate(-50%,20px);background:#0d211b;color:white;padding:12px 18px;border-radius:999px;box-shadow:0 15px 35px rgba(0,0,0,.22);font-size:13px;opacity:0;pointer-events:none;transition:.25s ease}.toast.show{opacity:1;transform:translate(-50%,0)}
    body.modal-open{overflow:hidden}
    @media(max-width:920px){.nav-links a:not(.button){display:none}.hero-grid,.split,.claim-panel,.contact-grid{grid-template-columns:1fr;gap:44px}.clarity-card{max-width:650px}.trust-grid{grid-template-columns:1fr}.trust-item{border-right:0;border-bottom:1px solid var(--line);padding-left:0}.trust-item:last-child{border-bottom:0}.hero:before{right:-55%;bottom:-15%}.method-grid{grid-template-columns:1fr}.method{min-height:auto}.audience-grid{grid-template-columns:1fr}.team-note{grid-template-columns:1fr;align-items:start}.services-grid{grid-template-columns:1fr}.section{padding:82px 0}.footer-grid{grid-template-columns:1fr}}
    @media(max-width:620px){.shell{padding-left:20px;padding-right:20px}.nav{height:76px}.brand-copy span{display:none}.nav-links{gap:10px}.nav-links .button{padding:8px 12px}.hero-grid{padding-top:55px;padding-bottom:70px}.hero-lead{font-size:16px}.hero-actions{display:grid}.hero-actions .button{width:100%}.hero-foot{display:grid;gap:10px}.clarity-card{padding:22px}.survey-fab{left:20px;right:20px;bottom:16px}.trust-number{font-size:23px}.section{padding:68px 0}.section-head{margin-bottom:38px}.audience-card{padding:26px;min-height:310px}.audience-card h3{margin-top:35px}.method{padding:29px 24px}.method-num{margin-bottom:28px}.service{grid-template-columns:1fr;padding:23px}.claim-quote{padding:31px}.claim-quote blockquote{font-size:25px}.team-note{padding:29px}.contact{padding:70px 0}.contact-card{padding:24px}.footer-links{display:grid;gap:10px}.footer-bottom{display:grid;gap:8px}.survey-overlay{padding:0;align-items:stretch}.survey-panel{border-radius:0;max-height:none;height:100%}.survey-body{padding:31px 22px}.question-title{font-size:28px}.choices{grid-template-columns:1fr}.survey-foot{padding:14px 18px}.survey-title span{display:none}}
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
    <section class="section" id="propuesta">
      <div class="shell">
        <div class="section-head">
          <div class="eyebrow">Una propuesta para cada realidad</div>
          <h2>El seguro empieza por entender qué necesitás proteger.</h2>
          <p>No ofrecemos una póliza estándar: partimos de tus riesgos reales, tus prioridades y el contexto en el que tomás decisiones.</p>
        </div>
        <div class="audience-grid">
          <article class="audience-card business">
            <div><span class="card-index">01 / Empresas</span><h3>Continuidad para lo que construiste.</h3><p>Industria, bodegas, minería y PyMEs: analizamos operaciones, activos, personas y responsabilidades para diseñar una cobertura que acompañe el negocio.</p></div>
            <a class="link-arrow" href="#contacto">Revisar riesgos de mi empresa <span>→</span></a>
          </article>
          <article class="audience-card">
            <div><span class="card-index">02 / Personas</span><h3>Tranquilidad para tu vida cotidiana.</h3><p>Auto, hogar y protección personal con una explicación clara de qué contratás, qué queda cubierto y qué conviene revisar.</p></div>
            <a class="link-arrow" href="#contacto">Revisar mis seguros <span>→</span></a>
          </article>
        </div>
      </div>
    </section>

    <section class="section soft" aria-labelledby="metodo-title">
      <div class="shell">
        <div class="section-head center">
          <div class="eyebrow">Cómo trabajamos</div>
          <h2 id="metodo-title">De la incertidumbre a una decisión clara.</h2>
          <p>Un proceso simple para transformar riesgos complejos en coberturas comprensibles y accionables.</p>
        </div>
        <div class="method-grid">
          <article class="method"><span class="method-num">01</span><h3>Entendemos el riesgo</h3><p>Escuchamos, relevamos y priorizamos. La cobertura correcta comienza por una buena pregunta, no por una lista de productos.</p></article>
          <article class="method"><span class="method-num">02</span><h3>Comparamos con criterio</h3><p>Analizamos alternativas de compañías de primera línea, condiciones, límites, exclusiones y requisitos relevantes.</p></article>
          <article class="method"><span class="method-num">03</span><h3>Acompañamos de verdad</h3><p>Gestionamos documentación, renovaciones y siniestros. Nuestro trabajo no termina cuando se emite la póliza.</p></article>
        </div>
      </div>
    </section>

    <section class="section" id="soluciones">
      <div class="shell">
        <div class="section-head">
          <div class="eyebrow">Valor en cada etapa</div>
          <h2>Más que intermediar: cuidar la calidad de tu protección.</h2>
          <p>Combinamos análisis técnico, gestión administrativa y cercanía para que el seguro funcione cuando realmente lo necesitás.</p>
        </div>
        <div class="services-grid">
          <article class="service"><div class="service-icon">R</div><div><h3>Relevamiento y matriz de riesgos</h3><p>Identificamos exposiciones, prioridades y acciones de prevención para construir una visión integral.</p></div></article>
          <article class="service"><div class="service-icon">C</div><div><h3>Cotización comparativa</h3><p>Ordenamos alternativas y mostramos las diferencias que importan más allá del precio final.</p></div></article>
          <article class="service"><div class="service-icon">P</div><div><h3>Diseño y revisión de pólizas</h3><p>Ajustamos sumas, cláusulas y condiciones; traducimos la letra chica a decisiones comprensibles.</p></div></article>
          <article class="service"><div class="service-icon">S</div><div><h3>Gestión de siniestros</h3><p>Te orientamos con los pasos, la documentación y el seguimiento frente a la aseguradora.</p></div></article>
          <article class="service"><div class="service-icon">A</div><div><h3>Administración y renovaciones</h3><p>Controlamos vencimientos, certificados, pagos y cambios para reducir errores y tareas dispersas.</p></div></article>
          <article class="service"><div class="service-icon">M</div><div><h3>Monitoreo periódico</h3><p>Revisamos coberturas cuando cambian los activos, los riesgos o las necesidades del cliente.</p></div></article>
        </div>
      </div>
    </section>

    <section class="section dark">
      <div class="shell split">
        <div class="split-copy">
          <div class="eyebrow" style="color:#d0a668">Tecnología con propósito</div>
          <h2>Más agilidad. El mismo criterio humano.</h2>
          <p>Usamos tecnología para automatizar tareas repetitivas, comparar mejor y anticiparnos. Las decisiones complejas, la empatía y el acompañamiento siguen en manos de personas.</p>
        </div>
        <div class="principles">
          <div class="principle"><b>01</b><div><strong>Procesos más simples</strong><span>Menos carga manual, menos errores y respuestas más rápidas.</span></div></div>
          <div class="principle"><b>02</b><div><strong>Información más clara</strong><span>Visualizaciones que ayudan a comprender y comparar pólizas.</span></div></div>
          <div class="principle"><b>03</b><div><strong>Personas donde aportan más</strong><span>Criterio, negociación, confianza y navegación de la incertidumbre.</span></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell claim-panel">
        <div class="claim-quote">
          <div class="quote-mark">“</div>
          <blockquote>El verdadero valor de un seguro se entiende cuando algo sale mal.</blockquote>
          <footer>Una promesa de acompañamiento, no solo de contratación.</footer>
        </div>
        <div class="split-copy">
          <div class="eyebrow">Cuando ocurre un siniestro</div>
          <h2>No te dejamos solo frente a la letra chica.</h2>
          <p>Te ayudamos a entender el procedimiento, reunir la información correcta y sostener el seguimiento hasta la resolución.</p>
          <div class="check-list">
            <div class="check-line"><i>✓</i><div><strong>Orientación inmediata</strong><span>Qué hacer primero y qué evitar para no comprometer la cobertura.</span></div></div>
            <div class="check-line"><i>✓</i><div><strong>Gestión y seguimiento</strong><span>Coordinación con cliente, aseguradora y actores involucrados.</span></div></div>
            <div class="check-line"><i>✓</i><div><strong>Aprendizaje preventivo</strong><span>Revisamos lo ocurrido para mejorar procedimientos y coberturas futuras.</span></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section soft" id="equipo">
      <div class="shell">
        <div class="team-note">
          <div>
            <div class="eyebrow">Un equipo, varias miradas</div>
            <h3>Experiencia aseguradora, análisis de riesgos y capacidad tecnológica.</h3>
            <p>La propuesta combina conocimiento técnico del negocio, trato cercano y una nueva capacidad para rediseñar procesos con software e inteligencia artificial.</p>
            <div class="role-pills"><span>Riesgos</span><span>Ventas y posventa</span><span>Administración</span><span>Procesos</span><span>Tecnología</span><span>Finanzas</span></div>
          </div>
          <button class="button secondary" data-open-survey>¿Esto representa al equipo? <span>→</span></button>
        </div>
      </div>
    </section>

    <section class="contact" id="contacto">
      <div class="shell contact-grid">
        <div class="contact-copy">
          <div class="eyebrow">Primer paso</div>
          <h2>Conversemos sobre lo que necesitás proteger.</h2>
          <p>Una primera revisión puede mostrar coberturas insuficientes, duplicadas o desalineadas con tus riesgos actuales.</p>
          <div class="contact-points"><span>✓ Sin compromiso de contratación</span><span>✓ Atención personalizada</span><span>✓ Broker sin costo adicional para el cliente</span></div>
        </div>
        <form class="contact-card" id="contactForm">
          <div class="field"><label for="name">Nombre</label><input id="name" name="name" placeholder="Tu nombre" required /></div>
          <div class="field"><label for="profile">¿Qué querés revisar?</label><select id="profile" name="profile"><option>Seguros de mi empresa</option><option>Auto, hogar o seguros personales</option><option>Un siniestro en curso</option><option>Todavía no estoy seguro</option></select></div>
          <div class="field"><label for="message">Contanos brevemente</label><textarea id="message" name="message" placeholder="¿Qué situación te gustaría revisar?"></textarea></div>
          <button class="button primary" type="submit">Solicitar una conversación <span>→</span></button>
          <p class="form-note">Formulario demostrativo. El canal definitivo se decidirá con el equipo.</p>
        </form>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="shell">
      <div class="footer-grid">
        <a class="brand" href="#inicio"><span class="brand-mark" aria-hidden="true"></span><span class="brand-copy"><strong>Protección con criterio</strong><span>Identidad provisoria para el prototipo</span></span></a>
        <nav class="footer-links"><a href="#propuesta">Cómo trabajamos</a><a href="#soluciones">Soluciones</a><a href="#equipo">Nosotros</a><button class="button secondary small" data-open-survey>Responder encuesta</button></nav>
      </div>
      <div class="footer-bottom"><span>Prototipo conceptual · Agosto 2026</span><span>Los datos de contacto, identidad legal y compañías se incorporarán tras la validación.</span></div>
    </div>
  </footer>
  <button class="button survey-fab" data-open-survey>Ayudanos a decidir esta web <span class="arrow">↗</span></button>

  <div class="survey-overlay" id="surveyOverlay" role="dialog" aria-modal="true" aria-labelledby="surveyQuestion">
    <section class="survey-panel">
      <div>
        <div class="survey-head">
          <div class="survey-title"><span class="brand-mark" aria-hidden="true"></span><div><strong>Encuesta de decisiones web</strong><span>8 decisiones · 5 minutos</span></div></div>
          <button class="close" id="closeSurvey" aria-label="Cerrar encuesta">×</button>
        </div>
        <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
      </div>
      <div class="survey-body" id="surveyBody"></div>
      <div class="survey-foot" id="surveyFoot">
        <button class="button secondary small" id="prevQuestion">← Anterior</button>
        <span class="survey-count" id="surveyCount"></span>
        <button class="button primary small" id="nextQuestion">Siguiente →</button>
      </div>
    </section>
  </div>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <script>
    const questions = [
      {
        title:'¿Qué promesa debería ocupar el centro de la página?',
        help:'Elegí la idea que mejor representa el valor diferencial del negocio.',
        type:'single',
        options:['Estar bien protegido, no solo tener una póliza','Un asesor de confianza cuando más lo necesitás','Coberturas claras, comparadas con criterio','Prevención y gestión integral de riesgos']
      },
      {
        title:'¿A quién debería hablarle primero esta landing?',
        help:'La página puede atender a todos, pero el primer mensaje necesita una prioridad.',
        type:'single',
        options:['Empresas e industrias','Bodegas y actividad vitivinícola','Personas: auto y hogar','Equilibrio empresas + personas']
      },
      {
        title:'¿Cuál debería ser la acción principal del visitante?',
        help:'Esta decisión organiza todo el recorrido y define qué mediremos.',
        type:'single',
        options:['Solicitar revisión de coberturas','Pedir una cotización','Hablar con un asesor','Explorar productos y servicios']
      },
      {
        title:'¿Qué tono debería dominar la comunicación?',
        help:'Pensá en cómo queremos que se sienta el cliente al recorrer la página.',
        type:'single',
        options:['Cercano y humano','Técnico y profesional','Sobrio y ejecutivo','Didáctico y transparente']
      },
      {
        title:'¿Qué tres servicios merecen mayor protagonismo?',
        help:'Podés elegir hasta tres. El resto seguirá presente, pero con menor jerarquía.',
        type:'multi', max:3,
        options:['Análisis y matriz de riesgos','Cotización comparativa','Revisión de pólizas','Gestión de siniestros','Administración y renovaciones','Prevención y monitoreo']
      },
      {
        title:'¿Qué lugar debería ocupar la tecnología?',
        help:'El prototipo la presenta como habilitador, sin desplazar el vínculo humano.',
        type:'single',
        options:['Casi invisible: que se note en la agilidad','Una sección breve como en este prototipo','Un diferencial central de la propuesta','Todavía no mencionarla públicamente']
      },
      {
        title:'¿Qué evidencia generaría más confianza?',
        help:'Elegí la prueba que debería incorporarse primero en una próxima versión.',
        type:'single',
        options:['Años de experiencia y trayectoria','Casos reales y testimonios','Compañías con las que trabajamos','Presentación del equipo','Indicadores de servicio y respuesta']
      },
      {
        title:'¿Qué falta, sobra o te genera tensión en esta propuesta?',
        help:'Señalá mensajes que no representen al negocio, riesgos, ideas o cambios concretos.',
        type:'text', placeholder:'Ejemplo: priorizaría empresas, bajaría el protagonismo de tecnología y explicaría mejor el acompañamiento en siniestros…'
      }
    ];

    const overlay = document.getElementById('surveyOverlay');
    const body = document.getElementById('surveyBody');
    const foot = document.getElementById('surveyFoot');
    const progress = document.getElementById('progressFill');
    const storageKey = 'landing-seguros-decision-survey-v1';
    let step = 0;
    let answers = {};
    try { answers = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (error) { answers = {}; }

    function escapeHtml(value) {
      return String(value || '').replace(/[&<>"']/g, function(char) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]; });
    }

    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('show');
      window.clearTimeout(showToast.timer);
      showToast.timer = window.setTimeout(function(){ toast.classList.remove('show'); }, 2400);
    }

    function saveAnswers() {
      try { localStorage.setItem(storageKey, JSON.stringify(answers)); } catch (error) {}
    }

    function hasAnswer(index) {
      const value = answers[index];
      if (Array.isArray(value)) return value.length > 0;
      return typeof value === 'string' && value.trim().length > 0;
    }

    function openSurvey() {
      overlay.classList.add('open');
      document.body.classList.add('modal-open');
      step = 0;
      renderQuestion();
      document.getElementById('closeSurvey').focus();
    }

    function closeSurvey() {
      overlay.classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    function renderQuestion() {
      const question = questions[step];
      progress.style.width = (((step + 1) / questions.length) * 100) + '%';
      let control = '';
      if (question.type === 'text') {
        control = '<textarea class="survey-text" id="openAnswer" placeholder="' + escapeHtml(question.placeholder) + '">' + escapeHtml(answers[step] || '') + '</textarea>';
      } else {
        const selected = question.type === 'multi' ? (answers[step] || []) : [answers[step]];
        control = '<div class="choices">' + question.options.map(function(option){
          const isSelected = selected.indexOf(option) >= 0;
          return '<button class="choice' + (isSelected ? ' selected' : '') + '" data-option="' + escapeHtml(option) + '"><span class="choice-mark">' + (isSelected ? '✓' : '') + '</span><span>' + escapeHtml(option) + '</span></button>';
        }).join('') + '</div>';
      }
      body.innerHTML = '<div class="step-label">Decisión ' + (step + 1) + ' de ' + questions.length + '</div><h2 class="question-title" id="surveyQuestion">' + question.title + '</h2><p class="question-help">' + question.help + '</p>' + control;
      foot.innerHTML = '<button class="button secondary small" id="prevQuestion">← Anterior</button><span class="survey-count">Tus respuestas quedan guardadas en este dispositivo</span><button class="button primary small" id="nextQuestion">' + (step === questions.length - 1 ? 'Ver síntesis →' : 'Siguiente →') + '</button>';
      document.getElementById('prevQuestion').style.visibility = step === 0 ? 'hidden' : 'visible';
      document.getElementById('prevQuestion').addEventListener('click', function(){ step -= 1; renderQuestion(); });
      document.getElementById('nextQuestion').addEventListener('click', nextQuestion);
      body.querySelectorAll('[data-option]').forEach(function(button){ button.addEventListener('click', function(){ chooseOption(button.dataset.option); }); });
      const textarea = document.getElementById('openAnswer');
      if (textarea) textarea.addEventListener('input', function(event){ answers[step] = event.target.value; saveAnswers(); });
    }

    function chooseOption(option) {
      const question = questions[step];
      if (question.type === 'multi') {
        const selected = Array.isArray(answers[step]) ? answers[step].slice() : [];
        const index = selected.indexOf(option);
        if (index >= 0) selected.splice(index, 1);
        else if (selected.length < question.max) selected.push(option);
        else { showToast('Podés elegir hasta ' + question.max + ' opciones.'); return; }
        answers[step] = selected;
      } else {
        answers[step] = option;
      }
      saveAnswers();
      renderQuestion();
    }

    function nextQuestion() {
      if (!hasAnswer(step)) { showToast(step === questions.length - 1 ? 'Escribí una observación para completar la encuesta.' : 'Elegí una opción para continuar.'); return; }
      if (step < questions.length - 1) { step += 1; renderQuestion(); }
      else renderSummary();
    }

    function summaryText() {
      const lines = ['ENCUESTA DE DECISIONES WEB', ''];
      questions.forEach(function(question, index){
        const value = Array.isArray(answers[index]) ? answers[index].join(', ') : answers[index];
        lines.push((index + 1) + '. ' + question.title);
        lines.push('Respuesta: ' + (value || 'Sin respuesta'));
        lines.push('');
      });
      return lines.join('\n');
    }

    function renderSummary() {
      progress.style.width = '100%';
      const items = questions.map(function(question,index){
        const value = Array.isArray(answers[index]) ? answers[index].join(' · ') : answers[index];
        return '<div class="summary-item"><strong>' + (index + 1) + '. ' + escapeHtml(question.title) + '</strong><span>' + escapeHtml(value || 'Sin respuesta') + '</span></div>';
      }).join('');
      body.innerHTML = '<div class="success-icon">✓</div><div class="step-label">Síntesis preparada</div><h2 class="question-title" id="surveyQuestion">Tu mirada ya está lista para la discusión.</h2><p class="question-help">Copiá la respuesta y compartila con el equipo. En esta versión del prototipo los resultados no se centralizan automáticamente.</p><div class="summary-list">' + items + '</div>';
      foot.innerHTML = '<button class="button secondary small" id="reviewAnswers">← Revisar</button><span class="survey-count">La respuesta también queda guardada localmente</span><button class="button primary small" id="copyAnswers">Copiar respuesta</button>';
      document.getElementById('reviewAnswers').addEventListener('click', function(){ step = questions.length - 1; renderQuestion(); });
      document.getElementById('copyAnswers').addEventListener('click', copyAnswers);
    }

    function copyAnswers() {
      const text = summaryText();
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function(){ showToast('Respuesta copiada.'); });
      } else {
        const area = document.createElement('textarea');
        area.value = text; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); showToast('Respuesta copiada.');
      }
    }

    document.querySelectorAll('[data-open-survey]').forEach(function(button){ button.addEventListener('click', openSurvey); });
    document.getElementById('closeSurvey').addEventListener('click', closeSurvey);
    overlay.addEventListener('click', function(event){ if (event.target === overlay) closeSurvey(); });
    document.addEventListener('keydown', function(event){ if (event.key === 'Escape' && overlay.classList.contains('open')) closeSurvey(); });
    document.getElementById('contactForm').addEventListener('submit', function(event){ event.preventDefault(); showToast('Interacción simulada: falta definir el canal de contacto.'); });
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
