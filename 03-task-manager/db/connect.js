const mongoose =require("mongoose")

const connectionString = "mongodb+srv://admin:11223344@cluster0.ud1ul.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"


mongoose.connect(connectionString).then(() => {
 console.log("CONNECT TO DB...")
}).catch(err=>console.log(err))