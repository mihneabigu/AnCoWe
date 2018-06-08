
define(['Entity','Tile'],function(Entity,Tile){

    var DEFAULT_SPEED = 250;
    var DEFAULT_HEALTH = 10;
    var DEFAULT_CREATURE_WIDTH = 64;
    var DEFAULT_CREATURE_HEIGHT= 64;

    //^^^^^^^ static


    var Creature = Entity.extend({
        init:function(_handler,_x,_y,_width,_height){
            this._super(_handler,_x,_y,_width,_height);
            this.health = DEFAULT_HEALTH;
            this.speed = DEFAULT_SPEED;
            this.xMove = 0;
            this.yMove = 0;
        },
        move:function(){
            this.moveX();
            this.moveY();
        },
        moveX:function(){

            //if moving to the RIGHT
            if(this.xMove > 0)
            {
                var tx = parseInt((this.x + this.xMove + this.bounds.x + this.bounds.width) / Tile.TILEWIDTH);  //the Tile in the X direction that our RIGHT side of the Rectangle is going to touch
                //                ^^PIXEL here (..) /        ^^ where our next position would be     ^^make it TILE
                if(!this.collisionWithTile(tx,parseInt((this.y+this.bounds.y)/Tile.TILEHEIGHT)) &&
                    !this.collisionWithTile(tx,parseInt((this.y+this.bounds.y+this.bounds.height)/Tile.TILEHEIGHT))){
                                                            //                  ^^check if bottom right corner has collision
                    this.x += parseInt(this.xMove);
                }
            }
            else  //if moving to the LEFT
            {
                var tx = parseInt((this.x + this.xMove + this.bounds.x) / Tile.TILEWIDTH);  //REMOVED this.bounds.width, so now it check the same thing for LEFT side
                //
                if(!this.collisionWithTile(tx,parseInt((this.y + this.bounds.y) / Tile.TILEHEIGHT)) &&
                    !this.collisionWithTile(tx,parseInt((this.y + this.bounds.y + this.bounds.height)/Tile.TILEHEIGHT))){
                    //
                    this.x += parseInt(this.xMove);
                }

            }

        },
        moveY:function(){

            //if moving to the RIGHT
            if(this.yMove > 0)
            {
                var ty = parseInt((this.y + this.yMove + this.bounds.y + this.bounds.height) / Tile.TILEHEIGHT);
                //
                if(!this.collisionWithTile(parseInt((this.x+this.bounds.x)/Tile.TILEHEIGHT),ty) &&
                    !this.collisionWithTile(parseInt((this.x+this.bounds.x+this.bounds.width)/Tile.TILEWIDTH),ty)){
                    //                  ^^check if bottom right corner has collision
                    this.y += parseInt(this.yMove);
                }
            }
            else  //if moving to the LEFT
            {
                var ty = parseInt((this.y + this.yMove + this.bounds.y) / Tile.TILEHEIGHT);  //REMOVED this.bounds.width, so now it check the same thing for LEFT side
                //
                if(!this.collisionWithTile(parseInt((this.x + this.bounds.x) / Tile.TILEWIDTH),ty) &&
                    !this.collisionWithTile(parseInt((this.x + this.bounds.x + this.bounds.width)/Tile.TILEWIDTH),ty)){
                    //
                    this.y += parseInt(this.yMove);
                }

            }

        },
        collisionWithTile:function(_x, _y){
            return this.handler.getWorld().getTile(_x,_y).isSolid();
        },
        //Getters
        getHealth:function(){
            return this.health;
        },
        getSpeed:function(){
            return this.speed;
        },
        //Setters
        setHealth:function(_health){
            this.health=_health;
        },
        setSpeed:function(_speed){
            this.speed=_speed;
        }

    });

    //STATIC
    //so we can use them in other classes
    Creature.DEFAULT_SPEED = DEFAULT_SPEED;
    Creature.DEFAULT_HEALTH = DEFAULT_HEALTH;
    Creature.DEFAULT_CREATURE_WIDTH = DEFAULT_CREATURE_WIDTH;
    Creature.DEFAULT_CREATURE_HEIGHT= DEFAULT_CREATURE_HEIGHT;

    return Creature;

});