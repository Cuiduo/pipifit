<style lang="less" scoped>

.mealplan {
  background: #ffffff;
  width: 100%;
  height: 100%;
}
.titleBox {
  width: 100%;
  height: 1.7rem;
  // background: pink;
  font-size: 0.3rem;
  border-bottom: 1px solid #f4f4f4;
  padding: 0.4rem;
  ul {
    // display: flex;
    li {
      color: #bebebe;
      width: 0.95rem;
      text-align: center;
      // width: 0.72rem;
      // height: 0.72rem;
      height: 0.95rem;
      border-radius: 50%;
      background: #ffffff;
      line-height: 0.95rem;
      float: left;
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
  background: #F9F9F9;
  font-size: 0.3rem;
  overflow: hidden;
  padding: 0 0.4rem 0.2rem;
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
    p{
      font-size: 0.18rem;
    }
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
      width: 31.333%;
      background: #ffffff;
      height: 3.5rem;
      display: flex;
      float: left;
      // margin-bottom: 0.4rem;
      margin: 0 2% 0.14rem 0;
        // margin:  0 -2rem -2rem 0;
      dl{
        dt{
          padding: 0.1rem;
        }
        dd{
          padding: 0.1rem;
          h6{
            font-size: .26rem;
            color: #333333;
            font-weight: normal;
            height: 0.8rem;
          }
          p{
            font-size: .2rem;
            color: #999999;
          }
        }
      }
      img {
        width: 1.9rem;
        height: 1.9rem;
      }
    }
    li:nth-of-type(odd) {
      //   margin-right: 8%;
    }
  }
}
.swiper-container {
  width: 100%;
  min-height: 5rem;
  // background: pink;
  .swiper-slide{
    width: 100%
  }
}

</style>

<template>
  <div class="mealplan" slot="mealplan" v-if="ulidata">
    <div class="titleBox">
      <ul>
        <li
          v-for="(item,index) in ulidata"
          :class="{active:index==num}"
          @click="getmsg(index)"
          :key="index"
        >{{index+1}}</li>
      </ul>
    </div>
    <div class="content">
      <div>
              <swiper :options="swiperOption" class="swiper-no-swiping"  ref="mySwiper">
                <swiper-slide v-for="(item,index) in ulidata" :key="index">
                  <div v-for="(list,index) in item" :key="index">
                     <div class="titileBox">
                      <div class="h3">{{list.mealName}}</div>                        
                      </div>
                      <div class="OneBox">
                        <ul>
                          <li v-for="(str, index) in list.commodityList" @click="toggle(index)" :key="index">
                            <dl>
                              <dt><img :src="str.image" alt=""></dt>
                              <dd>
                                <h6>{{str.name}}</h6>
                                <p>
                                  推荐量： {{str.recommendWeight}}{{str.recommendUnit}}
                                </p>
                              </dd>
                            </dl>
                          </li>
                        </ul>
                      </div>
                  </div>                   
                </swiper-slide>               
              </swiper>
            </div>
      
    </div>
  </div>
</template>

<script>
import { XProgress,  SwiperItem } from "vux";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getFoodsByMeal} from '@/request/api';
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import "../../../node_modules/swiper/dist/css/swiper.min.css";
// import { setInterval } from 'timers';

export default {
  components: {
    XProgress,
    // Swiper,
    SwiperItem,swiper, swiperSlide
  },
  data() {
    return {
      msg: "mealplan",
      index01: 0,
      num: 0,
      index: 0,
      percent1: 25,
      mySwiper:'',
      ulidata: [],
      egImg: [
        { 
          imgUrl: require("@/assets/eg5.png"),
          imgda:'每日鲜西蓝花100g-350g',
          liang:50
        },
        { imgUrl: require("../../assets/eg6.png") ,imgda:'每日鲜西蓝花300g-150g', liang:50},
        { imgUrl: require("../../assets/eg6.png") ,imgda:'每日鲜西蓝花300g-250g', liang:50},
        { imgUrl: require("../../assets/eg6.png") ,imgda:'每日鲜西蓝花300g-350g', liang:50},
        { imgUrl: require("../../assets/eg6.png") ,imgda:'每日鲜西蓝花300g-450g', liang:50},
        { imgUrl: require("../../assets/eg6.png") ,imgda:'每日鲜西蓝花300g-650g', liang:50}
      ],
      swiperOption: {
				notNextTick: true,
		        pagination: '.swiper-pagination',
		        slidesPerView: 'auto',
		        centeredSlides: true,
            paginationClickable: true,
            resistanceRatio: 0,
            // spaceBetween: 30,
            effect : 'coverflow',
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true,//修改swiper的父元素时，自动初始化swiper 
		            onSlideChangeEnd: swiper => {
                  //这个位置放swiper的回调方法
                  
		            	this.page = swiper.realIndex+1;
		            	this.index = swiper.realIndex;
		            }
		        }

    };
  },
  computed: { 
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
      
  },
  mounted(){
    
  },
  created(){  
    this.$vux.loading.show({
        text: "加载中..."
    });
    setTimeout(() => {
      
       this.getdata();
    }, 1000);
  },
  methods: {
    swiperChange(index) {
      // console.log(index);
      this.num = index;
    },
    getdata(){
      console.log(localStorage.foodPlanId)

      getFoodsByMeal({planId:localStorage.foodPlanId,meals:localStorage.period}).then((data)=>{
        console.log(data);  
        if (data) {
          this.$vux.loading.hide();
        }
        this.ulidata = data;
      }).catch((err)=>{
        console.log(err)
      })  
    },
    getmsg(index) {
      console.log(index);
      this.num = index;
      this.swiper.slideTo(index);
      // this.mySwiper.slideTo(index);
    }
  },
  beforeCreate() {
        document
        .querySelector("body")
        .setAttribute("style", "background-color:#f4f4f4;");
    },
    beforeDestroy() {
        document.querySelector("body").removeAttribute("style");
    },
};
</script>
