<style lang="less" scoped>
    .bigDiv{
        min-height: 12rem;
        background: #ffffff;
    }
    .stickBox{
        width: 100%;
        // height: 2.5rem;
        padding: 0.4rem;        
        .content{
            background: #F9F9F9;
            width: 100%;
            padding: 0.4rem 0 0.6rem;
            position: relative;
            border-radius: 0.2rem;
            margin-bottom: 0.3rem;
            // height: 3rem;
            p{
                font-size: 0.24rem;
                color: #333333;
                margin: 0 0.3rem;
            }
            .zhiding{
                position: absolute;
                top: -0.1rem;
                left: 0.3rem;
                width: 1rem;
            }
            .down{
                position: absolute;
                right: 0.25rem;
                width: 0.38rem;
                bottom: 0.2rem;
            }
            .actived{
                overflow: hidden;
                text-overflow: ellipsis;
                display:-webkit-box; 
                -webkit-box-orient:vertical; 
                -webkit-line-clamp:4;
            }
        }
    }
    .unscramble{
        width: 100%;
        min-height: 3rem;
        // background: pink;
        border-top: 1px solid #F4F4F4;
        li{
            border-bottom: 1px #F4F4F4 solid;
            padding-bottom: 0.1rem;
            p{
                font-size: 0.26rem;
                color: #333333;
                padding: 0 0.4rem 0.24rem;
                img{
                    width: 0.56rem;
                    height: 0.56rem;
                    border-radius: 50%;
                    margin-right: 0.1rem;
                }
                .zhiwei{
                    color: #999999;
                    font-size: 0.22rem;
                }
            }
        }
        dl{
            position: relative;
            font-size: 0.26rem;
            height: 1rem;
            padding: 0.24rem 0.4rem;
            dt{
                float: left;
                img{
                    width: 0.64rem;
                    height: 0.64rem;
                    border-radius: 50%;
                    margin-right: 0.2rem;
                }
            }
            dd{
                float: left;
                padding-top: 0.1rem;
                width: 5.5rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .btnrImg {
                position: absolute;
                right: 0.4rem;
                top: 0.4rem;
                width: 0.14rem;
            }
        }


        .tipsBottom {
            width: 100%;
            height: 0.5rem;
            // background: red;
            padding: 0 0.4rem;
            color: #666666;
            font-size: 0.24rem;
            display: flex;
            img {
            width: 0.25rem;
            }
            span {
                flex: 1;
                justify-content: space-between;
                text-align: center;                
            }
            span:nth-of-type(1){
                text-align: left;
            }
            span:nth-of-type(3){
                text-align: right;
            }
        }
    }
</style>

<template>
    <div class="bigDiv">
       <div class="stickBox">
           <div class="content">
               <p :class="{actived:show}">
                   “多点”通过引进中国营养学会、中国疾控中心营养健康研究所、北大医学部营养学系联合开发的国内首款“营养推荐引擎”，力求在提供“质优价廉”服务的同时为用户针对节省选品时间以及“如何吃对”的健康需求提供又一份由顶级机构给予保障的增值服务。
该“营养推荐引擎”汇集了中国营养学、疾病学和疾病防控机构几十年的研究成果，运用机器学习技术，可根据用户的不同需求，提供定制化的“精准营养”推荐服务，为用户把好健康入口。
               </p>
               <img class="zhiding" :src="require('@/assets/zhiding.png')" alt="">
               <img class="down" @click="down" :src="show?downimg:up" alt="">
           </div> 
           
       </div>
       <div class="unscramble">
               <ul>
                   <li v-for="(item,index) in articleList" :key="index" @click="toggle(item)" @touchstart.prevent="touchin(item.id)" @touchend.prevent="cleartime(item.id)">
                        <dl>
                            <dt><img :src="item.image" alt=""></dt>
                            <dd>
                                {{item.authorPosition}}                                
                            </dd>
                        </dl>
                        <p>
                            {{item.authorPosition}}:{{item.title}}
                        </p>
                        <div class="tipsBottom">
                            <span>
                                <img :src="see" style="vertical-align: baseline;width:0.3rem;"> {{item.readNum}}
                            </span>                   
                            <span>
                            <img :src="comment"> {{item.commentNum}}
                            </span>
                            <span>
                            <img :src="heart"> {{item.collectionNum}}
                            </span>                            
                        </div>
                   </li>
                   <!-- <li v-for="(item,index) in articleList" :key="index" >
                       <p>
                           <img :src="item.image" alt="">
                           <span> {{item.author}}</span>
                           <span class="zhiwei"> {{item.author}}</span>
                       </p>
                       <dl>
                           <dt>
                               <img :src="item.image" alt="">                            
                           </dt>
                           <dd>

                           </dd>
                       </dl>
                   </li> -->
               </ul>
           </div>
    </div>
</template>

<script>
import {apicollect} from '@/request/api';
import axios from 'axios'
export default {
    name: 'interpretation',
    components: {
        // swiper, swiperSlide
    },
    data(){
        return{
            tabList:['营养计划','定制补充','专业解读','文章'],
            btr: require("@/assets/btr.png"),            
            see: require("@/assets/see.png"),
            comment: require("@/assets/comment.png"),
            heart: require("@/assets/heart@2x.png"),
            heart2: require("@/assets/heart2.png"),
            share: require("@/assets/share.png"),
            articleList:[],
            downimg: require("@/assets/down.png"),
            up: require("@/assets/up.png"),
            num:0,
            show:true,
            id:''
        }
    },
    created(){
        this.$vux.loading.show({
            text: "加载中..."
        });
        this.getmsg();
    },
    methods: {
        toggle(index) { 
            this.num = index;
        },
        getmsg(){
            apicollect({
                type:3,
                pageNum:1
            }).then((data)=>{
                console.log(data);
                setTimeout(() => {
                    this.$vux.loading.hide();
                    this.articleList = data.list;
                }, 800)
                
            }).catch((err)=>{
                console.log(err)
            })
        },
        touchin(id) {
            clearInterval(this.Loop);
            this.Loop = setTimeout(function() {
                const _this = this 
                this.$vux.confirm.show({
                    title: '是否确认删除',
                    onCancel () {

                    },
                    onConfirm () {
                        _this.deletes(id);
                    }
                })
            }.bind(this), 1000);
        },
        cleartime(id) {
            clearInterval(this.Loop);
        },
        deletes(index){
            this.id = index;
            // apidelete('member/collection/'+this.id)
            axios.delete('member/collection/'+this.id).then(res => {
                this.$vux.toast.text(res.data, 'middle')     
                this.getmsg(); 
                // console.log(res.data);
            }).catch(err => {articleId
                console.log(err)
            })
            
        },
        down(){
            this.show = !this.show;
        },
        toggle: function(item) {
            console.log(item);  
            // localStorage.planId = item.planId;     
            this.$router.push({ path: "/specialist", query: { id: item.articleId } });
            // this.$router.push({name:'mealDetails', params:{ id:index}});
        },
    }
}
</script>
