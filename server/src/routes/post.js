import express from 'express'
import { withAuth } from '../middleware/withAuth'
const router = express.Router()

router.post('/',withAuth,async(req,res)=>{
    // add express validation result
    const validatedBody = req.body
    const {_id: userId} = req.user
    // create post
    const post = await Post({
        ...validatedBody,
        user: userId
    })
    // return the response
})

// like
// dislike
//delete
// update

export default router