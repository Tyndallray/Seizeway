module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean;
        public dontMoveUp: boolean;
        public dontMoveDown: boolean;
        public dontMoveLeft: boolean;
        public dontMoveRight: boolean;
        
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
            this.scaleX = (20/768);
            this.scaleY = (20/768);
            this.halfW = 10;
            this.halfH = 10;
            this.width = 20;
            this.height = 20;
            this.dontMoveDown = false;
            this.dontMoveLeft = false;
            this.dontMoveRight = false;
            this.dontMoveUp = false;
        }
        // Methods / functions
        public Start():void {
            this.isDead = false;
            this.ResetPosition();
        }

        public Update():void {
            this.Move();
            this.CheckBounds();
        }

        public Reset():void {}

        public Move():void {
            // this.x = objects.Game.stage.mouseX; // objects.Game.stage is a global variable
            // Keyboard controls

            if(objects.Game.keyboardManager.moveLeft && !this.dontMoveLeft) {
                this.x -= 5;
            }
            if(objects.Game.keyboardManager.moveRight && !this.dontMoveRight) {
                this.x += 5;
            }
            if(objects.Game.keyboardManager.moveUp && !this.dontMoveUp){
                this.y -= 5;
            }
            if(objects.Game.keyboardManager.moveDown && !this.dontMoveDown){
                this.y += 5;
            }
        }

        public ResetPosition(){
            this.x = 48;
            this.y = 40;
        }

        public CheckBounds():void {
            // Check right boundary
            if(this.x >= 640 - this.halfW) {
                this.x = 640 - this.halfW;
            }

            // Check left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }

            if(this.y <= this.halfH){
                this.y = this.halfH;
            }

            if(this.y >= 512 - this.halfH){
                this.y = 512 - this.halfH;
            }
        }
    }
}