// method : post
// url : /api/auth/login
// 



const Login =  (req, res) => {
    // do something
    res.status(200).send(req.body);
}

const Register =  (req,res) => {
    res.status(200).send('this a register function')
}
const ForgetPassword =  (req,res) => {
    res.status(200).send('this a Forget Password function')
}
const ResetPassword =  (req,res) => {
    // token = req.params.id
    res.status(200).send('this a reset Password function of')
}



module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword
}
    