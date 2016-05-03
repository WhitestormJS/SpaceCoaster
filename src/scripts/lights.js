const ambient = game.AmbientLight({
  light: {
    color: 0x83DCF9,
    intensity: 0.2,

    pos: {
        x: 0,
        y: 120,
        z: 0,
    },

    target: {
        x: 0,
        y: 10,
        z: 0
    }
  }
});

const spot = game.SpotLight( {
    light: {
        color: 0x83DCF9,
        intensity: 0.3,
        distance: 500,
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
        z: 160, // 100
    },

    target: {
        x: 0,
        y: 10,
        z: 0
    }
} );
