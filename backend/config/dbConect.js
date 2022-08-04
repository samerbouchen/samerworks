const mongoose = require('mongoose');

const dbConect = () => {
    //connect DB

mongoose.connect(process.env.MONGODB_URL,
{
    useNewUrlParser: true, 

    useUnifiedTopology: true 
})
.then(()=> console.log ('db connected'))
.catch(err => console.log(err));
}

module.exports = dbConect;