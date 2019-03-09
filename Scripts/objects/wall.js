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
        function Wall(assetManager, player) {
            var _this = _super.call(this, assetManager, "wall") || this;
            _this.isWalkable = false;
            _this.player = player;
            _this.Start();
            _this.halfW = 10;
            _this.halfH = 10;
            _this.scaleX = (2 / 100);
            _this.scaleY = (2 / 100);
            return _this;
        }
        // Methods / functions
        Wall.prototype.Start = function () {
            this.x = 100;
            this.y = 100;
        };
        Wall.prototype.Update = function () {
            this.CheckBounds();
        };
        Wall.prototype.Reset = function () { };
        Wall.prototype.Move = function () {
        };
        Wall.prototype.CheckBounds = function () {
            // if player lies in the same x coordinate
            if (this.player.x + this.player.halfW > this.x - this.halfW && this.player.x - this.player.halfW < this.x + this.halfW) {
                //if player is below the wall
                //if player's top edge is more than wall's bottom edge + 5and plaeyer's top edge is mo than wall's y
                if (this.player.y - this.player.halfH < this.y + this.halfH + 5 && (this.player.y - this.player.halfH > this.y)) {
                    this.player.dontMoveUp = true;
                }
                //if player's bottom edge is more than wall's top edge - 5 and plaeyer's bottom edge is greater than wall's top edge - 10
                else if (this.player.y + this.player.halfH > this.y - this.halfH - 5 && this.player.y + this.player.halfH < this.y) {
                    this.player.dontMoveDown = true;
                }
                else {
                    this.player.dontMoveUp = false;
                    this.player.dontMoveDown = false;
                }
            }
            //if player lies in the same y coordinate
            else if (this.player.y + this.player.halfH > this.y - this.halfH && this.player.y - this.player.halfH < this.y + this.halfH) {
                if (this.player.x + this.player.halfW > this.x - this.halfW - 5 && this.player.x + this.player.halfH < this.x) {
                    this.player.dontMoveRight = true;
                }
                else if (this.player.x - this.player.halfW < this.x + this.halfW + 5 && this.player.x - this.player.halfW > this.x) {
                    this.player.dontMoveLeft = true;
                }
                else {
                    this.player.dontMoveRight = false;
                    this.player.dontMoveLeft = false;
                }
            }
            else {
                this.player.dontMoveUp = false;
                this.player.dontMoveDown = false;
                this.player.dontMoveRight = false;
                this.player.dontMoveLeft = false;
            }
        };
        return Wall;
    }(objects.GameObject));
    objects.Wall = Wall;
})(objects || (objects = {}));
//# sourceMappingURL=wall.js.map