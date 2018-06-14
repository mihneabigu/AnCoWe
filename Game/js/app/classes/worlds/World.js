
define(['Class','TileLoader','Utils','EntityManager', 'Player','Tree','Fire','Skeleton','SkeletBun', 'Orb', 'ManaPotion','Bat',
        'Darkfire','Jadeslashitem','Explosionitem','Firespellitem','Slashitem','Darkslashitem','Door','Key','Boss','Boss2','Boss3','Dispenser','Portal'],
    function(Class,Tile,Utils,EntityManager,Player,Tree,Fire,Skeleton,SkeletBun,Orb,ManaPotion,Bat,
             Darkfire,Jadeslashitem,Explosionitem,Firespellitem,Slashitem,Darkslashitem,Door,Key,Boss,Boss2,Boss3,Dispenser,Portal){
        var tree;
        var World = Class.extend({
            init:function( _path, _handler ){
                this.tiles = []; // multi dimensional array.
                                 // but we cant make [][] in JS.
                                 // SOL: we can make an array within an array

                // this.width = 10;
                // this.height = 10;
                this.handler = _handler;
                this.handler.setWorld(this);

                this.entityManager = new EntityManager(_handler, new Player(_handler,100,100));
                //this.entityManager.addEntity(new Tree(_handler,100,400));
                this.entityManager.addEntity(new Tree(_handler, 1500, 1600));
                this.entityManager.addEntity(new Orb(_handler,600,600));
                //  this.entityManager.addEntity(new ManaPotion(_handler,200,200));
                // this.entityManager.addEntity(new Boss(_handler,1735,1800));
                //this.entityManager.addEntity(new Boss2(_handler,1535,1600));
                //  this.entityManager.addEntity(new Boss3(_handler,1300,1200));
                //  this.entityManager.addEntity(new Bat(_handler,300,200));
                // this.entityManager.addEntity(new Dispenser(_handler,350,200));


                //  this.entityManager.addEntity(new Door(_handler,1200,96));
                // this.entityManager.addEntity(new Key(_handler,100,206));
                // this.entityManager.addEntity(new Darkfire(_handler, 200, 500, 1));

                // for(var i=0;i<10;i++) {
                //     this.entityManager.addEntity(new Fire(_handler, 500 + i * 30, 500, 1));
                //     this.entityManager.addEntity(new Fire(_handler, 500 , 600+i*30, 1));
                // }
                //    this.entityManager.addEntity(new Jadeslashitem(_handler, 100, 100, 0));
                //  this.entityManager.addEntity(new Darkslashitem(_handler, 150, 100, 0));
                this.entityManager.addEntity(new Explosionitem(_handler, 160, 600, 0));
                //   this.entityManager.addEntity(new Firespellitem(_handler, 300, 200, 0));
                this.entityManager.addEntity(new Slashitem(_handler, 130, 2200, 0));

                //  for(var i=0;i<3;i++)
                //   for(var j=0;j<3;j++)
                //    {this.entityManager.addEntity(new Skeleton(_handler,300+i*70,30+j*70));

                // }




                this.loadWorld( _path );
                this.entityManager.getPlayer().setX(this.spawnX);
                this.entityManager.getPlayer().setY(this.spawnY);


                //tree = new Tree(_handler, 40, 50);
                //tree2 = new Tree(_handler, 430, 50);

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

                for (y = 0; y < this.height; y++) {
                    for (x = 0; x < this.width; x++) {
                        if (!this.tiles[x])
                            this.tiles[x] = [];
                        this.tiles[x][y] = parseInt(tokens[(x + (y * this.width)) + 4]);    //+4 cuz +4 was the info in tokens[1,2,3,4], the first lines in map being width/height and spawn location
                        if (this.tiles[x][y] == 0) {
                            //this.entityManager.addEntity(new Skeleton(this.handler, x * Tile.TILEWIDTH , y * Tile.TILEHEIGHT ));
                            var randomTile = Math.random() * 1000;
                            if (randomTile <= 150)
                                this.tiles[x][y] = 5;
                        }
                        if (this.tiles[x][y] == 7) {
                            this.entityManager.addEntity(new Tree(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == 9) {
                            this.entityManager.addEntity(new Skeleton(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == 8) {
                            this.entityManager.addEntity(new Key(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == 6) {
                            this.entityManager.addEntity(new Door(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == -1) {
                            this.entityManager.addEntity(new Boss(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == -2) {
                            this.entityManager.addEntity(new Boss2(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == -3) {
                            this.entityManager.addEntity(new Boss3(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == -7) {
                            this.entityManager.addEntity(new Dispenser(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT,0));
                            this.tiles[x][y] = 2;

                        }
                        if (this.tiles[x][y] == -6) {
                            this.entityManager.addEntity(new Dispenser(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT,1));
                            this.tiles[x][y] = 2;

                        }
                        if (this.tiles[x][y] == -9) {
                            this.entityManager.addEntity(new Dispenser(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT,2));
                            this.tiles[x][y] = 2;

                        }
                        if (this.tiles[x][y] == -8) {
                            this.entityManager.addEntity(new Dispenser(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT,3));
                            this.tiles[x][y] = 2;

                        }
                        if (this.tiles[x][y] == -5) {
                            this.entityManager.addEntity(new Bat(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == 44) {
                            this.entityManager.addEntity(new Portal(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == 65) {
                            this.entityManager.addEntity(new Fire(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }
                        if (this.tiles[x][y] == 66) {
                            this.entityManager.addEntity(new Darkfire(this.handler, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT));
                            this.tiles[x][y] = 0;

                        }






                    }
                }

            },
            tick:function( _dt ){
                this.entityManager.tick(_dt);
            },
            render:function( _g ){
                for(y=0;y<this.height;y++){
                    for(x=0;x<this.width;x++){
                        {this.getTile(x,y).render( _g, x * Tile.TILEWIDTH - this.handler.getGameCamera().getxOffset(), y * Tile.TILEHEIGHT - this.handler.getGameCamera().getyOffset());
                            // if(this.getTile(x,y)==6)
                            //{this.entityManager.addEntity(new Door(_handler,x * Tile.TILEWIDTH- this.handler.getGameCamera().getxOffset(),y * Tile.TILEHEIGHT- this.handler.getGameCamera().getyOffset()));
                            //   this.tiles[x][y]=0;
                            //   }



                        }
                    }
                }
                //tree.render(_g);
                //tree2.render(_g);
                this.entityManager.render(_g);

            },
            getTile:function(_x, _y){
                return Tile.tiles[this.tiles[_x][_y]];
            },
            getWidth:function(){
                return this.width;
            },
            getHeight:function(){
                return this.height;
            },
            getEntityManager:function(){
                return this.entityManager;
            }

        });

        return World;

    });