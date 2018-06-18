
define(['Creature','Assets'],function(Creature,Assets){


    var Orb = Creature.extend({
        init:function(_handler, _x, _y){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("Orb");
            this.bounds.x = 16;
            this.bounds.y = 31;
            this.rand_dir=0;
            this.dir_time=0;
            this.bounds.width = 28;
            this.bounds.height = 28;
            this.damage=1;


        },
        tick:function(_dt){
            this.getInputs(_dt);
            this.move();

            this.assets.animations.idle.tick();
        },

        render:function(_g){

            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), this.width, this.height);

        },
        getInputs:function(_dt){


            this.xMove = 0;
            this.yMove = 0;
            this.dir_time+=1;

            if(this.dir_time>100)
                this.dir_time=0;
            if(this.dir_time%10==0||this.dir_time==1) //pune %1 pt herezie
                this.rand_dir=Math.ceil(Math.random()*100);


            if(this.rand_dir%4==0){
                this.yMove -= this.speed * _dt;
            }
            if(this.rand_dir%4==1){
                this.yMove += this.speed * _dt;
            }
            if(this.rand_dir%4==2){
                this.xMove -= this.speed * _dt;
            }
            if(this.rand_dir%4==3){
                this.xMove += this.speed * _dt;
            }


        },
        getCurrentAnimationFrame:function () {
            if (this.xMove < 0)
                return this.assets.animations.idle.getCurrentFrame();
            else if (this.xMove > 0)
                return this.assets.animations.idle.getCurrentFrame();

            else if (this.yMove < 0)
                return this.assets.animations.idle.getCurrentFrame();
            else if (this.yMove > 0)
                return this.assets.animations.idle.getCurrentFrame();
            else
                return this.assets.animations.idle.getCurrentFrame();
        }



    });

    return Orb;

});