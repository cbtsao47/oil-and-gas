const Db = require('../data/')

module.exports={
getSites: async (id)=>{
if(id){
    return await Db('sites').where({id})
}
return await Db('sites')
},
get
}