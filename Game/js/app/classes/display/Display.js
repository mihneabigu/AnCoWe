
define(['Jquery','Class'],function($,Class){

    //Private Variables
    var canvas, title, width, height, graphics;

    var Display = Class.extend({
        init:function (_title, _width, _height) {
            title = _title;
            width = _width;
            height = _height;
            createDisplay();
            },

        //Getters

        getTitle:function(){
            return title;
        },
        getWidth:function(){
            return width;
        },
        getHeight:function(){
            return height;
        },
        getGraphics:function(){
            return graphics;
        }

    });

   //Private Methods
    function createDisplay(){
        document.title = title;
        var body = document.body;
        body.innerHTML = ("<canvas id='canvas' width='"+width+"' height='"+height+"'></canvas>");
        canvas = document.getElementById("canvas");
        graphics = canvas.getContext("2d");
    }

    /*
    //Getters
    Display.prototype.getTitle = function(){
        return title;
    };
    Display.prototype.getWidth = function(){
        return width;
    };
    Display.prototype.getHeight = function(){
        return height;
    };
    Display.prototype.getGraphics = function(){
        return graphics;
    };
    */

    CanvasRenderingContext2D.prototype.myDrawImage = function(asset,_x,_y,_width,_height){
        this.drawImage(asset.sheet, asset.x, asset.y, asset.width, asset.height, _x, _y, _width, _height);
        //             ---            de unde sa CROP image                 ---  unde sa DRAW the cropped image ---
    };

    return Display;
                //any package that requires Display CLASS will have acces to the class Display that we've created

});







