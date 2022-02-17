import  { useState } from "react";
import { Color3, Vector3 } from "@babylonjs/core";
import { Engine, Scene } from "react-babylonjs";
//import {useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Caixa from "./Caixa";
import "./App.css";
import piso from "./cors/assets/images/piso_madeira.jpg";




const App = () => {
  const [largura, setLargura] = useState(80);
  const [altura, setAltura] = useState(100);
  const [profundidade, setProfundidade] = useState(30);

  const handleOnChangeLarg = (event) => {
    setLargura(Number.parseInt(event.target.value, 10));
  };

  const handleOnChangeAlt = (event) => {
    setAltura(Number.parseInt(event.target.value, 10));
  };

  const handleOnChangeProf = (event) => {
    setProfundidade(Number.parseInt(event.target.value, 10));
  };

  return (
    <div className="container mt-5">
      <header className="alert alert-dark">
        <h1>Exercice/React/babylon</h1>
      </header>
      <div className="row">
        <div className="col-sm-3">
          <form>
            <div className="form-group row">
              <div className="col-sm-10 px-1">
                <input
                  type="range"
                  className="form-control-range control-range-center"
                  onChange={handleOnChangeLarg}
                  defaultValue={80}
                  min={30}
                  max={150}
                />
              </div>
              <label className="col-sm-2 col-form-label px-1">
                {" "}
                {largura}{" "}
              </label>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 px-1">
                <input
                  type="range"
                  className="form-control-range control-range-center"
                  onChange={handleOnChangeAlt}
                  defaultValue={100}
                  min={30}
                  max={270}
                />
              </div>
              <label className="col-sm-2 col-form-label px-1"> {altura} </label>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 px-1">
                <input
                  type="range"
                  className="form-control-range control-range-center"
                  onChange={handleOnChangeProf}
                  defaultValue={30}
                  min={10}
                  max={70}
                />
              </div>
              <label className="col-sm-2 col-form-label px-1">
                {" "}
                {profundidade}{" "}
              </label>
            </div>
          </form>
        </div>
        <div className="col-sm-9">
          
          <Engine
            antialias={true}
            adaptToDeviceRatio={true}
            canvasId="sample-canvas"
          >
            <Scene>
          
              <arcRotateCamera
                name="arc"
                target={new Vector3(0, 100, -100)}
                alpha={-Math.PI / 2}
                beta={0.5 + Math.PI / 4}
                radius={4}
                minZ={1}
                wheelPrecision={1}
                lowerRadiusLimit={90}
                upperRadiusLimit={700}
                upperBetaLimit={Math.PI / 2}
                panningSensibility={10}
              />
              <hemisphericLight
                name="hemi"
                direction={new Vector3(0, -1, 0)}
                intensity={0.8}
              />
              <hemisphericLight
                name="hemi"
                direction={new Vector3(1, 0.5, 2)}
                intensity={0.8}
              />
              <directionalLight
                name="shadow-light"
                setDirectionToTarget={[Vector3.Zero()]}
                direction={Vector3.Zero()}
                position={new Vector3(-40, 30, -40)}
                intensity={0.8}
                shadowMinZ={1}
                shadowMaxZ={2500}
              >
                <shadowGenerator
                  mapSize={1024}
                  useBlurExponentialShadowMap={true}
                  blurKernel={32}
                  darkness={0.8}
                  shadowCasters={["box1"]}
                  forceBackFacesOnly={true}
                  depthScale={100}
                />
              </directionalLight>

              <Caixa
                largura={largura}
                altura={altura}
                profundidade={profundidade}
              />

              <ground
                name="ground1"
                width={500}
                height={500}
                subdivisions={2}
                receiveShadows={true}
              >
                <standardMaterial
                  name="matPiso"
                  specularColor={Color3.White()}
                  backFaceCulling={false}
                >
                  <texture
                    url={piso}
                    assignTo="diffuseTexture"
                    hasAlpha={true}
                    uOffset={0.5}
                    vOffset={0.5}
                    uScale={3}
                    vScale={3}
                  />
                </standardMaterial>
              </ground>
            </Scene>
          </Engine>
          
        </div>
      </div>
    </div>
  );
};

export default App;
