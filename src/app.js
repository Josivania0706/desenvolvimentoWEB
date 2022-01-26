//const express = require('express')
// routes = require('./routes')
//npx sucrase-node ./src/server.js
import express from 'express'
import routes from './routes'
import './database'

class App{
    constructor(){
        this.server = express()//servidor
        this.middlewares()//
        this.routes()
    }

    middlewares(){//intermediacao 
        this.server.use(express.json())
    }

    routes(){//rotas configuradas
        this.server.use(routes)
    }
}

//module.exports = new App().server
export default new App().server