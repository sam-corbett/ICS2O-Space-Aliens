/* Global Phaser */

// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Nov 2022
// This is the Game Scene!

/**
 * Class Is In Game Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * This Method Is The Constructor.
   */

  constructor() {
    super({ key: "gameScene" });

    this.background = null
    this.ship = null
  }

  /**
   * Can be defined on your own scenes.
   * Method called by Scene Manager when scene starts,
   * before preload() & create().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("0x5f6e7a");
  }
  /**
   * Can be defined on your own scenes.
   * Use it to load scenes.
   */
  preload() {
    console.log("Game Scene");
  }

  /**
   * Can be defined on your own scenes.
   * Use it to make your game objects.
   */
  create(data) {
    //pass
  }

  /**
   * Should be overridden by your scenes.
   * Method gets called once per game step while scene is running.
   * @param {number} time - The Current Time
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    //pass
  }
}
export default GameScene;
