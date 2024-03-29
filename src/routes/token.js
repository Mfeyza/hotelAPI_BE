"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/token:

const token = require('../controllers/token')

const { isAdmin } = require('../middlewares/permissions')

// URL: /tokens
router.use(isAdmin)
router.route('/')
    .get(token.list)
    .post(token.create)

router.route('/:id')
    .get(token.read)
    .put(token.update)
    .patch(token.update)
    .delete(token.delete)

/* ------------------------------------------------------- */
module.exports = router