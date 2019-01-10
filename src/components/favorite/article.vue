<style lang="less" scoped>
.bigDiv{
        min-height: 12rem;
        background: #ffffff;
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
            min-height: 1rem;
            overflow: hidden;
            padding: 0.24rem 0.4rem;
            dt{
                float: left;
                img{
                    width: 2.1rem;
                    height: 1.6rem;
                    margin-right: 0.2rem;
                }
            }
            dd{
                float: left;
                padding-top: 0.1rem;
                width: 4.4rem;
                height: 1.6rem;
                position: relative;
                h6{
                    font-size: 0.3rem;
                    color: #333333;
                    font-weight: 400;
                }
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
            // padding: 0 0.4rem;
            position: absolute;
            bottom: -0.1rem;
            color: #999999;
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
    <div>
        <div class="unscramble">
            <ul>
                <li v-for="(item,index) in articleList" :key="index" @click="toggle(item)"  @touchstart.prevent="touchin(item.id)" @touchend.prevent="cleartime(item.id)">
                    <dl>
                        <dt><img :src="item.image" alt=""></dt>
                        <dd>
                          <h6>{{item.title}}</h6>
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
                        </dd>
                    </dl>                   
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {apicollect} from '@/request/api';
import axios from 'axios'
export default {
    data(){
        return{
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
                type:4,
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
            console.log(id)
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
            }).catch(err => {
                console.log(err)
            })
            
        },
        toggle: function(item) {
            console.log(item);  
            // localStorage.planId = item.planId;     
            this.$router.push({ path: "/windzxsh", query: { id: item.articleId } });
            // this.$router.push({name:'mealDetails', params:{ id:index}});
        },
    }
}
</script>
