/* global Phaser */

// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Nov 2022
// This is the Phaser3 game configuration file!

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
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
};
const game = new Phaser.Game(config);
console.log(game);