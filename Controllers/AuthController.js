const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const storage = require('local-storage')
const db = require('../Models/index')
const cookie = require('cookie-parser')
const User = db.user;
const Role = db.role;
const {resetPasswordEmail , sendConfirmationEmail} = require('../Utils/SendEmail')  
// const router = require("express").Router();


// method : post
// url : /api/auth/login
// access : public



const Login = asyncHandler (async (req, res) => {
    console.log(req.body)          
    const {email, password} = req.body
    // console.log(req.body)
    const user = await User.findOne({email})
    console.log(user)
    // console.log(user.password)
    if(user  && (await bcrypt.compare(password, user.password)) ){
        const token = generateToken(user._id)
        storage('token', token);
        // set cookie
        res.cookie('token', token, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true
        })

        const role = await Role.findById(user.roles[0])
        console.log(role)
        if (user.verified == true) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email ,
                token: generateToken(user._id),
                role: role.name ,
                verified: user.verified ,
                password: user.password ,
                storage: storage('token')
            })
            // res.status(200).send( 'bonjour ' + user.name + ' votre role est ' + role.name )
        } else {
            res.status(401)
            throw new Error('User not verified')
        }

    }
    else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
}) 

// method : post
// url : /api/auth/register
// access : public

const Register =  asyncHandler (async(req,res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add a text field")
    } 
    // check if user exist 
    const user = await User.findOne({email})
    if(user){
        res.status(400)
        throw new Error("User already exist")
    } 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    // create user
    const token = generateToken(name) 
    const newUser = await User.create({
        name,
        email,
        password: hashPassword ,
        token,
        roles: '6355a36aecb9329d18d55ebf'
    })
    if(newUser){
        if (newUser.verified == false) { 
            sendConfirmationEmail(  
                newUser.name, 
                newUser.email,
                newUser.token ,
                newUser.id  
         ); 
            return res.status(401).send({
              message: "Pending Account. Please Verify Your Email!",
            });
          }
        // const url = `${process.env.BASE_URL}api/auth/verify/${token}`
        // await sendEmail(newUser.email, "Verify your email address", url)
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            verified : newUser.verified,
            token: token ,
            message: "User created successfully ... plaise verify your email"

            // token: generateToken(newUser._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
    // res.status(200).send('this a register function')
})
// method : post
// url : /api/auth/
// access : public
const ForgetPassword = asyncHandler(async (req,res) => {
    const {email} = req.body
    if(!email ){
        res.status(400)
        throw new Error("Please add a text field")
    } 
    const user = await User.findOne({email})
    if(user){
        const token = generateToken(user._id)
        user.token = token
        user.save()
        const url = `${process.env.BASE_URL}api/auth/resetpassword/${token}`
        await  resetPasswordEmail(user.name, user.email , user.token)
        

    res.status(200).send('plaise check your email for reset your password of email : '+ req.body.email)
    } else {
        res.status(400)
        throw new Error("Invalid email")
    } 
}) 

// method : post
// url : /api/auth/login
// access : public
const ResetPassword = asyncHandler(async (req,res) => {
    const token = req.params.token
    const {password , password2} = req.body
    if(!password || !password2){
        res.status(400)
        throw new Error("Please add a text field")
    }
    if(password != password2){
        res.status(400)
        throw new Error("password not match")
    }
    const user = await User.findOne({token})
    if(user){
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        user.password = hashPassword
        user.save()
        res.status(200).send('your password is reset')
    }else{
        res.status(400).send('token not valid') 
    }


    res.status(200).send('this a reset Password function of'+ req.params.token)
}) 
const Verify = async  (req,res) => {
    const token = req.params.token
    const id = req.params.id
    const user = await User.findById(id) 
    if(user.verified == false  && user.token == token){
        user.verified = true
        user.save()
        res.status(200).send('your account is verified')
    }else{
        res.status(400).send('token not valid')
    }
    
    // res.status(200).send('this a reset verfy function of'+ req.params.token +"and id = "+ id)
} 
// method : post
// url : /api/auth/register
// access : private
const Client = async (req,res) => {
    // console.log(req.user)
    const user = req.user
    const role = await Role.findById(user.roles[0])
     res.status(200).send( 'bonjour ' + user.name + ' votre role est ' + role.name )
    // token = req.params.id
    // res.status(200).json({success: true, data: "this is a get me function"})
}
// method : post
// url : /api/user/manager
// access : private
const Manager = async (req,res) => {
    // console.log(req.user)
    const user = req.user
    const role = await Role.findById(user.roles[0])
        res.status(200).send( 'bonjour ' + user.name + ' votre role est ' + role.name )
}
// method : post
// url : /api/user/Livreur
// access : private
const Livreur = async (req,res) => {
    // console.log(req.user)
    const user = req.user
    const role = await Role.findById(user.roles[0])
        res.status(200).send( 'bonjour ' + user.name + ' votre role est ' + role.name )
}
// Logout
const Logout = async (req,res) => {
    //  clear cookie
    res.clearCookie('token')
    res.status(200).send('this a logout function')
}

// generte jwt token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}


module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
    Client,
    Manager,
    Livreur,
    Verify ,
    Logout
}
    