define(['Tile'],function(Tile){
    var StoneTile3 = Tile.extend({
        init:function(_id){
            this._super(Tile.assets.stone3,_id);
        },
        //OVERRIDE isSolid FUNCTION
        isSolid:function(){
            return true;
        }
    });
    return StoneTile3;
});