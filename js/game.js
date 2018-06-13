function init() {
    //get ready the scene we work on
    var stage = new createjs.Stage("game");

    //use the scene image if it's available
    var scene = new createjs.Bitmap("img/scene.png");
    scene.image.onload = function () {
        stage.update();
    }
    stage.addChild(scene);

    var text = new createjs.Text("PLAY", "20px Arial", "#ff7700");
    text.x = 350;
    text.y = 100;
    stage.addChild(text);

    //use the scene image if it's available
    var ball = new createjs.Bitmap("img/test2.png");
    ball.image.onload = function () {
        stage.update();
    }
    stage.addChild(ball);

    /*
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);*/

    createjs.Ticker.on("tick", tick);
    function tick(event) {
        // Other stuff
        stage.update(event);
    }
}