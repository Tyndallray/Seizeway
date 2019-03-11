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
    var EndPoint = /** @class */ (function (_super) {
        __extends(EndPoint, _super);
        // Constructor
        function EndPoint(assetManager, player, x, y) {
            var _this = _super.call(this, assetManager, "endPoint") || this;
            _this.player = player;
            _this.Start();
            _this.halfW = objects.Wall.WALL_WIDTH / 2;
            _this.halfH = objects.Wall.WALL_HEIGHT;
            _this.scaleX = (2 / 100);
            _this.scaleY = (2 / 100);
            _this.x = x;
            _this.y = y;
            return _this;
        }
        // Methods / functions
        EndPoint.prototype.Start = function () {
        };
        EndPoint.prototype.Update = function () {
            this.CheckBounds();
        };
        EndPoint.prototype.Reset = function () { };
        EndPoint.prototype.Move = function () {
        };
        EndPoint.prototype.CheckBounds = function () {
            if (managers.Collision.Check(this.player, this)) {
                objects.Game.currentScene = config.Scene.OVER;
            }
        };
        EndPoint.WALL_WIDTH = 21;
        EndPoint.WALL_HEIGHT = 21;
        return EndPoint;
    }(objects.GameObject));
    objects.EndPoint = EndPoint;
})(objects || (objects = {}));
//# sourceMappingURL=endPoint.js.map