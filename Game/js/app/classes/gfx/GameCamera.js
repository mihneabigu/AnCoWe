
//video 11 for Game Camera overall creation. Rewatch to undo everything if we don't want a Game Camera
define(['Class','Tile'],function(Class,Tile){

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
            this.checkBlankSpace();
        },
        move:function(_xAmt, _yAmt){
           xOffset += _xAmt;
           yOffset += _yAmt;
           this.checkBlankSpace();
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
        },
        // check offsets, see if it's outside
        // the range of world/outside where we have tiles for world
        checkBlankSpace:function(){
            if(xOffset < 0) {
                xOffset = 0;
            }else if (xOffset > handler.getWorld().getWidth() * Tile.TILEWIDTH - handler.getWidth()) //we need "*Tile.TILEWIDTH becuase the width of world(matrix) is in tiles. this way, we convert it into pixels
            {
                xOffset = handler.getWorld().getWidth() * Tile.TILEWIDTH - handler.getWidth();
            }

            if(yOffset < 0) {
                yOffset = 0;
            }else if (yOffset > handler.getWorld().getHeight() * Tile.TILEHEIGHT - handler.getHeight())
            {
                yOffset = handler.getWorld().getHeight() * Tile.TILEHEIGHT - handler.getHeight();
            }
            // we need to call this function whenever we are moving THE CAMERA. so
            // now we call this function in move:function
            // and in centerOnEntity:function

       }

    });

    return GameCamera;

});