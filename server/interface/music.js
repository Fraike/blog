import Router from 'koa-router'
import NeteaseMusic from 'simple-netease-cloud-music'
const nm = new NeteaseMusic()

let router = new Router({
    prefix: '/music'
})

router.get("/getMusic",async (ctx)=>{
    const result = await nm.playlist('2149208959')
    ctx.body = {
        code: 0,
        musicList: result.playlist.tracks
    }
    
})
router.get("/getMusicUrl",async (ctx)=>{
    let id = ctx.query.id
    const result = await nm.url(id)
    ctx.body = {
        code: 0,
        result
    }
    
})
export default router