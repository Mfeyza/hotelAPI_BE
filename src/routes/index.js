"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use('/auth', require('./auth'))
// user:
router.use('/users', require('./user'))
// token:
router.use('/tokens', require('./token'))

// reservation:
router.use('/reservations', require('./reservation'))
// room:
router.use('/rooms', require('./room'))


// document:
router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router