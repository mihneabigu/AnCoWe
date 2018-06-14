// define(['StaticEntity', 'Assets', 'Tile'],function(StaticEntity,Assets,Tile){
//
//     var assets = Assets.getAssets("manapotion");
//
//     var ManaPotion = StaticEntity.extend({
//         init:function (_handler, _x, _y) {
//             this._super(_handler, _x, _y, Tile.TILEWIDTH * 5, Tile.TILEHEIGHT * 5);
//             this.bounds.x = 0;
//             this.bounds.y = 0;
//             this.bounds.width =30;
//             this.bounds.height = 35;
//         },
//         tick:function () {},
//         render:function(_g){
//
//             _g.myDrawImage(assets.bluepotion,
//                 this.x-this.handler.getGameCamera().getxOffset(),
//                 this.y-this.handler.getGameCamera().getyOffset(),
//                 30, 35);
//
//         }
//     });
//
//     return ManaPotion;
//
// });
//


define(['Creature','Assets'],function(Creature,Assets){

    var ManaPotion = Creature.extend({
        init:function(_handler, _x, _y,_damage){
            this._super(_handler, _x, _y,Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets("manapotion");
            this.bounds.x = 0;
            this.bounds.y = 0;
            this.bounds.width = 30;
            this.bounds.height = 35;
            this.name="potiunemana";
            this.refilledMana=10;

            this.damage=0;

        },
        tick:function(_dt){
            //this.assets.animations.idle.tick();
        },
        render:function(_g){
            _g.myDrawImage(this.assets.bluepotion,
                this.x-this.handler.getGameCamera().getxOffset(),
                this.y-this.handler.getGameCamera().getyOffset(),
                30, 35);
        },
        getCurrentAnimationFrame:function () {
            return this.assets.animations.idle.getCurrentFrame();
        }

    });

    return ManaPotion;

});