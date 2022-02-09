
export default class PreloadState extends Phaser.State {
    preload() {
        this.load.baseURL = "./assets/";

        this.load.image("bg", "bg.jpg");
        this.load.image("tile3", "tile3.png");
        this.load.image("tile", "tile.png");
        this.load.image("cat", "animal/1.png");
        this.load.image("dog", "animal/2.png");
        this.load.image("elephant", "animal/3.png");
        this.load.image("monkey", "animal/4.png");
        this.load.image("horse", "animal/5.png");
        this.load.image("kangaroo", "animal/6.png");
        this.load.image("lion", "animal/7.png");
        this.load.image("pig", "animal/8.png");
        this.load.image("rabbit", "animal/9.png");
        this.load.image("ship", "animal/10.png");
    }

    create() {
        this.game.state.start("Gameplay");
    }
}