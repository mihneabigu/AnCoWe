define(['Tile'],function(Tile){
    var GrassTile2 = Tile.extend({
        init:function(_id){
            this._super(Tile.assets.grass2,_id);
        }
    });
    return GrassTile2;
});