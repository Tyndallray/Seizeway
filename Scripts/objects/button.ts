module objects{
    export class Button extends createjs.Bitmap{
        private assetManager: createjs.LoadQueue;
        constructor(assetManager: createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0) {
            super(assetManager.getResult(imageString));
            this.assetManager = assetManager;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.x = x;
            this.y = y;

            // Setup event handlers
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }
        // Methods
        private mouseOver():void {
            this.alpha = 0.9;
            this.cursor = "pointer";
            
        }

        private mouseOut():void {
            this.alpha = 1.0;
        }
    }
}