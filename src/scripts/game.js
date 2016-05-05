const preloader = Preloader();

const game = new WHS.World({
  stats: false,
  autoresize: true,

  gravity: {
    x: 0,
    y: 0,
    z: 0
  },

  camera: {
    far: 10000,
    aspect: 45
  },

  shadowmap: {
      type: THREE.PCFShadowMap
  },

  rWidth: 1,
  rHeight: 1,

  background: 0x1E2F40,

  path_worker: '../src/scripts/vendor/physijs_worker.js',

  path_ammo: 'ammo.js'
});

game.start();

let camera = game.getCamera();

preloader.check();
