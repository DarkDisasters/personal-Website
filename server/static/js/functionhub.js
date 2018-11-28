/* 
* @Author: anchen
* @Date:   2018-11-28 10:17:01
* @Last Modified by:   anchen
* @Last Modified time: 2018-11-28 11:20:08
*/

function FunctionHub(){
    var _this = this ;

    this.init = function(){
        this._userInfo = [] ;
        this._password = "" ;
        this._username = "" ;
    }

    this.saveInfo = function(){
        var self = this ;
        // this._userInfo.append(
        //     "username": this._username,
        //     "password": this._password
        // )
        console.log("saveInfo", this._userInfo) ;
        var formData = new FormData() ;
        formData.append(
            "username": this._username,
            "password": this._password
        ) ;
        var url = "http://localhost:4000/saveInfo" ;
        lSendUrl("POST", url, formData, self.successSave)
    }

    this.successSave = function(response, self){
        console.log("save ok")
    }

    this.setFunc = function(e){
        switch(e.type){
            case 'submit':
                this._username = document.getElementById("u_username") ;
                this._password = document.getElementById("u_password") ;
                console.log(this._username)
                if(this._username == "" && this._password == ""){
                    window.alert("empty username and password") ;
                    break ;
                }
                else if(this._password == "" && this._username != ""){
                    window.alert("empty password") ;
                    break ;
                }
                else if(this._username == "" && this._password != ""){
                    window.alert("empty username") ;
                    break ;
                }
                else{
                    this.saveInfo()
                }

            case 'delete':
            case 'query':
        }
    }
}