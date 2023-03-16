const mongoose = require('mongoose');

const mongoDB = async()=>{
    try{
        // console.log("in")
        await mongoose.connect(mongoURI,{useNewUrlParser:true});
        // console.log("out")
        
    }
    catch(err){
        console.error(err);
    }
    // await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
    //     if(err) throw err;
    //     else{
    //         console.log("connected");
    //     }
    // });
}
mongoose.connection.on("connected",()=>{
    console.log("connected to mongo");
})
module.exports = mongoDB;