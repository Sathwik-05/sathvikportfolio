const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);
const canvas = document.getElementById("bg");
const renderer=new THREE.WebGLRenderer({
canvas:document.getElementById('bg')
});

renderer.setSize(window.innerWidth,window.innerHeight);

const geometry=new THREE.TorusGeometry(10,3,16,100);

const material=new THREE.MeshBasicMaterial({
color:0x38bdf8,
wireframe:true
});

const torus=new THREE.Mesh(geometry,material);

scene.add(torus);

torus.position.x = 15;

const starGeometry=new THREE.BufferGeometry();

const starCount=2000;

const positions=new Float32Array(starCount*3);

for(let i=0;i<starCount*3;i++){
positions[i]=(Math.random()-0.5)*600;
}

starGeometry.setAttribute(
'position',
new THREE.BufferAttribute(positions,3)
);

const starMaterial=new THREE.PointsMaterial({
color:0xffffff,
size:1
});

const stars=new THREE.Points(
starGeometry,
starMaterial
);

scene.add(stars);

camera.position.z=30;

function animate(){

requestAnimationFrame(animate);

torus.rotation.x+=0.01;
torus.rotation.y+=0.005;
torus.rotation.z+=0.01;

stars.rotation.y+=0.0005;

renderer.render(scene,camera);

}

animate();

window.addEventListener('resize',()=>{

camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);

});

function showAchievement(){
document.getElementById("achievement-box").style.display="block";
}