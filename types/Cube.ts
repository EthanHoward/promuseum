enum __CubeTexturePosition {
  top = "material-2",
  bottom = "material-3",
  left = "material-1",
  right = "material-0",
  front = "material-4",
  back = "material-5",
  remaining = "",
}

const __CubeTexturePositionSet = [
  __CubeTexturePosition.top,
  __CubeTexturePosition.bottom,
  __CubeTexturePosition.left,
  __CubeTexturePosition.right,
  __CubeTexturePosition.front,
  __CubeTexturePosition.back,
];

type __ITex2D = {
  texName: string;
  attach: string;
};

export {
    __CubeTexturePosition,
    __CubeTexturePositionSet,
    type __ITex2D
}
