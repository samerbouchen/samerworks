const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


//schema 
const UserSchma = new mongoose.Schema({
    name: {
        type: String,
        required : true,

    },
    email:{
        type: String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required : true,
    },
});

UserSchma.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
//verify password 

UserSchma.method.isPasswordMatch =async function(enterdPassword){
  
    return await bcrypt.compare(enterdPassword, this.password);
};





 const User = mongoose.model('User ' , UserSchma);
 module.exports = User;