define(['Creature', 'Assets', 'HealthBar', 'ManaPotion', 'Coin'], function (Creature, Assets, HealthBar, ManaPotion, Coin) {


    var Skeleton = Creature.extend({
        init: function (_handler, _x, _y) {
            this._super(_handler, _x, _y, Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("skeleton");
            this.bounds.x = 16;
            this.bounds.y = 31;
            this.rand_dir = 0;
            this.dir_time = 0;
            this.bounds.width = 28;
            this.bounds.height = 28;
            this.damage = 0.1;
            this.Bun = 0;
            this.spawnedItem = 0;
            var hb_prop = {
                color: "red",
                yoffset: 20,
                nodes: 10,
                split: 2,
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


        },
        tick: function (_dt) {
            this.getInputs(_dt);
            this.move();


            this.assets.animations.walk_right.tick();
            this.assets.animations.walk_left.tick();
            this.assets.animations.walk_up.tick();
            this.assets.animations.walk_down.tick();
            this.assets.animations.idle.tick();
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

            if (this.alive == 1) {
                this.healthbar.render(_g);
            }
            if (this.alive == 0) {
                this.collideable = 0;
                this.damage = 0;
                this.time_dead_body--;
                if (this.time_dead_body == 0)
                    this.delete();

            }

        },
        getInputs: function (_dt) {


            this.xMove = 0;
            this.yMove = 0;
            this.dir_time += 1;

            if (this.dir_time > 100)
                this.dir_time = 0;
            if (this.dir_time % 10 == 0 || this.dir_time == 1) //pune %1 pt herezie
            {
                this.rand_dir = Math.ceil(Math.random() * 100);
            }


            if (this.alive == 1) { //ifu asta nu merge pus mai sus. nush dc
                if (this.rand_dir % 4 == 0) {
                    this.yMove -= this.speed * _dt;
                }
                if (this.rand_dir % 4 == 1) {
                    this.yMove += this.speed * _dt;
                }
                if (this.rand_dir % 4 == 2) {
                    this.xMove -= this.speed * _dt;
                }
                if (this.rand_dir % 4 == 3) {
                    this.xMove += this.speed * _dt;
                }
            }

        },
        getCurrentAnimationFrame: function () {
            if (this.alive == 1) {
                if (this.xMove < 0)
                    return this.assets.animations.walk_left.getCurrentFrame();
                else if (this.xMove > 0)
                    return this.assets.animations.walk_right.getCurrentFrame();

                else if (this.yMove < 0)
                    return this.assets.animations.walk_up.getCurrentFrame();
                else if (this.yMove > 0)
                    return this.assets.animations.walk_down.getCurrentFrame();
                else
                    return this.assets.animations.idle.getCurrentFrame();
            }
            else if (this.alive == 0)
                return this.assets.animations.dead.getCurrentFrame();
        },
        takeDamage: function (_damage) {
            if (this.alive == 1) {
            }
            this.health -= _damage;
            if (typeof this.healthbar != "undefined")
                this.healthbar.update();
            if (this.health <= 0) {
                this.die();

                var randomSpawn = Math.ceil(Math.random() * 100);
                if (randomSpawn > 30 && this.spawnedItem == 0) {
                    this.handler.getWorld().getEntityManager().addEntity(new ManaPotion(this.handler, this.x+15, this.y+25));
                    this.spawnedItem = 1;
                }
                if (randomSpawn <= 30 &&randomSpawn<=60&& this.spawnedItem == 0)
                {
                    this.handler.getWorld().getEntityManager().addEntity(new Coin(this.handler, this.x+15, this.y+25));
                    this.spawnedItem = 1;
                }
            }
        }


    });

    return Skeleton;

});