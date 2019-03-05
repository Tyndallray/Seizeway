module objects {
    export class Background extends createjs.Bitmap {
        // Variables
        private speedY : number;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, background: string, x: number = 0, y: number= 0, scaleX: number = 1, scaleY: number = 1) {
            super(assetManager.getResult(background));
            this.x = x;
            this.y = y;
            this.scaleX = scaleX;
            this.scaleY = scaleY;

        }
        
    }
} 