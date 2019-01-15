import Router from 'koa-router'
import axios from './utils/axios'
import Share from '../dbs/models/link'


let router = new Router({
    prefix: '/link'
})

router.get("/getLinks",async (ctx)=>{
    const result = await Share.find()
    // console.log(result)
    ctx.body = {
        code: 0,
        result
    }
})

export default router