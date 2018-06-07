//allow us to pass the sprite sheet/image
//and from there, pick a specific part of the image

define(['Class'], function (Class) {

    var SpriteSheet = Class.extend({
        init: function (_sheet) {
            this.sheet = _sheet;
        },

        crop:function(_x, _y, _width, _height) {
            //the entire thing that is returned is considered an ASSET
            return {"sheet": this.sheet, "x": _x, "y": _y, "width": _width, "height": _height};
        }
    });

    return SpriteSheet;

});
