'use strict';

var preloader = Preloader();

var game = new WHS.World({
  stats: false,
  autoresize: true,

  gravity: {
    x: 0,
    y: 0,
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
'use strict';

var track = new THREE.AudioListener();
var soundtrack = new THREE.Audio(track);
var camera = game.getCamera();
var loader = new THREE.AudioLoader();

camera.add(track);

game.add(soundtrack);

loader.load('assets/audio/365-days-in-space.ogg', function (audioBuffer) {
  soundtrack.setBuffer(audioBuffer);
  soundtrack.play();
}, function (xhr) {}, function (xhr) {
  console.log('An error happened');
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
    speed: 2 // 5
});
"use strict";

var fog = game.FogExp2({
  hex: 0x4edfa2,
  near: 1,
  far: game.__defaults.camera.far
});
"use strict";

var ambient = game.AmbientLight({
    light: {
        color: 0x83DCF9,
        intensity: 0.2,

        pos: {
            x: 0,
            y: 120,
            z: 0
        },

        target: {
            x: 0,
            y: 10,
            z: 0
        }
    }
});

var spot = game.SpotLight({
    light: {
        color: 0x83DCF9,
        intensity: 0.3,
        distance: 500
    },

    shadowmap: {
        width: 2048,
        height: 2048,
        top: 0,
        fov: 90
    },

    pos: {
        x: 160, // 100,
        y: 120, // 30,
        z: 160 },

    // 100
    target: {
        x: 0,
        y: 10,
        z: 0
    }
});
"use strict";

game.skybox = game.Skybox({
    path: "img/space",
    imgSuffix: ".jpg",
    skyType: "sphere",
    radius: game.__defaults.camera.far
});
//# sourceMappingURL=game.js.map
