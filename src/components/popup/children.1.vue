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
    <div slot="children">
        <swiper  class="swipersymptom" dots-position="center" dots-class="dotsClass">
            <swiper-item >
                <ul>
                    <li v-for="(item, index) in symptomData"  :key="index" @click="symptoms(index,item)">{{item.symptomName}}</li>
                </ul>
            </swiper-item>
            <!-- <swiper-item >
                <ul>
                    <li v-for="(item, index) in symptomData" :key="index" :class="{active:index == num}" @click="symptoms(index,item)">{{item.symptomName}}</li>
                </ul>
            </swiper-item>   -->
         </swiper>
    </div>    
</template>
<script>
import { Swiper,SwiperItem,TransferDomDirective as TransferDom} from "vux";
import {mapGetters,mapMutations} from 'vuex';
export default {
  components: {
    Swiper,SwiperItem
  },
  computed: {   
    ...mapGetters(['get_indexData'])
  },
  mounted() {
    // setTimeout(console.log(this.get_indexData),10000)
    //this.getmsg();
    setTimeout(() => {
      this.getmsg(); 
    },500);
    // console.log(this.race)
  },
  props: ['race','qujian'],
  watch:{
    race(newValue, oldValue) {  
      // console.log(newValue)  
    },  
    qujian(newValue, oldValue) {  
      // console.log(newValue) ;
      this.agequjian =  newValue;
      this.getmsg()
    } 
  },
  data(){
    return{
      msg:"children",
      num:-1,
      symptomData:'',
      races:'',
      agequjian:0
    }
  },
  methods:{
    symptoms(e,item){
      this.$emit('changeSymptom',item.symptomName)
      this.symptom = item.symptomName;
      console.log(this.symptom)
      this.num = e;
    },
    getmsg(){
      console.log(this.get_indexData);      
      this.symptomData = this.get_indexData[0].crowdList[this.agequjian].symptomList;
    }
  }
}
</script>
