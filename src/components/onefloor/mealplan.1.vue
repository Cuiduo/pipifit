<style lang="less" scoped>
.mealplan {
  background: #ffffff;
}
.titleBox {
  width: 100%;
  height: 1.7rem;
  // background: pink;
  font-size: 0.3rem;
  border-bottom: 1px solid #f4f4f4;
  padding: 0.4rem;
  ul {
    display: flex;
    li {
      color: #bebebe;
      flex: 1;
      text-align: center;
      // width: 0.72rem;
      // height: 0.72rem;
      height: 0.95rem;
      border-radius: 50%;
      background: #ffffff;
      line-height: 0.95rem;
    }
    .active {
      background: #faf2f0;
      color: @colorone;
    }
  }
}
.content {
  width: 100%;
  min-height: 5rem;
  //   background: pink;
  font-size: 0.3rem;
  overflow: hidden;
  padding: 0.2rem 0.4rem;
  .titileBox {
    // display: flex;
    padding: 0.3rem 0;
  }
  .h3 {
    width: 1rem;
    // background: red;
    font-size: 0.3rem;
    padding-right: 0.1rem;
    // font-weight: 800;
    color: #333333;
    // flex: 1;
    display: inline;
    span {
      color: #bebebe;
      font-size: 0.2rem;
      // float: right;
      margin-left: 0.1rem;
    }
  }
  .pro {
    width: 1.5rem;
    // background: red;
    display: inline-block;
    font-size: 0.16rem;
    margin-right: 0.1rem;
    color: #999999;
    // flex: 2;
    // margin: 0 0.1rem;
  }
}
.OneBox {
  //   padding: 0 0.4rem;
  width: 100%;
  display: flex;
  ul {
    // display: flex;
    li {
      width: 33.333%;
      // height: 2rem;
      display: flex;
      float: left;
      // margin-bottom: 0.4rem;
      padding: 0 0.14rem 0.14rem 0;
      //   margin:  0 -2rem -2rem 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    li:nth-of-type(odd) {
      //   margin-right: 8%;
    }
  }
}
</style>

<template>
  <div class="mealplan" slot="mealplan">
    <div class="titleBox">
      <ul>
        <li
          v-for="(item,index) in ulidata"
          :class="{active:index==num}"
          @click="getmsg(index)"
          :key="index"
        >{{item}}</li>
      </ul>
    </div>
    <div class="content">
       <!-- <div>
              <div class="titileBox">
                <div class="h3">奶豆坚果类</div>
                <div class="pro">
                  <p>能量占比25%</p>
                  <x-progress :percent="percent1" :show-cancel="false"></x-progress>
                </div>
              </div>
              <div class="OneBox">
                <ul>
                  <li v-for="(list, index) in egImg" @click="toggle(index)" :key="index">
                    <img :src="list.imgUrl">
                  </li>
                </ul>
              </div>
            </div> -->




      <!-- <div class>
        <swiper
          v-model="num"
          height="5rem"
          :min-moving-distance="60"
          :show-dots="false"
          @on-index-change="swiperChange"
        >
          <swiper-item v-for="(item, index) in ulidata" :key="index">
            <div>
              <div class="titileBox">
                <div class="h3">奶豆坚果类</div>
                <div class="pro">
                  <p>能量占比25%</p>
                  <x-progress :percent="percent1" :show-cancel="false"></x-progress>
                </div>
              </div>
              <div class="OneBox">
                <ul>
                  <li v-for="(list, index) in egImg" @click="toggle(index)" :key="index">
                    <img :src="list.imgUrl">
                  </li>
                </ul>
              </div>
            </div>
            
          </swiper-item>
        </swiper>
      </div> -->
    </div>
  </div>
</template>

<script>
import { XProgress, Swiper, SwiperItem } from "vux";
export default {
  components: {
    XProgress,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      msg: "mealplan",
      index01: 0,
      num: 0,
      index: 0,
      percent1: 25,
      ulidata: [1, 2, 3, 4, 5, 6, 7],
      egImg: [
        { imgUrl: require("@/assets/eg5.png") },
        { imgUrl: require("../../assets/eg6.png") },
        { imgUrl: require("../../assets/eg6.png") },
        { imgUrl: require("../../assets/eg6.png") },
        { imgUrl: require("../../assets/eg6.png") },
        { imgUrl: require("../../assets/eg6.png") }
      ]
    };
  },
  methods: {
    swiperChange(index) {
      // console.log(index);
      this.num = index;
    },
    getmsg(index) {
      console.log(index);
      this.num = index;
    }
  }
};
</script>
