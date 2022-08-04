const express =require('express');
const asyncHandler = require ('express-async-handler');
const { user } = require('pg/lib/defaults');
const User =require('../models/User');
const generateToken = require('../utils/generateToken');



const usersRoute = express.Router();



// register 
usersRoute.post (
    '/register',asyncHandler(async(req,res) => {
const {name, email, password} =req.body;
const userEwiste = await User.findOne( {email: email });
if (userEwiste){
    throw new Error('user Exist');
}
const userCreated = await User.create({ email ,name,password});
res.json({
        _id: userCreated._id,
        name: userCreated.name,
        password: userCreated.password,
        email: userCreated.password,
        token: generateToken(userCreated._id),
        
    });
    }) );
//login 
usersRoute.post('/login',asyncHandler(async(req,res) => {
const {email, password} = req.body;

const user = await user.findOne({email});

if (user && user.isPasswordMatch(password)) {
    // set status code
    res.status(200);

    res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.password,
        token: generateToken(user._id),
        
    });
}else{
   return res.status(401);
    throw new Error('Invalide credentials');
}
  })
     );
//update user
usersRoute.put('/update', (req,res) => {
    res.send('Update route');
});
//delete user
usersRoute.delete('/:id', (req,res)=> {
    res.send('delete route');
});
//fetch users 
usersRoute.get('/', (req,res) => {
    res.send('fetch users');
});

module.exports = usersRoute;



