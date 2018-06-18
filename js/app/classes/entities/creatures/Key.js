
define(['Creature','Assets'],function(Creature,Assets){

    var Key = Creature.extend({
        init:function(_handler, _x, _y){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("key");
            this.bounds.x = 0;
            this.bounds.y = 0;
            this.bounds.width = 32;
            this.bounds.height = 64;
            this.damage=0;
            this.collideable=0;
            this.name="KEY";



        },
        tick:function(_dt){


                this.assets.animations.idle.tick();


        },
        render:function(_g){
            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), 32, 32);

        },
        getCurrentAnimationFrame:function () {



                return this.assets.animations.idle.getCurrentFrame();

        }

    });

    return Key;

});