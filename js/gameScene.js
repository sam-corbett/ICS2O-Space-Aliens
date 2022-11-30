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

    this.background = null;
    this.ship = null;
  }

  /**
   * Can be defined on your own scenes.
   * Method called by Scene Manager when scene starts,
   * before preload() & create().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#000000");
  }
  /**
   * Can be defined on your own scenes.
   * Use it to load scenes.
   */
  preload() {
    console.log("Game Scene");

    this.load.image("starBackground", "./assets/starBackground.png");
    this.load.image("spaceShip", "./assets/spaceShip.png");
  }

  /**
   * Can be defined on your own scenes.
   * Use it to make your game objects.
   */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0);
    this.background.setOrigin(0, 0);

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "spaceShip");
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
