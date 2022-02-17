import { Vector3, Color3 } from "@babylonjs/core";

const size = 1;
const shade = 0;

const LocalAxes = () => {
  return (
    <>
      <lines
        name="red-line"
        points={[
          Vector3.Zero(),
          new Vector3(size, 0, 0),
          new Vector3(size * 0.95, 0.05 * size, 0),
          new Vector3(size, 0, 0),
          new Vector3(size * 0.95, -0.05 * size, 0)
        ]}
        color={new Color3(1, shade, shade)}
      />
      <lines
        name="green-line"
        points={[
          Vector3.Zero(),
          new Vector3(0, size, 0),
          new Vector3(-0.05 * size, size * 0.95, 0),
          new Vector3(0, size, 0),
          new Vector3(0.05 * size, size * 0.95, 0)
        ]}
        color={new Color3(shade, 1, shade)}
      />
      <lines
        name="blue-line"
        points={[
          Vector3.Zero(),
          new Vector3(0, 0, size),
          new Vector3(0, -0.05 * size, size * 0.95),
          new Vector3(0, 0, size),
          new Vector3(0, 0.05 * size, size * 0.95)
        ]}
        color={new Color3(shade, shade, 1)}
      />
    </>
  );
};

export default LocalAxes;
