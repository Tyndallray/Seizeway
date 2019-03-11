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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.levelSizeX = 30;
            _this.level = "100111111111111111111111111111100100000100000000000001000001100100000100000000000001000001100000100100111111111001111001100000100100000000001001000001111111100100000000001001000001100000000111111111001001001111100000000100100000001001000001100111100100100000001001000001100000100000100111111001111001100000100000100000001001000001100100111111100000001001000001100100000000000111111001001001100100000000000100000001001001100111111111111100000001001001100100000000000100111111001001100000000000000000000000001001100000111111100000000000001001100111100000111111111111001001100000100000100000100001111001100000000100000000000000000001100100000100000100000000000001111111111111111111111111111111";
            _this.walls = new Array();
            createjs.Sound.play("music");
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            this.player = new objects.Player(this.assetManager);
            this.endPoint = new objects.EndPoint(this.assetManager, this.player, 520, 42);
            this.trap = new objects.Trap(this.assetManager, this.player, 592, 282);
            this.trap2 = new objects.Trap(this.assetManager, this.player, 247, 300);
            this.trap3 = new objects.Trap(this.assetManager, this.player, 247, 330);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this.player.Update();
            this.walls.forEach(function (element) {
                element.Update();
            });
            this.endPoint.Update();
            this.trap.Update();
            this.trap2.Update();
            this.trap3.Update();
        };
        // Button Even Handlers
        PlayScene.prototype.nextButtonClick = function () {
            objects.Game.currentScene = config.Scene.OVER;
        };
        PlayScene.prototype.quitButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.player);
            this.addChild(this.endPoint);
            this.addChild(this.trap3);
            this.addChild(this.trap);
            this.addChild(this.trap2);
            var j = 0;
            var k = 0;
            var l = 0;
            for (var i = 0; i < this.level.length; i++) {
                if (i % this.levelSizeX == 0) {
                    j++;
                    k = 0;
                }
                if (this.level.charAt(i) == "1") {
                    var temp = new objects.Wall(this.assetManager, this.player, k * objects.Wall.WALL_WIDTH + 16, j * objects.Wall.WALL_HEIGHT);
                    this.walls[l] = temp;
                    l++;
                }
                k++;
            }
            this.walls.forEach(function (element) {
                _this.addChild(element);
            });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map