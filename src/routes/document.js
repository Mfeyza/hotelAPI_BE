"use strict"

const router = require('express').Router()

router.all('/', (req, res) => {
    res.send({
        swagger: "/documents/swagger",
        redoc: "/documents/redoc",
        json: "/documents/json",
    })
})

// JSON:
router.use('/json', (req, res) => {
    res.sendFile(`/src/configs/swagger.json`, { root: '.' })
})

// Redoc:
const redoc = require('redoc-express')
router.use('/redoc', redoc({ specUrl: '/documents/json', title: 'HOTELAPI' }))

// Swagger:
const swaggerJson = require('../configs/swagger.json')
const swaggerUi = require('swagger-ui-express')
const options = { customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.css',swaggerOptions: { persistAuthorization: true }, customJs: [
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-bundle.js',
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-standalone-preset.js'
  ] };
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson, options))


module.exports = router