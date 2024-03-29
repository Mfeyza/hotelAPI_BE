"use strict"

const router = require('express').Router()
const { isAdmin,isLogin } = require('../middlewares/permissions')
/* ------------------------------------------------------- */


const room = require('../controllers/room')
const upload = require('../middlewares/upload')



router.route('/')
    .get(room.list)
    .post(isAdmin,upload.array('images'),room.create)

router.route('/:id')
    .get(room.read)
    .put(isAdmin,upload.array('images'),room.update)
    .patch(isAdmin,upload.array('images'),room.update)
    .delete(isAdmin,room.delete)

/* ------------------------------------------------------- */
module.exports = router