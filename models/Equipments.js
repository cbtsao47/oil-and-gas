const Db = require('../data/')

module.exports={
getEquipments: async (id)=>{
if(id){
    return await Db('equipments').where({id})
}
return await Db('equipments')
},
}