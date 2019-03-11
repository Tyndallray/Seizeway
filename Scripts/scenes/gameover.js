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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        // Button Event Handlers
        GameOverScene.prototype.menuButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        GameOverScene.prototype.restartButtonClick = function () {
            objects.Game.currentScene = config.Scene.GAME;
        };
        GameOverScene.prototype.Start = function () {
            this.gameOverLabel = new objects.Label("Victory", "40px", "Shojumaru", "#A00", 320, 220, true);
            this.restart = new objects.Label("Restart", "20px", "Shojumaru", "#FFF", 320, 355, true);
            this.menu = new objects.Label("Menu", "20px", "Shojumaru", "#FFF", 320, 285, true);
            this.backButton = new objects.Button(this.assetManager, "startButton", 320, 280);
            this.restartButton = new objects.Button(this.assetManager, "startButton", 320, 350);
            this.background = new objects.Background(this.assetManager, "gameOverBackground", 0, 0, 1, 1.45);
            this.Main();
        };
        GameOverScene.prototype.Update = function () {
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.backButton);
            this.addChild(this.restartButton);
            this.addChild(this.restart);
            this.addChild(this.menu);
            this.addChild(this.gameOverLabel);
            this.backButton.on("click", this.menuButtonClick);
            this.restartButton.on("click", this.restartButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map