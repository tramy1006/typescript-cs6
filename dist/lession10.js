var displayColorsSpead = function (message) {
    var Color = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        Color[_i - 1] = arguments[_i];
    }
    for (var i in Color) {
        console.log(Color[i]);
    }
};
var messageSpead = "hello";
var Color = ['red', 'green', 'blue'];
displayColorsSpead.apply(void 0, [messageSpead].concat(Color));
//# sourceMappingURL=lession10.js.map