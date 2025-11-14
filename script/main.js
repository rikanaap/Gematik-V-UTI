import "./core.js"
import { closing } from "./design/closing.js";

import { loadingScreen } from "./design/loadingScreen.js"
import { sceneFive } from "./design/sceneFive.js";
import { sceneOne } from "./design/sceneOne.js"
import { sceneThree } from "./design/sceneThree.js";
import { sceneTwo } from "./design/sceneTwo.js";

const sections = document.querySelectorAll(".section-one, .section-two, .section-three");

// Loading Scene
sections.forEach((section) => { gsap.set(section, { opacity: 0 }) })
// loadingScreen().then(() => {
//   window.scrollTo(0, 0)
//   sceneOne().then(() => {
//     sceneTwo().then(() => {
//       sceneThree();
//     })
//   })
// });

// sceneFive()
closing()