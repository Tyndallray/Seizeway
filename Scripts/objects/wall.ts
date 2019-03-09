module objects {
    export class Wall extends objects.GameObject {
        private isWalkable: boolean;
        private player: objects.Player;
        // Constructor
        constructor(assetManager:createjs.LoadQueue, player: objects.Player) {
            super(assetManager, "wall");
            this.isWalkable = false;
            this.player = player;
            this.Start();
            this.halfW = 10;
            this.halfH = 10;
            this.scaleX = (2/100);
            this.scaleY = (2/100);
        }
        // Methods / functions
        public Start():void {
            this.x = 100;
            this.y = 100;
        }

        public Update():void {
            this.CheckBounds();
        }

        public Reset():void {}

        public Move():void {
            
        }

        public CheckBounds():void {
            // if player lies in the same x coordinate
            if(this.player.x + this.player.halfW > this.x - this.halfW && this.player.x - this.player.halfW < this.x + this.halfW){
                //if player is below the wall
                //if player's top edge is more than wall's bottom edge + 5and plaeyer's top edge is mo than wall's y
                if(this.player.y-this.player.halfH < this.y+this.halfH + 5 && (this.player.y-this.player.halfH > this.y)){
                    this.player.dontMoveUp = true;                    
                }
                //if player's bottom edge is more than wall's top edge - 5 and plaeyer's bottom edge is greater than wall's top edge - 10
                else if(this.player.y + this.player.halfH > this.y - this.halfH - 5 && this.player.y + this.player.halfH < this.y){
                    this.player.dontMoveDown = true;
                }
                else{
                    this.player.dontMoveUp = false;
                    this.player.dontMoveDown = false;
                }
            }
            //if player lies in the same y coordinate
            else if(this.player.y + this.player.halfH > this.y - this.halfH && this.player.y - this.player.halfH < this.y + this.halfH){
                if(this.player.x + this.player.halfW > this.x - this.halfW - 5 && this.player.x + this.player.halfH < this.x){
                    this.player.dontMoveRight = true;
                }
                else if(this.player.x - this.player.halfW < this.x + this.halfW + 5 && this.player.x - this.player.halfW > this.x){
                    this.player.dontMoveLeft = true;
                }
                else{
                    this.player.dontMoveRight = false;
                    this.player.dontMoveLeft = false;
                }
            }
            else{
                this.player.dontMoveUp = false;
                this.player.dontMoveDown = false;
                this.player.dontMoveRight = false;
                this.player.dontMoveLeft = false;
            }
        }
    }
}