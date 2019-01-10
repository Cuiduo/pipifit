<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/center.less";
.mealDetails {
  font-size: 0.3rem;
}
.vux-tab .vux-tab-item {
  font-size: 0.3rem;
}
.borderight:before {
  content: "";
  position: absolute;
  left: auto;
  top: auto;
  bottom: 5px;
  right: 50%;
  height: 50%;
  width: 5px;
  border-right: 1px solid #f4f4f4 !important;
}
.vux-tab {
  font-size: 0.3rem;
}
.oneFloor {
  width: 100%;
  padding: 0.3rem 0.4rem;
  background: #ffffff;
  margin-bottom: 0.3rem;
  h3 {
    font-size: 0.3rem;
    // font-weight: 800;
    color: #333333;
    padding-bottom: 0.2rem;
    span {
      color: #bebebe;
      font-size: 0.2rem;
      float: right;
      margin-top: 0.1rem;
    }
  }
}
.elementBox {
  width: 100%;
  height: 3.4rem;
  //   background: red;
  font-size: 0.22rem;
  li {
    float: left;
    width: 33.33333%;
    height: 0.8rem;
    line-height: 0.8rem;
    border: 1px solid #ffffff;
    // margin: 0 0 -1px -1px;
    dl {
      display: flex;
      dt {
        flex: 2;
        text-align: center;
        background: #faeae6;
      }
      dd {
        flex: 3;
        text-align: center;
        background: #faf2f0;
      }
    }
  }
}
.symptom {
  font-size: 0.22rem;
  line-height: 0.5rem;
  img {
    width: 0.25rem;
    margin-right: 0.1rem;
    vertical-align: baseline;
  }
  span {
    color: #666666;
  }
}
.twoFloor {
  width: 100%;
  margin-bottom: 1.2rem;
  .floorBox{
    background: #ffffff;
    margin-bottom: 0.3rem;
    // padding-bottom: 0.2rem;
  }
  .titileBox {
    // display: flex;
    padding: 0.3rem 0.4rem;
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
  .detailBox {
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    width: 100%;
    min-height: 3rem;
    overflow: hidden;
    padding:0.3rem 0.4rem;
    background: #ffffff;
    dl:not(:last-child) {
      margin-bottom: 0.3rem;
    }
    dl {
      width: 100%;
      overflow: hidden;
      position: relative;
      // height: 2.3rem;
      dt {
        width: 30%;
        float: left;
        width: 1.8rem;
        height: 1.8rem;
        img {
          width: 100%;
          height: 1.8rem;
        }
        .imgclass{
          display: none;
        }
        .jiayouclass{
            width: 1.8rem;
            height: 1.8rem;
            position: absolute;
            left: 0;
            top: 0;
        }

        margin-right: 0.1rem;
      }
      dd {
        float: left;
        width: 70%;
        h4 {
          color: #333333;
          font-size: 0.26rem;
          padding: 0.08rem 0 0.1rem 0;
          font-weight: 400;
        }
        .unusedsize{
            color: #bebebe;
        }
        p {
          font-size: 0.2rem;
          color: #bebebe;
          padding-bottom: 0.2rem;
          // width: 100%;
          i {
            font-size: 0.26rem;
            color: #333333;
            float: right;
          }
        }
        div {
          span {
            font-size: 0.36rem;
            color: @colorone;
            i {
              font-size: 0.3rem;
            }
          }          
          .jiayou{
            width: 1.2rem;
            height: 0.44rem;
            line-height: 0.44rem;
            border: 1px solid #000000;
            color: #000000;
            display: inline-block;
            font-size: 0.24rem;
            text-align: center;
            float: right;
            border-radius: 0.06rem;
            margin-right: 0.2rem;
          }
          .changeBt {
            width: 1.2rem;
            height: 0.44rem;
            line-height: 0.44rem;
            border: 1px solid @colorone;
            color: @colorone;
            display: inline-block;
            font-size: 0.24rem;
            text-align: center;
            float: right;
            border-radius: 0.06rem;
            margin-right: 0.2rem;
            // margin-top: 0.1rem;
          }
          .unuse{
            width: 1.2rem;
            height: 0.44rem;
            border: 1px solid #bebebe;
            color: #bebebe;
            display: inline-block;
            font-size: 0.24rem;
            text-align: center;
            float: right;
            border-radius: 0.06rem;
            margin-right: 0.2rem;
          }
          .unusedsize{
            color: #bebebe;
          }
          
        }
      }
    }
  }
  .tipsBox {
    width: 100%;
    min-height: 0.8rem;
    // background: red;
    padding: 0.3rem 0.36rem;
    position: relative;
    span.tips {
      background: #faf2f0;
      font-size: 0.24rem;
      color: @colorone;
      display: inline;
      padding: 0.05rem 0.16rem;
      border-radius: 0.5rem;
    }
    .tipsCon {
      color: #333333;
      font-size: 0.26rem;
      display: inline-block;
      width: 5.3rem;
      height: 0.5rem;
      padding-top: 0.1rem;
      position: absolute;
      top: 0.26rem;
      left: 1.2rem;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space:nowrap
    }
    .zan {
      width: 0.35rem;
      position: absolute;
      right: 0.5rem;
      top: 0.2rem;
      margin-bottom: -0.3rem;
      img {
        width: 100%;
        vertical-align: middle;
      }
      dd {
        font-size: 0.18rem;
        color: #666666;
      }
      .chosedd {
        color: @colorone;
      }
    }
    .like {
      width: 0.35rem;
      position: absolute;
      right: 0.54rem;
      top: 0.2rem;
      margin-bottom: -0.3rem;
      img {
        width: 100%;
        vertical-align: middle;
      }
      dd {
        font-size: 0.18rem;
        color: #666666;
        text-align: center;
      }
    }
    .chosedd {
      dd {
        color: @colorone;
      }
    }
  }
}
.bottomBox{
  width: 100%;
	height: 1.2rem;	
	background: #FFFFFF;
	position: fixed;
  bottom: 0;
  display: flex;
  .priceBox{
    padding-top: 0.2rem;    
    border-top: 1px solid #F4F4F4;
    flex: 5;
		dl{
			padding-left: 0.4rem;;
		}
		dt{
			font-size: 0.36rem;
			color: @colorone;
			span{
				font-size: 0.24rem;
			}
		}
		dd{
			font-size: 0.2rem;
			color: #666666;
			span{
				padding-left: 0.3rem;
			}
		}
    // background: red;
  }
  .buyBox{
		padding-top: 0.2rem;
    flex:4;
		background: @colorone;
		color: #FFFFFF;
		text-align: center;
		dt{
			font-size: 0.3rem;
			
		}
		dd{
      font-size: .18rem;
      // -webkit-transform:scale(0.5); 
		}
  }
}
.aa{
    animation: mymove 500ms;
}
@keyframes mymove
{
from {transform: translateX(-6rem);}
to {transform: translateX(0);}
}
.go{
    transform: translateX(10rem);    
    transition: all 500ms;
}
</style>

<template>
  <div class="mealDetails" slot="mealDetails" v-if="dataId">
    <section class="content">
        <fixed-icon :bottom="3" @clickEvent="chat">
            <i class="icon-chat"></i>
        </fixed-icon>
    </section>

    <div class="oneFloor">      
      <h3>
        标准摄入量 / {{day}}天
        <span>经{{calcNum}}次计算精准定制</span>
      </h3>
      <div class="elementBox">
        <ul>
          <li v-for="(item,index) in nutrientList" :key="index">
            <dl>
              <dt>{{item.nameCn}}</dt>
              <dd v-if="item.quantity==8.40">{{parseInt(item.quantity)}} {{item.unit}}</dd>
              <dd v-else>{{parseInt(item.quantity)/1000}} {{item.unit}}</dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="symptom">
        <img :src="setpeople" alt>
        <span>{{symptom}} | {{sexs}} | {{age}}岁 | {{height}}cm | {{weight}}kg</span>
      </div>
    </div>
    <div class="twoFloor">
      <div class="floorBox" v-for="(item,index) in detailList" :key="index">
        <div class="titileBox">
          <div class="h3">{{item.name}}</div>
          <div class="pro" v-for="(str,index) in item.percents" :key="index">
            <p>{{str.name}}占比{{str.value}}%</p>
            <x-progress :percent="str.value"  :show-cancel="false"></x-progress>
          </div>
         
        </div>
        <div class="detailBox">
          <dl :dataPrice="list.homeHas==2?'0':list.totalPrice" class="classprice" :class="[list.homeHas==-2?'fa fa-arrow-down go':'fa fa-arrow-down aa']" v-for="(list,indexs) in item.goodList" :key="indexs" >
            <dt>
              <img :src="list.image" alt>
              <img  :class="{jiayouclass:list.homeHas==2,imgclass:list.homeHas!=2}"  :src="require('@/assets/jiayou.png')" alt="">
            </dt>
            <dd>
              <h4 :class="{unusedsize:list.homeHas==2}">{{list.name}}</h4>
              <p>推荐量：{{list.suggestQuantity}}
                <i :class="{unusedsize:list.homeHas==2}">×{{list.num}}</i>
              </p>
              <div>
                <span :class="{unusedsize:list.homeHas==2}">
                  ￥{{parseInt(list.price)}}.<i>{{list.price.toString().split('.')[1]}}</i>
                </span>
                
                <span class="changeBt" :class="{unuse:list.homeHas==2}" @click="changeOn(list,index,indexs)">更换</span>
                <span class="jiayou"  v-if="list.homeHas==1" :class="{changeBt:list.homeHas==2}" @click="jiayou(list,indexs)">家有</span>
                <span class="jiayou"  v-if="list.homeHas==2" :class="{changeBt:list.homeHas==2}" @click="jiayou(list,indexs)">恢复</span>
              </div>
            </dd>
          </dl>
        </div>
        <div @click="tipsdetail(item.tips.id)" v-if="item.tips.content" class="tipsBox">
          <span class="tips">tips</span>
          <span class="tipsCon" v-if="item.tips.content">{{item.tips.content}}</span>
          <!-- <span class="tipsCon" v-else>多吃水果少吃肉！</span> -->
          <!-- <dl class="zan" :class="{chosedd:zaned==true}" @click="zanchose">
            <dt>
              <img :src="zaned?yizan:zan" alt>
            </dt>
            <dd>123</dd>
          </dl> -->
          <!-- <dl class="like" :class="{chosedd:liked==true}" @click="likechose">
            <dt>
              <img :src="liked?heartChose:like" alt>
            </dt>
            <dd>123</dd>
          </dl> -->
          <dl class="like" :class="{chosedd:item.tips.collectionSign==1}" @click="likechose(item.tips)">
            <dt>
              <img :src="item.tips.collectionSign!=0?heartChose:like" alt>
            </dt>
            <dd>{{item.tips.collectionNum}}</dd>
          </dl>
        </div>
      </div>     
    </div>
    <div class="bottomBox">
        <div class="priceBox">
          <dl>
						<dt>
							<span>¥</span>{{parseInt(totalAmount)}}.<span>{{totalAmount.toString().split('.')[1]}}</span>
						</dt>
						<dd>
							原价：{{sourceAmount}} <span>已优惠 {{preferAmount}} 元</span>
						</dd>
					</dl>
        </div>
        <div class="buyBox">
						<dl>
							<dt>一键参团</dt>
							<dd>已有1308人购买护眼营养方案</dd>
						</dl>
        </div>
      </div>
  </div>
</template>

<script>
import { Tab, TabItem, XProgress,Range } from "vux";
import fixedIcon from '../common/fixedIcon.vue';
import {getNutrientPlanPackage,twofloorcollect,apifoodsReplace} from '@/request/api';
import { setTimeout } from 'timers';
export default {
  components: {
    Tab,
    TabItem,Range,
    XProgress,fixedIcon
  },
  data() {
    return {
      msg: "mealDetails",
      index01: 0,
      data14:50,
      liked: false,
      rotate:false,
      preferAmount:0,
      day:0,
      sourceAmount:0,
      totalAmount:0,
      numchose:0,
      jiayoudata:'家有',
      dataId:'',
      zaned: false,
      percent1: 25,
      setpeople: require("../../assets/toutou.png"),
      zan: require("../../assets/zan.png"),
      yizan: require("../../assets/yizan.png"),
      like: require("../../assets/heart@2x.png"),
      heartChose: require("../../assets/heartChose.png"),
      detailList: [],
      nutrientList: [], 
      symptom:'',
      sexs:'',
      calcNum:0,
      age:'',
      weight:'',
      height:'',
      planId:'',
      obidata:{}
    };
  },
  created() {
    // let newId =this.$route.params.id;
    this.$vux.loading.show({
        text: "加载中..."
    });
    let newId = this.$route.query.id;
    this.symptom = localStorage.symptom;
    this.day = this.$route.query.id;
    console.log(this.day)
    console.log(this.symptom)
    if (localStorage.sexData == 0) {
      this.sexs = '女';
    } else {
      this.sexs = '男';
    }
    
    this.age = localStorage.age;
    this.weight = localStorage.weight;
    this.height = localStorage.height;
    if (this.$route.query.planId!=null) {
      this.planId = this.$route.query.planId;
    }
    this.getMsg(this.planId);
    
    // setTimeout(() => {
      
    //   // this.index01 = index;
    // }, 500);
  },
  beforeCreate() {
      document
      .querySelector("body")
      .setAttribute("style", "background-color:#f4f4f4;");
  },
  beforeDestroy() {
      document.querySelector("body").removeAttribute("style");
  },
  methods: {
    jiayou(list,index){
      console.log(list,index);
      if (list.homeHas == 1) {
        this.$set(list, 'homeHas', 2);
        this.jiayoudata = '恢复';
      } else {
        this.$set(list, 'homeHas', 1);
        this.jiayoudata = '家有';
      }
      setTimeout(() => {
        let totle = 0;
        for(var i=0;i<document.getElementsByClassName("classprice").length;i++){
          console.log(document.getElementsByClassName("classprice")[i].getAttribute("dataprice"))
            totle+=Number(document.getElementsByClassName("classprice")[i].getAttribute("dataprice"));
        }
        console.log(totle.toFixed(2))
        this.totalAmount = totle.toFixed(2);
        this.sourceAmount = totle.toFixed(2);
      },300)
    },
    tipsdetail(id){
      this.$router.push({path: "/tips",query: { id: id }})
    },
    getMsg(planId){
      getNutrientPlanPackage({
        age:localStorage.age,
        sex:localStorage.sexData,
        symptoms:localStorage.symptomNo,
        day:this.$route.query.id,
        period:localStorage.period,
        weight:localStorage.weight,
        height:localStorage.height,
        planId:planId
      }).then((data)=>{
        console.log(data); 
        if (data) {
          this.$vux.loading.hide();
        } 
        this.dataId = data.foodPlanId;
        localStorage.foodPlanId = data.foodPlanId;
        this.nutrientList = data.nutrientList;
        this.detailList = data.categoryList;    
        this.preferAmount = data.preferAmount;
        this.sourceAmount = data.sourceAmount;
        this.totalAmount = data.totalAmount;
        this.calcNum = data.calcNum;
      }).catch((err)=>{
        console.log(err)
      })   
    },
    changeOn(list,index,indexs){
      console.log(list,index,indexs);
      this.$vux.loading.show({
              text: "加载中..."
          }); 
      // console.log(document.getElementsByClassName('classprice').getAttribute("dataprice"))
      
      this.obidata = list;
      apifoodsReplace({
        planId:localStorage.foodPlanId,
        goodId:list.id
      }).then((data)=>{
          console.log(data);
          this.$set(this.detailList[index].goodList, indexs,data);   
          if (list.homeHas==0||list.homeHas==1||list.homeHas==-2) {
            console.log(list)   
            let totle = 0;     
            setTimeout(() => {         
              for(var i=0;i<document.getElementsByClassName("classprice").length;i++){
                  totle+=Number(document.getElementsByClassName("classprice")[i].getAttribute("dataprice"));
              }
              console.log(totle.toFixed(2))
              this.totalAmount = totle.toFixed(2);
              this.sourceAmount = totle.toFixed(2);
              // this.$set(list, 'homeHas', 0);
              
            }, 300);
            // for(var i=0;i<document.getElementsByClassName("classprice").length;i++){
            //     totle+=Number(document.getElementsByClassName("classprice")[i].getAttribute("dataprice"));
            // }
            // console.log(totle.toFixed(2))
            // this.totalAmount = totle.toFixed(2);
            // this.sourceAmount = totle.toFixed(2);
            this.$set(list, 'homeHas', -2);
          } else if(list.homeHas==2){
            return        
          }else{
            // this.$set(list, 'homeHas', -2);
          }
          setTimeout(() => {      
             this.$vux.loading.hide();
          }, 1000);
        }).catch((err)=>{
          console.log(err)
        })   
    },
    switchTabItem(index) {
      console.log("on-before-index-change", index);
      this.$vux.loading.show({
        text: "加载中..."
      });
      setTimeout(() => {
        this.$vux.loading.hide();
        this.index01 = index;
      }, 1000);
    },
    chat() { 
        twofloorcollect({
          type:1,
          dataId:this.dataId
        }).then((data)=>{
          console.log(data);
          this.$vux.toast.text(data, 'middle')      
        }).catch((err)=>{
          console.log(err)
        })   
    },
    
    likechose(index) {
      console.log(index);
      this.$set(index,'collectionSign',1);
      console.log(index);
      twofloorcollect({
        type:5,
        dataId:index.id
      }).then((data)=>{
        console.log(data);
        this.$vux.toast.text(data, 'middle')      
      }).catch((err)=>{
        console.log(err)
      })  
    },
    zanchose() {
      this.zaned = !this.zaned;
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
