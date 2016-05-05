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

var camera = game.getCamera();

preloader.check();
'use strict';

var track = new THREE.AudioListener();
var soundtrack = new THREE.Audio(track);
var shipSound = new THREE.Audio(track);
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

loader.load('assets/audio/flyby.ogg', function (audioBuffer) {
  shipSound.setBuffer(audioBuffer);
  shipSound.loaded = true;
}, function (xhr) {}, function (xhr) {
  console.log('An error happened');
});
"use strict";

var person = game.Sphere({
    geometry: {
        radius: 2
    },

    mass: 5,
    onlyvis: false,

    material: {
        color: 0xffffff,
        kind: "lambert",
        rest: 0,
        fri: 1
    },

    pos: {
        x: 1000,
        y: 1000,
        z: 1000
    }

});

game.FPSControls(person, { // *WHS* object, Pointer lock controls object, Jquery blocker div selector.
    block: document.getElementById('blocker'),
    speed: 1 // 5
});
"use strict";

var fog = game.FogExp2({
  hex: 0x25424d,
  near: 1,
  far: 5
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
            y: 0,
            z: 0
        }
    }
});

var spot = game.SpotLight({
    light: {
        color: 0x83DCF9,
        intensity: 0.8,
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
        y: 0,
        z: 0
    }
});
'use strict';

var sunTexture = WHS.API.texture('assets/textures/sun.jpg');
var jupiterTexture = WHS.API.texture('assets/textures/jupiter.jpg');
var sun = game.Model({
  geometry: {
    path: 'assets/models/ik89123.json'
  },

  material: {
    shading: THREE.SmoothShading,
    map: sunTexture,
    bunmap: sunTexture,
    kind: 'phong',
    wireframe: false,
    vertexColors: false,
    doubleSided: true,
    depthWrite: true,
    emissive: 0xffffff,
    emissiveIntensity: 0.3
  },

  mass: 0,
  pos: {
    x: 500,
    y: 500,
    z: 500
  },

  scale: {
    x: 50,
    y: 50,
    z: 50
  }
});

var jupiter = game.Model({
  geometry: {
    path: 'assets/models/ik89123.json'
  },

  material: {
    shading: THREE.SmoothShading,
    map: jupiterTexture,
    bunmap: jupiterTexture,
    kind: 'phong',
    wireframe: false,
    vertexColors: false,
    doubleSided: true,
    depthWrite: true,
    emissive: 0xde9fa3,
    emissiveIntensity: 0.3
  },

  mass: 0,
  pos: {
    x: 500,
    y: 650,
    z: 120
  },

  scale: {
    x: 20,
    y: 20,
    z: 20
  }
});

setInterval(function () {
  var rot = sun.rotation;
  sun.rotation.set(rot.x += 0.2, 0, 0);
  requestAnimationFrame();
}, 500);
'use strict';

var spaceship = game.Model({
    geometry: {
        path: 'assets/models/spaceship.json',
        physics: 'assets/models/spaceship_low.json'
    },

    material: {},

    mass: 0,
    pos: {
        x: -1000,
        y: -1000,
        z: -1000
    },

    rotation: {
        x: 0,
        z: Math.PI / 4,
        y: 0
    },

    scale: {
        x: 1,
        y: 1,
        z: 1
    }
});
var curve = new THREE.CurvePath();
curve.add(new THREE.CubicBezierCurve3(new THREE.Vector3(-1000, -1000, -1000), new THREE.Vector3(-865, -650, -525), new THREE.Vector3(-350, -350, -225), new THREE.Vector3(-100, -100, -100)));
curve.add(new THREE.CubicBezierCurve3(new THREE.Vector3(-100, -100, -100), new THREE.Vector3(0, 0, 0), new THREE.Vector3(25, 125, 0), new THREE.Vector3(200, 100, 350)));
curve.add(new THREE.CubicBezierCurve3(new THREE.Vector3(200, 100, 350), new THREE.Vector3(350, 250, 350), new THREE.Vector3(650, 750, 750), new THREE.Vector3(1000, 1000, 1000)));

curve.add(new THREE.CubicBezierCurve3(new THREE.Vector3(1000, 1000, 1000), new THREE.Vector3(1250, 1250, 3500), new THREE.Vector3(6500, 7500, 7500), new THREE.Vector3(10000, 10000, 10000)));

spaceship.addTo(game, 'wait').then(function (obj) {
    obj.follow(curve, 245000, false);
    spaceship.add(shipSound);
});
"use strict";

game.skybox = game.Skybox({
    path: "img/space",
    imgSuffix: ".jpg",
    skyType: "sphere",
    radius: 10000
});
//# sourceMappingURL=game.js.map
