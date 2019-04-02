const jwt = require('jsonwebtoken')
const secret = 'kica'

export default (ctx, next) => {
    const token = ctx.request.token
    // req.query.token ||
    // req.headers['x-access-token'] ||
    // req.cookies.token;
    if (!token) {
        ctx.status = 401
    } else {
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                ctx.status = 401
            } else {
                req.email = decoded.email
                next()
            }
        })
    }
}
