const express = require('express')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authRouter = express.Router()
const { User } = require("../models/Schemas")
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { where } = require('sequelize');
const config = require('../config/config');



authRouter.post('/register', async (req, res) => {
    let { email, phone, password } = req.body
    try {
        let user = await User.findOne({
            where: {
              email: email,
              is_deleted:0
            }
          });
      
          console.log('user-',user);
          if (user) {
             successResponse(res, "User alreay exist", [], 200)
          }


        const salt = await bcrypt.genSalt(10);
        let encripted_password = await bcrypt.hash(password, salt); 

        let newUser =
        {
            email: email,
            phone: phone,
            password: encripted_password
        }
        result = await User.create(newUser);
        console.log("result-",result);
        if (result)
            successResponse(res, "User created successfully", [], 200)
        else
            successResponse(res, "User not created", [], 200)

    } catch (error) {
        errorResponse(res,"Server error",[],500);
    }



})





authRouter.post('/login', async (req, res) => {
    console.log("Body-", req.body)

    let { username, password } = req.body

    try {

       checkUser=await User.findOne({
            where:{
                email:username
            },
            raw:true
        })
        if(!checkUser)
            successResponse(res,"Invalid crentials",[],200);
    

        await bcrypt.compare(password, checkUser.password, async(err, data) => {
            //console.log"Inside compare");
           //if error than throw error
           if (err) 
               return successResponse(res,[] ,"Invalid credentials", 200);


           if (data) {
            //return jsonwebtoken
            const payload = {
              user: {
                user_id: checkUser.id
              }
            };
      
            let access_token = jwt.sign(payload, config.jwtSecret, {
              expiresIn: config.access_token_expire_time
            });
            console.log("access_token-",access_token)
            let refresh_token = jwt.sign(payload, config.jwtSecret, {
              expiresIn: config.refresh_token_expire_time
            });
            console.log("refresh_token-",refresh_token)

           console.log("chekuser-",checkUser)
           delete checkUser["password"]

           resultData={
            user:checkUser,
            access_token:access_token,
            refresh_token:refresh_token
           }
        
           successResponse(res,"Successfully login",[resultData],200)
        }


        })


       

        
    } catch (error) {
        console.log("error-",error);
        errorResponse(res,"Server error",[],500);
        
    }












})

module.exports = authRouter;
