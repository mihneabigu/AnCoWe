
//for moving variables

define(['Class'], function(Class){

    var game,world;

    //now we create the actual class :
    var Handler = Class.extend({
        init:function (_game) {
            game = _game;
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
        }

    });

    return Handler;
});