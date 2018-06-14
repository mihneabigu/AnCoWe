define(['Class'],function(Class){

    var handler, player, entities;

    var EntityManager = Class.extend({
       init:function(_handler,_player){
           handler = _handler;
           player = _player;
           entities = new Array(player);
       },
        tick:function(_dt){
           entities.sort(compare);
           for(var i =0; i < entities.length; i++){
               var e = entities[i];
               e.tick(_dt);
           }
        },
        render:function(_g){
            entities.forEach(function(e){
                e.render(_g);
            });
        },
        //Getters
        getPlayer:function(){
           return player;
        },
        getHandler:function(){
           return handler;
        },
        getEntities:function(){
           return entities;
        },
        getBoss1:function(){
           for(var i=0; i<entities.length; i++){
               var e = entities[i];
               if(e.name == "BOSS1")
                   return e;
           }
        },
        getBoss2:function(){
            for(var i=0; i<entities.length; i++){
                var e = entities[i];
                if(e.name == "BOSS2")
                    return e;
            }
        },
        getBoss3:function(){
            for(var i=0; i<entities.length; i++){
                var e = entities[i];
                if(e.name == "BOSS3")
                    return e;
            }
        },
        //Setters
        addEntity:function(e){
           entities.push(e)
        },
        removeEntity:function(_ent)
        {

            for(var i=0;i<entities.length;i++)
            {
                var e=entities[i];
                if(e==_ent)
                    entities.splice(i,1);

            }
        }




    });

    //used to sort the array of entities
    function compare(a, b){
        //so we compare from the lowest point of sprite.
        //+...getHeight so that if we have a Tree, it is rendered first if child is lower Y than it. so that tree is behind tree.
        // if child is above Tree bottom(tree.getY + tree.getHeight), child is rendered first and then tree. so the child image is under the tree
        if(a.getY() + a.getHeight() < b.getY()+b.getHeight())

            return -1;
        else
            return 1;
    }

    return EntityManager;

});