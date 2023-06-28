const jwt = require('jsonwebtoken')
const secret = "TOP_SECRET*@(#($@#"

module.exports.generateToken = (payload)=>{
    return jwt.sign(payload,secret,{
        expiresIn:'100s'
    })
}

module.exports.verifyToken = (token)=>{
    try {
        const payload = jwt.verify(token,secret)
        return payload
    } catch (error) {
        console.log(error)
        return null
    }
}