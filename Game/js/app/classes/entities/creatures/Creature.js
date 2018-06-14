define(['Entity', 'Tile'], function (Entity, Tile) {

    var DEFAULT_SPEED = 250;
    var DEFAULT_HEALTH = 10;
    var DEFAULT_CREATURE_WIDTH = 64;
    var DEFAULT_CREATURE_HEIGHT = 64;

    //^^^^^^^ static


    var Creature = Entity.extend({
        init: function (_handler, _x, _y, _width, _height) {
            this._super(_handler, _x, _y, _width, _height);
            this.health = DEFAULT_HEALTH;
            this.speed = DEFAULT_SPEED;
            this.xMove = 0;
            this.yMove = 0;
            this.alive = 1;


        },
        move: function () {
            if (!this.checkEntityCollision(this.xMove, 0))
                this.moveX();
            if (!this.checkEntityCollision(0, this.yMove))
                this.moveY();
        },
        moveX: function () {

            //if moving to the RIGHT
            if (this.xMove > 0) {
                var tx = parseInt((this.x + this.xMove + this.bounds.x + this.bounds.width) / Tile.TILEWIDTH);  //the Tile in the X direction that our RIGHT side of the Rectangle is going to touch
                //                ^^PIXEL here (..) /        ^^ where our next position would be     ^^make it TILE
                if (!this.collisionWithTile(tx, parseInt((this.y + this.bounds.y) / Tile.TILEHEIGHT)) &&
                    !this.collisionWithTile(tx, parseInt((this.y + this.bounds.y + this.bounds.height) / Tile.TILEHEIGHT))) {
                    //                  ^^check if bottom right corner has collision
                    {
                        this.x += this.xMove;

                    }
                }
                else if (this.name == "AAttack" || this.name == "SLASH" || this.name == "EXPLOSION") {
                    this.x += this.xMove;
                    if (this.x > 2760)
                        this.delete();
                }
            }
            else  //if moving to the LEFT
            {
                var tx = parseInt((this.x + this.xMove + this.bounds.x) / Tile.TILEWIDTH);  //REMOVED this.bounds.width, so now it check the same thing for LEFT side
                //
                if (!this.collisionWithTile(tx, parseInt((this.y + this.bounds.y) / Tile.TILEHEIGHT)) &&
                    !this.collisionWithTile(tx, parseInt((this.y + this.bounds.y + this.bounds.height) / Tile.TILEHEIGHT))) {
                    //
                    {
                        this.x += this.xMove;
                    }

                }
                else if (this.name == "AAttack" || this.name == "SLASH" || this.name == "EXPLOSION") {
                    this.x += this.xMove;
                    if (this.x < 20)
                        this.delete();
                }

            }

        },
        moveY: function () {

            //if moving DOWN
            if (this.yMove > 0) {
                var ty = parseInt((this.y + this.yMove + this.bounds.y + this.bounds.height) / Tile.TILEHEIGHT);
                //
                if (!this.collisionWithTile(parseInt((this.x + this.bounds.x) / Tile.TILEHEIGHT), ty) &&
                    !this.collisionWithTile(parseInt((this.x + this.bounds.x + this.bounds.width) / Tile.TILEWIDTH), ty)) {
                    //                  ^^check if bottom right corner has collision
                    this.y += this.yMove;
                }
                else if (this.name == "AAttack" || this.name == "SLASH" || this.name == "EXPLOSION") {
                    this.y += this.yMove;
                    if (this.y > 2440)
                        this.delete();
                }

            }
            else  //if moving UP
            {
                var ty = parseInt((this.y + this.yMove + this.bounds.y) / Tile.TILEHEIGHT);  //REMOVED this.bounds.height, so now it check the same thing for UP side
                //
                if (!this.collisionWithTile(parseInt((this.x + this.bounds.x) / Tile.TILEWIDTH), ty) &&
                    !this.collisionWithTile(parseInt((this.x + this.bounds.x + this.bounds.width) / Tile.TILEWIDTH), ty)) {
                    //
                    this.y += this.yMove;
                }
                else {
                    if (this.name == "AAttack" || this.name == "SLASH" || this.name == "EXPLOSION") {
                        this.y += this.yMove;
                        if (this.y < 20)
                            this.delete();
                    }



                }
            }


        },
        collisionWithTile: function (_x, _y) {
            return this.handler.getWorld().getTile(_x, _y).isSolid();
        },
        die: function () {
            this.alive = 0;
            this.time_dead_body = 100;


        },
        delete: function () {
            this.handler.getWorld().getEntityManager().removeEntity(this);
        },
        takeDamage: function (_damage) {
            if (this.alive == 1) {
                this.health -= _damage;
                if (typeof this.healthbar != "undefined")
                    this.healthbar.update();
                if (this.health <= 0)
                    this.die();
            }
        },
        useMana: function (_mana) {

            this.mana -= _mana;
            if (this.mana < 0)
                this.mana = 0;
            if (this.mana >= this.maxmana)
                this.mana = this.maxmana;

            if (typeof this.manabar != "undefined")
                this.manabar.update();

        },
        //Getters
        getHealth: function () {
            return this.health;
        },
        getSpeed: function () {
            return this.speed;
        },
        //Setters
        setHealth: function (_health) {
            this.health = _health;
        },
        setSpeed: function (_speed) {
            this.speed = _speed;
        }

    });

    //STATIC
    //so we can use them in other classes
    Creature.DEFAULT_SPEED = DEFAULT_SPEED;
    Creature.DEFAULT_HEALTH = DEFAULT_HEALTH;
    Creature.DEFAULT_CREATURE_WIDTH = DEFAULT_CREATURE_WIDTH;
    Creature.DEFAULT_CREATURE_HEIGHT = DEFAULT_CREATURE_HEIGHT;

    return Creature;

});