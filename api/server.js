const express =require('express')
const server= express();
const config= require('./config')
config(server)
module.exports=server