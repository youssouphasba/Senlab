const DATA = {
    Apple: {
        'iPhone 15': ['https://static.wixstatic.com/media/fdcec1_b9dd09170d5744858c501fdd18056507~mv2.png', '40px'],
        'iPhone 15 Pro': ['https://static.wixstatic.com/media/fdcec1_5bee016e5b4d4b8d872c197deac90c80~mv2.png', '40px'],
        'iPhone 15 Pro Max': ['https://static.wixstatic.com/media/fdcec1_5636dcc5da0d4614a409440ea235355d~mv2.png', '40px'],
        'iPhone 16': ['https://static.wixstatic.com/media/fdcec1_552c698bcca347b4b30a5de913e5d132~mv2.png', '40px'],
        'iPhone 16 Pro': ['https://static.wixstatic.com/media/fdcec1_b856b10f8b3340b08160b067dc2d043d~mv2.png', '40px'],
        'iPhone 16 Pro Max': ['https://static.wixstatic.com/media/fdcec1_13f08dce65d94b279bd03de0b35e4766~mv2.png', '40px'],
        'iPhone 17': ['https://static.wixstatic.com/media/fdcec1_207f975ddb3043d4af7d91dc45e441f5~mv2.png', '40px'],
        'iPhone 17 Air': ['https://static.wixstatic.com/media/fdcec1_4d4e7a47e9a9478590b913ee5de92fdc~mv2.png', '40px'],
        'iPhone 17 Pro': ['https://static.wixstatic.com/media/fdcec1_8a0f8c9f3d774fa78b3dda685781b08b~mv2.png', '40px'],
        'iPhone 17 Pro Max': ['https://static.wixstatic.com/media/fdcec1_8a0f8c9f3d774fa78b3dda685781b08b~mv2.png', '40px']
    },
    Samsung: {
        'Galaxy A55 5G': ['https://static.wixstatic.com/media/fdcec1_938e7a290d494900a6589bd1cb5570af~mv2.png', '30px'],
        'Galaxy A56/A56 5G': ['https://static.wixstatic.com/media/fdcec1_ef2e0edfcb1e4664ac6cdde04e3ede98~mv2.png', '30px'],
        'Galaxy S23': ['https://static.wixstatic.com/media/fdcec1_ab14f21852ae4418848bba27fca7adfe~mv2.png', '30px'],
        'Galaxy S23 Ultra': ['https://static.wixstatic.com/media/fdcec1_006cd633b8ed4e10a897c5c3a7b4fa74~mv2.png', '8px'],
        'Galaxy S24': ['https://static.wixstatic.com/media/fdcec1_86aaecaa7c994ac089f2ae271362712a~mv2.png', '30px'],
        'Galaxy S24 Ultra': ['https://static.wixstatic.com/media/fdcec1_006cd633b8ed4e10a897c5c3a7b4fa74~mv2.png', '8px'],
        'Galaxy S25': ['https://static.wixstatic.com/media/fdcec1_86aaecaa7c994ac089f2ae271362712a~mv2.png', '30px'],
        'Galaxy S25 Ultra': ['https://static.wixstatic.com/media/fdcec1_006cd633b8ed4e10a897c5c3a7b4fa74~mv2.png', '8px']
    },
    Google: {
        'Pixel 8': ['https://static.wixstatic.com/media/fdcec1_25e2dc2051a14c3d9953913fbb0c40f5~mv2.png', '24px'],
        'Pixel 9': ['https://static.wixstatic.com/media/fdcec1_e9136103265e4c62bd451b30578d12ef~mv2.png', '24px'],
        'Pixel 9 Pro': ['https://static.wixstatic.com/media/fdcec1_91c730e5055643d9ac13abdaaf1a2ce7~mv2.png', '24px'],
        'Pixel 10': ['https://static.wixstatic.com/media/fdcec1_4a36938eef8a433196ebdc8ec59cbef6~mv2.png', '24px']
    },
    Xiaomi: {
        'Mi 14T Pro': ['https://static.wixstatic.com/media/fdcec1_0e098e607a0a43fe8efb8a2a180ed9cd~mv2.png', '24px'],
        'Mi 14 Pro': ['https://static.wixstatic.com/media/fdcec1_60c816876d6140e396e8453697b4ed47~mv2.png', '24px'],
        'Redmi Note 14 Pro': ['https://static.wixstatic.com/media/fdcec1_c5a45e2a99da49f5983f6b5090f45721~mv2.png', '24px']
    }
};

const ASSETS = {
    stickers: ['1f60d', '1f525', '2728', '1f389', '1f44f', '1f973'],
    flags: ['1f1f8-1f1f3', '1f1eb-1f1f7', '1f1ea-1f1f8', '1f1e8-1f1ee'],
    clubs: [
        'https://static.wixstatic.com/media/fdcec1_638410bc8a194074b61bf13c004600bc~mv2.png',
        'https://static.wixstatic.com/media/fdcec1_738786144f1c44f1857512faa974ef7a~mv2.webp',
        'https://static.wixstatic.com/media/fdcec1_b32fd8884a5044a69ef50dab739f37fc~mv2.webp'
    ],
    patterns: [
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=600&fit=crop&crop=center'
    ]
};

export function getCoqueWidgetSrc() {
    const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Configurateur coque</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Archivo+Black&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"><\/script>
  <style>
    :root{--bg:#f7f0e5;--card:rgba(255,255,255,.92);--line:rgba(34,25,20,.08);--text:#201915;--muted:#6b625e;--accent:#e36d43;--dark:#231815}
    *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}html,body{margin:0;height:100%;overflow:hidden;background:radial-gradient(circle at top left,#ffd5c8,transparent 30%),radial-gradient(circle at bottom right,#d8eadf,transparent 30%),var(--bg);font-family:'Space Grotesk',sans-serif;color:var(--text)}
    body{max-width:560px;margin:0 auto}button,input,select{font:inherit}
    .app{height:100vh;display:grid;grid-template-rows:auto 1fr auto}.pad{padding:16px}
    .card{background:var(--card);border:1px solid rgba(255,255,255,.45);border-radius:28px;box-shadow:0 18px 36px rgba(78,54,33,.12)}
    .hero{padding:18px}.eyebrow{display:inline-flex;padding:6px 10px;border-radius:999px;background:rgba(34,25,20,.06);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
    h1{margin:12px 0 8px;font:28px/1 'Archivo Black',sans-serif;letter-spacing:-.04em}p{margin:0;color:var(--muted);font-size:13px;line-height:1.45}
    .selectors,.tools,.edit-row,.asset-row{display:grid;gap:10px}.selectors{grid-template-columns:1fr 1fr;margin-top:16px}
    .label,.mini{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
    select,input[type=color]{width:100%;padding:13px 14px;border-radius:16px;border:1px solid var(--line);background:#fff}
    .stage{height:100%;position:relative;border-radius:32px;border:1px solid rgba(255,255,255,.45);background:linear-gradient(180deg,rgba(255,255,255,.5),rgba(255,255,255,.2));overflow:hidden}
    .status{position:absolute;top:14px;left:14px;right:14px;display:flex;justify-content:space-between;gap:10px;z-index:10}
    .pill{display:inline-flex;align-items:center;gap:8px;padding:9px 12px;border-radius:999px;background:rgba(255,255,255,.94);box-shadow:0 10px 20px rgba(0,0,0,.08);font-size:12px}.pill strong{font-size:15px}.pill small{color:var(--muted)}
    .hidden{display:none!important}.viewport{height:100%;display:grid;place-items:center;padding:42px 18px 28px}
    .phone{position:relative;width:min(76vw,250px);aspect-ratio:1/2.02;border-radius:34px;overflow:hidden;background:#fff;box-shadow:0 18px 34px rgba(27,19,16,.18)}
    .phone:before{content:'';position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(20,16,14,.08);pointer-events:none;z-index:10}
    #design,#case{position:absolute;inset:0;width:100%;height:100%}#case{object-fit:cover;z-index:2;pointer-events:none}#design{z-index:1;overflow:hidden}
    .note{position:absolute;left:16px;right:16px;bottom:16px;padding:12px 14px;border-radius:18px;background:rgba(18,14,11,.82);color:#fff;font-size:12px;line-height:1.35;z-index:10}
    .el{position:absolute;cursor:grab;user-select:none;touch-action:none}.sel{outline:2px dashed rgba(255,255,255,.92);box-shadow:0 0 0 2px rgba(0,0,0,.55)}.txt{white-space:nowrap;font-weight:700;z-index:4}.img{z-index:3}
    .tools{grid-template-columns:repeat(3,1fr)}.tool,.cta,.ghost,.asset,.danger{border:none}.tool{min-height:70px;border-radius:18px;background:linear-gradient(180deg,#fff,#f5eee7);border:1px solid var(--line);display:grid;place-items:center;gap:4px;color:var(--text)}.tool span{font-size:20px}.tool strong{font-size:12px}
    .row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.cta{width:100%;margin-top:12px;padding:16px 18px;border-radius:20px;background:linear-gradient(135deg,var(--accent),#f08c41);color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;gap:10px}
    .spin{width:18px;height:18px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:r .8s linear infinite;display:none}.loading .spin{display:inline-block}
    .layer{position:fixed;inset:0;display:none;z-index:30}.on{display:block}.scrim{position:absolute;inset:0;background:rgba(17,12,10,.38);backdrop-filter:blur(6px)}
    .sheet{position:absolute;left:16px;right:16px;bottom:16px;border-radius:28px;background:#fffdfb;box-shadow:0 24px 50px rgba(22,16,13,.2);overflow:hidden}
    .head{display:flex;justify-content:space-between;align-items:center;padding:16px 18px 10px}.title{font:16px 'Archivo Black',sans-serif}.ghost{padding:8px 12px;border-radius:999px;background:rgba(31,27,25,.06)}
    .content{padding:0 18px 18px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-height:40vh;overflow:auto}
    .asset{aspect-ratio:1;border-radius:20px;background:linear-gradient(180deg,#fff,#f4eee7);border:1px solid var(--line);display:grid;place-items:center;overflow:hidden}.asset img{width:100%;height:100%;object-fit:cover}.asset.small img{width:70%;height:70%;object-fit:contain}
    .danger{width:100%;padding:14px;border-radius:16px;background:var(--dark);color:#fff;font-weight:700}
    .toast{position:fixed;left:50%;bottom:18px;transform:translateX(-50%) translateY(12px);opacity:0;transition:.24s ease;padding:12px 16px;border-radius:999px;color:#fff;background:rgba(20,16,14,.92);z-index:40;pointer-events:none}.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
    @keyframes r{from{transform:rotate(0)}to{transform:rotate(360deg)}}@media (min-width:520px){.tools{grid-template-columns:repeat(6,1fr)}}
  </style>
</head>
<body>
  <div class="app">
    <div class="pad">
      <div class="card hero">
        <div class="eyebrow">Wave Lab · Coques sur mesure</div>
        <h1>Fabrique ta coque en direct</h1>
        <p>Choisis ton telephone, ajoute une photo, du texte ou un motif, puis envoie le design au panier sans quitter la page.</p>
        <div class="selectors">
          <div><div class="label">Marque</div><select id="brand"></select></div>
          <div><div class="label">Modele</div><select id="model" disabled></select></div>
        </div>
      </div>
    </div>
    <div class="pad" style="padding-top:0;min-height:0">
      <div class="stage">
        <div class="status">
          <div class="pill">
            <div><small id="priceLabel">Prix standard</small><div><strong id="priceCurrent">10,49€</strong></div></div>
            <small id="priceOld">14,99€</small>
          </div>
          <div class="pill hidden" id="origin">Fabrique en France</div>
        </div>
        <div class="viewport">
          <div class="phone" id="phone"><div id="design"></div><img id="case" alt="Apercu coque"></div>
        </div>
        <div class="note" id="note">Ton design s'imprime comme ici. Ajoute d'abord une photo, puis peaufine avec texte, fond ou stickers.</div>
      </div>
    </div>
    <div class="pad" style="padding-top:0">
      <div class="card" style="padding:14px">
        <div class="tools">
          <button class="tool" data-a="bg"><span>🎨</span><strong>Fond</strong></button>
          <button class="tool" data-a="photo"><span>📸</span><strong>Photo</strong></button>
          <button class="tool" data-a="text"><span>✍️</span><strong>Texte</strong></button>
          <button class="tool" data-a="stickers"><span>✨</span><strong>Stickers</strong></button>
          <button class="tool" data-a="patterns"><span>🖼️</span><strong>Motifs</strong></button>
          <button class="tool" data-a="clubs"><span>⚽</span><strong>Clubs</strong></button>
        </div>
        <div class="row">
          <button class="tool" id="reset"><span>↺</span><strong>Repartir</strong></button>
          <button class="tool" id="copy"><span>⎘</span><strong>Dupliquer</strong></button>
        </div>
        <button class="cta" id="add"><span id="cta">Ajouter au panier</span><span class="spin"></span></button>
      </div>
    </div>
  </div>
  <div class="layer" id="editor">
    <div class="scrim" data-c="editor"></div>
    <div class="sheet">
      <div class="head"><div><div class="title">Modifier l'element</div><div class="mini">Ajuste la taille ou la couleur</div></div><button class="ghost" data-c="editor">Fermer</button></div>
      <div class="content">
        <div class="mini" id="sizeLabel">120 px</div>
        <input id="size" type="range" min="20" max="420" value="120" style="width:100%">
        <div class="edit-row hidden" id="textTools" style="margin-top:12px">
          <select id="font"><option value="Space Grotesk">Space Grotesk</option><option value="Archivo Black">Archivo Black</option><option value="Georgia">Georgia</option><option value="Impact">Impact</option></select>
          <input id="color" type="color" value="#111111">
        </div>
        <button class="danger" id="remove" style="margin-top:12px">Supprimer l'element</button>
      </div>
    </div>
  </div>
  <div class="layer" id="picker">
    <div class="scrim" data-c="picker"></div>
    <div class="sheet">
      <div class="head"><div><div class="title" id="pickerTitle">Bibliotheque</div><div class="mini" id="pickerSub">Ajoute un element a ton design</div></div><button class="ghost" data-c="picker">Fermer</button></div>
      <div class="content"><div class="grid" id="grid"></div></div>
    </div>
  </div>
  <div class="layer" id="style">
    <div class="scrim" data-c="style"></div>
    <div class="sheet">
      <div class="head"><div><div class="title">Traitement photo</div><div class="mini">Choisis le rendu a imprimer</div></div><button class="ghost" data-c="style">Fermer</button></div>
      <div class="content"><div class="row"><button class="asset" data-style="Normale"><strong>Photo normale</strong></button><button class="asset" data-style="Cartoon"><strong>Photo cartoon</strong></button></div></div>
    </div>
  </div>
  <input id="file" type="file" accept="image/*" class="hidden">
  <div class="toast" id="toast"></div>
  <script>
    const DATA=__DATA__,ASSETS=__ASSETS__,EMOJI='https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.0/img/apple/64/',COLORS=['transparent','#fff','#111','#ef835c','#2a9d8f','#264653'];
    const s={sn:false,selected:null,drag:null,temp:'',timeout:null,bg:0};
    const el={brand:document.getElementById('brand'),model:document.getElementById('model'),caseImg:document.getElementById('case'),phone:document.getElementById('phone'),design:document.getElementById('design'),note:document.getElementById('note'),add:document.getElementById('add'),cta:document.getElementById('cta'),size:document.getElementById('size'),sizeLabel:document.getElementById('sizeLabel'),font:document.getElementById('font'),color:document.getElementById('color'),textTools:document.getElementById('textTools'),grid:document.getElementById('grid'),pickerTitle:document.getElementById('pickerTitle'),pickerSub:document.getElementById('pickerSub'),toast:document.getElementById('toast'),priceCurrent:document.getElementById('priceCurrent'),priceOld:document.getElementById('priceOld'),priceLabel:document.getElementById('priceLabel'),origin:document.getElementById('origin'),file:document.getElementById('file')};
    function t(m,e){el.toast.textContent=m;el.toast.style.background=e==='error'?'rgba(159,39,39,.94)':e==='success'?'rgba(18,128,73,.94)':'rgba(20,16,14,.92)';el.toast.classList.add('show');clearTimeout(t.i);t.i=setTimeout(()=>el.toast.classList.remove('show'),2800)}
    function open(id){document.getElementById(id).classList.add('on')} function close(id){document.getElementById(id).classList.remove('on')}
    function geo(){fetch('https://ipapi.co/json/').then(r=>r.json()).then(d=>{if(d&&d.country_code==='SN'){s.sn=true;el.priceLabel.textContent='Prix Senegal';el.priceOld.textContent=Math.ceil(14.99*655.957).toLocaleString('fr-FR')+' FCFA';el.priceCurrent.textContent=Math.ceil(10.49*0.8*655.957).toLocaleString('fr-FR')+' FCFA';el.origin.textContent='Wave -20% Senegal';el.origin.classList.remove('hidden');el.cta.textContent='Commander via Wave / OM'}}).catch(()=>{})}
    function fillBrands(){el.brand.innerHTML='<option value="">Choisir</option>';Object.keys(DATA).forEach(k=>{const o=document.createElement('option');o.value=k;o.textContent=k;el.brand.appendChild(o)})}
    function updateBrand(){const brand=el.brand.value;el.model.innerHTML='<option value="">Choisir</option>';if(!brand||!DATA[brand]){el.model.disabled=true;return}el.model.disabled=false;Object.keys(DATA[brand]).forEach(m=>{const o=document.createElement('option');o.value=m;o.textContent=m;el.model.appendChild(o)})}
    function updateModel(){const b=el.brand.value,m=el.model.value;if(!b||!m||!DATA[b][m])return;const conf=DATA[b][m];el.caseImg.src=conf[0];el.phone.style.borderRadius=conf[1];el.note.textContent=m+' selectionne. Compose ton design et envoie-le au panier.'}
    function setSelected(n){if(s.selected)s.selected.classList.remove('sel');s.selected=n;if(!n){close('editor');return}n.classList.add('sel');const txt=n.classList.contains('txt'),size=parseInt(txt?n.style.fontSize:n.style.width,10)||120;el.textTools.classList.toggle('hidden',!txt);el.size.min=txt?'12':'30';el.size.max=txt?'180':'460';el.size.value=String(size);el.sizeLabel.textContent=size+' px';if(txt){el.font.value=(n.style.fontFamily||'Archivo Black').replace(/"/g,'');el.color.value=toHex(n.style.color||'#111111')}open('editor')}
    function addText(){const v=window.prompt('Entre ton texte','Wave Family');if(!v)return;const n=document.createElement('div');n.className='el txt';n.textContent=v.trim();n.style.left='26px';n.style.top='42px';n.style.fontSize='30px';n.style.color='#111111';n.style.fontFamily='Archivo Black';el.design.appendChild(n);setSelected(n)}
    function addImage(src,w,trait){const n=document.createElement('img');n.className='el img';n.src=src;n.style.width=w;n.style.left='32px';n.style.top='64px';if(trait)n.dataset.traitement=trait;el.design.appendChild(n);setSelected(n)}
    function asset(src,small,cb){const b=document.createElement('button');b.type='button';b.className='asset'+(small?' small':'');const i=document.createElement('img');i.src=src;i.loading='lazy';b.appendChild(i);b.addEventListener('click',()=>{cb();close('picker')});el.grid.appendChild(b)}
    function buildAssets(kind){el.grid.innerHTML='';if(kind==='stickers'){el.pickerTitle.textContent='Stickers';el.pickerSub.textContent='Emoji et drapeaux';(s.sn?ASSETS.flags.concat(ASSETS.stickers):ASSETS.stickers.concat(ASSETS.flags)).forEach(code=>asset(EMOJI+code+'.png',true,()=>addImage(EMOJI+code+'.png','86px')))}if(kind==='patterns'){el.pickerTitle.textContent='Motifs';el.pickerSub.textContent='Des fonds rapides a poser';ASSETS.patterns.forEach(url=>asset(url,false,()=>{el.design.style.backgroundColor='transparent';el.design.style.backgroundImage='url("'+url+'")';el.design.style.backgroundSize='cover';t('Motif applique')}))}if(kind==='clubs'){el.pickerTitle.textContent='Clubs';el.pickerSub.textContent='Ajoute ton ecusson prefere';ASSETS.clubs.forEach(url=>asset(url,true,()=>addImage(url,'92px')))}open('picker')}
    function cycleBg(){s.bg=(s.bg+1)%COLORS.length;const c=COLORS[s.bg];el.design.style.backgroundImage='none';el.design.style.backgroundColor=c==='transparent'?'transparent':c;t('Fond mis a jour')}
    function copySel(){if(!s.selected)return t('Selectionne un element a dupliquer','error');const n=s.selected.cloneNode(true);n.style.left=((parseInt(s.selected.style.left,10)||0)+18)+'px';n.style.top=((parseInt(s.selected.style.top,10)||0)+18)+'px';el.design.appendChild(n);setSelected(n)}
    function reset(){el.design.innerHTML='';el.design.style.backgroundImage='none';el.design.style.backgroundColor='transparent';s.bg=0;setSelected(null);t('Design reinitialise')}
    function toHex(v){if(!v||v==='transparent')return'#111111';if(v.startsWith('#'))return v;const p=v.replace(/[rgba()]/g,'').split(',').map(x=>parseInt(x.trim(),10));return'#'+p.slice(0,3).map(x=>x.toString(16).padStart(2,'0')).join('')}
    function ptr(e){return e.touches?e.touches[0]:e}
    function start(e){if(!e.target.classList.contains('el'))return;e.preventDefault();const p=ptr(e);s.drag={n:e.target,x:p.clientX,y:p.clientY,l:parseInt(e.target.style.left,10)||0,t:parseInt(e.target.style.top,10)||0};setSelected(e.target)}
    function move(e){if(!s.drag)return;e.preventDefault();const p=ptr(e);s.drag.n.style.left=s.drag.l+(p.clientX-s.drag.x)+'px';s.drag.n.style.top=s.drag.t+(p.clientY-s.drag.y)+'px'}
    function stop(){s.drag=null}
    function addToCart(){const m=el.model.value;if(!m)return t('Choisis d abord un modele','error');setSelected(null);el.add.classList.add('loading');const img=[...el.design.querySelectorAll('img.el')].find(n=>n.dataset.traitement),trait=img?img.dataset.traitement:'Normal';html2canvas(el.phone,{backgroundColor:null,scale:2,useCORS:true}).then(c=>{window.parent.postMessage({type:'add_to_cart',image:c.toDataURL('image/png'),modele:m,traitement:trait,pays:s.sn?'Sénégal':'Autre'},'*');clearTimeout(s.timeout);s.timeout=setTimeout(()=>{el.add.classList.remove('loading');t('La demande prend plus de temps que prevu. Verifie le panier si besoin.')},14000)}).catch(()=>{el.add.classList.remove('loading');t('Impossible de generer le visuel','error')})}
    document.querySelectorAll('[data-c]').forEach(n=>n.addEventListener('click',()=>close(n.dataset.c)));
    document.querySelectorAll('[data-a]').forEach(n=>n.addEventListener('click',()=>({bg:cycleBg,photo:()=>{el.file.value='';el.file.click()},text:addText,stickers:()=>buildAssets('stickers'),patterns:()=>buildAssets('patterns'),clubs:()=>buildAssets('clubs')})[n.dataset.a]()));
    document.querySelectorAll('[data-style]').forEach(n=>n.addEventListener('click',()=>{if(!s.temp)return;addImage(s.temp,'132px',n.dataset.style);s.temp='';close('style');t('Photo ajoutee')}));
    document.getElementById('reset').addEventListener('click',reset); document.getElementById('copy').addEventListener('click',copySel); document.getElementById('remove').addEventListener('click',()=>{if(s.selected){s.selected.remove();setSelected(null)}});
    el.brand.addEventListener('change',updateBrand); el.model.addEventListener('change',updateModel);
    el.file.addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=x=>{s.temp=x.target.result;open('style')};r.readAsDataURL(f)});
    el.size.addEventListener('input',e=>{if(!s.selected)return;el.sizeLabel.textContent=e.target.value+' px';if(s.selected.classList.contains('txt'))s.selected.style.fontSize=e.target.value+'px';else s.selected.style.width=e.target.value+'px'});
    el.font.addEventListener('change',e=>{if(s.selected)s.selected.style.fontFamily=e.target.value}); el.color.addEventListener('input',e=>{if(s.selected)s.selected.style.color=e.target.value});
    el.add.addEventListener('click',addToCart);
    el.design.addEventListener('click',e=>e.target.classList.contains('el')?setSelected(e.target):setSelected(null));
    el.design.addEventListener('mousedown',start); el.design.addEventListener('touchstart',start,{passive:false}); window.addEventListener('mousemove',move); window.addEventListener('touchmove',move,{passive:false}); window.addEventListener('mouseup',stop); window.addEventListener('touchend',stop);
    window.addEventListener('message',e=>{const p=e.data||{};if(p.type==='add_to_cart_success'){clearTimeout(s.timeout);el.add.classList.remove('loading');t('Produit ajoute au panier','success')}if(p.type==='add_to_cart_error'){clearTimeout(s.timeout);el.add.classList.remove('loading');t(p.message||'Une erreur est survenue','error')}});
    geo(); fillBrands(); el.brand.value='Apple'; updateBrand(); if(el.model.querySelector('option[value="iPhone 17 Pro Max"]')){el.model.value='iPhone 17 Pro Max'; updateModel()}
  <\/script>
</body>
</html>`;

    return `data:text/html;charset=utf-8,${encodeURIComponent(
        html
            .replace('__DATA__', JSON.stringify(DATA))
            .replace('__ASSETS__', JSON.stringify(ASSETS))
    )}`;
}
