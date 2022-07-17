const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')


router.post('/users', async (req,res)=>{
    const user = new User(req.body)

    try{
        await user.save()
        const token = user.generateAuthTokens()
        res.status(201).send({user, token})
        }catch(error){
            res.status(400).send('Error :'+error)
        }
        
    })

router.get('/users/login', async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthTokens()
        res.send({user, token})
    }catch(e){
        res.status(400).send()
    }
})

router.get('/users/me', auth, (req,res)=>{
res.send(req.user)
})

router.get('/users/:id',(req,res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send('User not found')
        }
        res.send(user)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

//using async-await for updating and delete
router.patch('/users/:id', async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','age','email','password']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
if(!isValidOperation){
    return res.status(400).send("Invalid updates!")
}
    try{
        const _id = req.params.id
        const user = await User.findById(_id)
        updates.forEach((update)=> user[update] = req.body[update])
        await user.save()
       // const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true })
        if(!user){
            return res.status(404).send('User not found')
        }
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

//using async-await for deleting the user data
router.delete('/users/:id', async (req,res)=>{
    try{
        const _id = req.params.id
        const user = await User.findByIdAndDelete(_id)
        if(!user){
            return res.status(404).send('User not found')
        }
        res.status(200).send('Deleted' + user)
    } catch(e){
        res.status(500).send(e)
    }
})


module.exports = router