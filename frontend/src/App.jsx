import { useEffect, useState } from "react";
import * as Three from "three";

function App() {
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    setScene(new Three.Scene());
    setCamera(
      new Three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
    );

    const newRenderer = new Three.WebGLRenderer();
    newRenderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    console.log(newRenderer.domElement);
    setRenderer(newRenderer);
    // document.body.appendChild(renderer.domElement);
  }, []);

  return (
    <div className="App">Hey Three !{renderer && renderer.domElement}</div>
  );
}

export default App;
