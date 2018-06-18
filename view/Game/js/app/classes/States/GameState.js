
define(['State','World'], function(State,World){


    var GameState = State.extend({
        init:function( _handler ){
            this._super( _handler );  //call constructor of (base) State class
            //this.player = new Player(_handler, 43, 43);       /everything player related, in EntityManager
            this.world = new World("res/worlds/world1.wrd", _handler);
        },

        tick:function( _dt ){
            this.world.tick(_dt);
        },

        render:function( _g ){
            //console.log("Rendering");
            this.world.render(_g);

        }

    });

    return GameState;

});