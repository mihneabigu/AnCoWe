//import the Class library
//"Abstract" class for States. state = menu state, settings state, game state
//there is no "abstract" in js

define(['Class'],function(Class){

    var currentState = null;

    var State = Class.extend({
        init:function( _handler ){
            this.handler = _handler;
        },
        tick:function( _dt ){

        },
        render:function( _g ){

        }

    });

    /*
    State.prototype.tick = function( _dt ){

    };

    State.prototype.render = function( _g ){

    };
    */

    //static functions ----> State.FunctionName = function(){..} , without prototype
    //if we include define(['State'])....
    //we can just use State.getState without creating an instance of State
    State.getState = function() {
        return currentState;
    };

    State.setState = function( _state ) {
        currentState = _state;
    };

    return State;

});