function AdministerOperation(){
    var _this = this ;

    this._init = function(){

    }

    this.deleteUserInfo = function(username){
        self = this ;
        var formData = new FormData() ;
        formData.append('name', username) ;
        var url = "http://localhost:4000/deleteInfo" ;
        lSendUrl("POST", url, formData, self.successDelete) ;
    }

    this.successDelete = function(){
        
    }

    this.queryUserInfo = function(username){
        self = this ;
        var formData = new FormData() ;
        formData.append("name", username) ;
        var url = "http://localhost:4000/queryInfo" ;
        lSendUrl("POST", url, formData, self.successQuery) ;
    }

    this.successQuery = function(response,self){
        console.log("queryUserInfo", response) ;
        queryusername = response["name"]
        querypassword = response["password"] ;

    }

}