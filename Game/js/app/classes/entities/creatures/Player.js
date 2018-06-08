
define(['Creature','Assets'],function(Creature,Assets){

    var Player = Creature.extend({
        init:function(_handler, _x, _y){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets('player');
            this.bounds.x = 5;
            this.bounds.y = 25;
            this.bounds.width = 15;
            this.bounds.height = 15;

        },
        tick:function(_dt){
            this.getInputs(_dt);
            this.move();
            this.handler.getGameCamera().centerOnEntity(this);
        },
        render:function(_g){
            //_g.myDrawImage(this.assets.idle, this.x, this.y, this.assets.width, this.assets.height);
            _g.myDrawImage(this.assets.idle, this.x-this.handler.getGameCamera().getxOffset(), this.y-this.handler.getGameCamera().getyOffset(), this.assets.width, this.assets.height);
            //_g.myDrawImage(Assets.getAssets("mario").idle, x, y, Assets.getAssets('mario').width, Assets.getAssets('mario').height);


            //this will make a black rectangle ON player, so I know when collision starts
            _g.fillRect(this.x + this.bounds.x - this.handler.getGameCamera().getxOffset(), this.y + this.bounds.y - this.handler.getGameCamera().getyOffset(), this.bounds.width, this.bounds.height);
                        //^this.x so it's relative to our character position

        },
        getInputs:function(_dt){
            this.xMove = 0;
            this.yMove = 0;
            if(this.handler.getKeyManager().up){
                this.yMove -= this.speed * _dt;
            }
            if(this.handler.getKeyManager().down){
                this.yMove += this.speed * _dt;
            }
            if(this.handler.getKeyManager().left){
                this.xMove -= this.speed * _dt;
            }
            if(this.handler.getKeyManager().right){
                this.xMove += this.speed * _dt;
            }
        }

    });

    return Player;

});