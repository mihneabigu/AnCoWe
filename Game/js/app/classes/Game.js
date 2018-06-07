define(['Class', 'Display', 'State', 'GameState', 'KeyManager', 'Handler'], function (Class, Display, State, GameState, KeyManager, Handler) {

    var _this;
    var running = false;
    var title, width, height, g, display, keyManager, handler;
    var gameState, menuState, settingsState;


    var Game = Class.extend({
        init: function (_title, _width, _height) {
            _this = this;
            title = _title;
            width = _width;
            height = _height;
            keyManager = new KeyManager();
        },
        run:function () {
            init();
            var fps = 30;
            var timePerTick = 1000 / fps;           //in order to get the __30fps__
            var delta = 0;              //time between ticks
            var now;
            var lastTime = Date.now();
            var timer = 0;
            var ticks = 0;

            function loop() {
                if (running) {
                    now = Date.now();
                    delta = now - lastTime;
                    timer = timer + delta;
                    lastTime = now;
                }

                if (timer >= timePerTick) {
                    //video 3 min 15:00~
                    //if loop runs faster than __30fps__, it won't
                    //if loop runs slower than __30fps__, still update as fast as possible
                    //dt=delta time = multiplier in tick function to get better/consistent speed
                    //if player moves at 10pixels/frame, we say eg:100pixels/second
                    dt = timer / 1000;    //=seconds
                    tick(dt);
                    render();
                    timer = 0;
                }

                window.requestAnimationFrame(loop); //will run loop() so that it refreshes correctly
                                                    //it will wait until it can actually run it, when everything else for it is ready


            }

            loop();

        },
        start:function () {
            if (running) return;
            running = true;
            this.run();
        },
        getKeyManager:function(){
            return keyManager;
        },
        getWidth:function(){
            return width;
        },
        getHeight:function(){
            return height;
        }


    });

    function init() {
        display = new Display(title, width, height);
        g = display.getGraphics();
        handler = new Handler(_this);
        gameState = new GameState(handler);
        State.setState(gameState);
    }

    function tick(_dt) {
        keyManager.tick();
        if(State.getState() != null){
            State.getState().tick(_dt);
        }
    }

    //var idle = Assets.getAssets("mario").idle;

    function render() {
        g.clearRect(0, 0, width, height);  //clear entire canvas
        if(State.getState() != null){
            State.getState().render(g);
        }

    }


    return Game;

});