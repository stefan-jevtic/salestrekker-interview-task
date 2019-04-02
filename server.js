import Koa from 'koa'
import { ApolloServer, gql } from 'apollo-server-koa'
import typeDefs from './schema'
import resolvers from './resolvers'
import db from './models/index'
import serve from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import send from 'koa-send'

const secret = 'kica'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db },
})
const app = new Koa()
const router = new Router()

app.use(helmet())
app.use(bodyParser())
server.applyMiddleware({ app })

router.post('/login', async (ctx, next) => {
    let { email, password } = ctx.request.body
    const hash = crypto
        .createHash('sha256')
        .update(password)
        .digest('hex')
    const user = await db.Employees.findOne({
        where: {
            email,
            password: hash,
        },
    })
    if (user) {
        const payload = user.dataValues
        const manager = user.dataValues.role_id === 2 ? true : false
        const token = jwt.sign(payload, secret)
        ctx.body = { status: 'success', token, manager }
    } else {
        ctx.body = { status: 'failure', token: null }
    }
})

router.get('*', async ctx => {
    await send(ctx, `public/index.html`)
})

app.use(serve(__dirname + '/public'))
app.use(router.routes()).use(router.allowedMethods())

app.listen(4000)
