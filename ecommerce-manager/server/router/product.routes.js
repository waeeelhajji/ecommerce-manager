const router = require('express').Router();

const prodController = require ('../controllers/product.controller')



router.get('/getprod', prodController.selectAllProd);
router.post('/postprod', prodController.createProd);
router.patch('/updprod/:id', prodController.updateProd);
router.delete('/delprod/:id', prodController.deleteProd);




module.exports = router