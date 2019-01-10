<style lang="less" scoped>
    .infoBox{
        width: 100%;
        height: 5.2rem;
        background: #ffffff;
        z-index: 502;
        position: absolute;
        top: 2rem;
        font-size: 0.3rem;
        .sexBox{
            width: 30%;
            // background: red;
            margin: 0 auto;
            height: .9rem;
            display: flex;
           span{
                flex: 1;
                text-align: center;
                line-height: 1rem;
                i{
                    img{
                        width: 0.3rem;
                        vertical-align: unset;
                    }
                }
           }
        }
        .yearBox{
            width: 90%;
            padding-left: 0.5rem;
            margin: 0 auto;
            position: relative;
            margin-bottom: 0.45rem;
            .yeari{
                position: absolute;
                font-size: 0.24rem;
            }
            .lab{
            //    margin-top: 1rem;
               position: relative;
               top: 0.25rem;
               left: -.4rem;
            }
            img{
                width: 0.3rem;
            }
            .subImg{
                position: absolute;
                left: .9rem;
                top: 64%;
            }
            .addImg{
                position: absolute;
                right: 0;
                top: 64%;
            }
        }
        #qqq{
            margin-left: 10px;
        }
    }
    .confirmBox{
        width: 100%;
        height: 1rem;
        // border-bottom: 1px solid #E0E0E0;
        border-top: 1px solid #E0E0E0;
        padding: 0 15%;
        padding-top: 0.42rem;
        // display: flex;
        // background: red;
        span{
            display: inline-block;
            text-align: center;
            // padding-top: 0.2rem;
            width: 2.2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            background: #E0E0E0;
            border-radius: 0.1rem;
        }
        span:nth-of-type(2){
            background: @colorone;
            float: right;
            color: #ffffff;
        }
    }
</style>

<template>
    <div class="information" slot="information">
        <div class="infoBox" >
            <div class="sexBox">
                <span @click="choseMan">
                    <i>
                       <img :src="sexSelect"> 
                    </i>
                    男
                </span>
                <span @click="choseWoman">
                    <i>
                        <img :src="sex" alt=""> 
                    </i>
                    女
                </span>
            </div>
            <div class="yearBox">
                <i class="yeari"  v-bind:style="{left:yeariLeft}">{{data}}岁</i>
                <span class="lab">年龄</span><span @click="sub"><img class="subImg" :src="subImg" alt=""></span>
                <range  v-model="data0" :min="agemin" :max="agemax"  @on-change="onchang" :range-bar-height="4"></range>
                
                <span @click="add"><img class="addImg" :src="addImg" alt=""></span>
            </div>
            <div class="yearBox">
                <i class="yeari"  v-bind:style="{left:yeariLeft2}">{{data1}}cm</i>
                <span class="lab">身高</span><span @click="sub2"><img class="subImg" :src="subImg" alt=""></span>
                <range  v-model="data1" :min="50" :max="210"  @on-change="onchang2" :range-bar-height="4"></range>
                <span @click="add2"><img class="addImg" :src="addImg" alt=""></span>
            </div>
            <div class="yearBox">
                <i class="yeari"  v-bind:style="{left:yeariLeft3}">{{data2}}kg</i>
                <span class="lab">体重</span><span @click="sub3"><img class="subImg" :src="subImg" alt=""></span>
                <range v-model="data2" :min="1" :max="125"  @on-change="onchang3" :range-bar-height="4"></range>
                <span @click="add3"><img class="addImg" :src="addImg" alt=""></span>
            </div>
            <div class="confirmBox">
                <span @click="close">取消</span>   
                <span>确认</span>
            </div>
        </div>
    </div>
</template>

<script>
import {Range,Cell } from 'vux';
import { setTimeout } from 'timers';
import {mapGetters,mapMutations} from 'vuex'
export default {
    computed: {        
        ...mapGetters(['get_listname','get_token'])
    },
    components:{
        Range,Cell 
    },
    props: ['race'],
    data(){
        return{
            msg:"information",
            data0:4,
            data02:0,
            data03:0,
            data04:0,
            data:6,
            data1:110,
            toppx:'2rem',
            agemin:0,
            agemax:100,
            data2:4,
            sex: require("@/assets/sex.png"),
            sexSelect: require("@/assets/sexSelect.png"),
            addImg: require("@/assets/add.png"),
            subImg: require("@/assets/sub.png"),
            yeariLeft:'',
            yeariLeft2:'',
            yeariLeft3:'',
            sexData:0,
            sexShow:'男',
            getMsg:'race'
        }
    },
    watch:{
        race(newValue, oldValue) {  
            // console.log(newValue)  
             console.log(this.race.ageDefault);
             this.data0 = this.race.ageDefault;
             if (this.data0==4) {
                console.log(this.data)
                this.data= 4;
            } else if(this.data0 == 8){
                console.log(this.data)
                this.data= 8;
            } else if(this.data0 == 16){
                console.log(this.data)
                this.data= 16;
            }else if(this.data0 == 13){
                console.log(this.data)
                this.data= 13;
            }
        },
        immediate:true
        
    },
    

    // watch: {
    //     data： 'changeData' // 值可以为methods的方法名
    // }，
    // methods: {
    //      changeData(curVal,oldVal){
    // 　　　 conosle.log(curVal,oldVal)
    // 　　}
    // }



    // computed:{
    //     fun(){
    //         // console.log(this.race);
    //         console.log(this.race.ageDefault);
    //         this.data0 = this.race.ageDefault;
    //         console.log(this.data0);
    //         if (this.data0==4) {
    //             console.log(this.data)
    //             this.data= 4;
    //         } else if(this.data0 == 8){
    //             console.log(this.data)
    //             this.data= 8;
    //         } else if(this.data0 == 16){
    //             console.log(this.data)
    //             this.data= 16;
    //         }else if(this.data0 == 13){
    //             console.log(this.data)
    //             this.data= 13;
    //         }
    //         // this.data = this.race.ageDefault
            
    //         // if (this.race.ageDefault == 8) {                
    //         //     this.agemin = 6;
    //         //     this.agemax = 16;
    //         // } else if(this.race.ageDefault == 4){
    //         //     this.agemin = 2;
    //         //     this.agemax = 5;
    //         // }else{
    //         //     console.log(this.race.ageDefault)
    //         // }            
    //     }
        
    // },
    
    methods:{
        close(){
            this.$emit('closeSet','false');
        },
        chengrace(){
            // this.agemin = this.race.min;
            // this.agemax = this.race.max;
            // this.data = this.race.ageDefault;
        },
        choseMan(){
            this.sexData = 0;
            this.sex = require("@/assets/sex.png");
            this.sexSelect = require("@/assets/sexSelect.png");
            this.sexShow = '男';
            this.$emit('changeSex',this.sexShow);
        },
        say(){
              console.log(123);
        },
        choseWoman(){
            this.sexData = 1;
            this.sex = require("@/assets/sexSelect.png");
            this.sexSelect = require("@/assets/sex.png");
            this.sexShow = '女';
             this.$emit('changeSex',this.sexShow);
        },
        sub(){
            if (this.data>this.agemin) {
                this.data-=1;
            } else {
                
            }
            

        },
        add(){
            this.data+=1;
        },
        sub2(){
            this.data1-=1;
        },
        add2(){
            this.data1+=1;
        },
        sub3(){
            this.data2-=1;
        },
        add3(){
            this.data2+=1;
        },
        onchang(){
            // console.log(this.data)
            let that = this;
            let a = '';
            this.$emit('changeAge',this.data);
            setTimeout(function () {
                a = parseInt(document.getElementsByClassName("range-handle")[0].style.left.split('px')[0])+80+'px';
                that.yeariLeft = a;
            },100)
            
        },
        onchang2(){
            let that = this;
            let a = '';
            this.$emit('changeheight',this.data1);
            setTimeout(function () {
                // console.log(document.getElementsByClassName("range-handle"))
                a = parseInt(document.getElementsByClassName("range-handle")[1].style.left.split('px')[0])+70+'px';
                that.yeariLeft2 = a;
            },100)
            
        },
        onchang3(){
            let that = this;
            let a = '';
            this.$emit('changeweight',this.data2);
            setTimeout(function () {
                // console.log(document.getElementsByClassName("range-handle"))
                a = parseInt(document.getElementsByClassName("range-handle")[2].style.left.split('px')[0])+70+'px';
                that.yeariLeft3 = a;
            },100)
            
        }
    }
}
</script>
