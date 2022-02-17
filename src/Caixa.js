import { Color4, FresnelParameters, Vector3 } from "@babylonjs/core";
import LocalAxes from "./LocalAxes";
import imagem from "./cors/assets/images/Toronto_490x360.jpg";

//type Props = {
  //largura: number;
  //altura: number;
  //profundidade: number;
//};

const Caixa = ({ largura, altura, profundidade }) => {
  /* var faceUV = new Array(6);

    //faceUV[1] = new Vector4(4, 2, 0, 0);
    faceUV[2] = new Vector4(1, 2, 0, 0); //Lador direito
    faceUV[3] = new Vector4(1, 1, 0, 0); //Lado esquerdo
    faceUV[4] = new Vector4(0, 0, 1, 1); //Lado superior
    faceUV[5] = new Vector4(0, 0, 1, 1); //Lado inferior */

  return (
    <>
      <box
        name="box1"
        width={80}
        height={100}
        depth={30}
        scaling={new Vector3(largura / 80, altura / 100, profundidade / 30)}
        position={new Vector3(0, altura / 2, 0)}
        /* faceUV={faceUV} */ topBaseAt={2}
        bottomBaseAt={3}
        wrap={true}
        onCreated={(box) => box.enableEdgesRendering()}
        edgesWidth={30}
        edgesColor={new Color4(0, 0, 0, 1)}
      >
        <standardMaterial
          name="material1"
          specularPower={16}
          //diffuseColor={Color3.Blue()}
          //emissiveColor={new Color3(0.5, 0.5, 0.5)}
          reflectionFresnelParameters={FresnelParameters.Parse({
            isEnabled: true,
            leftColor: [1, 1, 1],
            rightColor: [0, 0, 0],
            bias: 0.1,
            power: 1
          })}
          alpha={0.5}
        >
          <texture
            url={imagem}
            assignTo="diffuseTexture"
            hasAlpha={false}
            uOffset={0.9}
            vOffset={
              0.9
            } /* uScale={(largura + profundidade) / 80} vScale={altura / 100} */
          />
        </standardMaterial>
      </box>

      <LocalAxes />
    </>
  );
};

export default Caixa;
