const track = new THREE.AudioListener();
const soundtrack = new THREE.Audio(track);
const camera = game.getCamera();
const loader = new THREE.AudioLoader();

camera.add(track);

game.add(soundtrack);

loader.load('assets/audio/365-days-in-space.ogg',
 function(audioBuffer){
  soundtrack.setBuffer( audioBuffer );
	soundtrack.play();
}, function(xhr){}, function(xhr){console.log( 'An error happened' );});
