/// <reference path="_references.ts"/>

(function(){

    // GLOBAL GAME VARIABLES
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];

    let currentScene: objects.Scene;
    let currentState: number;

    assetManifest = [
        {id: "startButton", src:"./Assets/Button.png"},
        {id: "menuBackground", src:"./Assets/MenuBackground.jpg"},
        {id: "gameOverBackground", src:"./Assets/GameOver.jpg"}
    ];

    function Init():void{
        console.log("Game is Initializing");
        
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start():void{
        console.log("Game is Starting");

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);


        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;

        Main();
    }

    function Update():void{
        if(currentState != objects.Game.currentScene){
            console.log(objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    
    }

    function Main():void{
        console.log("Game has Started");

        switch(objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }

    window.onload = Init;
})();