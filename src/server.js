const app = require("./index");
const connect = require("./configs/db");

app.listen(5000,async()=>{
    try{
        await connect();
        console.log("server is listening port 500")
    }catch(err){
        console.log(err)
    }
})