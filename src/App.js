import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/Desktop.loader.js",
  dataUrl: "build/Desktop.data",
  frameworkUrl: "build/Desktop.framework.js",
  codeUrl: "build/Desktop.wasm",
});

function App() {
  function handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  }

  return (
    <div>
      <Unity unityContext={unityContext} />
    </div>
  );
}

export default App;
