function phone(image, radius) {
    return [image, radius];
}

function bg(label, kind, value, size, base) {
    return [label, kind, value, size || '', base || ''];
}

function img(label, src) {
    return [label, src];
}

function svg(value) {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}`;
}

function safeJson(value) {
    return JSON.stringify(value).replace(/</g, '\\u003c');
}

const DATA = {
    Apple: {
        'iPhone 13': phone('https://static.wixstatic.com/media/fdcec1_b9dd09170d5744858c501fdd18056507~mv2.png', '40px'),
        'iPhone 13 Pro': phone('https://static.wixstatic.com/media/fdcec1_5bee016e5b4d4b8d872c197deac90c80~mv2.png', '40px'),
        'iPhone 13 Pro Max': phone('https://static.wixstatic.com/media/fdcec1_5636dcc5da0d4614a409440ea235355d~mv2.png', '40px'),
        'iPhone 14': phone('https://static.wixstatic.com/media/fdcec1_b9dd09170d5744858c501fdd18056507~mv2.png', '40px'),
        'iPhone 14 Plus': phone('https://static.wixstatic.com/media/fdcec1_ee1960cddf1f448495df1c6c892cf657~mv2.png', '40px'),
        'iPhone 14 Pro': phone('https://static.wixstatic.com/media/fdcec1_5bee016e5b4d4b8d872c197deac90c80~mv2.png', '40px'),
        'iPhone 14 Pro Max': phone('https://static.wixstatic.com/media/fdcec1_5636dcc5da0d4614a409440ea235355d~mv2.png', '40px'),
        'iPhone 15': phone('https://static.wixstatic.com/media/fdcec1_b9dd09170d5744858c501fdd18056507~mv2.png', '40px'),
        'iPhone 15 Plus': phone('https://static.wixstatic.com/media/fdcec1_ee1960cddf1f448495df1c6c892cf657~mv2.png', '40px'),
        'iPhone 15 Pro': phone('https://static.wixstatic.com/media/fdcec1_5bee016e5b4d4b8d872c197deac90c80~mv2.png', '40px'),
        'iPhone 15 Pro Max': phone('https://static.wixstatic.com/media/fdcec1_5636dcc5da0d4614a409440ea235355d~mv2.png', '40px'),
        'iPhone 16': phone('https://static.wixstatic.com/media/fdcec1_552c698bcca347b4b30a5de913e5d132~mv2.png', '40px'),
        'iPhone 16 Plus': phone('https://static.wixstatic.com/media/fdcec1_2b4ef2d5202b4a94b3c344706b05894f~mv2.png', '40px'),
        'iPhone 16 Pro': phone('https://static.wixstatic.com/media/fdcec1_b856b10f8b3340b08160b067dc2d043d~mv2.png', '40px'),
        'iPhone 16 Pro Max': phone('https://static.wixstatic.com/media/fdcec1_13f08dce65d94b279bd03de0b35e4766~mv2.png', '40px'),
        'iPhone 17': phone('https://static.wixstatic.com/media/fdcec1_207f975ddb3043d4af7d91dc45e441f5~mv2.png', '40px'),
        'iPhone 17 Air': phone('https://static.wixstatic.com/media/fdcec1_4d4e7a47e9a9478590b913ee5de92fdc~mv2.png', '40px'),
        'iPhone 17 Pro': phone('https://static.wixstatic.com/media/fdcec1_8a0f8c9f3d774fa78b3dda685781b08b~mv2.png', '40px'),
        'iPhone 17 Pro Max': phone('https://static.wixstatic.com/media/fdcec1_8a0f8c9f3d774fa78b3dda685781b08b~mv2.png', '40px')
    },
    Samsung: {
        'Galaxy A41': phone('https://static.wixstatic.com/media/fdcec1_d851b8ae15ad4ef5bab21d2dd3d12da6~mv2.png', '30px'),
        'Galaxy A52': phone('https://static.wixstatic.com/media/fdcec1_03f7ee9271ac45e8b796e817bdb660df~mv2.png', '30px'),
        'Galaxy A54 5G': phone('https://static.wixstatic.com/media/fdcec1_98a7077ebc424611a567f980839ca1d9~mv2.png', '30px'),
        'Galaxy A55 5G': phone('https://static.wixstatic.com/media/fdcec1_938e7a290d494900a6589bd1cb5570af~mv2.png', '30px'),
        'Galaxy A56 5G': phone('https://static.wixstatic.com/media/fdcec1_ef2e0edfcb1e4664ac6cdde04e3ede98~mv2.png', '30px'),
        'Galaxy S21': phone('https://static.wixstatic.com/media/fdcec1_3c65d3d5775a46e4ade3b89f0e8c3ec4~mv2.png', '30px'),
        'Galaxy S21 Ultra': phone('https://static.wixstatic.com/media/fdcec1_8f42783834e74de1ae621c9071cd3189~mv2.png', '8px'),
        'Galaxy S23': phone('https://static.wixstatic.com/media/fdcec1_ab14f21852ae4418848bba27fca7adfe~mv2.png', '30px'),
        'Galaxy S23 FE': phone('https://static.wixstatic.com/media/fdcec1_7f5906225cdd4f24b7fe0f3847b5abf4~mv2.png', '30px'),
        'Galaxy S23 Ultra': phone('https://static.wixstatic.com/media/fdcec1_006cd633b8ed4e10a897c5c3a7b4fa74~mv2.png', '8px'),
        'Galaxy S24': phone('https://static.wixstatic.com/media/fdcec1_86aaecaa7c994ac089f2ae271362712a~mv2.png', '30px'),
        'Galaxy S24 FE': phone('https://static.wixstatic.com/media/fdcec1_0a74ed44446d470a8a11caa7445c8e8d~mv2.png', '30px'),
        'Galaxy S24 Ultra': phone('https://static.wixstatic.com/media/fdcec1_006cd633b8ed4e10a897c5c3a7b4fa74~mv2.png', '8px'),
        'Galaxy S25': phone('https://static.wixstatic.com/media/fdcec1_86aaecaa7c994ac089f2ae271362712a~mv2.png', '30px'),
        'Galaxy S25 Edge': phone('https://static.wixstatic.com/media/fdcec1_65462dac1af245cf9463e3665a689734~mv2.png', '30px'),
        'Galaxy S25 Ultra': phone('https://static.wixstatic.com/media/fdcec1_006cd633b8ed4e10a897c5c3a7b4fa74~mv2.png', '8px')
    },
    Google: {
        'Pixel 7': phone('https://static.wixstatic.com/media/fdcec1_ad1974e4ef6049c1a4371571502a0886~mv2.png', '24px'),
        'Pixel 8': phone('https://static.wixstatic.com/media/fdcec1_25e2dc2051a14c3d9953913fbb0c40f5~mv2.png', '24px'),
        'Pixel 8 Pro': phone('https://static.wixstatic.com/media/fdcec1_25e2dc2051a14c3d9953913fbb0c40f5~mv2.png', '24px'),
        'Pixel 9': phone('https://static.wixstatic.com/media/fdcec1_e9136103265e4c62bd451b30578d12ef~mv2.png', '24px'),
        'Pixel 9 Pro': phone('https://static.wixstatic.com/media/fdcec1_91c730e5055643d9ac13abdaaf1a2ce7~mv2.png', '24px'),
        'Pixel 10': phone('https://static.wixstatic.com/media/fdcec1_4a36938eef8a433196ebdc8ec59cbef6~mv2.png', '24px')
    },
    Xiaomi: {
        'Mi 13T Pro': phone('https://static.wixstatic.com/media/fdcec1_ee40486d25e44b2f99e420d51209f2d2~mv2.png', '24px'),
        'Mi 13 Ultra': phone('https://static.wixstatic.com/media/fdcec1_6fd46327e37a4ba69aa6b7bc2425162b~mv2.png', '24px'),
        'Mi 14 Pro': phone('https://static.wixstatic.com/media/fdcec1_60c816876d6140e396e8453697b4ed47~mv2.png', '24px'),
        'Mi 14T Pro': phone('https://static.wixstatic.com/media/fdcec1_0e098e607a0a43fe8efb8a2a180ed9cd~mv2.png', '24px'),
        'Redmi 14C': phone('https://static.wixstatic.com/media/fdcec1_844e4decce8449cf970116b96c199fc3~mv2.png', '24px'),
        'Redmi Note 14': phone('https://static.wixstatic.com/media/fdcec1_71509c0d66024a2a9571a828403000b2~mv2.png', '24px'),
        'Redmi Note 14 Pro': phone('https://static.wixstatic.com/media/fdcec1_c5a45e2a99da49f5983f6b5090f45721~mv2.png', '24px'),
        'Redmi Note 13 Pro+': phone('https://static.wixstatic.com/media/fdcec1_1c09074a100c4a1ebfb844046dbfd1c9~mv2.png', '24px')
    }
};

const TEXTURES = {
    lines: svg('<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><rect width="180" height="180" fill="#fff9f1"/><path d="M0 42h180M0 92h180M0 142h180" stroke="#dccfbe" stroke-width="14" stroke-linecap="round"/></svg>'),
    dots: svg('<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><rect width="180" height="180" fill="#fffdf8"/><circle cx="36" cy="36" r="10" fill="#d9b68b"/><circle cx="90" cy="90" r="10" fill="#f39c7d"/><circle cx="144" cy="54" r="10" fill="#9ec7b0"/><circle cx="54" cy="144" r="10" fill="#cbbfe6"/><circle cx="138" cy="138" r="10" fill="#b7d0e6"/></svg>'),
    grid: svg('<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220"><rect width="220" height="220" fill="#fff7ef"/><path d="M0 55h220M0 110h220M0 165h220M55 0v220M110 0v220M165 0v220" stroke="#d7c8ba" stroke-width="7"/></svg>'),
    waves: svg('<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220"><rect width="220" height="220" fill="#fef8f1"/><path d="M-10 60c24-20 48-20 72 0s48 20 72 0 48-20 72 0M-10 120c24-20 48-20 72 0s48 20 72 0 48-20 72 0M-10 180c24-20 48-20 72 0s48 20 72 0 48-20 72 0" fill="none" stroke="#d9a77d" stroke-width="10" stroke-linecap="round"/></svg>')
};

const ASSETS = {
    bg: {
        solid: [
            bg('Transparent', 'color', 'transparent'),
            bg('Ivoire', 'color', '#f8f1e8'),
            bg('Noir doux', 'color', '#171413'),
            bg('Rose', 'color', '#f8d9d8'),
            bg('Menthe', 'color', '#dff1e7'),
            bg('Bleu', 'color', '#dceafb'),
            bg('Sable', 'color', '#ead9c3')
        ],
        gradient: [
            bg('Sunset', 'gradient', 'linear-gradient(135deg,#ffcfb3 0%,#ffe8c9 52%,#ffd6d0 100%)'),
            bg('Ocean', 'gradient', 'linear-gradient(135deg,#bbd7ff 0%,#d9f0ff 50%,#d6fff1 100%)'),
            bg('Matcha', 'gradient', 'linear-gradient(135deg,#d9f0d6 0%,#f8f2cf 55%,#f7d6c8 100%)'),
            bg('Berry', 'gradient', 'linear-gradient(135deg,#ffd0e5 0%,#e9d6ff 48%,#d3ecff 100%)'),
            bg('Night', 'gradient', 'linear-gradient(135deg,#151827 0%,#33456a 55%,#4a8abf 100%)'),
            bg('Gold', 'gradient', 'linear-gradient(135deg,#fff0c1 0%,#f6d36b 40%,#ef9b52 100%)')
        ],
        texture: [
            bg('Rayures', 'texture', TEXTURES.lines, '180px 180px', '#fff9f1'),
            bg('Pastilles', 'texture', TEXTURES.dots, '180px 180px', '#fffdf8'),
            bg('Quadrillage', 'texture', TEXTURES.grid, '220px 220px', '#fff7ef'),
            bg('Ondes', 'texture', TEXTURES.waves, '220px 220px', '#fef8f1')
        ]
    },
    stickers: {
        emoji: ['1f60d', '1f525', '2728', '1f389', '1f973', '1f44f', '2764-fe0f', '1f49b', '1f49a', '1f499', '1f49c', '1f90d', '1f44b', '270c-fe0f', '1f3c6', '1f947', '1f451', '1f48e', '1f380', '1f929', '1f60e', '1f338', '1f33b', '1f490'],
        africa: ['1f1f8-1f1f3', '1f1f2-1f1f1', '1f1e8-1f1ee', '1f1ec-1f1ed', '1f1f3-1f1ec', '1f1e8-1f1f2', '1f1f2-1f1e6', '1f1e9-1f1ff', '1f1f9-1f1f3', '1f1ff-1f1e6', '1f1f8-1f1ea', '1f1ea-1f1ec'],
        europe: ['1f1eb-1f1f7', '1f1ea-1f1f8', '1f1ee-1f1f9', '1f1e9-1f1ea', '1f1f5-1f1f9', '1f1e7-1f1ea', '1f1ec-1f1e7', '1f1f3-1f1f1', '1f1e8-1f1ed', '1f1f8-1f1ea']
    },
    motifs: {
        nature: [img('Palmier', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop&crop=center'), img('Montagne', 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=600&fit=crop&crop=center'), img('Mer', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=600&fit=crop&crop=center'), img('Lac', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop&crop=center')],
        animals: [img('Tigre', 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&h=600&fit=crop&crop=center'), img('Chien', 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?w=600&h=600&fit=crop&crop=center'), img('Koala', 'https://images.unsplash.com/photo-1574870111867-089858b56126?w=600&h=600&fit=crop&crop=center'), img('Chat', 'https://images.unsplash.com/photo-1564087040905-12d5d34190c0?w=600&h=600&fit=crop&crop=center')],
        abstract: [img('Collage', 'https://images.unsplash.com/photo-1543857778-c4a1a569e388?w=600&h=600&fit=crop&crop=center'), img('Pigments', 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&h=600&fit=crop&crop=center'), img('Neon', 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=600&fit=crop&crop=center'), img('Courbes', 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&h=600&fit=crop&crop=center')],
        urban: [img('Studio', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop&crop=center'), img('Device', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop&crop=center'), img('Glow', 'https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w=600&h=600&fit=crop&crop=center'), img('Creative', 'https://images.unsplash.com/photo-1550238309-986f951fb0c7?w=600&h=600&fit=crop&crop=center')]
    },
    clubs: {
        france: [img('PSG', 'https://static.wixstatic.com/media/fdcec1_638410bc8a194074b61bf13c004600bc~mv2.png'), img('OM', 'https://static.wixstatic.com/media/fdcec1_738786144f1c44f1857512faa974ef7a~mv2.webp'), img('Monaco', 'https://static.wixstatic.com/media/fdcec1_acb08a19340b4071bb2f42b689b989b9~mv2.png'), img('OL', 'https://static.wixstatic.com/media/fdcec1_a016f49c49af4566a763c610f4578bf6~mv2.jpg')],
        europe: [img('Barca', 'https://static.wixstatic.com/media/fdcec1_b32fd8884a5044a69ef50dab739f37fc~mv2.webp'), img('Real', 'https://static.wixstatic.com/media/fdcec1_385706283c9c44d8bea469f937121a66~mv2.png'), img('Chelsea', 'https://static.wixstatic.com/media/fdcec1_876a8dc5b5304d78a6baa55c3a5fa7e2~mv2.png'), img('Arsenal', 'https://static.wixstatic.com/media/fdcec1_dcc0b3c5183945dbbb5c9c096a979dfd~mv2.jpg')]
    }
};

const DEFAULTS = {
    brand: 'Apple',
    model: 'iPhone 17 Pro Max'
};

export function getCoqueWidgetSrc() {
    const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <title>Configurateur coque</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:wght@600;700&family=Oswald:wght@500&family=Pacifico&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"><\/script>
  <style>
    :root{--bg:#f6efe5;--panel:rgba(255,253,248,.94);--line:rgba(34,24,18,.09);--text:#251a16;--muted:#6f665f;--accent:#de6e44;--accent2:#e7903d;--shadow:0 22px 48px rgba(72,49,34,.16)}
    *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}html,body{margin:0;height:100%;overflow:hidden;background:radial-gradient(circle at top left,rgba(255,205,180,.7),transparent 34%),radial-gradient(circle at top right,rgba(191,223,255,.65),transparent 28%),radial-gradient(circle at bottom right,rgba(219,241,224,.75),transparent 34%),var(--bg);color:var(--text);font-family:'Space Grotesk',sans-serif}body{max-width:560px;margin:0 auto}button,input,select{font:inherit}button{cursor:pointer}
    .app{height:100vh;display:grid;grid-template-rows:auto minmax(0,1fr) auto;gap:12px;padding:14px}.card{background:var(--panel);border:1px solid rgba(255,255,255,.55);border-radius:28px;box-shadow:var(--shadow);backdrop-filter:blur(10px)}.hero{padding:16px}.hero-top{display:flex;justify-content:space-between;gap:14px;align-items:flex-start}.eyebrow,.section{display:inline-flex;text-transform:uppercase;letter-spacing:.12em;font-size:10px;font-weight:700;color:var(--muted)}.eyebrow{padding:7px 10px;border-radius:999px;background:rgba(37,26,22,.06);margin-bottom:10px}h1{margin:0;font:28px/1.02 'Archivo Black',sans-serif;letter-spacing:-.04em}.copy{margin-top:10px;font-size:13px;line-height:1.5;color:var(--muted);max-width:290px}
    .price{min-width:122px;padding:12px;border-radius:22px;background:linear-gradient(180deg,rgba(255,255,255,.95),rgba(244,235,225,.96));border:1px solid rgba(37,26,22,.08);text-align:right}.price-label{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}.price-current{margin-top:6px;font-size:20px;font-weight:700;line-height:1}.price-old{margin-top:5px;font-size:11px;color:var(--muted);text-decoration:line-through}
    .config{margin-top:14px;padding-top:14px;border-top:1px solid var(--line)}.brand-strip,.tabs{display:flex;gap:8px;overflow-x:auto;padding:4px 2px 6px;scrollbar-width:none}.brand-strip::-webkit-scrollbar,.tabs::-webkit-scrollbar{display:none}.chip,.tab{border:1px solid var(--line);background:rgba(255,255,255,.86);color:var(--text);border-radius:999px;padding:10px 14px;white-space:nowrap;font-weight:600}.chip.active,.tab.active{background:var(--text);color:#fff;border-color:transparent;box-shadow:0 12px 24px rgba(37,26,22,.18)}
    .picked,.search,.soft,.ghost{border:1px solid var(--line);background:rgba(255,255,255,.88);border-radius:18px;padding:12px 14px;color:var(--text)}.picked{margin-top:10px;font-size:13px;font-weight:600}.search{width:100%;margin-top:8px;outline:none}.search:focus{border-color:rgba(222,110,68,.45);box-shadow:0 0 0 4px rgba(222,110,68,.12)}.models{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;max-height:122px;overflow:auto;margin-top:10px}.model{min-height:48px;text-align:left;border-radius:14px;background:rgba(255,255,255,.88);border:1px solid var(--line);padding:10px 12px;font-size:12px;font-weight:600;line-height:1.25}.model.active{background:linear-gradient(135deg,rgba(37,26,22,.95),rgba(89,58,43,.96));color:#fff;border-color:transparent}.empty{grid-column:1/-1;padding:18px 14px;border-radius:18px;background:rgba(255,255,255,.72);border:1px dashed rgba(37,26,22,.16);color:var(--muted);font-size:12px;text-align:center}
    .stage{min-height:0;padding:14px;display:grid;grid-template-rows:auto minmax(0,1fr);gap:10px}.stage-top{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.summary{display:flex;flex-direction:column;gap:4px}.summary strong{font-size:15px;line-height:1.25}.summary span:last-child{font-size:12px;line-height:1.4;color:var(--muted)}.origin{padding:10px 12px;border-radius:999px;background:rgba(25,121,77,.12);color:#176d48;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap}.hide{display:none!important}
    .stage-body{min-height:0;display:grid;place-items:center;border-radius:26px;background:linear-gradient(180deg,rgba(255,255,255,.58),rgba(243,233,223,.76)),radial-gradient(circle at top,rgba(255,255,255,.7),transparent 56%);border:1px solid rgba(255,255,255,.55);padding:16px 14px;position:relative;overflow:hidden}.phone{position:relative;width:min(72vw,248px);aspect-ratio:1/2.02;border-radius:34px;overflow:hidden;background:#fff;box-shadow:0 18px 36px rgba(31,22,18,.18)}.phone:after{content:'';position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(20,16,14,.08);pointer-events:none;z-index:9}#design,#case{position:absolute;inset:0;width:100%;height:100%}#design{z-index:1;overflow:hidden;background-position:center;background-repeat:no-repeat;background-size:cover}#case{z-index:2;object-fit:cover;pointer-events:none}
    .helper{position:absolute;left:12px;right:12px;bottom:12px;z-index:10;padding:11px 13px;border-radius:16px;background:rgba(23,18,16,.84);color:#fff;font-size:12px;line-height:1.38;backdrop-filter:blur(8px)}.item{position:absolute;user-select:none;cursor:grab;touch-action:none}.item.sel{outline:2px dashed rgba(255,255,255,.94);box-shadow:0 0 0 2px rgba(12,10,9,.58)}.txt{z-index:5;white-space:nowrap;font-weight:700;line-height:1;text-shadow:0 2px 8px rgba(255,255,255,.28)}.img{z-index:4}
    .tools{padding:14px}.tools-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:12px}.tools-head strong{display:block;margin-top:4px;font-size:15px}.mini{font-size:11px;line-height:1.35;color:var(--muted)}.tool-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tool{min-height:72px;border-radius:18px;border:1px solid var(--line);background:linear-gradient(180deg,rgba(255,255,255,.96),rgba(244,235,225,.98));padding:10px 8px;text-align:left;color:var(--text)}.tool b{display:block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}.tool strong{display:block;margin-top:6px;font-size:14px;line-height:1.15}.rows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rows.mt{margin-top:10px}.cta{width:100%;margin-top:12px;border:none;border-radius:20px;padding:16px 18px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:700;box-shadow:0 18px 30px rgba(222,110,68,.34)}.spin{width:18px;height:18px;border-radius:50%;border:2px solid rgba(255,255,255,.36);border-top-color:#fff;animation:r .8s linear infinite;display:none}.loading .spin{display:inline-block}
    .layer{position:fixed;inset:0;display:none;z-index:40}.layer.on{display:block}.scrim{position:absolute;inset:0;background:rgba(17,13,11,.38);backdrop-filter:blur(8px)}.sheet{position:absolute;left:14px;right:14px;bottom:14px;max-height:calc(100vh - 52px);overflow:hidden;background:#fffdfa;border-radius:28px;box-shadow:0 28px 60px rgba(21,16,13,.24);display:grid;grid-template-rows:auto minmax(0,1fr)}.head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;padding:16px 18px 12px;border-bottom:1px solid rgba(37,26,22,.07)}.title{font:18px/1 'Archivo Black',sans-serif}.sub{margin-top:6px;font-size:12px;color:var(--muted);line-height:1.4}.body{min-height:0;overflow:auto;padding:0 18px 18px}.slider-row{display:flex;justify-content:space-between;gap:10px;align-items:center;margin:14px 0 8px;font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}.slider{width:100%;appearance:none;height:10px;border-radius:999px;background:rgba(37,26,22,.12);outline:none}.slider::-webkit-slider-thumb{appearance:none;width:28px;height:28px;border-radius:50%;background:var(--text);border:3px solid #fff;box-shadow:0 8px 18px rgba(37,26,22,.24)}
    .text-tools{display:grid;grid-template-columns:1fr 70px;gap:8px;margin-top:12px}.input{width:100%;border:1px solid var(--line);background:rgba(255,255,255,.9);border-radius:16px;padding:12px 13px}.color{padding:6px;height:46px}.picker{display:grid;gap:12px;padding-top:12px}.asset-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;padding-bottom:2px}.asset{border:1px solid var(--line);background:linear-gradient(180deg,rgba(255,255,255,.98),rgba(244,235,225,.96));border-radius:20px;padding:8px;display:grid;gap:8px;justify-items:center;align-content:start;min-height:112px}.preview{width:100%;aspect-ratio:1;border-radius:16px;overflow:hidden;background:rgba(255,255,255,.74);border:1px solid rgba(37,26,22,.06);display:grid;place-items:center}.preview img{width:100%;height:100%;object-fit:cover}.preview.compact img{width:72%;height:72%;object-fit:contain}.preview.sw{background-position:center;background-repeat:no-repeat}.name{width:100%;font-size:11px;font-weight:700;line-height:1.2;text-align:center;color:var(--text)}.choices{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:16px}.choice{border:1px solid var(--line);background:linear-gradient(180deg,rgba(255,255,255,.98),rgba(244,235,225,.96));border-radius:20px;padding:18px 14px;text-align:left}.choice strong{display:block;font-size:16px;line-height:1.1}.choice span{display:block;margin-top:8px;font-size:12px;line-height:1.45;color:var(--muted)}.danger{width:100%;margin-top:10px;border:none;border-radius:18px;padding:14px 16px;background:#221916;color:#fff;font-weight:700}
    .toast{position:fixed;left:50%;bottom:18px;transform:translateX(-50%) translateY(12px);min-width:220px;max-width:calc(100vw - 36px);padding:12px 16px;border-radius:999px;background:rgba(26,19,17,.92);color:#fff;font-size:13px;font-weight:600;line-height:1.35;text-align:center;opacity:0;pointer-events:none;transition:.22s ease;z-index:60}.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}@keyframes r{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@media (min-width:520px){.app{padding:16px;gap:14px}.tool-grid{grid-template-columns:repeat(6,minmax(0,1fr))}.models{grid-template-columns:repeat(3,minmax(0,1fr))}.asset-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
  </style>
</head>
<body>
  <div class="app">
    <section class="card hero">
      <div class="hero-top">
        <div>
          <div class="eyebrow">Wave Lab · Coques sur mesure</div>
          <h1>Cree ta coque pas a pas</h1>
          <div class="copy">Choisis le modele, ajoute photo, texte ou motif, puis envoie un rendu propre au panier sans quitter la page.</div>
        </div>
        <div class="price">
          <div class="price-label" id="priceLabel">Prix standard</div>
          <div class="price-current" id="priceCurrent">10,49 EUR</div>
          <div class="price-old" id="priceOld">14,99 EUR</div>
        </div>
      </div>
      <div class="config">
        <div class="section">01 Modele</div>
        <div class="brand-strip" id="brandStrip"></div>
        <div class="picked" id="pickedModel">Aucun modele selectionne</div>
        <input id="searchModel" class="search" type="search" placeholder="Chercher un modele">
        <div class="models" id="modelGrid"></div>
      </div>
    </section>
    <section class="card stage">
      <div class="stage-top">
        <div class="summary">
          <div class="section">02 Design</div>
          <strong id="summaryTitle">Selectionne un modele pour commencer</strong>
          <span id="summaryText">Ajoute ensuite photo, texte, stickers ou motifs.</span>
        </div>
        <div class="origin hide" id="origin">Fabriquee en France</div>
      </div>
      <div class="stage-body">
        <div class="phone" id="phone">
          <div id="design"></div>
          <img id="case" alt="Apercu coque">
          <div class="helper" id="helper">Commence par choisir ton modele, puis ajoute une photo ou un motif.</div>
        </div>
      </div>
    </section>
    <section class="card tools">
      <div class="tools-head">
        <div>
          <div class="section">03 Personnalise</div>
          <strong>Tout se fait sur la coque</strong>
        </div>
        <div class="mini" id="countInfo">0 element</div>
      </div>
      <div class="tool-grid">
        <button class="tool" data-act="backgrounds"><b>Fond</b><strong>Couleurs</strong></button>
        <button class="tool" data-act="photo"><b>Photo</b><strong>Upload</strong></button>
        <button class="tool" data-act="text"><b>Texte</b><strong>Message</strong></button>
        <button class="tool" data-act="stickers"><b>Stickers</b><strong>Emoji & flags</strong></button>
        <button class="tool" data-act="motifs"><b>Motifs</b><strong>Photos</strong></button>
        <button class="tool" data-act="clubs"><b>Clubs</b><strong>Logos</strong></button>
      </div>
      <div class="rows mt">
        <button class="soft" id="resetBtn">Repartir</button>
        <button class="soft" id="dupBtn">Dupliquer</button>
      </div>
      <button class="cta" id="addBtn"><span id="addLabel">Ajouter au panier</span><span class="spin"></span></button>
    </section>
  </div>
  <div class="layer" id="editorLayer">
    <div class="scrim" data-close="editorLayer"></div>
    <div class="sheet">
      <div class="head">
        <div>
          <div class="title">Modifier l'element</div>
          <div class="sub">Ajuste la taille, la couleur ou l'ordre.</div>
        </div>
        <button class="ghost" data-close="editorLayer">Fermer</button>
      </div>
      <div class="body">
        <div class="slider-row"><span>Taille</span><strong id="sizeValue">120 px</strong></div>
        <input id="sizeSlider" class="slider" type="range" min="20" max="420" value="120">
        <div class="text-tools hide" id="textTools">
          <select id="fontSel" class="input">
            <option value="Archivo Black">Archivo Black</option>
            <option value="Space Grotesk">Space Grotesk</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Oswald">Oswald</option>
            <option value="Pacifico">Pacifico</option>
          </select>
          <input id="colorSel" class="input color" type="color" value="#111111">
        </div>
        <div class="rows mt">
          <button class="soft" id="editTextBtn">Editer texte</button>
          <button class="soft" id="dupInsideBtn">Dupliquer</button>
        </div>
        <div class="rows" style="margin-top:8px">
          <button class="soft" id="frontBtn">Passer devant</button>
          <button class="soft" id="backBtn">Passer derriere</button>
        </div>
        <button class="danger" id="removeBtn">Supprimer l'element</button>
      </div>
    </div>
  </div>
  <div class="layer" id="pickerLayer">
    <div class="scrim" data-close="pickerLayer"></div>
    <div class="sheet">
      <div class="head">
        <div>
          <div class="title" id="pickerTitle">Bibliotheque</div>
          <div class="sub" id="pickerSub">Ajoute un element a ton design.</div>
        </div>
        <button class="ghost" data-close="pickerLayer">Fermer</button>
      </div>
      <div class="body">
        <div class="picker">
          <div class="tabs" id="tabs"></div>
          <div class="asset-grid" id="assetGrid"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="layer" id="styleLayer">
    <div class="scrim" data-close="styleLayer"></div>
    <div class="sheet">
      <div class="head">
        <div>
          <div class="title">Traitement photo</div>
          <div class="sub">Choisis le rendu a imprimer pour ta photo.</div>
        </div>
        <button class="ghost" data-close="styleLayer">Fermer</button>
      </div>
      <div class="body">
        <div class="choices">
          <button class="choice" data-style="Normal"><strong>Photo normale</strong><span>Impression directe telle quelle.</span></button>
          <button class="choice" data-style="Cartoon"><strong>Photo cartoon</strong><span>Rendu plus illustre avant impression.</span></button>
        </div>
      </div>
    </div>
  </div>
  <input id="fileInput" type="file" accept="image/*" class="hide">
  <div class="toast" id="toast"></div>
  <script>
    const DATA=__DATA__,ASSETS=__ASSETS__,DEFAULTS=__DEFAULTS__,EMOJI='https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.0/img/apple/64/',CFA=655.957;
    const PICKERS={
      backgrounds:{title:'Fonds',sub:'Couleurs, gradients et textures.',tabs:[['solid','Couleurs','background',ASSETS.bg.solid],['gradient','Gradients','background',ASSETS.bg.gradient],['texture','Textures','background',ASSETS.bg.texture]]},
      stickers:{title:'Stickers',sub:'Emoji, drapeaux et vibes a superposer.',tabs:[['emoji','Emoji','emoji',ASSETS.stickers.emoji],['africa','Afrique','emoji',ASSETS.stickers.africa],['europe','Europe','emoji',ASSETS.stickers.europe]]},
      motifs:{title:'Motifs',sub:'Des images pleine coque pour donner un ton immediat.',tabs:[['nature','Nature','cover',ASSETS.motifs.nature],['animals','Animaux','cover',ASSETS.motifs.animals],['abstract','Abstrait','cover',ASSETS.motifs.abstract],['urban','Urban','cover',ASSETS.motifs.urban]]},
      clubs:{title:'Clubs',sub:'Logos a poser comme stickers.',tabs:[['france','France','logo',ASSETS.clubs.france],['europe','Europe','logo',ASSETS.clubs.europe]]}
    };
    const S={brand:'',model:'',sn:false,sel:null,drag:null,temp:'',picker:'',tab:'',timer:null};
    const E={
      brandStrip:document.getElementById('brandStrip'),modelGrid:document.getElementById('modelGrid'),search:document.getElementById('searchModel'),picked:document.getElementById('pickedModel'),
      summaryTitle:document.getElementById('summaryTitle'),summaryText:document.getElementById('summaryText'),priceLabel:document.getElementById('priceLabel'),priceCurrent:document.getElementById('priceCurrent'),priceOld:document.getElementById('priceOld'),origin:document.getElementById('origin'),
      phone:document.getElementById('phone'),caseImg:document.getElementById('case'),design:document.getElementById('design'),helper:document.getElementById('helper'),count:document.getElementById('countInfo'),addBtn:document.getElementById('addBtn'),addLabel:document.getElementById('addLabel'),toast:document.getElementById('toast'),
      size:document.getElementById('sizeSlider'),sizeValue:document.getElementById('sizeValue'),textTools:document.getElementById('textTools'),font:document.getElementById('fontSel'),color:document.getElementById('colorSel'),
      pickerTitle:document.getElementById('pickerTitle'),pickerSub:document.getElementById('pickerSub'),tabs:document.getElementById('tabs'),assetGrid:document.getElementById('assetGrid'),file:document.getElementById('fileInput')
    };
    function toast(m,t){E.toast.textContent=m;E.toast.style.background=t==='error'?'rgba(156,39,39,.96)':t==='success'?'rgba(24,121,77,.94)':'rgba(26,19,17,.92)';E.toast.classList.add('show');clearTimeout(toast.i);toast.i=setTimeout(function(){E.toast.classList.remove('show');},2600)}
    function open(id){document.getElementById(id).classList.add('on')} function close(id){document.getElementById(id).classList.remove('on')}
    function countEls(){return E.design.querySelectorAll('.item').length}
    function hasBg(){const i=E.design.style.backgroundImage,c=E.design.style.backgroundColor;return i&&i!=='none'||c&&c!=='transparent'&&c!=='rgba(0, 0, 0, 0)'}
    function hasDesign(){return hasBg()||countEls()>0}
    function syncNote(){const n=countEls();E.count.textContent=n+' '+(n>1?'elements':'element');if(!S.model){E.helper.textContent='Commence par choisir ton modele, puis ajoute une photo ou un motif.';return}if(!hasDesign()){E.helper.textContent='Modele pret. Ajoute une photo, un fond, un sticker ou du texte.';return}if(S.sel){E.helper.textContent='Element selectionne. Fais-le glisser, redimensionne-le ou change sa couleur.';return}E.helper.textContent=(n>0?n+' element'+(n>1?'s':'')+' en place. ':'')+'Tu peux encore ajouter motifs, logos ou stickers.'}
    function models(){if(!S.brand||!DATA[S.brand])return[];const q=E.search.value.trim().toLowerCase();return Object.keys(DATA[S.brand]).filter(function(m){return !q||m.toLowerCase().indexOf(q)!==-1})}
    function renderBrands(){E.brandStrip.innerHTML='';Object.keys(DATA).forEach(function(b){const x=document.createElement('button');x.type='button';x.className='chip'+(b===S.brand?' active':'');x.textContent=b;x.onclick=function(){setBrand(b)};E.brandStrip.appendChild(x)})}
    function renderModels(){const list=models();E.modelGrid.innerHTML='';if(!list.length){const x=document.createElement('div');x.className='empty';x.textContent='Aucun modele ne correspond a ta recherche.';E.modelGrid.appendChild(x);return}list.forEach(function(m){const x=document.createElement('button');x.type='button';x.className='model'+(m===S.model?' active':'');x.textContent=m;x.onclick=function(){setModel(m)};E.modelGrid.appendChild(x)})}
    function applyModel(){if(!S.brand||!S.model||!DATA[S.brand]||!DATA[S.brand][S.model])return;const c=DATA[S.brand][S.model];E.caseImg.crossOrigin='anonymous';E.caseImg.src=c[0];E.phone.style.borderRadius=c[1];E.picked.textContent=S.brand+' · '+S.model;E.summaryTitle.textContent=S.model;E.summaryText.textContent='Personnalise maintenant avec photo, texte, stickers, motifs ou logos.';syncNote()}
    function setBrand(b,p){S.brand=b;E.search.value='';const list=Object.keys(DATA[b]||{});if(!list.length){S.model=''}else if(p&&list.indexOf(p)!==-1){S.model=p}else if(list.indexOf(S.model)===-1){S.model=list[0]}renderBrands();renderModels();applyModel()}
    function setModel(m){S.model=m;renderModels();applyModel()}
    function hex(v){if(!v||v==='transparent')return'#111111';if(v.indexOf('#')===0)return v;const p=v.replace(/[rgba()]/g,'').split(',').slice(0,3).map(function(x){return parseInt(x.trim(),10)||0});return'#'+p.map(function(x){return x.toString(16).padStart(2,'0')}).join('')}
    function pick(n){if(S.sel)S.sel.classList.remove('sel');S.sel=n||null;if(!S.sel){close('editorLayer');syncNote();return}S.sel.classList.add('sel');const txt=S.sel.classList.contains('txt'),s=parseInt(txt?S.sel.style.fontSize:S.sel.style.width,10)||120;E.size.min=txt?'12':'36';E.size.max=txt?'180':'460';E.size.value=String(s);E.sizeValue.textContent=s+' px';E.textTools.classList.toggle('hide',!txt);document.getElementById('editTextBtn').classList.toggle('hide',!txt);if(txt){E.font.value=(S.sel.style.fontFamily||'Archivo Black').replace(/"/g,'');E.color.value=hex(S.sel.style.color||'#111111')}open('editorLayer');syncNote()}
    function pos(w){const x=Math.max(12,Math.round((E.phone.clientWidth-w)/2)),y=Math.max(18,Math.round(E.phone.clientHeight*.28));return{x:x,y:y}}
    function addText(v){const p=pos(140),n=document.createElement('div');n.className='item txt';n.textContent=v;n.style.left=p.x+'px';n.style.top=p.y+'px';n.style.fontSize='30px';n.style.fontFamily='Archivo Black';n.style.color='#111111';E.design.appendChild(n);pick(n)}
    function addImage(src,w,meta){const width=parseInt(w,10)||120,p=pos(width),n=document.createElement('img');n.className='item img';n.crossOrigin='anonymous';n.src=src;n.style.width=w;n.style.left=p.x+'px';n.style.top=p.y+'px';if(meta&&meta.treatment)n.dataset.treatment=meta.treatment;if(meta&&meta.origin)n.dataset.origin=meta.origin;E.design.appendChild(n);pick(n)}
    function editText(){if(!S.sel||!S.sel.classList.contains('txt'))return;const v=window.prompt('Modifie ton texte',S.sel.textContent||'');if(!v)return;S.sel.textContent=v.trim();syncNote()}
    function duplicate(){if(!S.sel){toast('Selectionne un element a dupliquer.','error');return}const n=S.sel.cloneNode(true);n.style.left=((parseInt(S.sel.style.left,10)||0)+18)+'px';n.style.top=((parseInt(S.sel.style.top,10)||0)+18)+'px';E.design.appendChild(n);pick(n)}
    function removeSel(){if(!S.sel)return;S.sel.remove();pick(null);syncNote()}
    function front(){if(!S.sel)return;E.design.appendChild(S.sel);pick(S.sel)}
    function back(){if(!S.sel)return;E.design.insertBefore(S.sel,E.design.firstChild);pick(S.sel)}
    function reset(){E.design.innerHTML='';E.design.style.backgroundColor='transparent';E.design.style.backgroundImage='none';E.design.style.backgroundSize='cover';E.design.style.backgroundRepeat='no-repeat';E.design.style.backgroundPosition='center';pick(null);syncNote();toast('Design reinitialise.','success')}
    function applyBg(item){if(item[1]==='color'){E.design.style.backgroundColor=item[2];E.design.style.backgroundImage='none';E.design.style.backgroundSize='cover';E.design.style.backgroundRepeat='no-repeat';E.design.style.backgroundPosition='center'}else if(item[1]==='gradient'){E.design.style.backgroundColor='transparent';E.design.style.backgroundImage=item[2];E.design.style.backgroundSize='cover';E.design.style.backgroundRepeat='no-repeat';E.design.style.backgroundPosition='center'}else if(item[1]==='texture'){E.design.style.backgroundColor=item[4]||'#ffffff';E.design.style.backgroundImage='url("'+item[2]+'")';E.design.style.backgroundSize=item[3]||'220px 220px';E.design.style.backgroundRepeat='repeat';E.design.style.backgroundPosition='center'}else{E.design.style.backgroundColor='transparent';E.design.style.backgroundImage='url("'+item[1]+'")';E.design.style.backgroundSize='cover';E.design.style.backgroundRepeat='no-repeat';E.design.style.backgroundPosition='center'}close('pickerLayer');syncNote();toast((item[0]||'Fond')+' applique.','success')}
    function openPicker(kind){const c=PICKERS[kind];if(!c)return;S.picker=kind;S.tab=kind==='stickers'&&S.sn?'africa':c.tabs[0][0];E.pickerTitle.textContent=c.title;E.pickerSub.textContent=c.sub;renderPicker();open('pickerLayer')}
    function renderPicker(){const c=PICKERS[S.picker],tab=c.tabs.find(function(x){return x[0]===S.tab})||c.tabs[0];E.tabs.innerHTML='';c.tabs.forEach(function(x){const b=document.createElement('button');b.type='button';b.className='tab'+(x[0]===S.tab?' active':'');b.textContent=x[1];b.onclick=function(){S.tab=x[0];renderPicker()};E.tabs.appendChild(b)});E.assetGrid.innerHTML='';tab[3].forEach(function(item){const b=document.createElement('button'),p=document.createElement('div'),name=document.createElement('div');b.type='button';b.className='asset';p.className='preview';name.className='name';if(tab[2]==='background'){p.classList.add('sw');if(item[1]==='color'){p.style.background=item[2]}else if(item[1]==='gradient'){p.style.backgroundImage=item[2]}else{p.style.backgroundColor=item[4]||'#fff';p.style.backgroundImage='url("'+item[2]+'")';p.style.backgroundSize=item[3]||'220px 220px';p.style.backgroundRepeat='repeat'}b.onclick=function(){applyBg(item)}}else if(tab[2]==='emoji'){p.classList.add('compact');const i=document.createElement('img');i.src=EMOJI+item+'.png';i.loading='lazy';p.appendChild(i);b.onclick=function(){addImage(EMOJI+item+'.png','88px');close('pickerLayer');toast('Sticker ajoute.','success')}}else if(tab[2]==='cover'){const i=document.createElement('img');i.src=item[1];i.loading='lazy';p.appendChild(i);b.onclick=function(){applyBg(item)}}else{p.classList.add('compact');const i=document.createElement('img');i.src=item[1];i.loading='lazy';p.appendChild(i);b.onclick=function(){addImage(item[1],'96px');close('pickerLayer');toast((item[0]||'Logo')+' ajoute.','success')}}name.textContent=typeof item==='string'?' ':(item[0]||' ');b.appendChild(p);b.appendChild(name);E.assetGrid.appendChild(b)})}
    function ptr(e){return e.touches?e.touches[0]:e}
    function start(e){if(!e.target.classList.contains('item'))return;e.preventDefault();const p=ptr(e),n=e.target;S.drag={n:n,x:p.clientX,y:p.clientY,l:parseInt(n.style.left,10)||0,t:parseInt(n.style.top,10)||0};pick(n)}
    function move(e){if(!S.drag)return;e.preventDefault();const p=ptr(e);S.drag.n.style.left=S.drag.l+(p.clientX-S.drag.x)+'px';S.drag.n.style.top=S.drag.t+(p.clientY-S.drag.y)+'px'}
    function stop(){S.drag=null}
    function geo(){fetch('https://ipapi.co/json/').then(function(r){return r.json()}).then(function(d){if(!d||d.country_code!=='SN')return;S.sn=true;E.priceLabel.textContent='Prix Senegal';E.priceOld.textContent=Math.ceil(14.99*CFA).toLocaleString('fr-FR')+' FCFA';E.priceCurrent.textContent=Math.ceil(10.49*.8*CFA).toLocaleString('fr-FR')+' FCFA';E.origin.classList.remove('hide');E.origin.textContent='Wave -20% Senegal';E.addLabel.textContent='Commander via Wave / OM'}).catch(function(){return null})}
    function addToCart(){if(!S.model){toast('Choisis un modele avant de continuer.','error');return}if(!hasDesign()){toast('Ajoute au moins un fond, une photo ou un element.','error');return}pick(null);E.addBtn.classList.add('loading');const up=Array.prototype.slice.call(E.design.querySelectorAll('.img')).find(function(n){return n.dataset&&n.dataset.origin==='upload'}),tr=up&&up.dataset.treatment?up.dataset.treatment:'Normal';html2canvas(E.phone,{backgroundColor:null,scale:2,useCORS:true}).then(function(c){window.parent.postMessage({type:'add_to_cart',image:c.toDataURL('image/png'),modele:S.model,traitement:tr,pays:S.sn?'Senegal':'Autre'},'*');clearTimeout(S.timer);S.timer=setTimeout(function(){E.addBtn.classList.remove('loading');toast('Le panier met plus de temps que prevu. Verifie si besoin.','error')},14000)}).catch(function(){E.addBtn.classList.remove('loading');toast('Impossible de generer le visuel.','error')})}
    document.querySelectorAll('[data-close]').forEach(function(x){x.addEventListener('click',function(){close(x.dataset.close)})});
    document.querySelectorAll('[data-act]').forEach(function(x){x.addEventListener('click',function(){const a=x.dataset.act;if(a==='backgrounds'||a==='stickers'||a==='motifs'||a==='clubs'){openPicker(a);return}if(a==='photo'){E.file.value='';E.file.click();return}if(a==='text'){const v=window.prompt('Entre ton texte','Wave Family');if(v&&v.trim()){addText(v.trim());toast('Texte ajoute.','success')}}})});
    document.querySelectorAll('[data-style]').forEach(function(x){x.addEventListener('click',function(){if(!S.temp)return;addImage(S.temp,'136px',{treatment:x.dataset.style,origin:'upload'});S.temp='';close('styleLayer');toast('Photo ajoutee.','success')})});
    E.search.addEventListener('input',renderModels);E.design.addEventListener('click',function(e){e.target.classList.contains('item')?pick(e.target):pick(null)});E.design.addEventListener('mousedown',start);E.design.addEventListener('touchstart',start,{passive:false});window.addEventListener('mousemove',move);window.addEventListener('touchmove',move,{passive:false});window.addEventListener('mouseup',stop);window.addEventListener('touchend',stop);
    E.size.addEventListener('input',function(e){if(!S.sel)return;E.sizeValue.textContent=e.target.value+' px';if(S.sel.classList.contains('txt')){S.sel.style.fontSize=e.target.value+'px'}else{S.sel.style.width=e.target.value+'px'}});E.font.addEventListener('change',function(e){if(S.sel&&S.sel.classList.contains('txt'))S.sel.style.fontFamily=e.target.value});E.color.addEventListener('input',function(e){if(S.sel&&S.sel.classList.contains('txt'))S.sel.style.color=e.target.value});
    document.getElementById('editTextBtn').addEventListener('click',editText);document.getElementById('dupBtn').addEventListener('click',duplicate);document.getElementById('dupInsideBtn').addEventListener('click',duplicate);document.getElementById('frontBtn').addEventListener('click',front);document.getElementById('backBtn').addEventListener('click',back);document.getElementById('removeBtn').addEventListener('click',removeSel);document.getElementById('resetBtn').addEventListener('click',reset);E.addBtn.addEventListener('click',addToCart);
    E.file.addEventListener('change',function(e){const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=function(v){S.temp=v.target.result;open('styleLayer')};r.readAsDataURL(f)});
    window.addEventListener('message',function(e){const p=e.data||{};if(p.type==='add_to_cart_success'){clearTimeout(S.timer);E.addBtn.classList.remove('loading');toast('Produit ajoute au panier.','success')}if(p.type==='add_to_cart_error'){clearTimeout(S.timer);E.addBtn.classList.remove('loading');toast(p.message||'Une erreur est survenue.','error')}});
    geo();renderBrands();setBrand(DEFAULTS.brand,DEFAULTS.model);syncNote();
  <\/script>
</body>
</html>`;

    return `data:text/html;charset=utf-8,${encodeURIComponent(
        html
            .replace('__DATA__', safeJson(DATA))
            .replace('__ASSETS__', safeJson(ASSETS))
            .replace('__DEFAULTS__', safeJson(DEFAULTS))
    )}`;
}
