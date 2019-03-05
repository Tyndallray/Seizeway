(function(){

    // GLOBAL GAME VARIABLES
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: objects.Label;

    function Init():void{
        console.log("Game is Initializing");
        Start();
    }

    function Start():void{
        console.log("Game is Starting");

        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        Main();
    }

    function Update():void{
        helloLabel.rotation += 5;
        stage.update();
    }

    function Main():void{
        console.log("Game has Started");

        helloLabel = new objects.Label("Hello world", "80px", "Arial", "#000", 320, 700, true);
        helloLabel.x = 100;
        helloLabel.y = 100;

        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();