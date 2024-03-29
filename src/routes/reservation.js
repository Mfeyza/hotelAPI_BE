"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */


const reservation = require('../controllers/resevation')
const {isLogin,isAdmin} = require('../middlewares/permissions')


router.route('/')
    .get(isAdmin,reservation.list)
    .post(isLogin,reservation.create)

router.route('/:id')
    .get(isLogin,reservation.read)
    .put(isAdmin,reservation.update)
    .patch(isAdmin,reservation.update)
    .delete(isAdmin,reservation.delete)

/* ------------------------------------------------------- */
module.exports = router