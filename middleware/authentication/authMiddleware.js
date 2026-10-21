const jwt = require('jsonwebtoken')

const authentication = (req,res,next)=>{
    try {
        const token = req.headers.authorization;

        if(!token){
            return res.status(400).json({Message:"token is required",data:null})
        }

        if(!token.includes('Bearer')) {
            return res.status(400).json({ message: "Token invaild", data: null });
        }

        let authToken = token.split(' ')[1];
        let tokenVerify = jwt.verify(authToken,process.env.JWT_SECRETKEY);
        
        req.user = tokenVerify;
        next()
    } catch (error) {
        
    }
}

module.exports = authentication