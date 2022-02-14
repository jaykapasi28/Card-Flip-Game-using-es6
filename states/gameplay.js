export default class GameplayState extends Phaser.State {
    init() {

    }

    preload() {

    }

    create() {
        this.bg = this.game.add.sprite(0, 0, "bg");

        this.timeInSeconds = 300;
        this.timeText = this.game.add.text(20, 20, "0:00",{font: '50px Arial', fill: '#ff0000'});
        this.timer = this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTimer, this);

        this.tiles = this.game.add.group();

        var k = 1
        for( var j = 0; j < 4; j++ ) {
            for( var i = 0;i < 5; i++ ){
                this.arr = [];
                this.tile = this.tiles.create(i * 180 + 190, j * 174 + 20, "tile3")
                this.tile.scale.setTo(0.7, 0.7);
                this.tile.id = k;
                this.tile.inputEnabled = true;
                this.tile.events.onInputDown.add(this.clickedOnTile, this)
                k++;
            }
        }
    }


    updateTimer() {
        this.timeInSeconds--;
        var minutes = Math.floor(this.timeInSeconds / 60);
        var seconds = this.timeInSeconds - (minutes * 60);
        var timeString = this.addZeros(minutes) + ":" + this.addZeros(seconds);
        this.timeText.text = timeString;

        if ( this.timeInSeconds == 0 ) {
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
        this.clickedSprite = sprite;
            this.game.add.tween(this.clickedSprite).to({ 
                alpha: 0
            }, 500, Phaser.Easing.Linear.None, true, 0).onComplete.addOnce(this.addNewTile, this)
    }


    addNewTile() {
        this.newTile = this.game.add.sprite(this.clickedSprite.world.x, this.clickedSprite.world.y, "tile")
        this.newTile.scale.setTo(0.7, 0.7);
        this.animalCard(1, 8, "cat");
        this.animalCard(2, 5, "dog");
        this.animalCard(6, 9, "elephant");
        this.animalCard(4, 17, "monkey");
        this.animalCard(10, 14, "horse");
        this.animalCard(16, 20, "kangaroo");
        this.animalCard(12, 13, "lion");
        this.animalCard(3, 7, "pig");
        this.animalCard(11, 15, "rabbit");
        this.animalCard(18, 19, "ship");
    }
    

    animalCard(a, b, animalName) {
        if(this.clickedSprite.id == a || this.clickedSprite.id == b) {
            this.newTile.id = animalName;
            this.animal = this.game.add.sprite(25, 30, animalName);
            this.newTile.addChild(this.animal);
            this.animal.scale.setTo(0.8, 0.8);
            this.checkForArraySize();
        } 
    }


    checkForArraySize() {
        if(this.arr.length >= 2) {
            this.arr = [];
            this.arr.push(this.newTile);
        } else {
            this.arr.push(this.newTile);
        }
        this.checkTwoCards()
    } 


    checkTwoCards() {
        if( this.arr.length >= 2 ) {
            if( this.arr[0].id != this.arr[1].id ) {
                this.closeCard();
            } 
            else if( this.arr[0].world.x == this.arr[1].world.x  && this.arr[0].world.y == this.arr[1].world.y ) {
                this.arr.pop(this.arr[1])
                console.log(this.arr);
            }
        } 
    }

    closeCard() {
        this.game.add.tween(this.arr[0]).to({
            alpha: 0
        }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false).onComplete.addOnce(() => {
            this.tile = this.game.add.sprite(this.arr[0].world.x, this.arr[0].world.y, "tile3")
            this.tile.scale.setTo(0.7, 0.7)
        }) 

        this.game.add.tween(this.arr[1]).to({
            alpha: 0
        }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false).onComplete.addOnce(() => {
            this.tile = this.game.add.sprite(this.arr[1].world.x, this.arr[1].world.y, "tile3")
            this.tile.scale.setTo(0.7, 0.7)
        })
    }


    update() {

    }
}