
//video 11 for Game Camera overall creation. Rewatch to undo everything if we don't want a Game Camera
define(['Class'],function(Class){

    var xOffset, yOffset, handler;

    var GameCamera = Class.extend({
       init:function(_handler, _xOffset, _yOffset){
           xOffset = _xOffset;
           yOffset = _yOffset;
           handler = _handler;
       },
        //function to update the variables in constructor
        centerOnEntity:function(e){ //e = entity
            //center our character on screen
            xOffset = e.getX() - handler.getWidth()/2;
            yOffset = e.getY() - handler.getHeight()/2;
        },
        move:function(_xAmt, _yAmt){
           xOffset += _xAmt;
           yOffset += _yAmt;
        },
        //Getters
        getxOffset:function(){
           return parseInt(xOffset);
        },
        getyOffset:function(){
           return parseInt(yOffset);
        },
        //Setters
        setxOffset:function( _offset ){
           xOffset = _offset;
        },
        setyOffset:function( _offset ){
           yOffset = _offset;
        }

    });

    return GameCamera;

});