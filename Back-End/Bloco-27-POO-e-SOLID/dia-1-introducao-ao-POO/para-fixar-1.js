"use strict";
exports.__esModule = true;
var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        console.log("Creating tv ".concat(brand));
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log("Tv ".concat(this._brand, ", ").concat(this._size, "\", resolution: ").concat(this._resolution, " \navailable connections: ").concat(this._connections));
    };
    Object.defineProperty(Tv.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (value) {
            if (this._connections.includes(value)) {
                this._connectedTo = value;
                console.log(this._connectedTo);
            }
            else {
                this._connectedTo = 'Not connected';
                console.log('Sorry, connection unavailable!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Tv;
}());
var tv1 = new Tv('LG', 40, 'Full HD', ['HDMI', 'VGA']);
tv1.turnOn();
tv1.connectedTo = 'WI-FI';
console.log('Connected to: ', tv1.connectedTo);
exports["default"] = Tv;
