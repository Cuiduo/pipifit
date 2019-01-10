<style lang="less" scoped>
.big{
    padding:0.4rem 0 0.4rem 0.4rem;
     min-height: 12rem;
    background: #ffffff;
}
.bigDiv{
    min-height: 12rem;
    background: #ffffff;
}
.bigul{
    width: 100%;
    min-height: 3rem;
    // background: pink;
    
        li{
            // padding-left: 0.2rem;
            border-bottom: 1px solid #F4F4F4;
            padding-bottom: 0.4rem;
        }
    
}
    .imgBox {
        position: relative;
        font-size: 0.26rem;
        padding-right: 0.4rem;
        .img {
          width: 100%;
          left: 0;
          top: 0;
          height: 3.76rem;
        //   margin: 0.2rem 0;
        }
        p {
          position: absolute;
        //   width: 96%;
          width: 100%;
          padding-right: 1rem;
          margin: 0 auto;
          top: 0.1rem;
          z-index: 100;
          color: #ffffff;
          font-size: 0.24rem;
          img {
            width: 0.24rem;
            margin-left: 0.2rem;
            margin-right: 0.1rem;
            // vertical-align: baseline;
          }
        }
        i {
          float: right;
        }
        .delete{
            position: absolute;
            bottom: 0.4rem;
            right: 0.6rem;
            width: 0.5rem;
        }
      }
      .titie{
          font-size: 0.36rem;
          color: #333333;
          padding-top: 0.2rem;
          p{
              padding-right: 0.4rem;
              color: @colorone;
              span{
                  float: right;
                  font-size: 0.24rem;
                  i{
                      font-size: 0.36rem;
                  }
              }
          }
      }
      .twoFixed {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        span {
          font-size: 0.6rem;
        }
      }
</style>

<template>
    <div class="big">
        <ul class="bigul">
            <li v-for="(item,index) in datalist" :key="index">
                <div class="imgBox">
                    <img class="img" :src="item.image" alt>
                    <p>
                        <span>
                        <img :src="heart2" alt> {{item.collectionNum}}
                        </span>
                        <span>
                        <img style="width: 0.28rem;vertical-align: baseline;" :src="eyeWhite" alt> {{item.readNum}}万
                        </span>
                        <i>{{item.symptomName}}</i>
                    </p> 
                    <div class="twoFixed">
                        富含
                        <!-- <span>{{list.nutrientName}}</span> -->
                    </div>
                    <img class="delete" @click="deletes(item)" :src="require('@/assets/deleteimg.png')" alt="">                  
                </div>
                <div class="titie">
                    <p>
                        {{item.title}}
                        <span>￥<i>{{item.totalAmount}}</i></span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {apicollect,apidelete} from '@/request/api';
import axios from 'axios'
export default {
    data(){
        return{
            heart2: require("@/assets/heart2.png"),
            eyeWhite: require("@/assets/eyeWhite.png"),
            datalist:[],
            id:''
        }
    },
    created(){
        this.$vux.loading.show({
            text: "加载中..."
        });
        this.getmsg();
    },
    methods:{
        getmsg(){
            apicollect({
                type:2,
                pageNum:1
            }).then((data)=>{
                console.log(data);
                setTimeout(() => {
                    this.$vux.loading.hide();
                    this.datalist = data.list;
                }, 800)
            }).catch((err)=>{
                console.log(err)
            })
        },
        deletes(index){
            this.id = index.id;
            // apidelete('member/collection/'+this.id)
            axios.delete('member/collection/'+this.id).then(res => {
                this.$vux.toast.text(res.data, 'middle')     
                this.getmsg(); 
                // console.log(res.data);
            }).catch(err => {
                console.log(err)
            })
            
        }
    }
}
</script>
