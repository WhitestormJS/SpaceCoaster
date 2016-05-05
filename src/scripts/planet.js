let sunTexture = WHS.API.texture('assets/textures/sun.jpg');
let jupiterTexture = WHS.API.texture('assets/textures/jupiter.jpg');
const sun = game.Model({
  geometry:{
    path: 'assets/models/ik89123.json'
  },

  material: {
    shading: THREE.SmoothShading,
    map: sunTexture,
    bunmap: sunTexture,
    kind: 'phong',
    wireframe:false,
    vertexColors:false,
    doubleSided:true,
    depthWrite:true,
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
  },
});


let jupiter = game.Model({
  geometry:{
    path: 'assets/models/ik89123.json'
  },

  material: {
    shading: THREE.SmoothShading,
    map: jupiterTexture,
    bunmap: jupiterTexture,
    kind: 'phong',
    wireframe:false,
    vertexColors:false,
    doubleSided:true,
    depthWrite:true,
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

setInterval(function(){
    var rot = sun.rotation;
    sun.rotation.set(rot.x+=0.2, 0,0);
    requestAnimationFrame();
}, 1);
