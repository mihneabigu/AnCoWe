define(['Class', 'Game'], function (Class, Game) {

    var Launcher = Class.extend({
        init: function (_title, _width, _height) {

            //document.title = _title;                              // fac asta in display
            //var display = new Display(_title, _width, _height);   //mut asta in GAME

            var game = new Game(_title, _width, _height);
            game.start();


        }
    });

    return Launcher;

});