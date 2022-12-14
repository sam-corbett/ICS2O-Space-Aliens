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
  createAlien() {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1;
    let alienXVelocity = Math.floor(Math.random() * 50) + 1;
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1;
    const anAlien = this.physics.add.sprite(alienXLocation, -100, "alien");
    anAlien.body.velocity.y = 100;
    anAlien.body.velocity.x = alienXVelocity;
    this.alienGroup.add(anAlien);
  }

  constructor() {
    super({ key: "gameScene" });

    this.background = null;
    this.ship = null;
    this.fireMissile = false;
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

    // images
    this.load.image("starBackground", "./assets/starBackground.png");
    this.load.image("spaceShip", "./assets/spaceShip.png");
    this.load.image("missile", "./assets/missile.png");
    this.load.image("alien", "./assets/alien.png");

    // sound
    this.load.audio("laser", "./assets/laser1.wav");
    this.load.audio("explosion", "./assets/barrelExploding.wav");
  }

  /**
   * Can be defined on your own scenes.
   * Use it to make your game objects.
   */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0);
    this.background.setOrigin(0, 0);

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "spaceShip");

    this.missleGroup = this.physics.add.group();

    this.alienGroup = this.add.group();
    this.createAlien();

    this.physics.add.collider(
      this.missleGroup,
      this.alienGroup,
      function (missileCollide, alienCollide) {
        alienCollide.destroy();
        missileCollide.destroy();
        this.sound.play("explosion");
        this.createAlien();
        this.createAlien();
      }.bind(this)
    );
  }
  /**
   * Should be overridden by your scenes.
   * Method gets called once per game step while scene is running.
   * @param {number} time - The Current Time
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey("LEFT");
    const keyRightObj = this.input.keyboard.addKey("RIGHT");
    const keySpaceObj = this.input.keyboard.addKey("SPACE");

    if (keyLeftObj.isDown === true) {
      this.ship.x = this.ship.x - 5;
      if (this.ship.x < 0) {
        this.ship.x = 0;
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x = this.ship.x + 5;
      if (this.ship.x > 1920) {
        this.ship.x = 1920;
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        this.fireMissile = true;
        const aNewMissile = this.physics.add.sprite(
          this.ship.x,
          this.ship.y,
          "missile"
        );
        this.missleGroup.add(aNewMissile);
        this.sound.play("laser");
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false;
    }

    this.missleGroup.children.each(function (item) {
      item.y = item.y - 15;
      if (item.y < 0) {
        item.destroy();
      }
    });
  }
}
export default GameScene;
