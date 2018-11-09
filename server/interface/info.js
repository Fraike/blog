import Router from 'koa-router';
import axios from './utils/axios';

let router = new Router({
    prefix: '/info'
})


router.get('/getInfo',async (ctx)=>{
    let city = ctx.query.city || "北京"
    let {
        status,
        data: { results }
      } = await axios.get(
        "https://api.seniverse.com/v3/weather/now.json",
        {
          params: {
            key: 'rrby9ebyek9p9wcy',
            location: city,
            language: 'zh-Hans',
            unit: 'c'
          },
          headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
          },
        }
      );
      if(status === 200) {
          ctx.body = {
              code: 1,
              results

          }
      }else {
          ctx.body = {
              code: -1
          }
      }

      
})

router.get('/getOneTips',async (ctx)=>{
    let city = ctx.query.city || "北京"
    let {
        status: status2,
        data: { results2 }
      } = await axios.post('https://api.hibai.cn/api/index/index',{
          params:{
        "TransCode":"030111","OpenId":"123456789","Body":""
      },
      dataType: 'json',
    
    })
     console.log(results2)
      if(status2 === 200) {
          ctx.body = {
              code: 1,
              results2

          }
      }else {
          ctx.body = {
              code: -1
          }
      }

      
})

export default router