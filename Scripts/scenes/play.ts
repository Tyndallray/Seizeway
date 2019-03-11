module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private player: objects.Player;
        private walls: Array<objects.Wall>;
        private level: string;
        private levelSizeX: number;
        private levelSizeY: number;
        private audio: createjs.Sound;
        private endPoint: objects.EndPoint;
        
        
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.levelSizeX = 30;
            this.levelSizeY = 3;
            this.level = "100111111111111111111111111111100100000100000000000001000001100100000100000000000001000001100000100100111111111001111001100000100100000000001001000001111111100100000000001001000001100000000111111111001001001111100000000100100000001001000001100111100100100000001001000001100000100000100111111001111001100000100000100000001001000001100100111111100000001001000001100100000000000111111001001001100100000000000100000001001001100111111111111100000001001001100100000000000100111111001001100000000000000000000000001001100000111111100000000000001001100111100000111111111111001001100000100000100000100001111001100000000100000000000000000001100100000100000100000100000001111111111111111111111111111111";
            this.walls = new Array<objects.Wall>();
            
            createjs.Sound.play("music");
            this.Start();
        }
        // Methods
        public Start(): void {
            this.player = new objects.Player(this.assetManager);
            this.endPoint = new objects.EndPoint(this.assetManager, this.player, 520, 42);
            this.Main();
        }

        public Update(): void {
            this.player.Update();
            this.walls.forEach(element => {
                element.Update();
            });
            this.endPoint.Update();
        }


        // Button Even Handlers
        private nextButtonClick():void {
            objects.Game.currentScene = config.Scene.OVER;
        }

        private quitButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }

        public Main(): void {
            
            this.addChild(this.player);
            this.addChild(this.endPoint);
            var j=0;
            var k=0;
            var l=0;
            for(var i=0; i < this.level.length; i++){                
                if(i % this.levelSizeX == 0){
                     j++;
                     k=0;
                }
                if(this.level.charAt(i) == "1"){
                    let temp = new objects.Wall(this.assetManager, this.player, k * objects.Wall.WALL_WIDTH + 16, j* objects.Wall.WALL_HEIGHT);
                    this.walls[l] = temp;
                    l++;
                }
                k++;
            }
            this.walls.forEach(element=>{
                this.addChild(element)
            });
        }
    }
} 