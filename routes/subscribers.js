const express = require('express')
const subscribers = require('../models/subscriber')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//get all 
router.get('/', async(req, res) =>{
    try {
        const subscribers = await Subscribers.find()
         res.json(subscribers);
    } catch (error) {
         res.status(500).json({message: err.message});
    }
})

//get one
router.get('/:id', (req, res) =>{
    res.send(req.params.id);
})
//create one
router.post('/', async(req, res) =>{
    const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
})
try {
    const newSubscriber = await subscriber.save()
     res.status(201).json(newSubscriber)
} catch (error) {
    res.status(400).json({message: error.message})
}

})  


//update one
router.patch('/', (req, res) =>{
    
})

//delete one
router.delete('/', (req, res) =>{
    
})

module.exports = router