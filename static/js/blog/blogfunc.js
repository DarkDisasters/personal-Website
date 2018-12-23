function BlogFunc(functionHub){
    this._init = function(functionHub){
        this.m_functionhub = functionHub ;
    }

    this.loadMainBlog = function(){
        var self = this;
        var formData = new FormData() ;
        formData.append('name',"loadmainblog")
        var url = "http://localhost:4000/" ;
        lSendUrl("POST", url, formData, self.successLoad) ;
    }

    this.successLoad = function(response, self){
        console.log("Load OK!")
    }
}