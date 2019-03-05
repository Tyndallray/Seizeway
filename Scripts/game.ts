(function(){

    // GLOBAL GAME VARIABLES
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: objects.Label;
    let clickableButton: objects.Button;

    function Init():void{
        console.log("Game is Initializing");
        Start();
    }

    function Start():void{
        console.log("Game is Starting");

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
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

        helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);

        clickableButton = new objects.Button("./Assets/Button.png", 320, 340);
        clickableButton.regX = clickableButton.getBounds().width * 0.5;
        clickableButton.regY = clickableButton.getBounds().height * 0.5;
        clickableButton.on("click", clickableButtonMouseClick);
        stage.addChild(clickableButton);
    }

    function clickableButtonMouseClick():void {
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }
    window.onload = Init;
})();