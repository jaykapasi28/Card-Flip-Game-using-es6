export default class GameplayState extends Phaser.State {
    init() {

    }

    preload() {

    }

    create() {
        this.bg = this.game.add.sprite(0, 0, "bg");

        this.tiles = this.game.add.group();

        var k = 1
        for(var j=0; j<4; j++) {
            for(var i = 0;i < 5; i++ ){
                this.tile = this.tiles.create(i * 180 + 190, j * 174 + 20, "tile3")
                this.tile.scale.setTo(0.7, 0.7);
                this.tile.id = k;
                this.tile.inputEnabled = true;
                this.tile.events.onInputDown.add(this.clickedOnTile, this)
                k++;
            }
        }
    }

    clickedOnTile(sprite, pointer) {
        this.clickedSprite = sprite;
            game.add.tween(this.clickedSprite.scale).to({ 
                x: 0
            }, 500, Phaser.Easing.Linear.None, true, 0).onComplete.addOnce(this.addNewTile, this)
        
    }

    addNewTile() {
        this.newTile = this.game.add.sprite(this.clickedSprite.world.x, this.clickedSprite.world.y, "tile")
        this.newTile.scale.setTo(0.7, 0.7);

        if(this.clickedSprite.id == 1 || this.clickedSprite.id == 8) {
            this.cat = this.game.add.sprite(20, 20, "cat")
            this.newTile.addChild(this.cat);
            this.cat.scale.setTo(0.8, 0.8);
        } 
        
        else if(this.clickedSprite.id == 2 || this.clickedSprite.id == 5) {
            this.dog = this.game.add.sprite(20, 20, "dog")
            this.newTile.addChild(this.dog);
            this.dog.scale.setTo(0.8, 0.8);
        } 
        
        else if(this.clickedSprite.id == 6 || this.clickedSprite.id == 9) {
            this.elephant = this.game.add.sprite(20, 20, "elephant")
            this.newTile.addChild(this.elephant);
            this.elephant.scale.setTo(0.8, 0.8);
        } 
        
        else if(this.clickedSprite.id == 4 || this.clickedSprite.id == 17) {
            this.monkey = this.game.add.sprite(20, 20, "monkey")
            this.newTile.addChild(this.monkey);
            this.monkey.scale.setTo(0.8, 0.8);
        } 
        
        else if(this.clickedSprite.id == 10 || this.clickedSprite.id == 14) {
            this.horse = this.game.add.sprite(20, 20, "horse")
            this.newTile.addChild(this.horse);
            this.horse.scale.setTo(0.8, 0.8);
        }

        else if(this.clickedSprite.id == 16 || this.clickedSprite.id == 20) {
            this.kangaroo = this.game.add.sprite(20, 20, "kangaroo")
            this.newTile.addChild(this.kangaroo);
            this.kangaroo.scale.setTo(0.8, 0.8);
        }

        else if(this.clickedSprite.id == 12 || this.clickedSprite.id == 13) {
            this.lion = this.game.add.sprite(20, 20, "lion")
            this.newTile.addChild(this.lion);
            this.lion.scale.setTo(0.8, 0.8);
        }

        else if(this.clickedSprite.id == 3 || this.clickedSprite.id == 7) {
            this.pig = this.game.add.sprite(20, 20, "pig")
            this.newTile.addChild(this.pig);
            this.pig.scale.setTo(0.8, 0.8);
        }

        else if(this.clickedSprite.id == 11 || this.clickedSprite.id == 15) {
            this.rabbit = this.game.add.sprite(20, 20, "rabbit")
            this.newTile.addChild(this.rabbit);
            this.rabbit.scale.setTo(0.8, 0.8);
        }

        else if(this.clickedSprite.id == 18 || this.clickedSprite.id == 19) {
            this.ship = this.game.add.sprite(20, 20, "ship")
            this.newTile.addChild(this.ship);
            this.ship.scale.setTo(0.8, 0.8);
        }
    }

    update() {

    }
}