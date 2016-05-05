var person = game.Sphere( {
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

} );


game.FPSControls( person, { // *WHS* object, Pointer lock controls object, Jquery blocker div selector.
    block: document.getElementById('blocker'),
    speed: 1 // 5
} );
