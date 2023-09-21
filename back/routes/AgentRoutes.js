import express from 'express'
import agentController from '../controllers/AgentController.js'

const router = express.Router()

router.get('/', agentController.getAgents)
router.get('/:id', agentController.getAgent)
router.post('/', agentController.createAgent)
router.put('/:id', agentController.updateAgent)
router.delete('/:id', agentController.deleteAgent)

export default router