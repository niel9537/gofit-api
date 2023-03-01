require('dotenv').config()
const jwt = require('jsonwebtoken')


//verify token
module.exports = (req, res, next) => {
    const bearerHeader = req.headers['authorization']

    if(bearerHeader !== 'undefined'){
    //get the token value
    const bearer = bearerHeader.split(' '); //array ['Authorization','<bearer_token>']
    //get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    //next to middleware
    next();
     }else{
        res.sendStatus(403);
    }
}