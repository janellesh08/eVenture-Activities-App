const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {

    const authHeaders = req.headers['authorization']

    if(authHeaders) {
        // get token from headers
        let token = authHeaders.split(' ')[1]
        // verify token
        try{
            const decoded = jwt.verify(token, process.env.ENCODER_KEY)
            if(decoded) {
                // verify user assigned to token exists
                const email = decoded.email
                const persitedUser = models.User.findOne({
                    where: {
                        email: email
                    }
                }) 
                if(persitedUser) {
                    // user is authenticated, continue with operation
                    next()
                } else {
                    //user does not exist
                    res.json({ success: false, message: 'User does not exist!' })
                }
            } else {
                // decoding fails
                res.status(401).json({ success: false, message: 'Failed to decode token!' })
            }
        } catch(error) {
            res.status(401).json({ success: false, message: 'Token has been altered!' })
        }
    } else {
        // no authorization headers
        res.status(401).json({ success: false, message: 'No authorization headers found!' })
    }
}

module.exports = authenticate