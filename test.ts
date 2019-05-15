import * as OnionRing from "./OnionRing";
let texture: OnionRing.Texture2D = new OnionRing.Texture2D(
    "./background.png"
  );
let slicedTexture = OnionRing.TextureSlicer.Slice(texture);
console.log(
    "slicedTexture.Boarder.Left:" +
      slicedTexture.Boarder.Left +
      " slicedTexture.Boarder.Right:" +
      " slicedTexture.Boarder.Top:" +
      slicedTexture.Boarder.Top +
      " slicedTexture.Boarder.Bottom:" +
      slicedTexture.Boarder.Bottom
  );
