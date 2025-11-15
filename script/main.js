import "./core.js"
import { closing } from "./design/closing.js";
import { startGame } from "./design/game.js";

import { loadingScreen } from "./design/loadingScreen.js"
import { sceneFive } from "./design/sceneFive.js";
import { sceneFour } from "./design/sceneFour.js";
import { sceneOne } from "./design/sceneOne.js"
import { sceneSix } from "./design/sceneSix.js";
import { sceneThree } from "./design/sceneThree.js";
import { sceneTwo } from "./design/sceneTwo.js";
import { addOn, playMusic } from "./general.js";


addOn();
// Loading Scene
loadingScreen().then(() => {
    window.scrollTo(0, 0)
    playMusic()
    sceneOne().then(() => {
        sceneTwo().then(() => {
            sceneThree().then(() => {
                sceneFour().then(() => {
                    sceneFive().then(() => {
                        sceneSix().then(() => {
                            closing()
                        })
                    })
                })
            })
        })
    })
});
