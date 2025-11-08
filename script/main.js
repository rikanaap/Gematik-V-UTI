import { loadingScreen } from "./design/loadingScreen.js"
import { sceneOne } from "./design/sceneOne.js"
import "./core.js"

// Loading Scene
loadingScreen().then(() => {
  sceneOne();
});