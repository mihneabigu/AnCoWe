
define(['Creature','Assets'],function(Creature,Assets){

    var Coin = Creature.extend({
        init:function(_handler, _x, _y,_damage){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("coin");
            this.bounds.x = 0;
            this.bounds.y = 0;
            this.bounds.width = 20;
            this.bounds.height = 25;
            this.name="coinuMeu";

            this.damage=0;

        },
        tick:function(_dt){
            this.assets.animations.idle.tick();
        },
        render:function(_g){
            _g.myDrawImage(this.getCurrentAnimationFrame(),
                this.x-this.handler.getGameCamera().getxOffset(),
                this.y-this.handler.getGameCamera().getyOffset(),
                21.4, 21);
        },
        getCurrentAnimationFrame:function () {
            return this.assets.animations.idle.getCurrentFrame();
        }

    });

    return Coin;

});