"use strict"

const router = require('express').Router()
const { isAdmin,isLogin } = require('../middlewares/permissions')
/* ------------------------------------------------------- */
// routes/room:

const room = require('../controllers/room')

// URL: /rooms

router.route('/')
    .get(room.list)
    .post(isAdmin,room.create)

router.route('/:id')
    .get(room.read)
    .put(isAdmin,room.update)
    .patch(isAdmin,room.update)
    .delete(isAdmin,room.delete)

/* ------------------------------------------------------- */
module.exports = router