export default class GameplayState extends Phaser.State {
  init() {}

  preload() {}

  create() {
    (this.animalList = [
      "cat",
      "dog",
      "pig",
      "monkey",
      "dog",
      "elephant",
      "pig",
      "cat",
      "elephant",
      "horse",
      "rabbit",
      "lion",
      "lion",
      "horse",
      "rabbit",
      "kangaroo",
      "monkey",
      "ship",
      "ship",
      "kangaroo",
    ]),
      (this.tileArr = []);
    this.animalNameArr = [];

    this.bg = this.game.add.sprite(0, 0, "bg");
    this.bg1 = this.game.add.sprite(0, 300, "bg");

    this.timeInSeconds = 180;
    this.gameTitle = this.game.add.text(440, 20, "Card Flip Game!", {
      font: "50px Algerian",
      fill: "#ffff4d",
    });
    this.timeText = this.game.add.text(590, 100, "03:00", {
      font: "30px Arial",
      fill: "#ff0000",
    });
    this.timer = this.game.time.events.loop(
      Phaser.Timer.SECOND,
      this.updateTimer,
      this
    );

    this.tiles = this.game.add.group();

    var k = 0;
    for (var j = 0; j < 4; j++) {
      for (var i = 0; i < 5; i++) {
        this.arr = [];
        this.backTile = this.tiles.create(
          i * 180 + 190,
          j * 174 + 150,
          "tile3"
        );
        this.backTile.scale.setTo(0.7, 0.7);
        this.backTile.inputEnabled = true;
        this.backTile.events.onInputDown.add(this.clickedOnTile, this);
        this.backTile.id = k + 1;

        this.frontTile = this.game.add.sprite(
          i * 180 + 190,
          j * 174 + 150,
          "tile"
        );
        this.frontTile.scale.setTo(0.7, 0.7);

        this.animalTile = this.game.add.sprite(25, 30, this.animalList[k]);
        this.frontTile.addChild(this.animalTile);
        this.animalTile.scale.setTo(0.8, 0.8);
        this.frontTile.visible = false;

        const singleTiles = {
          backTile: this.backTile,
          frontTile: this.frontTile,
          animalTile: this.animalTile,
          id: this.backTile.id,
        };

        this.tileArr.push(singleTiles);
        k++;
      }
    }
  }

  updateTimer() {
    this.timeInSeconds--;
    var minutes = Math.floor(this.timeInSeconds / 60);
    var seconds = this.timeInSeconds - minutes * 60;
    var timeString = this.addZeros(minutes) + ":" + this.addZeros(seconds);
    this.timeText.text = timeString;

    if (this.timeInSeconds == 0) {
      this.game.state.restart();
    }
  }

  addZeros(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }

  clickedOnTile(sprite) {
    this.tileArr.forEach((e, i) => {
      this.tileArr[i].backTile.inputEnabled = false;
    });
    this.game.time.events.add(
      Phaser.Timer.SECOND - 500,
      () => {
        this.tileArr.forEach((e, i) => {
          this.tileArr[i].backTile.inputEnabled = true;
        });
      },
      this
    );
    this.backTile.inputEnabled = false;
    this.tileArr[sprite.id - 1].backTile.visible = false;
    this.tileArr[sprite.id - 1].frontTile.visible = true;
    if (this.animalNameArr.length >= 2) {
      this.animalNameArr = [];
      this.animalNameArr.push(this.tileArr[sprite.id - 1]);
    } else {
      this.animalNameArr.push(this.tileArr[sprite.id - 1]);
    }
    console.log(this.animalNameArr);
    this.checkTwoCards();
  }

  checkTwoCards() {
    if (this.animalNameArr.length >= 2) {
      if (
        this.animalNameArr[0].animalTile.key !=
        this.animalNameArr[1].animalTile.key
      ) {
        console.log(this.animalNameArr);
        this.game.time.events.add(
          Phaser.Timer.SECOND - 500,
          () => {
            this.animalNameArr[0].frontTile.visible = false;
            this.animalNameArr[0].backTile.visible = true;
          },
          this
        );
        this.game.time.events.add(
          Phaser.Timer.SECOND - 500,
          () => {
            this.animalNameArr[1].frontTile.visible = false;
            this.animalNameArr[1].backTile.visible = true;
          },
          this
        );
      }
    }
  }

  update() {}
}