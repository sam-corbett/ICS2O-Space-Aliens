/* global Phaser */

// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Nov 2022
// This is the Phaser3 game configuration file!

import SplashScene from "./splashScene.js";
import TitleScene from "./titleScene.js";

//The game scene
const splashScene = new SplashScene();
const titleScene = new TitleScene();

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // This Is The Current Background Colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //I Made This Fit The Centre Of The Page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
const game = new Phaser.Game(config);
// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused
game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);

// start title
game.scene.start("splashScene");
