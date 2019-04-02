'use strict'

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import { DATABASE_NAME, USERNAME, PASSWORD, HOST, DIALECT } from 'babel-dotenv'
const basename = path.basename(__filename)

const db = {}

let sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, { host: HOST, dialect: DIALECT })

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file))
        db[model.name] = model
    })

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
