"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var persons_1 = __importDefault(require("../routes/persons"));
var Server = /** @class */ (function () {
    function Server() {
        this.apiPath = {
            persons: '/api'
        };
        this.app = (0, express_1["default"])();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        this.app.use(express_1["default"].json());
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPath.persons, persons_1["default"]);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Server on port', _this.port);
        });
    };
    return Server;
}());
exports["default"] = Server;
//# sourceMappingURL=server.js.map