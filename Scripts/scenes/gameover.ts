module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        // Button Event Handlers
        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }


        public Start():void {
            this.gameOverLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 340, true);
            this.backButton = new objects.Button(this.assetManager, "startButton", 320, 340);
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        }
    }
} 