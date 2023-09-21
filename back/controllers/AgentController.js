const getAgents = (req, res) => {
  res.send([
    'Phoenix',
    'Viper',
    'Sage',
    'Cypher',
    'Reyna',
    'Jett',
  ])
}

const getAgent = (req, res) => {
  // 
}

const createAgent = (req, res) => {
  // 
}

const updateAgent = (req, res) => {
  //
}

const deleteAgent = (req, res) => {
  // 
}

export default {
  getAgents,
  getAgent,
  createAgent,
  updateAgent,
  deleteAgent,
}