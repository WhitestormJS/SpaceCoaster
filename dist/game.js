'use strict';

var game = new WHS.World({
  stats: false,

  gravity: {
    x: -25,
    y: -25,
    z: -25
  },

  path_worker: 'scripts/vendor/physi_worker.js',

  path_ammo: 'scripts/vendor/ammo.js'
});

game.start();
//# sourceMappingURL=game.js.map
