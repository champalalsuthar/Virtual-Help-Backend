const mongoose = require('mongoose');
const mongooseUrl = "mongodb+srv://virtualhelp62:Virtual123@cluster0.xgumyjg.mongodb.net/?retryWrites=true&w=majority";
// const mongooseUrl = "mongodb+srv://champalaljangid9292:4M58kAYoYr8Fr0Vq@cluster0.gisylk9.mongodb.net/";

const connectionParams = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(mongooseUrl, connectionParams).then(() => {
    console.log("connected to Database");
}).catch((err) => {
    console.error(err);
})