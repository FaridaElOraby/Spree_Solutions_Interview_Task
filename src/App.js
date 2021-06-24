import React, {useState, useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/Desktop.loader.js",
  dataUrl: "build/Desktop.data",
  frameworkUrl: "build/Desktop.framework.js",
  codeUrl: "build/Desktop.wasm",
  productName: "Cognition Game",
  productVersion: "1.0.0",
  companyName: "Farida ElOraby",
});

function App() {
  function handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  }

  const [progression, setProgression] = useState(0);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  return (
    <div>
      <div>
      <p>Loading {progression * 100} percent...</p>
      </div>
      <div>
      <Unity unityContext={unityContext} 
        style={{
          height: "100%",
          width: 950,
          border: "2px solid black",
          background: "grey",
        }}
      />
      </div>
      <div>
      <button onClick={handleOnClickFullscreen}>Fullscreen</button>
      </div>
    </div>
  );
}

export default App;
