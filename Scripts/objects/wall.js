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
    var Wall = /** @class */ (function (_super) {
        __extends(Wall, _super);
        // Constructor
        function Wall(assetManager, player, x, y) {
            var _this = _super.call(this, assetManager, "wall") || this;
            _this.isWalkable = false;
            _this.player = player;
            _this.Start();
            _this.halfW = Wall.WALL_WIDTH / 2;
            _this.halfH = Wall.WALL_HEIGHT;
            _this.scaleX = (2 / 100);
            _this.scaleY = (2 / 100);
            _this.x = x;
            _this.y = y;
            return _this;
        }
        // Methods / functions
        Wall.prototype.Start = function () {
        };
        Wall.prototype.Update = function () {
            this.CheckBounds();
        };
        Wall.prototype.Reset = function () { };
        Wall.prototype.Move = function () {
        };
        Wall.prototype.CheckBounds = function () {
            //RANGE [BOX SIZE]HALFW of player and box and HALFH of player and box
            //if player.x - wall.x is positive RIGHT SIDE
            //if player.x - wall.x is negative LEFT SIDE
            //if player.y - wall.y is positive DOWN SIDE
            //if player.y - wall.y if negative UP SIDE
            var vectorX = this.player.x - this.x;
            var vectorY = this.player.y - this.y;
            var biggerHH = this.halfH > this.player.halfH ? this.halfH : this.player.halfH;
            var biggerHW = this.halfW > this.player.halfW ? this.halfW : this.player.halfW;
            //player on right of the wall
            if (vectorX > 0 && vectorX <= this.player.halfW + this.halfW) {
                if (vectorY > -biggerHH && vectorY < biggerHH)
                    this.player.x += 2;
            }
            if (vectorX < 0 && vectorX >= -(this.halfH)) {
                if (vectorY > -biggerHH && vectorY < biggerHH)
                    this.player.x -= 2;
            }
            if (vectorY > 0 && vectorY <= this.player.halfW + this.halfW) {
                if (vectorX > -biggerHW && vectorX < biggerHW) {
                    this.player.y += 2;
                }
            }
            if (vectorY < 0 && vectorY >= -(this.player.halfW + this.halfW)) {
                if (vectorX > -biggerHW && vectorX < biggerHW) {
                    this.player.y -= 2;
                }
            }
        };
        Wall.WALL_WIDTH = 21;
        Wall.WALL_HEIGHT = 21;
        return Wall;
    }(objects.GameObject));
    objects.Wall = Wall;
})(objects || (objects = {}));
//# sourceMappingURL=wall.js.map