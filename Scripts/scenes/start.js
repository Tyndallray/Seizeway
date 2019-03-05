var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructors
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.startButtonClick = function () {
            objects.Game.currentScene = config.Scene.GAME;
        };
        // Use start function to create objects
        StartScene.prototype.Start = function () {
            this.gameName = new objects.Label("Seizeway", "70px", "Shojumaru", "#FB1", 300, 75, true);
            this.myName = new objects.Label("By Devesh Vasnani", "10px", "Shojumaru", "#FB1", 390, 100, true);
            this.welcomeLabel = new objects.Label("Start", "25px", "Shojumaru", "#FFF", 320, 307, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 320, 300);
            this.background = new objects.Background(this.assetManager, "menuBackground", -100, 0, 0.9, 0.9);
            this.Main();
        };
        StartScene.prototype.Update = function () {
        };
        StartScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.startButton);
            this.addChild(this.welcomeLabel);
            this.addChild(this.gameName);
            this.addChild(this.myName);
            this.startButton.on("click", this.startButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map