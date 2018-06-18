
define(['Creature','Assets'],function(Creature,Assets){

    var Fire = Creature.extend({
        init:function(_handler, _x, _y,_damage){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("fire");
            this.bounds.x = 0;
            this.bounds.y = 70;
            this.bounds.width = 56;
            this.bounds.height = 50;

            this.damage=_damage;


        },
        tick:function(_dt){
            this.assets.animations.idle.tick();
        },
        render:function(_g){
            _g.myDrawImage(this.getCurrentAnimationFrame(),
                this.x - this.handler.getGameCamera().getxOffset(),
                this.y - this.handler.getGameCamera().getyOffset(),
                64, 128);

        },
        getCurrentAnimationFrame:function () {
            return this.assets.animations.idle.getCurrentFrame();
        }

    });

    return Fire;

});