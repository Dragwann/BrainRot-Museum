import * as THREE from "three";
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import GUI from "lil-gui";


console.log(THREE);

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const walls = [];

let raycaster = new THREE.Raycaster(
  new THREE.Vector3(),
  new THREE.Vector3(1, 0, 0),
  0,
  2

)
const pointer = new THREE.Vector2();

let raycasterXFront = new THREE.Raycaster(
  new THREE.Vector3(),
  new THREE.Vector3(1, 0, 0),
  0,
  1
);
let raycasterXBack = new THREE.Raycaster(
  new THREE.Vector3(),
  new THREE.Vector3(-1, 0, 0),
  0,
  1
);
let raycasterYLeft = new THREE.Raycaster(
  new THREE.Vector3(),
  new THREE.Vector3(0, 0, 1),
  0,
  1
);
let raycasterYRight = new THREE.Raycaster(
  new THREE.Vector3(),
  new THREE.Vector3(0, 0, -1),
  0,
  1
);

// camera settings
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(25, 1, -3);
scene.add(camera);


const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

// GUI
const gui = new GUI();

// FPS
const controls = new PointerLockControls(camera, canvas);
document.addEventListener('click', () => {
    controls.lock();
});

// Movements
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const speed = 5.0;

const keys = {
    forward: false,
    backward: false,
    left: false,
    right: false
};
function updateMovement(deltaTime) {
  direction.set(0, 0, 0);
  // if (keys.forward) direction.z -= 1;
  if (keys.backward) direction.z += 1;
  // if (keys.left) direction.x -= 1;
  // if (keys.right) direction.x += 1;

  direction.normalize();
  velocity.copy(direction).multiplyScalar(speed * deltaTime);

}

// Event keyboard
document.addEventListener('keydown', (event) => {
    switch (event.code) {
    //     case 'KeyW': keys.forward = true; break;
        case 'KeyS': keys.backward = true; break;
    // //     case 'KeyA': keys.left = true; break;
    // //     case 'KeyD': keys.right = true; break;
    }
});
document.addEventListener('keyup', (event) => {
    switch (event.code) {
        // case 'KeyW': keys.forward = false; break;
        case 'KeyS': keys.backward = false; break;
        // case 'KeyA': keys.left = false; break;
        // case 'KeyD': keys.right = false; break;
    }
});


// Helper Axes
const axesHelper = new THREE.AxesHelper(2);
axesHelper.position.set(20, 0, -2);
scene.add(axesHelper);

// Dimensions
const wallHeight = 60;
const wallWidth = 30;
const wallThickness = 1;
const wallColor = 0xFEFEE2;

//TEXTURES
const textureLoader = new THREE.TextureLoader();

const backRoom = textureLoader.load(
  "texutres/backroom/material_baseColor.jpeg"
)
const Innerwalltext = textureLoader.load(
  "texutres/wood walls texture/Stylized_Wood_Wall_001_basecolor.png"
)

//hallLookmaxxing
const aura = textureLoader.load(
  "texutres/images/hallLookmaxing/aura.jpg"
)

const chad = textureLoader.load(
  "texutres/images/hallLookmaxing/chad.jpg"
)

const chico = textureLoader.load(
  "texutres/images/hallLookmaxing/chico.jpg"
)

const lookMaxxing = textureLoader.load(
  "texutres/images/hallLookmaxing/looksmaxxx.jpg"
)

const mewing = textureLoader.load(
  "texutres/images/hallLookmaxing/mewing.jpg"
)

const rickRoll = textureLoader.load(
  "texutres/images/rickroll.jpg"
)

//hall brainrot fr / ita

const bird = textureLoader.load(
  "texutres/images/hal-br-fr-ita/Bird.webp"
)

const crocodilo = textureLoader.load(
  "texutres/images/hal-br-fr-ita/crocodilo.jpeg"
)

const makakini = textureLoader.load(
  "texutres/images/hal-br-fr-ita/makakini bananini.jpeg"
)

const ananas = textureLoader.load(
  "texutres/images/hal-br-fr-ita/ananasnasdas.jpeg"
)

const flan = textureLoader.load(
  "texutres/images/hal-br-fr-ita/flanfdp.jpg"
)

const laink = textureLoader.load(
  "texutres/images/hal-br-fr-ita/laink.jpeg"
)

const ptdr = textureLoader.load(
  "texutres/images/hal-br-fr-ita/ptdr-t-ki.jpeg"
)

const JC = textureLoader.load(
  "texutres/images/Jclecture.png"
)

//Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

//Models
const gltfLoader = new GLTFLoader();

  //Skibidi hall
  gltfLoader.load("models/normal_toilet/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.5 , 0.5 , 0.5 )
    gltf.scene.position.set(15, 0, -1.5)
    gltf.scene.rotation.y = Math.PI / 2
  });
  
  gltfLoader.load("models/normal_toilet/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.5 , 0.5 , 0.5 )
    gltf.scene.position.set(10, 0, -1.5)
    gltf.scene.rotation.y = Math.PI / 2
  });
  
  gltfLoader.load("models/normal_toilet/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.5 , 0.5 , 0.5 )
    gltf.scene.position.set(5, 0, -1.5)
    gltf.scene.rotation.y = Math.PI / 2
  });
  
  gltfLoader.load("models/normal_toilet/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.5 , 0.5 , 0.5 )
    gltf.scene.position.set(15, 0, -5)
    gltf.scene.rotation.y = Math.PI / -2
  });
  
  gltfLoader.load("models/normal_toilet/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.5 , 0.5 , 0.5 )
    gltf.scene.position.set(10, 0, -5)
    gltf.scene.rotation.y = Math.PI / -2 
  });
  
  gltfLoader.load("models/normal_toilet/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.5 , 0.5 , 0.5 )
    gltf.scene.position.set(5, 0, -5)
    gltf.scene.rotation.y = Math.PI / -2
  });
  
  // gigachad
gltfLoader.load("models/giga_chad_ernest_khalimov_replica/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.02, 0.02, 0.02)
    gltf.scene.position.set(10, -0.5, -10)
    gltf.scene.rotation.y = Math.PI / -2
  });

  //banancat
gltfLoader.load("models/bananacat/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(8, 0, -35)
  });

  //oiacat
  let oiacat;

  gltfLoader.load("models/oiiaioooooiai_cat/scene.gltf", gltf => {
    oiacat = gltf.scene;
    scene.add(oiacat);
    oiacat.scale.set(2, 2, 2)
    oiacat.position.set(22, 0, -35)
  });



  //maxwell the cat

let maxwell = null;
let maxwellTime = 0;


gltfLoader.load("models/maxwell_the_cat_with_bones_animation/scene.gltf", gltf => {
  maxwell = gltf.scene;
  scene.add(maxwell);
  maxwell.scale.set(2, 2, 2);
  maxwell.position.set(14, -0.5, -35);
});


// Video games hall

  //undertale
  gltfLoader.load("models/sans_-_undertale/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.02, 0.02, 0.02)
    gltf.scene.position.set(10, 0, -40)
  })

  //fnaf scene
  //freddy
gltfLoader.load("models/fnaf_rewritten_performance_animation_and_models/scene.gltf", gltf => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(0.7, 0.7, 0.7)
  gltf.scene.position.set(27, 0, -42.5)
  gltf.scene.rotation.y = Math.PI / -2
  console.log(gltf)
})


  //stage
gltfLoader.load("models/fnaf_scene_thas/scene.gltf", gltf => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(0.2, 0.2, 0.2)
  gltf.scene.position.set(25, 0, -42)
})

  //amogus
gltfLoader.load("models/amogus/scene.gltf", gltf => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(0.01, 0.01, 0.01)
  gltf.scene.position.set(14, 0, -40)
  gltf.scene.rotation.y = Math.PI / 2
});

  //among us
gltfLoader.load("models/among_us/scene.gltf", gltf => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(0.3, 0.3, 0.3)
  gltf.scene.position.set(14, -0.5, -43)
  gltf.scene.rotation.y = Math.PI / 2
});

  // Goat
gltfLoader.load("models/goat_sim_brown_goat/scene.gltf", gltf => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(10, -0.5, -43)
    gltf.scene.rotation.y = Math.PI / 2
  });

//brick
gltfLoader.load("models/nico/scene.gltf", gltf => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(0.1, 0.1, 0.1)
  gltf.scene.position.set(0.7, -0.5, -42)
});

//Pictures Frames
//Hall Lookmaxxing
//aura
const auraFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: aura, side: THREE.DoubleSide})
)
auraFrame.position.set (10,1,-19.4)
scene.add(auraFrame)
//chad
const chadFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: chad, side: THREE.DoubleSide})
)
chadFrame.position.set (5, 1, -19.4)
scene.add(chadFrame)
//chico
const chicoFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: chico, side: THREE.DoubleSide})
)
chicoFrame.position.set (15,1,-19.4)
scene.add(chicoFrame)
//lookmaxxing
const lookMaxxingFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: lookMaxxing, side: THREE.DoubleSide})
)
lookMaxxingFrame.position.set (20,1,-19.4)
scene.add(lookMaxxingFrame)
//mewing
const mewingFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: mewing, side: THREE.DoubleSide})
)
mewingFrame.position.set (25, 1, -19.4)
scene.add(mewingFrame)
//

//rickroll
const rickRollFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: rickRoll})
)
rickRollFrame.position.set(16, 1, -10 )
rickRollFrame.rotation.y = Math.PI / 2
scene.add(rickRollFrame)

//hall brain rot FR ITA
//bird
const birdFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: bird, side: THREE.DoubleSide})
)
birdFrame.position.set (5, 1, -29.4)
scene.add(birdFrame)

//crocodilo
const crocodiloFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: crocodilo, side: THREE.DoubleSide})
)
crocodiloFrame.position.set (10, 1, -29.4)
scene.add(crocodiloFrame)

//makakini
const makakiniFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: makakini, side: THREE.DoubleSide})
)
makakiniFrame.position.set (15, 1, -29.4)
scene.add(makakiniFrame)

//ananas
const ananasFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: ananas, side: THREE.DoubleSide})
)
ananasFrame.position.set (5, 1, -20.6)
ananasFrame.rotation.y = Math.PI
scene.add(ananasFrame)

//flan
const flanFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: flan, side: THREE.DoubleSide})
)
flanFrame.position.set (10, 1, -20.6)
scene.add(flanFrame)

//laink
const lainkFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: laink, side: THREE.DoubleSide})
)
lainkFrame.position.set (15, 1, -53.7)
scene.add(lainkFrame)

const JCFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: JC, side: THREE.DoubleSide})
)
JCFrame.position.set (15, 1, -52)
scene.add(JCFrame)

//ptdr
const ptdrFrame = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5,1.5),
  new THREE.MeshBasicMaterial ({ map: ptdr, side: THREE.DoubleSide})
)
ptdrFrame.rotation.y = Math.PI
ptdrFrame.position.set (15, 1, -20.6)
scene.add(ptdrFrame)


// Structure
const struct = new THREE.Group();
scene.add(struct);


// Left wall (vertical)
const leftWall = new THREE.Mesh(
  new THREE.BoxGeometry(wallThickness, wallHeight, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
);
leftWall.position.set(0, wallHeight / 2, 0);
struct.add(leftWall);
walls.push(leftWall);

// Right wall (vertical)
const rightWall = new THREE.Mesh(
  new THREE.BoxGeometry(wallThickness, wallHeight, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
);
rightWall.position.set(wallWidth, wallHeight / 2, 0);
struct.add(rightWall);
walls.push(rightWall);

// Down wall (horizontal)
const bottomWall = new THREE.Mesh(
  new THREE.BoxGeometry(wallWidth + wallThickness, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
);
bottomWall.position.set(wallWidth / 2, 0, 0);
struct.add(bottomWall);
walls.push(bottomWall)

// Upper wall (horizontal)
const topWall = new THREE.Mesh(
  new THREE.BoxGeometry(wallWidth + wallThickness, wallThickness,5),
  new THREE.MeshBasicMaterial({ map: backRoom })
);
topWall.position.set(wallWidth / 2, wallHeight, 0);
struct.add(topWall);
walls.push(topWall)

//Separation
const separation1 = new THREE.Mesh(
  new THREE.BoxGeometry(26, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
separation1.position.set(17, 7, 0 )
struct.add(separation1)
walls.push(separation1)

const separation2 = new THREE.Mesh(
  new THREE.BoxGeometry(26, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
separation2.position.set(13, 20, 0 )
struct.add(separation2)
walls.push(separation2)

const separation3 = new THREE.Mesh(
  new THREE.BoxGeometry(26, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
separation3.position.set(13, 30, 0 )
struct.add(separation3)
walls.push(separation3)

const separation4 = new THREE.Mesh(
  new THREE.BoxGeometry(26, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
separation4.position.set(17, 37, 0 )
struct.add(separation4)
walls.push(separation4)

const separation5 = new THREE.Mesh(
  new THREE.BoxGeometry(26, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
separation5.position.set(17, 48, 0 )
struct.add(separation5)
walls.push(separation5)

//Murals

//Murals room 2
//horizontal
const mural1 = new THREE.Mesh(
  new THREE.BoxGeometry(10, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
mural1.position.set(20, 13, 0 )
struct.add(mural1)
walls.push(mural1)
//vertical
const mural2 = new THREE.Mesh(
  new THREE.BoxGeometry(wallThickness, 7, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
mural2.position.set(15, 10, 0 )
struct.add(mural2)
walls.push(mural2)

//Mural room 3
const mural3 = new THREE.Mesh(
  new THREE.BoxGeometry(15, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
mural3.position.set(22, 25, 0 )
struct.add(mural3)
walls.push(mural3)

//Mural room 5
//Horizontal
const mural5 = new THREE.Mesh(
  new THREE.BoxGeometry(12, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
mural5.position.set(7, 42, 0 )
struct.add(mural5)
walls.push(mural5)
//vertical
const mural6 = new THREE.Mesh(
  new THREE.BoxGeometry(wallThickness, 5, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
mural6.position.set(13, 42, 0 )
struct.add(mural6)
walls.push(mural6)

//Mural room6
//Horizontal
const mural7 = new THREE.Mesh(
  new THREE.BoxGeometry(12, wallThickness, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
mural7.position.set(15, 53, 0 )
struct.add(mural7)
walls.push(mural7)
//Vertical
const mural8 = new THREE.Mesh(
  new THREE.BoxGeometry(wallThickness, 5, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
mural8.position.set(21, 53, 0 )
struct.add(mural8)
walls.push(mural8)
//Vertical
const mural9 = new THREE.Mesh(
  new THREE.BoxGeometry(wallThickness, 5, 5),
  new THREE.MeshBasicMaterial({ map: backRoom })
)
mural9.position.set(9, 53, 0 )
struct.add(mural9)
walls.push(mural9)

//Flor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(30,60),
  new THREE.MeshBasicMaterial ({ map: Innerwalltext})
)
floor.position.set (15,30,-0.5)

Innerwalltext.repeat.set(7,7);
Innerwalltext.wrapS = THREE.RepeatWrapping;
Innerwalltext.wrapT = THREE.RepeatWrapping;

struct.add(floor)

renderer.render(scene, camera);


// Camera movement
const camPos = {
  x: 0,
  y: 0,
  z: 6
};

struct.rotation.x = 1.5 * Math.PI;

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
window.addEventListener( 'pointermove', onPointerMove );

const tick = () => {
  window.requestAnimationFrame(tick);
  const deltaTime = 0.016;
    updateMovement(deltaTime);

  renderer.render(scene, camera);

  raycaster.setFromCamera( pointer, camera );
  const intersects = raycaster.intersectObjects( walls );
  // for ( let i = 0; i < intersects.length; i ++ ) {

	// 	intersects[ i ].object.material.color.set( 0xff0000 );

	// }
  if(intersects.length > 0){
    if(velocity.z > 0){
      velocity.z = 0;
    }
  }

  controls.moveRight(velocity.x);
  controls.moveForward(velocity.z);
  controls.update (0.1);

  if (oiacat) {
    oiacat.rotation.y += 0.5;
  }


  if (maxwell) {
    maxwellTime += deltaTime;
    maxwell.rotation.z = Math.sin(maxwellTime * 2) * 0.3;
  }
};
tick (); 
