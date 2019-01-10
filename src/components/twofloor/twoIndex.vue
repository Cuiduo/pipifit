<style lang="less" scoped>
header{
    width: 100%;
    height: .88rem;
    padding: 0 0.4rem;
    position: absolute;
    font-size: .36rem;
    text-align: center;
    line-height: .88rem;
    color: #ffffff;
    z-index: 201;
    .backImg {
      width: 0.22rem;
      position: absolute;
      left: 0.4rem;
      top: 0.25rem;
    }
}
.topBox {
  width: 100%;
  // height: 5rem;
  // background: pink;
  font-size: 0.24rem;
  color: #ffffff;
  position: relative;
  img {
    width: 100%;
  }
  span {
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
    img {
      width: 0.3rem;
      margin-right: 0.1rem;
    }
  }
}
.topp {
  width: 100%;
  padding: 0.5rem 0.4rem 0;
  min-height: 1rem;
  background: #ffffff;
  font-size: 0.3rem;
  p {
    padding-bottom: 0.5rem;
  }
}
.detailist{
    width: 100%;
    min-height: 7rem;
    padding: 0 .4rem 0.3rem;
    margin-bottom: 1rem;
    background: #ffffff;    
    dl{
        // height: 2.2rem;
        overflow: hidden;
        // background: red;
    }
    dt{
        width: 1.56rem;
        float: left;
        overflow: hidden;
        // flex: 1;
        img{
             width: 1.56rem;
             height: 1.56rem;
            border-radius: 0.1rem;
            vertical-align: top;
        }
    }
    dd{
        float: right;
        width: 4.7rem;
    }
    h5{
        font-size: 0.26rem;
        color: #333333;
        font-weight: 400;
        padding-top: 0.04rem;
    }
    p{
        font-size: 0.24rem;
        padding-top: 0.4rem;
        color: @colorone;
        i{
            font-size: .36rem;
        }
        span{
          float: right;
          color: #666666;
          padding-top: 0.1rem;
        }
    }
}
// 底部参团
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
</style>
<style>
 .topp p img{
    width: 100%;
    padding: 0.4rem 0;
}
</style>
<template>
  <div>
    <section class="content">
        <fixed-icon :bottom="3" @clickEvent="chat">
            <i class="icon-chat"></i>
        </fixed-icon>
    </section>
    <header>
        <img class="backImg" @click="goBack" :src="require('@/assets/backWhite.png')" alt>
        <span>{{title}}</span>
    </header>
    <div class="topBox">
      <img :src="titleImg" alt>
      <span>
        <img :src="eyeWhite" alt>
        {{readNum}}
      </span>
    </div>
    <div class="topp">
      <p v-html="content"></p>
      
    </div>
    <div class="detailist">
        <dl v-for="(item,index) in dataList" :key="index">
            <dt>
                <img :src="item.image" alt="">
            </dt>
            <dd>
                <h5>{{item.name}}</h5>
                <p>
                    <!-- ¥10.80 -->
                   ¥<i>{{parseInt(item.price)}}</i>.{{item.price.toString().split('.')[1]}}
                   <span>x1</span>
                </p>
            </dd>
        </dl>
        
    </div>
    <div class="bottomBox">
      <div class="priceBox">
        <dl>
          <dt>
            <span>¥</span>{{parseInt(totalAmount)}}.<span>{{totalAmount.toString().split('.')[1]}}</span>
          </dt>
          <dd>原价：{{sourceAmount}}
            <span>已优惠 {{preferAmount}} 元</span>
          </dd>
        </dl>
      </div>
      <div class="buyBox">
        <dl>
          <dt>一键参团</dt>
          <dd>已有102人购买护眼营养方案</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import fixedIcon from '../common/fixedIcon.vue';
import {apitwodetail,twofloorcollect} from '@/request/api';
import qs from 'qs';
export default {
  components: {
    fixedIcon
  },
  data() {
    return {
      titleImg: '',
      eyeWhite: require("@/assets/eyeWhite.png"),
      id:'',
      title:'',
      readNum:0,
      sourceAmount:0,
      preferAmount:0,
      totalAmount:0,
      content:'',
      dataList:[]
    };
  },
  created() {
    // let newId =this.$route.params.id;
    this.$vux.loading.show({
        text: "加载中..."
    });
    setTimeout(() => {      
       this.$vux.loading.hide();
       this.getdetail();
    }, 1000);
    let newId = this.$route.query.id;
    this.id = this.$route.query.id;
    let twoDetailId = localStorage.getItem("twoDetailId");
    // this.getdetail();
    // console.log(newId + "," + twoDetailId);
  },
  methods: {
    chat() { 
        // this.$vux.loading.show({
        //   text: "加载中..."
        // });       
        // console.log(a)
        twofloorcollect({
          type:2,
          dataId:this.id
        }).then((data)=>{
          console.log(data);
          this.$vux.toast.text(data, 'middle')      
        }).catch((err)=>{
          console.log(err)
        })   
    },
    goBack(){
      this.$router.go(-1);    
       
    },
    getdetail(){      
      apitwodetail('package/custom/'+this.id).then((data)=>{
        console.log(data); 
        this.titleImg = data.image;
        this.title = data.title;
        this.readNum = data.readNum;
        this.dataList = data.goodList;
        this.content = data.content;
        this.preferAmount = data.preferAmount;        
        this.sourceAmount = data.sourceAmount;
        this.totalAmount = data.totalAmount;
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
};
</script>
