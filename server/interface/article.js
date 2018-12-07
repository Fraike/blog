import Router from 'koa-router'
import axios from './utils/axios'
import Article from '../dbs/models/article'

let router = new Router({
    prefix: '/article'
})

router.post('/saveArticle', async (ctx)=>{
    const article = new Article({
        id: 1,
        titile: '测试',
        content: '### 测试',
        favor: 1,
        comments: {
            body: "sss"
        }

    })
    let code
    try {
        await article.save()
        code = 0
    } catch (error) {
        code = -1
    }
    ctx.body = {
        code
    }
})

router.get("/getArticle",async (ctx)=>{
    const result = await Article.find()
    ctx.body = {
        code: 0,
        result
    }
})

export default router