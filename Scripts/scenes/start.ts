module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;

        // Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        private startButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }

        // Use start function to create objects
        public Start(): void {
            this.welcomeLabel = new objects.Label("Start", "25px", "Shojumaru", "#FFF", 320, 307, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 320, 300);
            this.Main();
        }

        public Update(): void {
        }

        public Main(): void {

            this.addChild(this.startButton);
            this.addChild(this.welcomeLabel);

            this.startButton.on("click", this.startButtonClick);
        }
    }
} 