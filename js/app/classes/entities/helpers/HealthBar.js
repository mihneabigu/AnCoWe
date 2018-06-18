define(['Helper'],function(Helper){


    var HealthBar = Helper.extend({

        init:function(_handler,_ent,_prop)
        {

            this.handler=_handler;
            this.ent=_ent;
            this.start=_ent.health;
            this.nodes=this.totalnodes=_prop.nodes;
            this.renderOnFull=_prop.renderOnFull ||"on";
            this.width=_prop.width||75;
            this.height=_prop.height ||10;
            this.xoff=_prop.xoffset||- _ent.getWidth()/2+this.width/2;
            this.yoff=_prop.yoffset ||10;
            this.color = _prop.color||"fff";
            this.split=_prop.split||0;
            this.nodewidth=this.width/this.nodes;
            this.nodeheight=this.height;
            this.fadetime=_prop.fadetime || 1;
            this.opacity = _prop.opacity||1;
            this.border = _prop.border|| {"show":true, "color":"black","width":3};
           // setInterval(function(){_ent.takeDamage(2);},1000)
        },
        render:function(_g){

            this.opacity*=this.fadetime;
            _g.globalAlpha=this.opacity;
            if(this.renderOnFull=="on"||this.ent.health<this.start){

                if(this.border.show){
//creez borderul healthbarului
                    _g.fillStyle=this.border.color;
                    _g.fillRect(this.ent.getX() - this.xoff - this.handler.getGameCamera().getxOffset() - this.border.width,
                        this.ent.getY()-this.yoff - this.handler.getGameCamera().getyOffset()-this.border.width,
                        this.width + this.border.width*2,
                        this.height + this.border.width*2);
                }

                for(var i=0;i<this.totalnodes;i++)
                {
                    _g.globalAlpha=0.5*this.opacity;//dead health node

                    _g.fillStyle=this.color;
                    _g.fillRect(-(this.nodewidth*this.totalnodes)+ (this.split/2)+this.totalnodes*this.nodewidth+
                        (this.nodewidth*i)+ this.ent.getX()-this.xoff -
                        this.handler.getGameCamera().getxOffset(),
                        this.ent.getY()-this.yoff-this.handler.getGameCamera().getyOffset(),
                        this.nodewidth - this.split,this.height) ;
                    _g.globalAlpha=1*this.opacity;
                } //render all nodes with low opacity
                for(var j=0;j<this.nodes;j++)
                {
                    _g.fillStyle=this.color;

                    _g.fillRect(-(this.nodewidth*this.totalnodes)+ (this.split/2)+this.totalnodes*this.nodewidth+
                        (this.nodewidth*j)+ this.ent.getX()-this.xoff -
                        this.handler.getGameCamera().getxOffset(),
                        this.ent.getY()-this.yoff-this.handler.getGameCamera().getyOffset(),
                        this.nodewidth - this.split,this.height);

                }//render all healthy nodes with max opacity
            }
            _g.globalAlpha=1;
        },

        update:function(){

            this.opacity = 1;
            this.nodes=Math.ceil(this.totalnodes*(this.ent.health/this.start)); //nr nodes = nr nodes * cat hp are acu / cat hp avea

        }
    });
//statice:
    HealthBar.DEFAULT_NODES=10;
    HealthBar.DEFAULT_Y_OFFSET=10;
    HealthBar.DEFAULT_X_OFFSET=0;
    return HealthBar;
});