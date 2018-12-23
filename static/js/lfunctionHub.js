/* 
* @Author: anchen
* @Date:   2018-11-28 11:00:21
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-21 21:13:05
*/

var lSendUrl = function(PostType, Url, formData, successPaperState, self){
    var xmlhttp;

    if(PostType == "GET"){
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest() ;
        }
        else{
            xmlhttp = new ActiveXObject("Microsoft.XMLHttpRequest") ;
        }
        xmlhttp.open(PostType, Url, true) ;
        xmlhttp.onreadystatechange = function(){
            successPaperState() ;
        }
        
        xmlhttp.send(null)
    }
    else{
        $.ajax({
            url: Url,
            type: "POST" ,
            dataType: "JSON" ,
            data: formData ,
            crossDomain: true ,
            processData: false ,
            contentType: false , 
            success: function(response){
                successPaperState(response, self) ;
            },
            error: function(jqXHR, textStatus, errorMessage){
                console.log(errorMessage)
            }
        }) ;
    }
}