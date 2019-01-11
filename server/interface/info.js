import Router from 'koa-router';
import axios from './utils/axios';

let router = new Router({
    prefix: '/info'
})


router.get('/getInfo',async (ctx)=>{
    let city = ctx.query.city || "深圳"
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

export default router