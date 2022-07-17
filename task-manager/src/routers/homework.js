const Homework = require('../models/homework')
const express = require('express')
const router = new express.Router()


//Exercise

router.post('/homework',(req,res)=>{
    const homework = new Homework(req.body)

    homework.save().then(()=>{
        res.status(201).send(homework)
    }).catch((error)=>{
        res.status(400).send('Error : '+error)
    })
})
router.get('/homework',(req,res)=>{
    Homework.find({}).then((homeworks)=>{
        res.send(homeworks)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

router.get('/homework/:id',(req,res)=>{
    const _id = req.params.id
    Homework.findById(_id).then((homework)=>{
        if(!homework){
            return res.status(404).send('Homework not found')
        }
        res.send(homework)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

//update using aync-await
router.patch('/homeworks/:id', async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['subject','completed']
    const isValidated = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidated){
        return res.status(400).send("Invalid updates!")
    }
    try{
    const _id = req.params.id
    // const homework = await Homework.findById(_id)
    // updates.forEach((update)=> homework[update] = req.body[update])
    // await homework.save()
        const homework = await Homework.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true })
        if(!homework){
            return res.status(404).send('User not found')
        }
        res.send(homework)
    }catch(e){
        res.status(400).send(e)
    }
})

//using async-await for deleting homework
router.delete('/homework/:id', async (req,res)=>{
    try{
        const homework = await Homework.findByIdAndDelete(req.params.id)
        if(!homework){
            return res.status(404).send('Homework not found')
        }
        res.send(homework)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router