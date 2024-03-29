"use strict"


const Token = require('../models/token') 
const jwt=require('jsonwebtoken')
module.exports = async (req, res, next) => {

    const auth = req.headers?.authorization
    const tokenKey = auth ? auth.split(' ') : null 

    if (tokenKey) {

        if (tokenKey[0] == 'Token') { 

      
            const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId')
         
            req.user = tokenData ? tokenData.userId : false 

           
        }else if(tokenKey[0]=='Bearer'){
            jwt.verify(tokenKey[1],process.env.ACCESS_KEY,function(error,data){
            req.user=accessData? accessData : false
            })
            

        }
    }
    next()
}