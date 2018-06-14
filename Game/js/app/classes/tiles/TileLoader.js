define(['Tile','GrassTile','DirtTile','StoneTile','StoneTile2','StoneTile3','GrassTile2'],function(Tile,GrassTile,DirtTile,StoneTile,StoneTile2,StoneTile3,GrassTile2){
    Tile.grassTile = new GrassTile(0);
    Tile.grassTile2 = new GrassTile2(5);
    //Tile.dirtTile = new DirtTile(1);
    Tile.stoneTile = new StoneTile(2);
    Tile.stoneTile2 = new StoneTile2(3);
    Tile.stoneTile3 = new StoneTile3(4);

    return Tile;
});