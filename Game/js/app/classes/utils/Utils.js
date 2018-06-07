
define(['Jquery'],function($){

    var Utils = {};

    //create ajax call
    //pass in a path , and return the contents as a String
    Utils.loadFileAsString = function(_path){
            var string= "";
            $.ajax({                //video10 min 5:30
                url: _path,
                type: "get",
                async : false,
                success:function(_contents){
                    string = _contents;
                },
                error:function(){
                    alert("file'" + _path+" can not be loaded");
                }
            });
            return string;
    };

    return Utils;
});