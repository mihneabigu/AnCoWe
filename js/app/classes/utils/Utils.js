define(['Jquery'], function ($) {

    var Utils = {};

    //create ajax call
    //pass in a path , and return the contents as a String
    Utils.loadFileAsString = function (_path)
    {
        var string = "";
        $.ajax({
            url: _path,
            type: "get",
            async: false,
            success: function (_contents) {
                string = _contents;
            },
            error: function () {
                alert("file'" + _path + " can not be loaded");
            }
        });
        return string;
    };

    Utils.callPHP = function(params){
        var httpc = new XMLHttpRequest(); // simplified for clarity
        var url = "/api/writeScore.php";
        httpc.open("POST", url, true); // sending as POST

        httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        httpc.setRequestHeader("Content-Length", params.length); // POST request MUST have a Content-Length header (as per HTTP/1.1)


        httpc.onreadystatechange = function() { //Call a function when the state changes.
            if(httpc.readyState === 4 && httpc.status === 200) { // complete and no errors
                //alert(httpc.responseText); // some processing here, or whatever you want to do with the response
            }
        };

        httpc.send(params);
    };

    Utils.callPHPSave = function(params){
        var httpc = new XMLHttpRequest(); // simplified for clarity
        var url = "/api/writeCheckpoint.php";
        httpc.open("POST", url, true); // sending as POST

        httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        httpc.setRequestHeader("Content-Length", params.length); // POST request MUST have a Content-Length header (as per HTTP/1.1)


        httpc.onreadystatechange = function() { //Call a function when the state changes.
            if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
                //alert(httpc.responseText); // some processing here, or whatever you want to do with the response
            }
        };

        httpc.send(params);
    };

    return Utils;
});