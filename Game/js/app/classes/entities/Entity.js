define(['Class', 'Rectangle', 'Utils'], function (Class, Rectangle, Utils) {

    var Entity = Class.extend({
        init: function (_handler, _x, _y, _width, _height) {
            this.x = _x;
            this.y = _y;
            this.width = _width;
            this.height = _height;
            this.handler = _handler;
            this.bounds = new Rectangle(0, 0, _width, _height);
            this.damage = 0;
            this.health = 10;
            this.collideable = 1;
            this.mana = 100;
            this.name = "";

        },
        tick: function (_dt) {

        },
        render: function (_g) {

        },
        //Getters
        getX: function () {
            return this.x;
        },
        getY: function () {
            return this.y;
        },
        getWidth: function () {
            return this.width;
        },
        getHeight: function () {
            return this.height;
        }, getBun: function () {
            return this.Bun;
        },

        //used to verify if player will collide in next tick
        getCollisionBounds: function (xOffset, yOffset) {
            //return a new Rectangle in the pos. wherever we want the collision bounds to be on screen
            return new Rectangle(parseInt(this.x + this.bounds.x + xOffset),
                parseInt(this.y + this.bounds.y + yOffset),
                this.bounds.width, this.bounds.height);
        },
        checkEntityCollision: function (xOffset, yOffset) {
            var candidates = this.handler.getWorld().getEntityManager().getEntities();
            for (var i = 0; i < candidates.length; i++) {
                var e = candidates[i];
                //so it doesn't check collision with itself
                if (e != this) {

                    if (e.getCollisionBounds(0, 0).intersects(this.getCollisionBounds(xOffset, yOffset))) {
                        if (this.name == "AAttack" && e.getBun() == 0 && e.alive == 1) {
                            e.takeDamage(this.getDamage());
                            //this.delete();
                        } else {

                            if (e.getDamage() >= 0 && (typeof this.healthbar != "undefined") && this.getBun() != e.getBun()) {
                                this.takeDamage(e.getDamage());
                                e.takeDamage(this.getDamage());


                            }

                            if (this.name == "jucator" && e.name == "potiunemana") {
                                this.useMana(-e.refilledMana);
                                e.delete();
                            }
                            if (this.name == "jucator" && e.name == "coinuMeu") {
                                this.handler.getDisplay().updateScore();
                                e.delete();
                                this.handler.getDisplay().showGold(e.getX()- this.handler.getGameCamera().getxOffset(),e.getY()- this.handler.getGameCamera().getyOffset());

                            }

                            if (this.name == "jucator" && (e.name == "EXPLOSIONITEM" || e.name == "SLASHITEM" || e.name == "JADESLASHITEM" || e.name == "FIRESPELLITEM" || e.name == "DARKSLASHITEM")) {
                                this.learnSpell(e.name);
                                e.delete();

                            }
                            if (this.name == "jucator" && e.name == "KEY") {
                                this.addKey();
                                e.delete();

                            }
                            if (this.name == "jucator" && e.name == "DOOR") {

                                if (this.getKey()) {
                                    //Utils.callPHPSave("checkpointX="+this.checkpoint_x+"&checkpointY="+this.checkpoint_y+"&spell1="+this.spelllearned1+"&spell2="+this.spelllearned2+"&spell3="+this.spelllearned3+"&spell4="+this.spelllearned4+"&spell5="+this.spelllearned5);
                                    this.useKey();
                                    e.open();
                                    this.updateCheckpoint();
                                    this.handler.getDisplay().updateLevel();
                                    this.handler.getDisplay().showCheckpoint();
                                }

                            }
                            if (this.name == "jucator" && e.name == "FIRESPELLBOSS") {
                                if(e.dealtDamage == 0){
                                    this.takeDamage(e.getDamage());
                                    e.dealtDamage = 1;

                                }
                            }
                            if (this.name == "jucator" && e.name == "JADESLASHBOSS") {
                                if(e.dealtDamage == 0){
                                    this.takeDamage(e.getDamage());
                                    e.dealtDamage = 1;

                                }
                            }
                            if (this.name == "jucator" && e.name == "DARKSLASHBOSS") {
                                if(e.dealtDamage == 0){
                                    this.takeDamage(e.getDamage());
                                    e.dealtDamage = 1;

                                }
                            }
                            if (e.name == "SLASHENEMY" && this.name == "jucator") {
                                if(e.dealtDamage == 0){
                                    this.takeDamage(e.getDamage());
                                    e.dealtDamage = 1;

                                }
                            }
                            if (this.name == "jucator" && e.name == "PORTAL") {
                                this.handler.getDisplay().showWinScreen();
                                this.delete();
                                Utils.callPHP("message=" + this.handler.getDisplay().getScore());

                            }




                        }

                        if (e.collideable == 1 && this.collideable == 1)
                            return true;
                    }

                }

            }
            return false;


        },
        die: function () {
            this.alive = 0;
            this.time_dead_body = 100;


        },
        learnSpell: function () {
        },
        delete: function () {
            this.handler.getWorld().getEntityManager().removeEntity(this);
        },
        takeDamage: function (_damage) {
            this.health -= _damage;
            if (typeof this.healthbar != "undefined")
                this.healthbar.update();
            if (this.health <= 0)
                this.die();
        },
        getDamage: function () {
            return this.damage;
        },

        //Setters
        setX: function (_x) {
            this.x = _x;
        },
        setY: function (_y) {
            this.y = _y;
        },
        setWidth: function (_width) {
            this.width = _width;
        },
        setHeight: function (_height) {
            this.height = _height;
        },

    });

    return Entity;

});