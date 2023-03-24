import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { InteractionManager } from "three.interactive";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ModelData from '../assets/json/Model.json';

export default class Model {
  constructor(settings) {
    console.log(settings)

    this.scene = new THREE.Scene();

    const size = 20;
    const divisions = 20;
    const gridHelper = new THREE.GridHelper(size, divisions);
    if (settings.showGrid) this.scene.add(gridHelper)

    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      150
    );

    this.camera.position.set(
      settings.setCameraPos[0],
      settings.setCameraPos[1],
      settings.setCameraPos[2]
    );
    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      shadowMap: true,
      outputEncoding: THREE.sRGBEncoding,
      alpha: true
    });

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth - 20, window.innerHeight - 200);
    this.renderer.render(this.scene, this.camera);

    document.body.appendChild(this.renderer.domElement);

    this.InteractionManager = new InteractionManager(
      this.renderer,
      this.camera,
      this.renderer.domElement
    );

    if (settings.orbitControls) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.controls.minDistance = 30;
      this.controls.maxDistance = 50;
      this.controls.maxPolarAngle = Math.PI / 2

      if (settings.showCameraPos) this.controls.addEventListener("change", (event) => {

        for (const key in this.controls.object.position) {
          console.log(`${key}: ${Math.round(this.controls.object.position[key] * 10) / 10}`);
        }
      })
    }

    const al = new THREE.AmbientLight(0xffffff, .2);
    if (settings.ambientLight) {
      this.scene.add(al);
    }

    this.renderer.setAnimationLoop((time) => this.animation(time));

    const asphaltFloor = new THREE.TextureLoader().load(ModelData.data[0].floor)
    const geometryFloor = new THREE.PlaneGeometry(140, 100);
    const materialFloor = new THREE.MeshPhongMaterial({
      map: asphaltFloor,
      side: THREE.DoubleSide,
    })

    const floor = new THREE.Mesh(geometryFloor, materialFloor);
    floor.receiveShadow = true;
    floor.rotation.x = Math.PI / 2;

    if (settings.showFloor) this.scene.add(floor);

    window.addEventListener("resize", () =>
      this.onWindowResized(this.renderer, this.camera)
    );

    this.textureCenter = new THREE.TextureLoader().load(ModelData.data[1].wallCenter);
    this.textureBg = new THREE.TextureLoader().load(ModelData.data[1].bg);

    const geometryWall = new THREE.PlaneGeometry(140, 40);
    this.materialWallCenter = new THREE.MeshPhongMaterial({
      map: this.textureCenter,
      side: THREE.DoubleSide,
    });

    this.materialWallBg = new THREE.MeshPhongMaterial({
      map: this.textureBg,
      side: THREE.DoubleSide,
    });

    const wall = new THREE.Mesh(geometryWall, this.materialWallCenter);
    wall.receiveShadow = false;
    wall.position.set(0, 20, 50);
    wall.rotation.x = 0;
    this.scene.add(wall)

    const wallB = new THREE.Mesh(geometryWall, this.materialWallBg);
    wallB.receiveShadow = false;
    wallB.position.set(0, 20, -50);
    wallB.rotation.x = 0;
    this.scene.add(wallB)

    this.textureLeft = new THREE.TextureLoader().load(ModelData.data[1].wallLeft);
    this.textureRight = new THREE.TextureLoader().load(ModelData.data[1].wallRight);
    const geometryWallC = new THREE.PlaneGeometry(100, 40);

    this.materialWallleft = new THREE.MeshPhongMaterial({
      map: this.textureLeft,
      side: THREE.DoubleSide,
    });

    this.materialWallRight = new THREE.MeshPhongMaterial({
      map: this.textureRight,
      side: THREE.DoubleSide,
    });

    const wallC = new THREE.Mesh(geometryWallC, this.materialWallRight);
    wallC.receiveShadow = false;
    wallC.position.set(65, 20, 0);
    wallC.rotation.x = 0;
    wallC.rotation.y = 300;
    this.scene.add(wallC)

    const wallD = new THREE.Mesh(geometryWallC, this.materialWallleft);
    wallD.receiveShadow = false;
    wallD.position.set(-65, 20, 0);
    wallD.rotation.x = 0;
    wallD.rotation.y = 300;
    this.scene.add(wallD)

    const loader = new GLTFLoader();

    loader.load(ModelData.data[2].Model, (gltf) => {

      let model = gltf.scene;
      model.rotation.set(0, 260, 0);
      model.position.set(0, 0, 0);
      model.scale.set(10, 10, 10);

      model.traverse((n) => {

        if (n.isMesh) {
          n.castShadow = true;
          n.receiveShadow = true;
        }
      })
      this.scene.add(model);
    })

    //**Start Light 3D model  */

    const hemiLight = new THREE.HemisphereLight(0xffffff, 1);
    this.scene.add(hemiLight)

    const ponitLightA = new THREE.PointLight(0xffffff, 0.2);
    ponitLightA.position.set(0, 120, 0)
    this.scene.add(ponitLightA)

    const ponitLightB = new THREE.PointLight(0xffffff, 0.2);
    ponitLightB.position.set(20, 120, 3)
    this.scene.add(ponitLightB)

    const ponitLightC = new THREE.PointLight(0xffffff, 0.2);
    ponitLightC.position.set(-15, 120, 6)
    this.scene.add(ponitLightC)

    if (settings.lightHelp) {
      const dlHelpA = new THREE.PointLightHelper(ponitLightA,);
      this.scene.add(dlHelpA)

      const dlHelpB = new THREE.PointLightHelper(ponitLightB,);
      this.scene.add(dlHelpB)

      const dlHelpC = new THREE.PointLightHelper(ponitLightC,);
      this.scene.add(dlHelpC)
    }

    //**End Light 3D model  */

  } //END Constructor

  onWindowResized() {
    this.camera.aspect = window.innerWidth - 20 / window.innerHeight - 200;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animation(time) {
    this.renderer.render(this.scene, this.camera);
  }
} //END class
