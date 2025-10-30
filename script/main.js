import { loadingScreen } from "./design/loadingScreen.js"
import { sceneOne } from "./design/sceneOne.js";
import "./core.js"

let GSAPtimeline;

// Start Scene
loadingScreen();
GSAPtimeline = gsap.timeline({ delay: 0.5 });
sceneOne(GSAPtimeline);