define(['Class', 'ImageLoader', 'SpriteSheet', 'Animation'], function (Class, ImageLoader, SpriteSheet, Animation) {

    var DEFAULT_WIDTH = 32, DEFAULT_HEIGHT = 32;
    var assets = {};

    var Assets = Class.extend({
        init: function (_name, _path, _width, _height) {
            assets[_name] = this;
            this.name = _name;
            this.path = _path;
            this.width = _width;
            this.height = _height;
            this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
            this.animations = {};
        },
        addAnimation: function (_name, _animation) {
            this.animations[_name] = _animation;

        }

    });

    Assets.DEFAULT_WIDTH = DEFAULT_WIDTH;
    Assets.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
    Assets.getAssets = function (_name) {
        return assets[_name];
    };

    //Create Player Assets
    // var player = new Assets("player", "res/textures/spider.png", 120, 130);
    //
    // //Build Frames for Player animation
    // var framespeed = 1;   //30 milliseconds        //weird. de la lag merge mai greu decat ar trebui
    // var wrframes = [];
    // var wlframes = [];
    // var wuframes = [];
    // var wdframes = [];
    // var wrrow = 7;
    // var wlrow = 5;
    // var wurow = 6;
    // var wdrow = 4;
    // for (var i = 0; i < 10; i++) {
    //     wrframes.push({
    //         frame: player.sheet.crop(player.width * i, player.height * wrrow, player.width, player.height),   //pozitia din spriteSheet, col and row
    //         speed: framespeed
    //     });
    //     wlframes.push({
    //         frame: player.sheet.crop(player.width * i, player.height * wlrow, player.width, player.height),   //pozitia din spriteSheet, col and row
    //         speed: framespeed
    //     });
    //     wuframes.push({
    //         frame: player.sheet.crop(player.width * i, player.height * wurow, player.width, player.height),   //pozitia din spriteSheet, col and row
    //         speed: framespeed
    //     });
    //     wdframes.push({
    //         frame: player.sheet.crop(player.width * i, player.height * wdrow, player.width, player.height),   //pozitia din spriteSheet, col and row
    //         speed: framespeed
    //     });
    // }
    //
    // var idleframes = [
    //     {frame: player.sheet.crop(0, 0, player.width, player.height), speed: framespeed * 800},
    //     {frame: player.sheet.crop(player.width, 0, player.width, player.height), speed: framespeed * 80},
    //     {frame: player.sheet.crop(player.width * 2, 0, player.width, player.height), speed: framespeed * 80},
    // ];
    //
    // //Create Animations
    // player.addAnimation("walk_right", new Animation(wrframes));
    // player.addAnimation("walk_left", new Animation(wlframes));
    // player.addAnimation("walk_up", new Animation(wuframes));
    // player.addAnimation("walk_down", new Animation(wdframes));
    // player.addAnimation("idle", new Animation(idleframes));

    //Create Player Assets
    var player = new Assets("player", "res/textures/spider.png", 41, 44);

    //Build Frames for Player animation
    var framespeed = 1;   //30 milliseconds        //weird. de la lag merge mai greu decat ar trebui
    var wrframes = [];
    var wlframes = [];
    var wuframes = [];
    var wdframes = [];
    for (var i = 0; i < 3; i++) {
        wrframes.push({
            frame: player.sheet.crop(41 * i, 42 * 2, 41, 44),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        wlframes.push({
            frame: player.sheet.crop(41 * i, 42, 41, 44),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        wuframes.push({
            frame: player.sheet.crop(41 * i, 44 * 3, 41, 44),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        wdframes.push({
            frame: player.sheet.crop(41 * i, 0, 41, 44),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
    }

    var idleframes = [
        {frame: player.sheet.crop(41, 0, 41, 44), speed: framespeed * 800},

    ];

    //Create Animations
    player.addAnimation("walk_right", new Animation(wrframes));
    player.addAnimation("walk_left", new Animation(wlframes));
    player.addAnimation("walk_up", new Animation(wuframes));
    player.addAnimation("walk_down", new Animation(wdframes));
    player.addAnimation("idle", new Animation(idleframes));

    //CREATE SKELETON
    var skeleton = new Assets("skeleton", "res/textures/skeleton.png", 50, 57);

    //Build Frames for Player animation

    var swrframes = [];
    var swlframes = [];
    var swuframes = [];
    var swdframes = [];
    var swrrow = 1;
    var swlrow = 3;
    var swurow = 0;
    var swdrow = 2;
    for (var i = 0; i < 3; i++) {
        swrframes.push({
            frame: skeleton.sheet.crop(skeleton.width * i, skeleton.height * swrrow, skeleton.width, skeleton.height),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        swlframes.push({
            frame: skeleton.sheet.crop(skeleton.width * i, skeleton.height * swlrow, skeleton.width, skeleton.height),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        swuframes.push({
            frame: skeleton.sheet.crop(skeleton.width * i, skeleton.height * swurow, skeleton.width, skeleton.height),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        swdframes.push({
            frame: skeleton.sheet.crop(skeleton.width * i, skeleton.height * swdrow, skeleton.width, skeleton.height),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
    }

    var sidleframes = [

        {
            frame: skeleton.sheet.crop(skeleton.width * 1, skeleton.height * 2, skeleton.width, skeleton.height),
            speed: framespeed * 80
        },
    ];


    var deadsk = new Assets("deadsk", "res/textures/shit.png", 60, 60);

    var sdeadframes = [

        {frame: deadsk.sheet.crop(0, 0, 60, 60), speed: framespeed * 80},

    ];
    //Create Animations
    skeleton.addAnimation("walk_right", new Animation(swrframes));
    skeleton.addAnimation("walk_left", new Animation(swlframes));
    skeleton.addAnimation("walk_up", new Animation(swuframes));
    skeleton.addAnimation("walk_down", new Animation(swdframes));
    skeleton.addAnimation("idle", new Animation(sidleframes));
    skeleton.addAnimation("dead", new Animation(sdeadframes));

    // //Player assets
    // var player = new Assets("player", "res/textures/marioo.png", 28, 42);
    // player.idle = player.sheet.crop(3, 0, 28, 42);

    //Tree assets
    //var tree = new Assets("tree", "res/textures/tree_02.png",726, 798);
    var tree = new Assets("tree", "res/textures/tree_02.png", 726, 798);
    tree.redwood = tree.sheet.crop(0, 0, 726, 798);

    //Tile assets
    var tiles = new Assets("tiles", "res/textures/tiles2.jpg", 32, 32);  //size of tile =30,30
    tiles.dirt = tiles.sheet.crop(0, tiles.height * 5, tiles.width, tiles.height);

    tiles.grass = tiles.sheet.crop(32 * 6, tiles.height * 8, tiles.width, tiles.height);
    tiles.grass2 = tiles.sheet.crop(0, tiles.height * 8, tiles.width, tiles.height);
    tiles.stone = tiles.sheet.crop(0, 0, tiles.width, tiles.height);
    tiles.stone2 = tiles.sheet.crop(32 * 3, 0, tiles.width, tiles.height);
    tiles.stone3 = tiles.sheet.crop(32 * 6, 0, tiles.width, tiles.height);


    //Fire assets
    var fire = new Assets("fire", "res/textures/fire.png", 64, 128);
    var fireframes = [];

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 4; j++) {
            fireframes.push({
                frame: fire.sheet.crop(i * 64, j * 128, 64, 128), speed: framespeed * 80
            })
        }

    }

    fire.addAnimation("idle", new Animation(fireframes));

//Explosion Asset
    var explosion = new Assets("explosion", "res/textures/explosion.png", 64, 128);
    var explosionframes = [];
    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 5; i++) {
            explosionframes.push({frame: explosion.sheet.crop(i * 128, j * 128, 128, 128), speed: framespeed * 10})
        }

    }

    explosion.addAnimation("idle", new Animation(explosionframes));


    //Orb assets
    var orb = new Assets("Orb", "res/textures/Orb.png", 84.2, 84.2);
    var orbframes = [];

    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            orbframes.push({frame: orb.sheet.crop(i * 84.2, j * 84.2, 84.2, 84.2), speed: framespeed * 80})
        }
    }

    orb.addAnimation("idle", new Animation(orbframes));


    //Mana Potion assets
    var manap = new Assets("manapotion", "res/textures/manapot.png", 30, 35);
    manap.bluepotion = manap.sheet.crop(0, 0, 30, 35);


    //Bat assets
    var bat = new Assets("bat", "res/textures/bat.png", 40, 60);

    var batframes_up = [];
    var batframes_down = [];
    var batframes_left = [];
    var batframes_right = [];

    for (var i = 0; i < 3; i++) {
        batframes_up.push({
            frame: bat.sheet.crop(40 * i, 60 * 3, 40, 60),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        batframes_down.push({
            frame: bat.sheet.crop(40 * i, 60 * 0, 40, 60),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        batframes_left.push({
            frame: bat.sheet.crop(40 * i, 60 * 1, 40, 60),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        batframes_right.push({
            frame: bat.sheet.crop(40 * i, 60 * 2, 40, 60),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
    }

    var batframes_idle = [

        {frame: bat.sheet.crop(0, 0, 40, 60), speed: framespeed * 80},
        {frame: bat.sheet.crop(40, 0, 40, 60), speed: framespeed * 80},
        {frame: bat.sheet.crop(40 * 2, 0, 40, 60), speed: framespeed * 80},

    ];

    var deatbat = new Assets("deadbat", "res/textures/shit.png", 60, 60);

    var deadbatframe = [

        {frame: deatbat.sheet.crop(0, 0, 60, 60), speed: framespeed * 80},

    ];


    bat.addAnimation("walk_right", new Animation(batframes_right));
    bat.addAnimation("walk_left", new Animation(batframes_left));
    bat.addAnimation("walk_up", new Animation(batframes_up));
    bat.addAnimation("walk_down", new Animation(batframes_down));
    bat.addAnimation("idle", new Animation(batframes_idle));
    bat.addAnimation("dead", new Animation(deadbatframe));


    var slash = new Assets("slash", "res/textures/slash.png", 96, 96);

    //Build Frames for Slash animation

    var sswrframes = [];
    var sswlframes = [];
    var sswuframes = [];
    var sswdframes = [];


    for (var i = 0; i < 5; i++) {
        sswdframes.push({
            frame: slash.sheet.crop(slash.width * i, slash.height * 0, slash.width, slash.height),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        sswlframes.push({
            frame: slash.sheet.crop(slash.width * i, slash.height * 1, slash.width, slash.height),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        sswuframes.push({
            frame: slash.sheet.crop(slash.width * i, slash.height * 2, slash.width, slash.height),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        sswrframes.push({
            frame: slash.sheet.crop(slash.width * i, slash.height * 3, slash.width, slash.height),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
    }


    //Create Animations
    slash.addAnimation("walk_right", new Animation(sswrframes));
    slash.addAnimation("walk_left", new Animation(sswlframes));
    slash.addAnimation("walk_up", new Animation(sswuframes));
    slash.addAnimation("walk_down", new Animation(sswdframes));


    //---------

    var autoattack = new Assets("autoattack", "res/textures/autoattack.png", 16, 15);


    var aframes = [];

    aframes.push({frame: autoattack.sheet.crop(0, 0, 16, 15), speed: framespeed});


    //Create Animations
    autoattack.addAnimation("idle", new Animation(aframes));


    var jadeslash = new Assets("jadeslash", "res/textures/jadeslash.png", 192, 192);
    var jadespellframe = [];

    for (var j = 0; j < 5; j++) {
        for (var i = 0; i < 6; i++) {
            jadespellframe.push({frame: jadeslash.sheet.crop(i * 192, j * 192, 192, 192), speed: framespeed * 10})
        }

    }

    jadeslash.addAnimation("idle", new Animation(jadespellframe));


    var firespell = new Assets("firespell", "res/textures/firespell.png", 192, 192);
    var firespellframe = [];

    for (var j = 0; j < 5; j++) {
        for (var i = 0; i < 5; i++) {
            firespellframe.push({
                frame: firespell.sheet.crop(i * 192 + 2, j * 192 + 2, 188, 188),
                speed: framespeed * 1
            })
        }

    }

    firespell.addAnimation("idle", new Animation(firespellframe));

    var darkslash = new Assets("darkslash", "res/textures/darkslash.png", 192, 192);
    var darkslashframe = [];

    for (var j = 0; j < 5; j++) {
        for (var i = 0; i < 5; i++) {
            darkslashframe.push({
                frame: darkslash.sheet.crop(i * 192 + 2, j * 192 + 2, 188, 188),
                speed: framespeed * 1
            })
        }

    }

    darkslash.addAnimation("idle", new Animation(darkslashframe));


    var darkfire = new Assets("darkfire", "res/textures/darkfire.png", 192, 192);
    var darkfireframes = [];

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            darkfireframes.push({
                frame: darkfire.sheet.crop(i * 192, j * 192, 192, 192), speed: framespeed * 1
            })
        }

    }

    darkfire.addAnimation("idle", new Animation(darkfireframes));


    // KEY and DOOR assets


    var door = new Assets("door", "res/textures/door.png", 32, 64);

    var openframe = [];
    var closeframe = [];


    closeframe.push({
        frame: door.sheet.crop(0, 0, 32, 64),   //pozitia din spriteSheet, col and row
        speed: framespeed * 1000
    });
    openframe.push({
        frame: door.sheet.crop(32, 0, 32, 64),   //pozitia din spriteSheet, col and row
        speed: framespeed * 1000
    });

    door.addAnimation("openframe", new Animation(openframe));
    door.addAnimation("closeframe", new Animation(closeframe));

    var key = new Assets("key", "res/textures/key.png", 32, 32);

    var keyframe = [

        {frame: key.sheet.crop(0, 0, 32, 32), speed: framespeed * 1000},

    ];

    key.addAnimation("idle", new Animation(keyframe));


    //BOSS 1 assets

    var boss1 = new Assets("boss1", "res/textures/boss.png", 40, 60);

    var bossframes1_up = [];
    var bossframes1_down = [];
    var bossframes1_left = [];
    var bossframes1_right = [];

    for (var i = 0; i < 3; i++) {
        bossframes1_down.push({
            frame: boss1.sheet.crop(288 + i * 32, 0 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        bossframes1_left.push({
            frame: boss1.sheet.crop(288 + i * 32, 1 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        bossframes1_right.push({
            frame: boss1.sheet.crop(288 + i * 32, 2 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        bossframes1_up.push({
            frame: boss1.sheet.crop(288 + i * 32, 3 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
    }

    var bossframes1_idle = [

        {frame: boss1.sheet.crop(288, 0, 32, 32), speed: framespeed * 80},
    ];

    var deadboss1 = new Assets("deadboss1", "res/textures/shit.png", 60, 60);
    var deadbossframe1 = [
        {frame: deadboss1.sheet.crop(0, 0, 60, 60), speed: framespeed * 80},
    ];

    boss1.addAnimation("walk_right", new Animation(bossframes1_right));
    boss1.addAnimation("walk_left", new Animation(bossframes1_left));
    boss1.addAnimation("walk_up", new Animation(bossframes1_up));
    boss1.addAnimation("walk_down", new Animation(bossframes1_down));
    boss1.addAnimation("idle", new Animation(bossframes1_idle));
    boss1.addAnimation("dead", new Animation(deadbossframe1));


    //BOSS 2 assets

    var boss2 = new Assets("boss2", "res/textures/boss.png", 40, 60);

    var bossframes2_up = [];
    var bossframes2_down = [];
    var bossframes2_left = [];
    var bossframes2_right = [];

    for (var i = 0; i < 3; i++) {
        bossframes2_down.push({
            frame: boss2.sheet.crop(192 + i * 32, 0 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        bossframes2_left.push({
            frame: boss2.sheet.crop(192 + i * 32, 1 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        bossframes2_right.push({
            frame: boss2.sheet.crop(192 + i * 32, 2 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        bossframes2_up.push({
            frame: boss2.sheet.crop(192 + i * 32, 3 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
    }

    var bossframes2_idle = [

        {frame: boss2.sheet.crop(192, 0, 32, 32), speed: framespeed * 80},
    ];

    var deadboss2 = new Assets("deadboss2", "res/textures/shit.png", 60, 60);
    var deadbossframe2 = [
        {frame: deadboss2.sheet.crop(0, 0, 60, 60), speed: framespeed * 80},
    ];

    boss2.addAnimation("walk_right", new Animation(bossframes2_right));
    boss2.addAnimation("walk_left", new Animation(bossframes2_left));
    boss2.addAnimation("walk_up", new Animation(bossframes2_up));
    boss2.addAnimation("walk_down", new Animation(bossframes2_down));
    boss2.addAnimation("idle", new Animation(bossframes2_idle));
    boss2.addAnimation("dead", new Animation(deadbossframe2));


    //BOSS 3 assets

    var boss3 = new Assets("boss3", "res/textures/boss.png", 40, 60);

    var bossframes3_up = [];
    var bossframes3_down = [];
    var bossframes3_left = [];
    var bossframes3_right = [];

    for (var i = 0; i < 3; i++) {
        bossframes3_down.push({
            frame: boss3.sheet.crop(0 + i * 32, 4 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        bossframes3_left.push({
            frame: boss3.sheet.crop(0 + i * 32, 5 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        bossframes3_right.push({
            frame: boss3.sheet.crop(0 + i * 32, 6 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
        bossframes3_up.push({
            frame: boss3.sheet.crop(0 + i * 32, 7 * 32, 32, 32),   //pozitia din spriteSheet, col and row
            speed: framespeed
        });
    }

    var bossframes3_idle = [

        {frame: boss3.sheet.crop(0, 4 * 32, 32, 32), speed: framespeed * 80},
    ];

    var deadboss3 = new Assets("deadboss3", "res/textures/shit.png", 60, 60);
    var deadbossframe3 = [
        {frame: deadboss3.sheet.crop(0, 0, 60, 60), speed: framespeed * 80},
    ];

    boss3.addAnimation("walk_right", new Animation(bossframes3_right));
    boss3.addAnimation("walk_left", new Animation(bossframes3_left));
    boss3.addAnimation("walk_up", new Animation(bossframes3_up));
    boss3.addAnimation("walk_down", new Animation(bossframes3_down));
    boss3.addAnimation("idle", new Animation(bossframes3_idle));
    boss3.addAnimation("dead", new Animation(deadbossframe3));


    //DISPENSER / TRAPS assets


    var dispenser = new Assets("dispenser", "res/textures/dispenser.png", 64, 64);

    var stangadispenserframe = [

        {frame: dispenser.sheet.crop(0, 0, 64, 64), speed: framespeed * 1000}


    ];
    var dreaptadispenserframe = [

        {frame: dispenser.sheet.crop(64, 0, 64, 64), speed: framespeed * 1000}
    ];

    var susdispenserframe = [

        {frame: dispenser.sheet.crop(128, 0, 64, 64), speed: framespeed * 1000}
    ];

    var josdispenserframe = [

        {frame: dispenser.sheet.crop(192, 0, 64, 64), speed: framespeed * 1000}
    ];


    dispenser.addAnimation("fata_stanga", new Animation(stangadispenserframe));
    dispenser.addAnimation("fata_dreapta", new Animation(dreaptadispenserframe));
    dispenser.addAnimation("fata_sus", new Animation(susdispenserframe));
    dispenser.addAnimation("fata_jos", new Animation(josdispenserframe));


    //Coin assets
    var coin = new Assets("coin", "res/textures/coin.png", 42.85, 42);
    var coinframes = [];


    for (var i = 0; i < 7; i++) {
        coinframes.push({frame: coin.sheet.crop(i * 42.85, 0, 42.85, 42), speed: framespeed * 80})
    }

    coin.addAnimation("idle", new Animation(coinframes));


    //Portal assets
    var portal = new Assets("portal", "res/textures/portal.png", 42.2, 113);
    var portalframe = [];


    for (var i = 0; i < 4; i++) {
        portalframe.push({frame: portal.sheet.crop(i * 42.2, 0, 42.2, 113), speed: framespeed * 80})
    }

    portal.addAnimation("idle", new Animation(portalframe));



    return Assets;

});