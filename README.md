# This is a TypeScript version of OnionRing,can be used in Cocos Creator or other JavaScript APP.

# WARNING

Before using the OnionRing,Please install the dependencies first!
# dependencies
"@types/pngjs": "^3.3.2"
"pngjs": "^3.4.0"

```
npm install pngjs  --save
npm install --save @types/pngjs
```
# After dependencies all installed , you can use download OnionRing.ts and import OnionRing into you project.

```
import * as OnionRing from "./OnionRing";
```
# you can get the slice position auto computed by OnionRing.

```
// rawTextureMetaInfo["assetPath"] can be the url of any png image ex: C:\test\Sample\background.png
let texture: OnionRing.Texture2D = new OnionRing.Texture2D(
        rawTextureMetaInfo["assetPath"]
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
```

# OnionRing

before ![before.png](https://raw.githubusercontent.com/kyubuns/OnionRingUnity/master/Assets/OnionRingSample/Editor/In/SampleImage.png)

after ![after.png](https://raw.githubusercontent.com/kyubuns/OnionRingUnity/master/Assets/OnionRingSample/Editor/Out/SampleImage.png)

And automatic sprite slice!

<img width="300" alt="4c30a682-b636-bd88-b941-8d4a46981625" src="https://cloud.githubusercontent.com/assets/961165/12112976/3cb31144-b3e3-11e5-811b-4ac2aee3ad32.png">

# Sample Code

https://github.com/kyubuns/OnionRingUnity/blob/master/Assets/OnionRingSample/Editor/OnionRingSampleImporter.cs

# Licence

[MIT](LICENCE)
