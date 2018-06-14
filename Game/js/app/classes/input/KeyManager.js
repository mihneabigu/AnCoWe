
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
            this.space=keys[72]; //h
            this.one=keys[49]; //1
            this.two=keys[50];//2
            this.three=keys[51];//3
            this.four=keys[52];//4
            this.five=keys[53];//5
            this.six=keys[54];//6
            this.seven=keys[55];//7
            this.nine=keys[57];
            this.ooo=keys[79];

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