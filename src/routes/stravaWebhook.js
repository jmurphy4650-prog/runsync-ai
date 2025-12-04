const router = require('express').Router();
router.get('/', (req,res)=>res.json({'challenge': req.query['hub.challenge']}));
router.post('/', (req,res)=>{ console.log('Webhook received'); res.sendStatus(200); });
module.exports = router;