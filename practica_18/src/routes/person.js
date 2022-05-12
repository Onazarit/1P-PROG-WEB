let express = require('express');
let router = express.Router();


router.get('/person', (req,res)=>{
    res.send('Has solicitado el listado de personas')
})

module.exports = router;