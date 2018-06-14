
define(['Creature','Assets'],function(Creature,Assets){


    var Autoattack = Creature.extend({
        init:function(_handler, _x, _y,_damage,_dir){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("autoattack");
            this.bounds.x = -10;
            this.bounds.y = -10;
            this.dir=_dir;
            this.bounds.width = 25;
            this.bounds.height = 25;
            this.damage=_damage;
            this.Bun=1;
            this.lifetime=20;
            this.collideable=0;
            this.speed=this.speed*2;
            this.name="AAttack";



        },
        tick:function(_dt){
            this.getInputs(_dt);
            this.move();

          //  this.assets.animations.idle.tick();


        },

        render:function(_g){

            /*
            //OLD 1 FRAME + TEST COLLISION

            //_g.myDrawImage(this.assets.idle, this.x, this.y, this.assets.width, this.assets.height);
            _g.myDrawImage(this.assets.idle, this.x-this.handler.getGameCamera().getxOffset(), this.y-this.handler.getGameCamera().getyOffset(), this.assets.width, this.assets.height);
            //_g.myDrawImage(Assets.getAssets("mario").idle, x, y, Assets.getAssets('mario').width, Assets.getAssets('mario').height);


            //this will make a black rectangle ON player, so I know when collision starts
            _g.fillRect(this.x + this.bounds.x - this.handler.getGameCamera().getxOffset(), this.y + this.bounds.y - this.handler.getGameCamera().getyOffset(), this.bounds.width, this.bounds.height);
                        //^this.x so it's relative to our character position
            */

            _g.myDrawImage(this.getCurrentAnimationFrame(), this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), 30, 30);

            this.lifetime--;
            if(this.lifetime==0)
            {

                this.delete();

            }

        },
        getInputs:function(_dt){


            this.xMove = 0;
            this.yMove = 0;

            if(this.lifetime>0){ //ifu asta nu merge pus mai sus. nush dc
                if(this.dir==0){
                    this.yMove -= this.speed * _dt;
                }
                if(this.dir==1){
                    this.yMove += this.speed * _dt;
                }
                if(this.dir==2){
                    this.xMove -= this.speed * _dt;
                }
                if(this.dir==3){
                    this.xMove += this.speed * _dt;
                }}

        },
        getCurrentAnimationFrame:function () {
            if(this.lifetime>0)
            {
                return this.assets.animations.idle.getCurrentFrame();

            }
        }



    });

    return Autoattack;

});