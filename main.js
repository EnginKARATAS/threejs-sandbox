import * as THREE from "three";
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const material2 = new THREE.LineBasicMaterial({ color: 0xABC0ff });

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);

const points2 = [];
points2.push(new THREE.Vector3(-10, 0, 0));
points2.push(new THREE.Vector3(0, -10, 0));
points2.push(new THREE.Vector3(10, 0, 0));
const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
const line2 = new THREE.Line(geometry2, material);
scene.add(line2);

const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
const material3 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, material3);
scene.add(cube);

let hue = 0; // Initialize hue for rainbow effect

renderer.render(scene, camera);

renderer.setAnimationLoop(animate);

function animate() {
  cube.rotation.y += 0.01;
  cube.rotation.x += 0.01;

  // Update cube color to create a rainbow effect
  hue += 0.01;
  if (hue > 1) hue = 0;
  cube.material.color.setHSL(hue, 1, 0.5);

  renderer.render(scene, camera);
}
