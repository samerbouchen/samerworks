const { model } = require("mongoose");

const errorMiddlewareHandler = (err, req, res, next) => {
//set status code 
const errStatusCode = res.errStatusCode == 200  ? 500 : res.statusCode ;
res.status(errStatusCode);
res.json ({
    message: err.message,
});
};


module.exports = {errorMiddlewareHandler};