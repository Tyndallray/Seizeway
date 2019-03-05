module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private restart: objects.Label;
        private menu: objects.Label;
        private backButton: objects.Button;
        private restartButton: objects.Button;
        private background: objects.Background;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        // Button Event Handlers
        private menuButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }

        private restartButtonClick():void{
            objects.Game.currentScene = config.Scene.GAME;
        }


        public Start():void {
            this.gameOverLabel = new objects.Label("Game Over", "40px", "Shojumaru", "#FFF", 320, 220, true);
            this.restart = new objects.Label("Restart", "20px", "Shojumaru", "#FFF", 320, 375, true);
            this.menu = new objects.Label("Menu", "20px", "Shojumaru", "#FFF", 320, 305, true);
            this.backButton = new objects.Button(this.assetManager, "startButton", 320, 300);
            this.restartButton = new objects.Button(this.assetManager, "startButton", 320, 370);
            this.background = new objects.Background(this.assetManager, "gameOverBackground",-100, 0, 0.33, 0.36);
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this.background);
            
            this.addChild(this.backButton);
            this.addChild(this.restartButton);
            this.addChild(this.restart);
            this.addChild(this.menu);
            this.addChild(this.gameOverLabel);
            this.backButton.on("click", this.menuButtonClick);
            this.restartButton.on("click", this.restartButtonClick);
        }
    }
} 