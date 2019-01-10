<template>
       <div class="main">
         <!-- <button class="btn" @click="getAdress">获取你的地址让不让</button> -->
        <!--轮播-->
        <!-- <div>
             <swiper auto height="150px">
              <swiper-item class="black" style='background:#39b4b9;'>
                         
              </swiper-item>
              <swiper-item class="black" style='background:#39b4b9;'>
                 
              </swiper-item>
               <swiper-item class="black" style='background:#39b4b9;'>
                  
              </swiper-item>
               <swiper-item class="black" style='background:#39b4b9;'>
                 
              </swiper-item>
              <swiper-item class="black" style='background:#39b4b9;'>
                <h2 style="color:#fff"
                 class="title fadeInUp animated">曾经的你</h2>
                 <span style="color:#fff">swiper最好的轮播组件</span>
              </swiper-item>
            </swiper>
        </div> -->
        <header>

        </header>
        <div>
          <button class="btn" @click="alert">123</button>
          <toast v-model="isToastShow" type="text" :text="toastText"></toast>
        </div>
        <div v-transfer-dom>
          <loading :show="show1"></loading>
        </div>
        <div v-transfer-dom>
          <confirm
          v-model="show4"
          :close-on-confirm="false"
          :title="title"
          @on-confirm="onConfirm4">
            <p style="text-align:center;">咋地请求一下地址行不</p>
          </confirm>
        </div>
        <div>
          <tab>
            <tab-item class="" selected @on-item-click="onItemClick">已发货</tab-item>
            <tab-item @on-item-click="onItemClick">未发货</tab-item>
            <tab-item @on-item-click="onItemClick">全部订单</tab-item>
          </tab>
           <tab :animate="false">
            <tab-item active-class="active-6-1">已发货</tab-item>
            <tab-item active-class="active-6-2" selected>未发货</tab-item>
            <tab-item active-class="active-6-3">全部订单</tab-item>
          </tab>
        </div>
            <div>
              <tab :line-width=2 active-color='#fc378c' v-model="index">
                <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
              </tab>
              <swiper v-model="index" height="100px" :show-dots="false">
                <swiper-item v-for="(item, index) in list2" :key="index">
                  <div class="tab-swiper vux-center">{{item}} Container</div>
                </swiper-item>
              </swiper>
            </div>
            <div clsass="ttttt" style="width: 80%;
  background: pink;
  height: 300px;
  padding-top: 100px;">
              <range :step="1" :min="7" :max="77" :range-bar-height="4" v-model="data14" @on-touchstart="onTouchstart" @on-touchend="onTouchend"></range>
            </div>
          </div>
</template>
<style>
.ttttt{
  width: 80%;
  background: pink;
  height: 300px;
  padding-top: 100px;
}
</style>

<script>
import { Grid, GridItem } from 'vux'
import { Swiper, GroupTitle, SwiperItem, XButton, Divider,Alert ,Range ,Toast,Tab,Loading,Confirm, TabItem,TransferDomDirective as TransferDom } from 'vux'
import { apiAddress,testGet } from '@/request/api';
import getCurrentCityName from '@/utils/getUserLocation'
const list = () => ['精选', '美食', '电影', '酒店', '外卖','电影', '酒店', '外卖'];
export default {
  directives: {
    TransferDom
  },
  components: {
    Grid,
    GridItem,
    Swiper, GroupTitle, SwiperItem, XButton, Divider ,Toast,Tab, TabItem,Loading,Confirm,Range
  },
  data () {
    return {    
      news: '头条信息',
      isToastShow:false,
      list2: list(),
      title:'提示',
      show4:false,
      demo2: '美食',
      show1:false,
      toastText:'',
      data14: 0,
      index: 0,
      info:[
          {txt:'义务爱了 完成传奇世界H5-王者归来任务 '},
          {txt:'本世神 兑换《传奇世界H5》畅玩级礼包 '}
      ]
    }

  },
  created() {
    this.getmsg();
    // this.postmsg();
    this.apimsg();
    this.apiget();
    // this.getAdress()
  },
  methods: {
      onTouchstart (e) {
      console.log('touchstart')
    },
    onTouchend (e) {
      console.log('touchend')
    },
      getAdress(){
        this.show4=!this.show4;
      },
      onConfirm4 () {
        console.log('on confirm')
        this.$vux.loading.show({
          transition: '',
          text: '加载中...'
        });
        this.addressDetail();
        //console.log(getCurrentCityName());
        // getCurrentCityName()
        // .then((city)=>{
        //   console.log(city)
        //   setTimeout(() => {
        //     this.$vux.loading.hide()
        //     this.show4 = false
        //   }, 500)
        // })
        // .catch((err)=>{
        //   console.log(err)
        // })
        
      },
      alert() {
        this.isToastShow = true;
        this.toastText = "我是显示在中间的";
      },
      onItemClick (index) {
        console.log('on item click:', index)
      },
      addressDetail(){ //获取地理位置 
          var self = this; 
      //全局的this在方法中不能使用，需要重新定义一下
          var geolocation = new BMap.Geolocation(); 
      //调用百度地图api 中的获取当前位置接口
          geolocation.getCurrentPosition(function(r){ if(this.getStatus() == BMAP_STATUS_SUCCESS){ 
      //获取当前位置经纬度
        var myGeo = new BMap.Geocoder();
        console.log(r)
        myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){ if (result){
      //根据当前位置经纬度解析成地址
        // self.ADDRESS_DETAIL(result.addressComponents.district+result.addressComponents.street);
        console.log(result)
        //console.log(self.$vux.loading)
        if (result) {
          setTimeout(() => {
            self.$vux.loading.hide()
            self.show4 = false
          }, 500)
        }
        // self.geohash = result.point.lat+","+result.point.lng;
        // self.SAVE_GEOHASH(self.geohash); 

        // self.latitude = result.point.lat; self.longitude = result.point.lng;
      // console.log(result.point.lat); self.RECORD_ADDRESS({'latitude':result.point.lat,'longitude':result.point.lng});
      }
      });
      } });
      },
      getmsg(){
        this.getAxios(
          'article'
        ).then((data)=>{
          console.log(data)
        }).catch((err)=>{
          console.log(err)
        })
      },
      postmsg(){
        this.postAxios('article/test/label',{
          'name':123
        }).then((data)=>{
          console.log(data)
        }).catch((err)=>{
          console.log(err)
        })
      },
      apiget(){
        testGet().then((data)=>{
          console.log(data)
        }).catch((err)=>{
          console.log(err)
        })
      },
      apimsg(){
        apiAddress({
          name:'123'
        }).then((data)=>{
          console.log(data)
        }).catch((err)=>{
          console.log(err)
        })
      }
      

  },

}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
header{
  height: 0.6rem;
}
.main{
  background: pink;
  .btn{
    background: red;
    color:#ffffff;
    width:100%;
    height:50px;
    border:none;
  }
}
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>