'use strict';

var preloader = Preloader();

var game = new WHS.World({
  stats: false,
  autoresize: true,

  gravity: {
    x: 0,
    y: -25,
    z: 0
  },

  camera: {
    far: 10000
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

preloader.check();
"use strict";

var ambient = game.AmbientLight({
  light: {
    color: 0xe4d04B,
    intensity: 0.1,

    pos: {
      x: 0,
      y: 0,
      z: 150
    },

    target: {
      x: 0,
      y: 10,
      z: 0
    }
  }
});
"use strict";

var person = game.Sphere({
    geometry: {
        radius: 2
    },

    mass: 10,
    onlyvis: false,

    material: {
        color: 0xffffff,
        kind: "lambert",
        rest: 0,
        fri: 1
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }

});

game.FPSControls(person, { // *WHS* object, Pointer lock controls object, Jquery blocker div selector.
    block: document.getElementById('blocker'),
    speed: 5 // 5
});
//# sourceMappingURL=game.js.map
