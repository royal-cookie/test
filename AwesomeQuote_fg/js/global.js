var ServerAddr = "http://www.awesomequote/quote_server.php";
var StartPage = "http://www.awesomequote/index.html";
var JSON = "json";

$(document).ready(function(){
    $('#log-out-button').click(function(){
        $.ajax(ServerAddr,
               {
                    type: 'post',
                    data:
                        {
                            query: "log_out"
                        },
                   success: function(){
                        window.location.href = StartPage;   
                   }
               });
    });
});