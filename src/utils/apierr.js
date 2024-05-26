class apierr extends Error{
    constructor(
        statusCode,
        message:"Something went wrong",
        error=[],
        stack=""
    ){
        super(messsage)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.succes=false;
        this.errors=this.errors

        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}