
define(['Class'],function(Class){

    var Rectangle = Class.extend({
        init:function( _x, _y, _width ,_height ){
            this.x = _x;
            this.y = _y;
            this.width = _width;
            this.height = _height
        },

        //if 2 rectangles overlap/intersect ---> TRUE
        intersects:function(_rect){
            if( this.x < _rect.x + _rect.width   &&
                this.x + this.width > _rect.x    &&
                this.y < _rect.y + _rect.height  &&
                _rect.y < this.height + this.y )
                return true;
            else
                return false;

        }


    });


    return Rectangle;
});