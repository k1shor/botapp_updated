const express = require('express')
const { addBot, findbot, botList, updatebot, deletebot, gamingbotList,musicbotList,entertainmentbotList, productivitybotList, utilitybotList, sendlike, dislike } = require('../Controller/botcontroller')
const { botValidation } = require('../Validation/botValidation')

const upload=require('../middleware/upload')
const router = express.Router()

router.post('/addbot',upload.single('image'),botValidation, addBot)

router.put('/updatebot/:id',updatebot)
router.delete('/deletebot/:id',deletebot)
router.get('/botlist',botList)
router.get('/gamingbotlist',gamingbotList)
router.get('/musicbotlist',musicbotList)
router.get('/entertainmentbotlist',entertainmentbotList)
router.get('/utilitybotlist',utilitybotList)
router.get('/productivitybotlist',productivitybotList)
router.get('/findbot/:botid',findbot)
router.put('/addlike/:id',sendlike)
router.put('/dislike/:id',dislike)

module.exports = router