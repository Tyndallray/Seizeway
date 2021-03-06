module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private welcomeLabel: objects.Label;
        private gameName: objects.Label;
        private myName: objects.Label;
        private startButton: objects.Button;
        private background: objects.Background;
        private instruction: objects.Label;

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
            this.gameName = new objects.Label("Seizeway", "70px", "Shojumaru", "#F11", 300, 175, true);
            this.myName = new objects.Label("By Devesh Vasnani", "15px", "Shojumaru", "#F11", 390, 200, true);
            this.instruction = new objects.Label("HOW TO PLAY? AVOID WALLS AND TRAPS! USE WSAD/ARROW KEYS", "10px", "Shojumaru", "#F24", 320, 350, true);
            this.welcomeLabel = new objects.Label("Start", "20px", "Shojumaru", "#FFF", 320, 307, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 320, 300);
            this.background = new objects.Background(this.assetManager, "menuBackground",0, 20, 0.9, 0.47);
            this.Main();
        }

        public Update(): void {
        }

        public Main(): void {

            this.addChild(this.background);
            this.addChild(this.startButton);
            this.addChild(this.welcomeLabel);
            this.addChild(this.gameName);
            this.addChild(this.myName);
            this.addChild(this.instruction);
            this.startButton.on("click", this.startButtonClick);
        }
    }
} 