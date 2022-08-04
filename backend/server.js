const express =require('express')
const dotenv = require('dotenv');
const error = require ('./middlewares/errorMiddlewareHandler');

const userRoute = require('./routes/usersRoute');
const carRouter = require('./routes/booksRoute');

const app = express();


dotenv.config(); 
require('./config/dbConect')();



//passing body data 
  app.use(express.json());

//routes
app.use('/api/users',userRoute);
//cars
app.use('/api/cars',carRouter);
console.log(process.env.MY_NAME);

//error middelware 
app.use(error.errorMiddlewareHandler);




//user routes








//server
const PORT  = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server is up and runing $ {PORT}');
});



