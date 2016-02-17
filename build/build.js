({
    baseUrl: '../js',
    paths: {
        'p': '../node_modules/protoplast/dist/protoplast'
    },
    shim: {
        'p': {
            exports: 'Protoplast'
        }
    },
    include: ['../node_modules/almond/almond'],
    wrap: {
        'startFile': 'wrap.start',
        'endFile': 'wrap.end'
    },
    name: '../build/main',
    out: '../dist/moses.js',
    wrapShim: true
});