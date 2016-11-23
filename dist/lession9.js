var displayColors = function () {
    var Color = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Color[_i - 0] = arguments[_i];
    }
    for (var i in Color) {
        console.log(Color[i]);
    }
};
displayColors('Res');
displayColors('Res', 'Green');
displayColors('Res', 'Green', 'yellow');
//# sourceMappingURL=lession9.js.map