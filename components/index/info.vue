<template>
    <div class="info-container">
        <div class="weather wow fadeIn" data-wow-delay=".8s" ref="weather">
          <img :src="weatherSrc" alt="">
          <div>{{city}} {{weatherText}} {{weatherTem}}°</div>
        </div>
        <div class="oneTips wow fadeIn" v-show="one.isLoaded" data-wow-delay=".8s">
          <div class="left">
            <img :src="one.img_url" alt="">
            <span>
              {{one.img_kind}} | {{one.img_author}}
            </span>
          </div>
          <div class="right">
            <p>{{one.word}}</p>
            <span>{{one.word_from}} | {{one.date}}</span>
          </div>
        </div>
        <div class="more wow fadeIn" v-show="one.isLoaded" @click="more"  data-wow-delay=".9s">READ MORE</div>
    </div>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      city: "",
      weatherTem: Number,
      weatherText: "",
      weatherCode: "1",
      weatherSrc: "",
      one: {
        img_author: "",
        img_kind: "",
        img_url: "",
        word: "",
        word_from: "",
        date: "",
        isLoaded: false
      }
    };
  },
  created() {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      new WOW.WOW().init();
    }
  },
  async mounted() {
    let self = this;
    const sign = "e7a80781c5db67b4ac94feec1a06037e";
    let {
      status,
      data: { province, city }
    } = await self.$axios.get(
      `http://cp-tools.cn/geo/getPosition?sign=${sign}`
    );
    self.city = city;
    let {
      status: status2,
      data: { results }
    } = await self.$axios.get("/info/getInfo", {
      params: {
        city: city
      }
    });
    self.weatherText = results[0].now.text;
    self.weatherTem = results[0].now.temperature;
    self.weatherCode = results[0].now.code;
    self.weatherSrc = require("~/assets/img/weather/" +
      self.weatherCode +
      ".png");
    $.ajax({
      type: "POST",
      url: "https://api.hibai.cn/api/index/index",
      dataType: "json",
      data: { TransCode: "030111", OpenId: "123456789", Body: "" },
      success: function(result) {
        self.one.img_author = result.Body.img_author;
        self.one.img_kind = result.Body.img_kind;
        self.one.img_url = result.Body.img_url;
        self.one.word = result.Body.word;
        self.one.word_from = result.Body.word_from;
        self.one.date = result.Body.date.slice(0, 11);
        self.one.isLoaded = true;
      }
    });
  },
  methods: {
    more() {
      this.$store.dispatch("index/setfullPage", 1);
    }
  }

  //   async asyncData(ctx) {
  //     const sign = "e7a80781c5db67b4ac94feec1a06037e";
  //     console.log("ss");
  //     let {
  //       status,
  //       data: { city }
  //     } = await ctx.$axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`);
  //   }
};
</script>

<style lang='stylus' scoped>
.info-container {
  width: 49.8%;
  height: 0;
  padding-bottom: 41%;
  background: #c3dbe2;
}

.weather {
  text-align: center;
  color: #fff;
  font-size: 0.4rem;
}

.oneTips {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 1.5rem;

  .left {
    display: inline-block;
    width: 35%;
    text-align: center;
    color: #ffffff;

    img {
      width: 100%;
      margin-bottom: 0.3rem;
      opacity: 0.5;
      cursor: pointer;
      margin-bottom: 0.3rem;

      &:hover {
        opacity: 1;
      }
    }
  }

  .right {
    width: 40%;
    display: inline-block;

    p {
      color: #ffffff;
      font-size: 0.4rem;
      letter-spacing: 3px;
      margin-bottom: 0.5rem;
      line-height: 0.7rem;
    }

    span {
      display: inline-block;
      width: 100%;
      color: #ffffff;
      font-size: 0.3rem;
      text-align: center;
      letter-spacing: 2px;
    }
  }
}

.more {
  text-align: center;
  color: #ffffff;
  font-size: 0.5rem;
  margin-top: 2rem;
  cursor: pointer;
}
</style>