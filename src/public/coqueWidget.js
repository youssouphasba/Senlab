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

    return `data:text/html;charset=utf-8,${encodeURIComponent(html.replace('__DATA__', JSON.stringify(DATA)).replace('__ASSETS__', JSON.stringify(ASSETS)))}`;
}
