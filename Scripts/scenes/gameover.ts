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
l

        public Start():void {
            this.gameOverLabel = new objects.Label("Victory", "40px", "Shojumaru", "#A00", 320, 220, true);
            this.restart = new objects.Label("Restart", "20px", "Shojumaru", "#FFF", 320, 355, true);
            this.menu = new objects.Label("Menu", "20px", "Shojumaru", "#FFF", 320, 285, true);
            this.backButton = new objects.Button(this.assetManager, "startButton", 320, 280);
            this.restartButton = new objects.Button(this.assetManager, "startButton", 320, 350);
            this.background = new objects.Background(this.assetManager, "gameOverBackground",0, 0, 1, 1.45);
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