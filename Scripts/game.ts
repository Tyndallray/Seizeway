(function(){

    // GLOBAL GAME VARIABLES
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: createjs.Text;

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

        helloLabel = new createjs.Text("Hello world", "40px Arial", "#000");
        helloLabel.x = 100;
        helloLabel.y = 100;
    }
    window.onload = Init;
})();