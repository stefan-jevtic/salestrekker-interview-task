import jwt from 'jsonwebtoken'
import { SECRET_KEY } from 'babel-dotenv'

export default (ctx, next) => {
    const { token } = ctx.request.body
    if (!token) {
        ctx.status = 401
    } else {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                ctx.status = 401
            } else {
                ctx.request.body.email = decoded.email
                next()
            }
        })
    }
}
