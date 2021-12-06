const mongoose =require("mongoose")



function connectDB(url) {
 return mongoose.connect(url).then(() => {
 console.log("CONNECT TO DB...")
}).catch(err=>console.log(err))
}

module.exports = connectDB
