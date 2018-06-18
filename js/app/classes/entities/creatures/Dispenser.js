
define(['Creature','Assets','Slashenemy'],function(Creature,Assets,Slashenemy){

    var Dispenser = Creature.extend({
        init:function(_handler, _x, _y,_fata){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("dispenser");
            this.bounds.x = 0;
            this.bounds.y = 0;
            this.bounds.width = 32;
            this.bounds.height = 32;
            this.Bun=0;
            this.damage=1;
            this.fata=_fata;
            this.spellCooldown=0;
            this.random=0;

        },
        tick:function(_dt){

            this.assets.animations.fata_stanga.tick();
            this.assets.animations.fata_dreapta.tick();
            this.assets.animations.fata_sus.tick();
            this.assets.animations.fata_jos.tick();


            this.random=Math.ceil(Math.random()*100);
            this.spellCooldown--;

                    if(this.spellCooldown<=0&&this.random<10)
                    {this.handler.getWorld().getEntityManager().addEntity(new Slashenemy(this.handler, this.x , this.y, 1, this.fata));


                        this.spellCooldown = 20;}







        },
        render:function(_g){
            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), 32, 32);

        },
        getCurrentAnimationFrame:function () {
            if(this.fata==0)
                return this.assets.animations.fata_sus.getCurrentFrame();
            if(this.fata==1)
                return this.assets.animations.fata_jos.getCurrentFrame();
            if(this.fata==2)
            return this.assets.animations.fata_stanga.getCurrentFrame();
            if(this.fata==3)
                return this.assets.animations.fata_dreapta.getCurrentFrame();



        }

    });

    return Dispenser;

});