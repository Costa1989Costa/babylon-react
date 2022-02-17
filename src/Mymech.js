import { Mesh, MultiMaterial, StandardMaterial } from "@babylonjs/core";
import { useRef, useCallback } from "react";
import imagem from "./core/assets/images/Toronto_490x360.jpg";

//type Props = {
  //largura: number;
  //altura: number;
  //profundidade: number;
//};

const MyMesh = ({ largura, altura, profundidade }) => {
  const side1 = useRef<StandardMaterial | null>(null);

  const side6 = useRef<StandardMaterial | null>(null);
  const box = useRef<Mesh | null>(null);
  const multi = useCallback<MultiMaterial>((multimat: MultiMaterial) => {
    // I think you should have all refs here for all materials and can create sub-materials etc.
    if (side1.current === null) {
      // I think it will always be set here, but you can see by testing.
    }

    multimat.subMaterials.push(side1);

    new SubMesh(0, 0, verticesCount, 0, 900, box.current);
  }, []);

  return (
    <>
      <standardMaterial ref={side1} />

      <standardMaterial ref={side6} />
      <box name="box1" ref={box}>
        <multiMaterial ref={multi} />
      </box>
    </>
  );
};

export default MyMesh;
import { Mesh, MultiMaterial, StandardMaterial } from "@babylonjs/core";
import { useRef, useCallback } from "react";
//import imagem from "./core/assets/images/Toronto_490x360.jpg";

//type Props = {
  //largura: number;
  //altura: number;
  //profundidade: number;
//};

const MyMesh = ({ largura, altura, profundidade }) => {
  const side1 = useRef<StandardMaterial | null>(null);

  const side6 = useRef<StandardMaterial | null>(null);
  const box = useRef<Mesh | null>(null);
  const multi = useCallback<MultiMaterial>((multimat: MultiMaterial) => {
    // I think you should have all refs here for all materials and can create sub-materials etc.
    if (side1.current === null) {
      // I think it will always be set here, but you can see by testing.
    }

    multimat.subMaterials.push(side1);

    new SubMesh(0, 0, verticesCount, 0, 900, box.current);
  }, []);

  return (
    <>
      <standardMaterial ref={side1} />

      <standardMaterial ref={side6} />
      <box name="box1" ref={box}>
        <multiMaterial ref={multi} />
      </box>
    </>
  );
};

export default MyMesh;
