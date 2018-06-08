
define(['Class','TileLoader','Utils'],function(Class,Tile,Utils){


    var World = Class.extend({
       init:function( _path, _handler ){
           this.tiles = []; // multi dimensional array.
                            // but we cant make [][] in JS.
                            // SOL: we can make an array within an array

           // this.width = 10;
           // this.height = 10;
           this.loadWorld( _path );
           this.handler = _handler;
           this.handler.setWorld(this);     //_handler.setWorld(this);

       },
        loadWorld( _path ){
                //Generate map manually
            // for(x=0; x<this.width; x++){
            //     for(y=0; y<this.height; y++){
            //         if(!this.tiles[x])  //if is not set (so it does not exist)
            //             this.tiles[x] = [];     //we make it an array
            //         this.tiles[x][y] = 0;       //0 = grass tile
            //     }
            // }

            var file = Utils.loadFileAsString(_path);
            var tokens = file.replace( /\n/g, " ").split(" ");
                                    // ^ this will ignore any new lines. then split it by spaces
            this.width = tokens[0];
            this.height = tokens[1];
            this.spawnX = tokens[2] * Tile.TILEWIDTH;
            this.spawnY = tokens[3] * Tile.TILEHEIGHT;

            for(y=0; y<this.height; y++){
                for(x=0; x<this.width; x++){
                    if(!this.tiles[x])
                        this.tiles[x] = [];
                        this.tiles[x][y] = parseInt(tokens[(x + (y * this.width)) + 4]);    //+4 cuz +4 was the info in tokens[1,2,3,4], the first lines in map being width/height and spawn location
                }
            }

        },
        tick:function( _dt ){

        },
        render:function( _g ){
            for(y=0;y<this.height;y++){
                for(x=0;x<this.width;x++){
                    this.getTile(x,y).render( _g, x * Tile.TILEWIDTH - this.handler.getGameCamera().getxOffset(), y * Tile.TILEHEIGHT - this.handler.getGameCamera().getyOffset());
                }
            }

        },
        getTile:function(_x, _y){
           return Tile.tiles[this.tiles[_x][_y]];
        },
        getWidth:function(){
            return this.width;
        },
        getHeight:function(){
           return this.height;
        }

    });

    return World;

});