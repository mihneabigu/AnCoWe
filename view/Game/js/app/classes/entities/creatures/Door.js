
define(['Creature','Assets'],function(Creature,Assets){

    var Door = Creature.extend({
        init:function(_handler, _x, _y, _id){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("door");
            this.bounds.x = 0;
            this.bounds.y = 0;
            this.bounds.width = 32;
            this.bounds.height = 64;
            this.damage=0;
            this.collideable=1;
            this.opened=0;
            this.name="DOOR";
            this.id = _id;


        },
        tick:function(_dt){

            if(this.opened==0)
            this.assets.animations.closeframe.tick();
            else
                this.assets.animations.openframe.tick();

        },
        render:function(_g){
            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), 32, 64);

        },
        getCurrentAnimationFrame:function () {


            if(this.opened==0)
            return this.assets.animations.closeframe.getCurrentFrame();
            else
                return this.assets.animations.openframe.getCurrentFrame();
        },
        open:function()
        {
            this.opened=1;
            this.collideable=0;
        }

    });

    return Door;

});