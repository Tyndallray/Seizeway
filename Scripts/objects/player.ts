module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean;
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
        }
        // Methods / functions
        public Start():void {
            this.isDead = false;
            this.x = 100;
            this.y = 100;
        }

        public Update():void {
            this.Move();
            this.CheckBounds();
        }

        public Reset():void {}

        public Move():void {
            // this.x = objects.Game.stage.mouseX; // objects.Game.stage is a global variable
            // Keyboard controls

            if(objects.Game.keyboardManager.moveLeft) {
                this.x -= 5;
            }
            if(objects.Game.keyboardManager.moveRight) {
                this.x += 5;
            }
            if(objects.Game.keyboardManager.moveUp){
                this.y -= 5;
            }
            if(objects.Game.keyboardManager.moveDown){
                this.y += 5;
            }
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