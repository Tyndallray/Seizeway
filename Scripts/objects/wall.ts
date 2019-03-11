module objects {
    export class Wall extends objects.GameObject {
        private isWalkable: boolean;
        private player: objects.Player;
        public static WALL_WIDTH = 21;
        public static WALL_HEIGHT = 21;
        
        // Constructor
        constructor(assetManager:createjs.LoadQueue, player: objects.Player, x:number, y: number) {
            super(assetManager, "wall");
            this.isWalkable = false;
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
            //RANGE [BOX SIZE]HALFW of player and box and HALFH of player and box
            //if player.x - wall.x is positive RIGHT SIDE
            //if player.x - wall.x is negative LEFT SIDE
            //if player.y - wall.y is positive DOWN SIDE
            //if player.y - wall.y if negative UP SIDE
            let vectorX= this.player.x - this.x;
            let vectorY = this.player.y - this.y;
            let biggerHH = this.halfH > this.player.halfH? this.halfH: this.player.halfH;
            let biggerHW = this.halfW > this.player.halfW? this.halfW: this.player.halfW;
            //player on right of the wall
            if(vectorX > 0 && vectorX <= this.player.halfW + this.halfW){
                if(vectorY > -biggerHH && vectorY < biggerHH)
                    this.player.x += 2;
            }
            if(vectorX < 0 && vectorX >= -(this.halfH)){
                if(vectorY > -biggerHH && vectorY < biggerHH)
                    this.player.x -= 2;
            }
            if(vectorY > 0 && vectorY <= this.player.halfW + this.halfW){
                if(vectorX > -biggerHW && vectorX < biggerHW){
                    this.player.y += 2;
                }
            }
            if(vectorY < 0 && vectorY >= -(this.player.halfW + this.halfW)){
                if(vectorX > -biggerHW && vectorX < biggerHW){
                    this.player.y -= 2;
                }
            }
        }
    }
}