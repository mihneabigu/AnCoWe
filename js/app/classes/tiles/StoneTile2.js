define(['Tile'],function(Tile){
    var StoneTile2 = Tile.extend({
        init:function(_id){
            this._super(Tile.assets.stone2,_id);
        },
        //OVERRIDE isSolid FUNCTION
        isSolid:function(){
            return true;
        }
    });
    return StoneTile2;
});