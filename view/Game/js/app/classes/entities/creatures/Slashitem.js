
define(['Creature','Assets'],function(Creature,Assets){


    var Slashitem = Creature.extend({
        init:function(_handler, _x, _y,_damage){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("slash");
            this.bounds.x = -10;
            this.bounds.y = -10;

            this.bounds.width = 20;
            this.bounds.height = 20;
            this.damage=_damage;
            this.Bun=1;

            this.collideable=0;
            this.speed=this.speed*2;
            this.name="SLASHITEM"



        },
        tick:function(_dt){


            this.assets.animations.walk_up.tick();


        },

        render:function(_g){


            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), 30, 30);


        },



        getCurrentAnimationFrame:function () {

                return this.assets.animations.walk_up.getCurrentFrame();

        }



    });

    return Slashitem;

});