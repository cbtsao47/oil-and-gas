const helmet = require('helmet')
const express = require('express')
const cors = require('cors')
const morgan = require('helmet')

module.exports = server =>{
    server.use(helmet())
    server.use(cors())
    server.use(express.json())
    server.use(morgan('dev'))
}