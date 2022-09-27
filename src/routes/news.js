var express = require('express');
const router = express.Router();


const NewController = require('../app/controllers/NewController')

router.post('/create', NewController.create)


// router.get('/:slug', NewController.getSingle)
router.get('/search/:name', NewController.search)
router.get('/:id', NewController.getSingleId)
router.put('/:id/edit', NewController.update)
router.delete('/:id', NewController.delete)

router.get('/', NewController.index)


module.exports = router