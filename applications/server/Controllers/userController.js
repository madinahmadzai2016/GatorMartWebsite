const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer({dest:'uploads/'});
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
require('dotenv/config');
const { uploadFile, getFileStream } = require('../s3');

router.post('/api/register', upload.single('image'), async (req, res) => {
    const file = req.file;
    // console.log(req.body);
    // console.log(req.file)
	try {
        
        const user = await User.findOne({
            email: req.body.email,
        });
        if (!user) {
         
            const result = await uploadFile(file);
            await unlinkFile(file.path);
		    const newPassword = await bcrypt.hash(req.body.password, 10);
            await User.create({
                name: req.body.fullname,
                email: req.body.email,
                password: newPassword,
                profile_url: result.Location
            });
            res.status(200).json({status:'success', message:'User registered Sucessfully' });
           
        }else{
            await unlinkFile(file.path);
            console.log('duplicate user found');
            res.status(200).json({status:'error', message:'Email already registered'  });
        }
	
       

	
	} catch (err) {
		res.status(500).send("Unexpected Error Occurred");
	}
    
    
    });
    router.post('/api/login', async (req, res) => {
        try{
            const user = await User.findOne({
                email: req.body.email,
            });
        
            if (!user) {
                return res.status(200).json({status:'error', message:'User does not exist'  });
            }
            // console.log(user._id);
            const isPasswordValid = await bcrypt.compare(
                req.body.password,
                user.password
            )
        
            if (isPasswordValid) {
                const token = jwt.sign(
                    {
                        name: user.name,
                        email: user.email,
                    },
                    process.env.SECRET_KEY_JWT
                )
        
                return res.status(200).json({ status: 'success',message:'Login Successfull', user: token ,user_id:user._id,fullname:user.name,profile_url:user.profile_url});
            } else {
                return res.status(200).json({status:'error', message:'Invalid Password'  });
            }}catch(err){
                return res.status(500).send("Unexpected error occurred");
            }
        
    })
    router.post('/api/userinfo', async (req, res) => {
        try{
             
        
            const userInfo = await User.findById(req.body.userId);
            userInfo.password="";
            
            console.log(userInfo);
            res.send(userInfo);}
            catch(err){
                res.status(500).send(err);
                console.log(err);
        
            }
        
        
        
        });
    //change this approach
    router.get('/api/image/:key', (req, res) => {
        
        const key = req.params.key;
        const readStream = getFileStream(key);
      
        readStream.pipe(res)
      })
      
module.exports = router;