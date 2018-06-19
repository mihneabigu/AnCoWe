define(['Creature', 'Assets', 'HealthBar', 'SkeletBun', 'Explosion', 'ManaBar', 'Slash', 'Autoattack', "Jadeslash", "Firespell", "Darkslash","Utils"], function (Creature, Assets, HealthBar, SkeletBun, Explosion, ManaBar, Slash, Autoattack, Jadeslash, Firespell, Darkslash, Utils) {

    var Player = Creature.extend({
        init: function (_handler, _x, _y) {
            this._super(_handler, _x, _y, Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("player");
            this.bounds.x = 16;
            this.bounds.y = 31;
            this.bounds.width = 28;
            this.bounds.height = 28;
            //this.damage=0.2;
            this.spellCooldown1 = 0;      //Explosion Entity
            this.spellCooldown2 = 0;      //Slash Entity
            this.spellCooldown3 = 0;      //Jadeslash Entity
            this.spellCooldown4 = 0;      //Fireslash Entity
            this.spellCooldown5 = 0;      //Darkslash Entity
            this.spellCooldown6 = 0;
            this.health = 10;
            this.maxhealth = 10;
            this.saveCooldown = 0;
            this.loadCooldown = 0;


            this.spelllearned1 = 0;
            this.spelllearned2 = 0;
            this.spelllearned3 = 0;
            this.spelllearned4 = 0;
            this.spelllearned5 = 0;


            this.autoattackCooldown = 0;
            this.mana = 100;
            this.maxmana = 100;
            this.dir = 0;
            this.name = "jucator";
            this.hasKey = 0;


            this.checkpoint_x = this.x;
            this.checkpoint_y = this.y;


            var hb_prop = {
                color: "yellow",
                yoffset: 20,
                nodes: 20,
                split: 1,
                width: 100,
                height: 8,
                //fadetime:.95,
                renderOnFull: "on",//on = se rendeaza
                border: {
                    show: true,
                    color: "black",
                    width: 2
                }


            }
            this.healthbar = new HealthBar(_handler, this, hb_prop);


            var mb_prop = {
                color: "blue",
                yoffset: 9,
                nodes: 50,
                split: 0,
                width: 100,
                height: 6,
                //fadetime:.95,
                renderOnFull: "on",//on = se rendeaza
                border: {
                    show: true,
                    color: "black",
                    width: 2
                }


            }
            this.manabar = new ManaBar(_handler, this, mb_prop);

            this.Bun = 1;
        },
        tick: function (_dt) {
            this.getInputs(_dt);
            this.move();
            this.handler.getGameCamera().centerOnEntity(this);
            this.assets.animations.walk_right.tick();
            this.assets.animations.walk_left.tick();
            this.assets.animations.walk_up.tick();
            this.assets.animations.walk_down.tick();
            this.assets.animations.idle.tick();
            if (this.autoattackCooldown != 0)
                this.autoattackCooldown--;
            if (this.spellCooldown1 != 0)
                this.spellCooldown1--;
            if (this.spellCooldown2 != 0)
                this.spellCooldown2--;
            if (this.spellCooldown3 != 0)
                this.spellCooldown3--;
            if (this.spellCooldown4 != 0)
                this.spellCooldown4--;
            if (this.spellCooldown5 != 0)
                this.spellCooldown5--;
            if (this.saveCooldown != 0){
                this.saveCooldown--;
            }


        },
        render: function (_g) {
            /*
            //OLD 1 FRAME + TEST COLLISION

            //_g.myDrawImage(this.assets.idle, this.x, this.y, this.assets.width, this.assets.height);
            _g.myDrawImage(this.assets.idle, this.x-this.handler.getGameCamera().getxOffset(), this.y-this.handler.getGameCamera().getyOffset(), this.assets.width, this.assets.height);
            //_g.myDrawImage(Assets.getAssets("mario").idle, x, y, Assets.getAssets('mario').width, Assets.getAssets('mario').height);


            //this will make a black rectangle ON player, so I know when collision starts
            _g.fillRect(this.x + this.bounds.x - this.handler.getGameCamera().getxOffset(), this.y + this.bounds.y - this.handler.getGameCamera().getyOffset(), this.bounds.width, this.bounds.height);
                        //^this.x so it's relative to our character position
            */

            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), this.width, this.height);
            this.healthbar.render(_g);
            this.manabar.render(_g);
        },
        getInputs: function (_dt) {
            this.xMove = 0;
            this.yMove = 0;
            if (this.handler.getKeyManager().up) {
                this.yMove -= this.speed * _dt;
                this.dir = 0;
            }
            if (this.handler.getKeyManager().down) {
                this.yMove += this.speed * _dt;
                this.dir = 1;
            }
            if (this.handler.getKeyManager().left) {
                this.xMove -= this.speed * _dt;
                this.dir = 2;
            }
            if (this.handler.getKeyManager().right) {
                this.xMove += this.speed * _dt;
                this.dir = 3;
            }
            if (this.handler.getKeyManager().nine) {
                this.handler.getDisplay().showScore();
            }

            if (this.handler.getKeyManager().space) {

                if (this.autoattackCooldown == 0) {
                    this.handler.getWorld().getEntityManager().addEntity(new Autoattack(this.handler, this.x + 20, this.y + 30, 1, this.dir));

                    this.autoattackCooldown = 10;


                }
            }


            if (this.handler.getKeyManager().one && this.spelllearned1 == 1) {

                if (this.spellCooldown1 == 0) {
                    if (this.mana > 0) {
                        this.handler.getWorld().getEntityManager().addEntity(new Explosion(this.handler, this.x - this.bounds.x, this.y - this.bounds.y, 1));

                        this.spellCooldown1 = 100;
                        this.useMana(10);

                    }
                }
            }
            if (this.handler.getKeyManager().two) {

                if (this.spellCooldown2 == 0 && this.spelllearned2 == 1) {
                    if (this.mana > 0) {
                        this.handler.getWorld().getEntityManager().addEntity(new Slash(this.handler, this.x - this.bounds.x + 15, this.y - this.bounds.y + 24, 1, this.dir));

                        this.spellCooldown2 = 100;
                        this.useMana(10);

                    }
                }
            }


            if (this.handler.getKeyManager().three) {

                if (this.spellCooldown3 == 0 && this.spelllearned3 == 1) {
                    if (this.mana > 0) {
                        this.handler.getWorld().getEntityManager().addEntity(new Jadeslash(this.handler, this.x - this.bounds.x, this.y - this.bounds.y, 1));

                        this.spellCooldown3 = 100;
                        this.useMana(10);

                    }
                }
            }

            if (this.handler.getKeyManager().four && this.spelllearned4 == 1) {

                if (this.spellCooldown4 == 0) {
                    if (this.mana > 0) {
                        this.handler.getWorld().getEntityManager().addEntity(new Firespell(this.handler, this.x - this.bounds.x, this.y - this.bounds.y, 1));

                        this.spellCooldown4 = 100;
                        this.useMana(10);

                    }
                }
            }

            if (this.handler.getKeyManager().five && this.spelllearned5 == 1) {

                if (this.spellCooldown5 == 0) {
                    if (this.mana > 0) {
                        this.handler.getWorld().getEntityManager().addEntity(new Darkslash(this.handler, this.x - this.bounds.x, this.y - this.bounds.y, 1));

                        this.spellCooldown5 = 100;
                        this.useMana(10);

                    }
                }
            }

            if (this.handler.getKeyManager().ooo && this.saveCooldown==0) {
                this.handler.getDisplay().showSaveScreen();
                Utils.callPHPSave("checkpointX="+this.checkpoint_x+"&checkpointY="+this.checkpoint_y+"&spell1="+this.spelllearned1+"&spell2="+this.spelllearned2+"&spell3="+this.spelllearned3+"&spell4="+this.spelllearned4+"&spell5="+this.spelllearned5+"&level="+this.handler.getDisplay().getLevel());
            }

            if (this.handler.getKeyManager().lll && this.loadCooldown == 0) {
                this.handler.getDisplay().showLoadScreen();

                var json = Utils.loadFileAsString("/api/gamestate/readCheckpoint.php");
                json = JSON.parse(json);
                this.x = json.checkpointX;
                this.y = json.checkpointY;
                this.checkpoint_x = json.checkpointX;
                this.checkpoint_y = json.checkpointY;
                this.spelllearned1 = json.spell1;
                this.spelllearned2 = json.spell2;
                this.spelllearned3 = json.spell3;
                this.spelllearned4 = json.spell4;
                this.spelllearned5 = json.spell5;
                this.handler.getDisplay().setLevel(json.level);
                var candidates = this.handler.getWorld().getEntityManager().getEntities();
                for (var i = 0; i < candidates.length; i++) {
                    var e = candidates[i];
                    if (e.name=="DOOR" && e.id<this.handler.getDisplay().getLevel()){
                        e.open();
                    }
                }
            }


        },
        learnSpell(_spell) {
            if (_spell == "EXPLOSIONITEM")
                this.spelllearned1 = 1;
            if (_spell == "SLASHITEM")
                this.spelllearned2 = 1;
            if (_spell == "JADESLASHITEM")
                this.spelllearned3 = 1;
            if (_spell == "FIRESPELLITEM")
                this.spelllearned4 = 1;
            if (_spell == "DARKSLASHITEM")
                this.spelllearned5 = 1;

        },

        getCurrentAnimationFrame: function () {

            if (this.xMove < 0) {
                return this.assets.animations.walk_left.getCurrentFrame();
            }
            else if (this.xMove > 0) {
                return this.assets.animations.walk_right.getCurrentFrame();
            }
            else if (this.yMove < 0) {
                return this.assets.animations.walk_up.getCurrentFrame();
            } else if (this.yMove > 0) {
                return this.assets.animations.walk_down.getCurrentFrame();
            } else
                return this.assets.animations.idle.getCurrentFrame();

        },

        addKey: function () {
            this.hasKey = 1;
        },
        useKey: function () {
            this.hasKey = 0;
        },
        getKey: function () {
            return this.hasKey;
        },
        die: function () {
            this.handler.getDisplay().showDeathScreen();
            this.x = this.checkpoint_x;
            this.y = this.checkpoint_y;
            this.health = this.maxhealth;
            this.healthbar.update();

        },
        updateCheckpoint: function () {
            this.checkpoint_x = this.x;
            this.checkpoint_y = this.y;

        },
        takeDamage: function (_damage) {
            if (this.alive == 1) {
                this.health -= _damage;

                if (typeof this.healthbar != "undefined")
                    this.healthbar.update();

                if (this.health <= 0)
                {
                    this.die();
                    this.handler.getDisplay().removeLife();
                    if(this.handler.getDisplay().getLife() == 0)
                    {
                        this.delete();
                        Utils.callPHP("message=" + this.handler.getDisplay().getScore());
                        //console.log("am apelat callphp");
                    }
                }
            }
        }

    });

    return Player;

});