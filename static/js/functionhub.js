function FunctionHub(){
    var _this = this ;
    console.log("test")

    this._init = function(){
        this._userInfo = [] ;
        this._password = "" ;
        this._username = "" ;
        this._queryUsername = "" ;
        this._deleteUsername = "" ;
        this._administerOperation = new AdministerOperation() ;

    }

    this.saveInfo = function(){
        var self = this ;
        // this._userInfo.append(
        //     "username": this._username,
        //     "password": this._password
        // )
        console.log("saveInfo", "username:", this._username, "passwd:", this._password) ;
        var formData = new FormData() ;
        formData.append("name", this._username)
        formData.append("password", this._password)
        var url = "http://localhost:4000/saveInfo" ;
        lSendUrl("POST", url, formData, self.successSave)
    }

    this.successSave = function(response, self){
        console.log("save ok")
    }



    this.setFunc = function(e){
        switch(e.type){
            case 'submit':
                this._username = document.getElementById("u_username").value ;
                this._password = document.getElementById("u_password").value ;
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
                    break ;
                }

            case 'delete':
            case 'query':
                this._queryUsername = document.getElementById("u_username").value ;
                console.log("queryName", this._queryUsername)
                this._administerOperation.queryUserInfo(this._queryUsername) ;
                break ;

        }
    }

    this._init()
}