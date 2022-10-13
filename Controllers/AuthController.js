// method : post
// url : /api/auth/login
// 



const Login =  (req, res) => {
    // do something
    // res.status(200).send(req.body);
    res.status(200).send('this a login function')
}

const Register =  (req,res) => {
    res.status(200).send('this a register function')
}
const ForgetPassword =  (req,res) => {
    res.status(200).send('this a Forget Password function')
}
const ResetPassword =  (req,res) => {
    // token = req.params.id
    res.status(200).send('this a reset Password function of'+ req.params.token)
}



module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword
}
    