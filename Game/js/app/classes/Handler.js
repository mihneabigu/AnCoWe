
//for moving variables

define(['Class'], function(Class){

    var game,world,display;

    //now we create the actual class :
    var Handler = Class.extend({
        init:function (_game, _display) {
            game = _game;
            display = _display;
        },
        getWidth:function(){
            return game.getWidth();
        },
        getHeight:function(){
            return game.getHeight();
        },
        getKeyManager:function(){
            return game.getKeyManager();
        },
        getGameCamera:function(){
             return game.getGameCamera();
        },
        getWorld:function(){
            return world;
        },
        setWorld:function(_world){
            world = _world;
        },
        getDisplay:function(){
            return display;
        }


    });

    return Handler;
});