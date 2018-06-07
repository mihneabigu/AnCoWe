
define(['Class'], function(Class){

    var keys = [];      //blank array. will contain all our key codes
                        //useful for holding more keys at once.
    
    var KeyManager = Class.extend({
        init:function () {},
        tick:function () {
            // ASCII    or JavaScrip KeyCodes
            //console.log("Ticking");
            this.up   = keys[87];       //W
            this.down = keys[83];       //S
            this.left = keys[65];       //A
            this.right = keys[68];       //D
        },

    });

    window.onkeydown = function(e){     //e = event handler
        keys[e.keyCode] = true;
    };

    window.onkeyup = function(e){     //e = event handler
        keys[e.keyCode] = false;
    };

    return KeyManager;

});