
define(['Creature','Assets'],function(Creature,Assets){

    var Jadeslashboss = Creature.extend({
        init:function(_handler, _x, _y,_damage){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("jadeslash");
            this.bounds.x = -10;
            this.bounds.y = -10;
            this.bounds.width = 148;
            this.bounds.height = 148;
            this.damage=1;
            this.collideable=0;
            this.lifetime=100;
            this.Bun=0;
            this.name="JADESLASHBOSS";
            this.angle=0;
            this.dealtDamage=0;

        },
        tick:function(_dt){
            this.assets.animations.idle.tick();
            this.lifetime--;
            if(this.lifetime==0) {
                this.delete();

            }
            this.angle=this.angle+0.3;

            this.x=this.handler.getWorld().getEntityManager().getBoss2().getX()-21+Math.cos(this.angle)*70;
            this.y=this.handler.getWorld().getEntityManager().getBoss2().getY()-20+Math.sin(this.angle)*70;



        },
        render:function(_g){

            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), 100, 100);

        },
        getCurrentAnimationFrame:function () {
            return this.assets.animations.idle.getCurrentFrame();
        },


    });

    return Jadeslashboss;

});