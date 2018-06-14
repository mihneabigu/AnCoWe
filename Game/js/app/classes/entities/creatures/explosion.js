
define(['Creature','Assets'],function(Creature,Assets){

    var Explosion = Creature.extend({
        init:function(_handler, _x, _y,_damage){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("explosion");
            this.bounds.x = -10;
            this.bounds.y = -10;
            this.bounds.width = 148;
            this.bounds.height = 148;
            this.damage=_damage;
            this.collideable=0;
            this.lifetime=20;
            this.Bun=1;
            this.name="EXPLOSION";

        },
        tick:function(_dt){
            this.assets.animations.idle.tick();
            this.lifetime--;
            if(this.lifetime==0) {
                this.delete();

            }

            this.x=this.handler.getWorld().getEntityManager().getPlayer().getX()-71;
            this.y=this.handler.getWorld().getEntityManager().getPlayer().getY()-50;


        },
        render:function(_g){

            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), 200, 200);

        },
        getCurrentAnimationFrame:function () {
            return this.assets.animations.idle.getCurrentFrame();
        },


    });

    return Explosion;

});