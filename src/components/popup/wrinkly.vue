<style lang="less" scoped>
    .calculatorContent{
        width: 75%;
        height: 3rem;
        float: left;
        border-collapse:collapse;
        li{
          width: 33.333333%;
          border: 0.005rem solid #E0E0E0;
          // margin:0 0 -1px -1px;
          float: left;
          text-align: center;
          height: 1rem;
          line-height: 1rem;
          color: #333333;
        }
        
        li:active{
          color: @colorone;
        }
        .active{
          color: @colorone;
        }
      }
      .calculatorResult{
        width: 25%;
        float: right;
        height: 3rem;
        .setpeople{
          border: 1px solid #E0E0E0;
          text-align: center;
          height: 1rem;
          line-height: 1rem;
          img{
            width: 0.4rem;
          }
        }
        .countBox{
          background: @colorone;
          width: 100%;
          height: 2rem;
          text-align: center;
          line-height: 2rem;
          color: #ffffff;
        }
      }
      .classifyBox{
        font-size: 0.3rem;
        width: 100%;
        height: 1rem;
        display: flex;
        background: #ffffff;
        div{
          flex: 1;
          justify-content:space-around; 
          text-align: center;
          align-content: center;
          line-height: 1rem;
          .Islamic{
            border-width: 2px;
            width:0.74rem;
            height: 0.35rem;
            background: #ffffff;
            vertical-align: middle;
            box-shadow:none;
          }
          .weui-switch:checked{
            border-color: @colorone;
            // border:2px solid @colorone;
            // background: @colorone;
          }
          .Islamic::after{
            
            // background-color: @colorone;
            width: 0.27rem;
            height: 0.27rem;
          }
          .Dont::after{
            background-color: @colorone;
          }
           .Islamic::before{
            //  background-color: #D3D3D3;
            //  background-color: #ffffff;
             width: 0.27rem;
             height: 0.27rem;
          }
        }
      }
</style>


<template>
    <div slot="wrinkly">
        <swiper  class="swipersymptom" dots-position="center" dots-class="dotsClass">
           <!-- <p style="text-align:center;line-height:2rem;">暂无数据</p> -->
            <swiper-item v-for="(list,index) in listdata" :key="index">
                <ul>
                    <li v-for="(item, indexs) in list" :key="indexs" :class="{active:item.relatedSymptom==0}" @click="symptoms3(indexs,item)">{{item.symptomName}}</li>
                </ul>
            </swiper-item>
            <!-- <swiper-item >
                <ul>
                    <li v-for="(item, index) in symptomData" :key="index" :class="{active:index == num}" @click="symptoms(index,item)">{{item}}</li>
                </ul>
            </swiper-item>   -->
        </swiper>
    </div>
    
</template>
<script>
import { Swiper,SwiperItem,TransferDomDirective as TransferDom} from "vux";
import {mapGetters,mapMutations} from 'vuex';
import {SplitArray} from '../../request/util';
export default {
  components: {
    Swiper,SwiperItem
  },
  computed: {   
    ...mapGetters(['get_indexData'])
  },
  data(){
    return{
      msg:"wrinkly",
      num:-1,
      symptomData:[],
      listdata:[],
      agequjian:0
    }
  },
  mounted() {
    // setTimeout(console.log(this.get_indexData),10000)
    //this.getmsg();
    setTimeout(() => {
      this.getmsg(); 
    },1000);
    // console.log(this.race)
  },
  props: ['race','qujian3'],
  watch:{
    race(newValue, oldValue) {  
      // console.log(newValue)  
    },  
    qujian3(newValue, oldValue) {  
      // console.log(newValue) ;
      this.agequjian =  newValue;
      this.getmsg();
    } 
  },
  methods:{
    symptoms3(e,item){
      console.log(e,item);
      this.$emit('changeSymptom',item)
      this.symptom = item;
      // console.log(this.symptom)
      this.num = e;
      for (let index = 0; index < this.symptomData.length; index++) {
        this.$set( this.symptomData[index], 'relatedSymptom', '1');        
      }
      this.$set( this.symptom, 'relatedSymptom', '0');
    },
    getmsg(){
      // console.log(this.get_indexData);      
      this.symptomData = this.get_indexData[2].crowdList[this.agequjian].symptomList;
      // console.log(this.symptomData);
      // var SplitArray = function(N,Q){
      //     var R = [],F;
      //     for (F = 0;F < Q.length;) R.push(Q.slice(F,F += N))
      //     return R
      // }
      this.listdata = SplitArray(9,this.symptomData)
      this.num = -1;
      // console.log(this.listdata)
      ;
    }
  }
}
</script>
