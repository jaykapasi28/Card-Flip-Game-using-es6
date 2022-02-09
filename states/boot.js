
export default class BootState extends Phaser.State {
    preload() {
        this.load.baseURL = "./assets/";
    }

    create() {
        // console.log(this);
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        this.game.isDesktop = this.game.device.desktop;

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.stage.backgroundColor = '#fffff';

        this.game.state.start("Preload");
    }
}