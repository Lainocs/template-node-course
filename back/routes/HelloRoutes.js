import express from 'express'
import helloController from '../controllers/HelloController.js'

const router = express.Router()

router.get('/', helloController.sayHello)

export default router