
define(function(){
    //we dont need     define(['...'], function(){...});
    //we dont need to include anything, we won't instantiate this class
    //only use the static function in this class

    var ImageLoader = {};       //this lets Javascript/browser know that this is an OBJECT

    //when called, this will pass the path to the image
    //and will return smt to be DRAWN with the graphics tool
    ImageLoader.loadImage = function(_path) {
        var image = new Image();
        image.src = _path;
        return image;
    }

    return ImageLoader;

});