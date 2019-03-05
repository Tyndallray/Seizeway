module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private playLabel: objects.Label;
        private nextButton: objects.Button;
        private player: objects.Player;
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        public Start(): void {
            this.playLabel = new objects.Label("Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            this.nextButton = new objects.Button(this.assetManager, "startButton", 500, 340);
            this.player = new objects.Player(this.assetManager);
            this.Main();
        }

        public Update(): void {
            this.player.Update();
        }


        // Button Even Handlers
        private nextButtonClick():void {
            objects.Game.currentScene = config.Scene.OVER;
        }

        private quitButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }

        public Main(): void {
            this.addChild(this.playLabel);
            this.addChild(this.nextButton);
            this.addChild(this.player);
            this.nextButton.on("click", this.nextButtonClick);
        }
    }
} 