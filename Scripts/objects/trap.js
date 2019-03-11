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
    var Trap = /** @class */ (function (_super) {
        __extends(Trap, _super);
        // Constructor
        function Trap(assetManager, player, x, y) {
            var _this = _super.call(this, assetManager, "trap") || this;
            _this.player = player;
            _this.Start();
            _this.halfW = objects.Wall.WALL_WIDTH / 2;
            _this.halfH = objects.Wall.WALL_HEIGHT;
            _this.scaleX = (2 / 100);
            _this.scaleY = (2 / 100);
            _this.x = x;
            _this.y = y;
            _this.alpha = 0.05;
            return _this;
        }
        // Methods / functions
        Trap.prototype.Start = function () {
        };
        Trap.prototype.Update = function () {
            this.CheckBounds();
        };
        Trap.prototype.Reset = function () { };
        Trap.prototype.Move = function () {
        };
        Trap.prototype.CheckBounds = function () {
            var vectorX = this.player.x - this.x;
            var vectorY = this.player.y - this.y;
            var biggerHH = this.halfH > this.player.halfH ? this.halfH : this.player.halfH;
            var biggerHW = this.halfW > this.player.halfW ? this.halfW : this.player.halfW;
            //player on right of the wall
            if (vectorX > 0 && vectorX <= this.player.halfW + this.halfW) {
                if (vectorY > -biggerHH && vectorY < biggerHH) {
                    this.alpha = 1;
                    this.player.ResetPosition();
                    createjs.Sound.play("sadViolin");
                }
            }
            if (vectorX < 0 && vectorX >= -(this.halfH)) {
                if (vectorY > -biggerHH && vectorY < biggerHH) {
                    this.alpha = 1;
                    this.player.ResetPosition();
                    createjs.Sound.play("sadViolin");
                }
            }
            if (vectorY > 0 && vectorY <= this.player.halfW + this.halfW) {
                if (vectorX > -biggerHW && vectorX < biggerHW) {
                    this.alpha = 1;
                    this.player.ResetPosition();
                    createjs.Sound.play("sadViolin");
                }
            }
            if (vectorY < 0 && vectorY >= -(this.player.halfW + this.halfW)) {
                if (vectorX > -biggerHW && vectorX < biggerHW) {
                    this.alpha = 1;
                    this.player.ResetPosition();
                    createjs.Sound.play("sadViolin");
                }
            }
        };
        Trap.WALL_WIDTH = 21;
        Trap.WALL_HEIGHT = 21;
        return Trap;
    }(objects.GameObject));
    objects.Trap = Trap;
})(objects || (objects = {}));
//# sourceMappingURL=trap.js.map