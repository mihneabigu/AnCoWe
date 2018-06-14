define(['Jquery', 'Class'], function ($, Class) {

    //Private Variables
    var canvas, title, width, height, graphics;

    var score = 0;
    var scoreTime = 0;
    var level = 0;
    var deathScreen = 0;
    var winScreen = 0;
    var lives = 3;
    var show_gold=0;
    var show_gold_x;
    var show_gold_y;
    var i=0;
    var j=0;
    var Display = Class.extend({
        init: function (_title, _width, _height) {
            title = _title;
            width = _width;
            height = _height;
            createDisplay();

            this.score = 5;
            this.ctx;
        },

        //Getters

        getTitle: function () {
            return title;
        },
        getWidth: function () {
            return width;
        },
        getHeight: function () {
            return height;
        },
        getGraphics: function () {
            return graphics;
        },
        updateScore: function () {
            score += 10;
        },
        showScore: function () {
            scoreTime = 550;
        },
        updateLevel: function () {
            level += 1;
        },
        showDeathScreen: function () {
            deathScreen = 100000;
        },
        showWinScreen: function () {
            winScreen = 100000;
        },
        getScore: function () {
            return score;
        },
        removeLife: function () {
            lives = lives - 1;
        },
        addLife: function () {
            lives = lives + 1;
        },
        getLife: function () {
            return lives;
        },

        showGold: function(_x,_y)
        {  i=0;j=0;
            show_gold_x=_x;
            show_gold_y=_y;
            show_gold=50000;
        }


    });

    //Private Methods
    function createDisplay() {
        document.title = title;
        var body = document.body;
        //body.innerHTML = ("<canvas id='canvas' width='" + width + "' height='" + height + "'></canvas>");
        canvas = document.getElementById("canvas");
        graphics = canvas.getContext("2d");
        this.ctx = canvas.getContext("2d");

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

    CanvasRenderingContext2D.prototype.myDrawImage = function (asset, _x, _y, _width, _height) {
        this.drawImage(asset.sheet, asset.x, asset.y, asset.width, asset.height, _x, _y, _width, _height);
        //             ---            de unde sa CROP image                 ---  unde sa DRAW the cropped image ---

        if (scoreTime > 0) {
            ctx.fillStyle = "red";
            ctx.font = "30px Arial";
            ctx.fillText("Score: " + score + "          Lives: " + lives + "          Level: " + level, 15, 50);
            //ctx.fillText(score, 50, 50);
            //ctx.fillText(level, 150, 50);
            scoreTime--;
        }
        if (deathScreen > 0 && lives != 0) {
            ctx.fillStyle = "red";
            ctx.font = "60px Arial";
            ctx.fillText("YOU DIED", width / 2 - 170, height / 2);
            deathScreen--;
        }
        if (winScreen > 0) {
            ctx.fillStyle = "red";
            ctx.font = "60px Arial";
            ctx.fillText("YOU WIN!! ", width / 2 - 170, height / 2);

        }
        if(lives == 0){
            ctx.fillStyle = "red";
            ctx.font = "60px Arial";
            ctx.fillText("YOU LOSE!! ", width / 2 - 170, height / 2);
        }


        if(show_gold>0)
        {
            i=i+1;
            if(i%10000==0)
                j=i/1000;
            show_gold--;
            ctx.fillStyle = "yellow";
            ctx.font="30px Arial";

            ctx.fillText("+10",show_gold_x,show_gold_y-j);
        }


    };

    return Display;
    //any package that requires Display CLASS will have access to the Display class

});







