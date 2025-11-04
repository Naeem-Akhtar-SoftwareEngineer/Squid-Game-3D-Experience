const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0x404040 );
scene.add( light );


// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0xddff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;

// renderer.render(scene,camera);


function animate() {
	renderer.render( scene, camera );

  // cube.rotation.x += 0.02;
  // cube.rotation.y += 0.02;

  // Instantiate a loader
  const loader = new THREE.GLTFLoader();

  loader.load("modal/scene.gltf", function(gltf){
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.4,0.4,0.4);
  })
  
  requestAnimationFrame( animate );
  
}
animate();