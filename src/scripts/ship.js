const spaceship = game.Model({
  geometry:{
    path: 'assets/models/spaceship.json',
    physics: 'assets/models/spaceship_low.json'
  },

  material: {
  },

  mass: 0,
  pos: {
      x: -1000,
      y: -1000,
      z: -1000
  },

  rotation: {
      x: 0,
      z: Math.PI / 4,
      y: 0,
  },

  scale: {
      x: 1,
      y: 1,
      z: 1
  },
});
var curve = new THREE.CurvePath();
curve.add(
    new THREE.CubicBezierCurve3(
        new THREE.Vector3( -1000, -1000, -1000),
        new THREE.Vector3( -865, -650, -525 ),
        new THREE.Vector3( -350, -350, -225 ),
       new THREE.Vector3( -100, -100, -100 )
    )
);
curve.add(
    new THREE.CubicBezierCurve3(
        new THREE.Vector3( -100, -100, -100 ),
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 25, 125, 0),
        new THREE.Vector3( 200, 100, 350 )
    )
);
curve.add(
    new THREE.CubicBezierCurve3(
        new THREE.Vector3( 200, 100, 350 ),
        new THREE.Vector3( 350, 250, 350 ),
        new THREE.Vector3( 650, 750,  750 ),
        new THREE.Vector3( 1000, 1000, 1000 )
    )
);

curve.add(
    new THREE.CubicBezierCurve3(
        new THREE.Vector3( 1000, 1000, 1000 ),
        new THREE.Vector3( 1250, 1250, 3500 ),
        new THREE.Vector3( 6500, 7500,  7500 ),
        new THREE.Vector3( 10000, 10000, 10000 )
    )
);


spaceship.addTo(game,'wait').then(function(obj){
  obj.follow(curve,245000,false);
  spaceship.add(shipSound);
});
