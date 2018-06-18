define(['Creature', 'Assets', 'HealthBar', 'Firespellitem','Firespellboss','Jadeslashboss','Jadeslashitem'], function (Creature, Assets, HealthBar, Firespellitem, Firespellboss, Jadeslashboss, Jadeslashitem) {



    var Boss2 = Creature.extend({
        init: function (_handler, _x, _y) {
            this._super(_handler, _x, _y, Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("boss2");
            this.bounds.x = 20;
            this.bounds.y = 0;
            this.rand_dir = 0;
            this.dir_time = 0;
            this.bounds.width = 65;
            this.bounds.height = 74;
            this.damage = 0.1;
            this.Bun = 0;
            this.spawnedItem = 0;
            this.myCooldown = 0;
            this.movementContor = 0;
            this.skillCooldown = 0;
            this.name = "BOSS2";



            var hb_prop = {
                color: "#4617a3",
                yoffset: 20,
                xoffset: 15,
                nodes: 15,
                split: 2,
                width: 120,
                height: 14,
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

            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), this.width+20, this.height+20);

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


            if (this.alive == 1) {
                // if (this.rand_dir % 4 == 0) {
                //     this.yMove -= this.speed * _dt;
                // }
                // if (this.rand_dir % 4 == 1) {
                //     this.yMove += this.speed * _dt;
                // }
                // if (this.rand_dir % 4 == 2) {
                //     this.xMove -= this.speed * _dt;
                // }
                // if (this.rand_dir % 4 == 3) {
                //     this.xMove += this.speed * _dt;
                // }

                this.movementContor++;
                if(this.movementContor >= 100)
                    this.movementContor = 0;

                if(this.movementContor < 25){                //STANGA
                    this.xMove -= this.speed * _dt;
                }
                if(this.movementContor > 25 && this.movementContor < 50){                //SUS
                    this.yMove -= this.speed * _dt;
                }
                if(this.movementContor > 50 && this.movementContor < 75){                //DREAPTA
                    this.xMove += this.speed * _dt;
                }
                if(this.movementContor > 75 && this.movementContor < 100){                //JOS
                    this.yMove += this.speed * _dt;
                }

                this.skillCooldown++;
                if(this.skillCooldown == 60){
                    this.skillCooldown = 0;
                    this.handler.getWorld().getEntityManager().addEntity(new Jadeslashboss(this.handler, this.x, this.y));
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
                if (randomSpawn > 50 && this.spawnedItem == 0) {
                    this.handler.getWorld().getEntityManager().addEntity(new Jadeslashitem(this.handler, this.x, this.y));
                    this.spawnedItem = 1;
                }



            }
        }


    });

    return Boss2;

});