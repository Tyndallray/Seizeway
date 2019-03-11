module objects {
    export class EndPoint extends objects.GameObject {
        private player: objects.Player;
        public static WALL_WIDTH = 21;
        public static WALL_HEIGHT = 21;
        
        // Constructor
        constructor(assetManager:createjs.LoadQueue, player: objects.Player, x:number, y: number) {
            super(assetManager, "endPoint");
            this.player = player;
            this.Start();
            this.halfW = Wall.WALL_WIDTH/2;
            this.halfH = Wall.WALL_HEIGHT;
            this.scaleX = (2/100);
            this.scaleY = (2/100);
            this.x = x;
            this.y = y;
        }
        // Methods / functions
        public Start():void {
        }

        public Update():void {
            this.CheckBounds();
        }

        public Reset():void {}

        public Move():void {
            
        }

        public CheckBounds():void {
            if(managers.Collision.Check(this.player, this)){
                objects.Game.currentScene = config.Scene.OVER;
            }
        }
    }
}