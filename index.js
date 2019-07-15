const express =require('express')
const server= express();
const port = process.env.PORT || 5000
server.listen(port,()=>{
    console.log(`Server up at port ${port}`)
})

// Our oil and gas client would like an application to track the depletion of their 5 sites. Each site
// has between 2 and 5 wells and each well extracts oil, natural gas, or a combination of the two.
// There are many large pieces of equipment that need to be assigned to each well including
// things like extractors, storage tanks, office buildings, etc. Each well has been analyzed by oil
// and gas engineers and they can determine the reserves before any drilling starts. Each day the
// equipment operates, the natural resources are extracted and sent to be refined. Our client will
// provide the data similar to the tables below.

// sites{
//     id,
//     name
// }
// wells{
//     id,
//     name,
//     equipments_required
//     oil_reserve
//     gas_reserve
// }
// extraction{
// id
// well_id
// date
// oil_amount
// gas_amount
// }
// equipments{
//     id,
//     name
// }