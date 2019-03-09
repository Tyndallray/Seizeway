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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            _this.Start();
            _this.scaleX = (20 / 768);
            _this.scaleY = (20 / 768);
            _this.halfW = 10;
            _this.halfH = 10;
            _this.width = 20;
            _this.height = 20;
            _this.dontMoveDown = false;
            _this.dontMoveLeft = false;
            _this.dontMoveRight = false;
            _this.dontMoveUp = false;
            return _this;
        }
        // Methods / functions
        Player.prototype.Start = function () {
            this.isDead = false;
            this.x = 100;
            this.y = 100;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // this.x = objects.Game.stage.mouseX; // objects.Game.stage is a global variable
            // Keyboard controls
            if (objects.Game.keyboardManager.moveLeft && !this.dontMoveLeft) {
                this.x -= 5;
            }
            if (objects.Game.keyboardManager.moveRight && !this.dontMoveRight) {
                this.x += 5;
            }
            if (objects.Game.keyboardManager.moveUp && !this.dontMoveUp) {
                this.y -= 5;
            }
            if (objects.Game.keyboardManager.moveDown && !this.dontMoveDown) {
                this.y += 5;
            }
        };
        Player.prototype.CheckBounds = function () {
            // Check right boundary
            if (this.x >= 640 - this.halfW) {
                this.x = 640 - this.halfW;
            }
            // Check left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
            if (this.y <= this.halfH) {
                this.y = this.halfH;
            }
            if (this.y >= 512 - this.halfH) {
                this.y = 512 - this.halfH;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map