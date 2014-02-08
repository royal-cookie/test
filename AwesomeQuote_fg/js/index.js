
function getSessionUser(){
    var user;    
    $.ajax(ServerAddr,
           {
                type: 'post',
                data:
                    {
                        query: "get_session_login"
                    },
                dataType: JSON,
                async: false,
                success: function(data){
                    user = data.message;   
                }
           });
    return user;
}