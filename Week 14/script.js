// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add shapes to the scene
const geometry1 = new THREE.BoxGeometry();
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

const geometry2 = new THREE.SphereGeometry(0.5, 32, 32);
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere1 = new THREE.Mesh(geometry2, material2);
scene.add(sphere1);

const geometry3 = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
const material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cylinder1 = new THREE.Mesh(geometry3, material3);
scene.add(cylinder1);

// Position the shapes
cube1.position.set(2, 0, 0);
sphere1.position.set(0, 2, 0);
cylinder1.position.set(-2, 0, 0);

// Position the camera
camera.position.z = 5;

// Animation loop
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the shapes
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;
    sphere1.rotation.x += 0.01;
    sphere1.rotation.y += 0.01;
    cylinder1.rotation.x += 0.01;
    cylinder1.rotation.y += 0.01;

    // Move the shapes in a circular motion
    const time = Date.now() * 0.001; // Get the current time
    const radius = 2; // Radius of the circle
    const speed = 0.5; // Speed of rotation
    const angle1 = time * speed; // Calculate angle for cube1
    const angle2 = time * speed + (Math.PI * 2) / 3; // Calculate angle for sphere1
    const angle3 = time * speed + (Math.PI * 2) * 2 / 3; // Calculate angle for cylinder1

    // Set positions of shapes in a circular motion
    cube1.position.x = Math.cos(angle1) * radius;
    cube1.position.y = Math.sin(angle1) * radius;
    sphere1.position.x = Math.cos(angle2) * radius;
    sphere1.position.y = Math.sin(angle2) * radius;
    cylinder1.position.x = Math.cos(angle3) * radius;
    cylinder1.position.y = Math.sin(angle3) * radius;

    // Render the scene
    renderer.render(scene, camera);
};

animate();
