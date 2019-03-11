module objects {
    export class Trap extends objects.GameObject {
        private player: objects.Player;
        public static WALL_WIDTH = 21;
        public static WALL_HEIGHT = 21;
        
        // Constructor
        constructor(assetManager:createjs.LoadQueue, player: objects.Player, x:number, y: number) {
            super(assetManager, "trap");
            this.player = player;
            this.Start();
            this.halfW = Wall.WALL_WIDTH/2;
            this.halfH = Wall.WALL_HEIGHT;
            this.scaleX = (2/100);
            this.scaleY = (2/100);
            this.x = x;
            this.y = y;
            this.alpha = 0.05;
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
            let vectorX= this.player.x - this.x;
            let vectorY = this.player.y - this.y;
            let biggerHH = this.halfH > this.player.halfH? this.halfH: this.player.halfH;
            let biggerHW = this.halfW > this.player.halfW? this.halfW: this.player.halfW;
            //player on right of the wall
            if(vectorX > 0 && vectorX <= this.player.halfW + this.halfW){
                if(vectorY > -biggerHH && vectorY < biggerHH){
                    this.alpha =1;
                    this.player.ResetPosition();
                    createjs.Sound.play("sadViolin");
                }
            }
            if(vectorX < 0 && vectorX >= -(this.halfH)){
                if(vectorY > -biggerHH && vectorY < biggerHH){
                    this.alpha =1;
                    this.player.ResetPosition();
                    createjs.Sound.play("sadViolin");
                }
            }
            if(vectorY > 0 && vectorY <= this.player.halfW + this.halfW){
                if(vectorX > -biggerHW && vectorX < biggerHW){
                    this.alpha =1;
                    this.player.ResetPosition();
                    createjs.Sound.play("sadViolin");
                }
            }
            if(vectorY < 0 && vectorY >= -(this.player.halfW + this.halfW)){
                if(vectorX > -biggerHW && vectorX < biggerHW){
                    this.alpha =1;
                    this.player.ResetPosition();
                    createjs.Sound.play("sadViolin");
                }
            }
        }
    }
}