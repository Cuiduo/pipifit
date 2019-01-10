<style lang="less" scoped>
header{
    width: 100%;
    height: .88rem;
    padding: 0 0.4rem;
    position: relative;
    background: #ffffff;
    font-size: .36rem;
    text-align: center;
    line-height: .88rem;
    border-bottom: 1px solid #F4F4F4;
    .backImg {
      width: 0.22rem;
      position: absolute;
      left: 0.4rem;
      top: 0.25rem;
    }
}
.topBox{
    width: 100%;
    min-height: 5.4rem;
    padding: 0 0.4rem;
    background: #ffffff;
    h3{
        font-size: 0.4rem;
        color:#201F24; 
        padding-top: 0.4rem;
    }
    p{
        text-align: right;
        font-size: 0.24rem;
        color: #666666;
        padding-bottom: 0.2rem;
        img{
            width: 0.3rem;
            margin-right: 0.1rem;
        }
    }
    div img{
        width: 100%;
    }
}
.contentBox{
    width: 100%;
    min-height: 5.4rem;
    padding: 0 0.4rem 0.42rem;
    border-bottom: 1px solid #F4F4F4;
    background: #ffffff;
    h3{
        font-weight: normal;
        font-size: 0.36rem;
        color: #333333;
    }
    p{
        font-size: 0.3rem;
        color: #333333;
    }
    .zhicheng{
        font-size: 0.26rem;
        color: #999999;
        padding: 0.1rem 0 0.4rem 0;
    }
    div p{
        padding-top: 0.6rem;
    }
}
.leaveWord{
    width: 100%;
    min-height: 5.4rem;
    padding: 0 0.4rem 0;
    background: #ffffff;
    h5{
        font-weight: normal;
        font-size: 0.3rem;
        color: #333333;
        padding: 0.4rem 0;
    }
    dl{
        font-size: .26rem;
        padding-bottom: 0.6rem;
        overflow: hidden;
        min-height: 1.3rem;
        dt{
            float: left;            
        }
        dt img{
            width: 0.72rem;
            height: 0.72rem;
            border-radius: 50%;
            margin-right: .24rem;
        }
        dd{
            float: left;
            width: 5.7rem;
            color: #666666;
            p{
               i{
                   float: right;
                   font-size: .22rem;
                   padding-top: 0.02rem;
               } 
            }
            div{
                font-size: .3rem;
                padding: 0.2rem 0;
            }
        }
    }
}
.commentsBox{
    position: fixed;
    width: 100%;
    height: 1rem;
    border-top: 1px solid #F4F4F4;
    bottom: 0;
    background: #ffffff;
    font-size: .26rem;
    padding: 0.18rem 0.28rem;
    input{
        width: 5.6rem;
        height: 0.7rem;
        background: #F4F4F4;        
        font-size: .26rem;
        outline: none;
        border: none;
        border-radius: 0.1rem;
        padding-left: 0.8rem;
    }
    span{
        color: #999999;
        font-size: .3rem;
        padding-left: 0.4rem;
    }
    img{
        position: absolute;
        left: 0.5rem;
        width: 0.4rem;
        top: 0.3rem;
    }
    
}
.onfucss{
    position: relative !important;    
    width: 100%;
    height: 1rem;
    border-top: 1px solid #F4F4F4;
    bottom: 0;
    background: #ffffff;
    font-size: .26rem;
    padding: 0.18rem 0.28rem;
    input{
        width: 5.6rem;
        height: 0.7rem;
        background: #F4F4F4;        
        font-size: .26rem;
        outline: none;
        border: none;
        border-radius: 0.1rem;
        padding-left: 0.8rem;
    }
    span{
        color: #999999;
        font-size: .3rem;
        padding-left: 0.4rem;
    }
    img{
        position: absolute;
        left: 0.5rem;
        width: 0.4rem;
        top: 0.3rem;
    }
}
.bigDiv{
    padding-bottom: 1rem;
}
</style>

<template>
    <div v-show="title" class="bigDiv">
        <section class="content">
            <fixed-icon :bottom="3" @clickEvent="chat">
                <i class="icon-chat"></i>
            </fixed-icon>
        </section>
        <header>
            <img class="backImg" @click="goBack" :src="require('@/assets/back.png')" alt>
            <span>专家说</span>
        </header>
        <div class="topBox">
            <h3>{{title}}</h3>
            <p>
                <img :src='require("@/assets/see.png")' alt="">
                <span>{{readNum}}</span>
            </p>
            <div>
                <img :src="require('@/assets/eg7.png')" alt="">
            </div>
        </div>
        <div class="contentBox">
            <h3>{{author}}</h3>
            <p class="zhicheng">
                中国营养学会理事，中国科协聘科学传播首席专家，食品科学博士
            </p>
            <p>
                "吃钙片并不能完全替代合理的饮食。"
            </p>
            <p>
                热心网友：骨质疏松是不是应该多吃钙片？
            </p>
            <p>
                范志红：吃钙片并不能完全替代合理的饮食。
            </p>
            <div>
                <p>
                    钙一般是通过食物来补充，比如多吃牛奶、蔬菜，但是维生素D通过食物补充的量极少，其主要来源是在阳光下形成7-脱氢胆固醇，并在肝脏和肾脏经过两次羟化，才能形成维生素D发挥作用的活性形式。
                </p>
                <p>的常用方法，尤其是骨头汤长时间熬制，汤变得浓稠并且很白，看似钙都溶出来了。喝骨头汤补钙的说法来源于骨头的钙在一定情况下是可以溶出的，所以人们在血钙水平比较低的时候喝骨头汤来维持血钙水平的稳定。动物在死亡之后，骨钙边很难溶解，即使我们加醋，能溶出的钙也极其有限，所以用骨头汤补钙的方法是不科学的。
                </p>
            </div>
        </div>
        <div class="leaveWord">
            <h5>精选留言（{{commentNum}}）</h5>
            <dl v-for="(item,index) in commentList" :key="index">
                <dt><img :src="item.userImage" alt=""></dt>
                <dd>
                    <p>
                        <span>{{item.userName}}</span>
                        <i>{{item.createTime}}</i>
                    </p>
                    <div>
                        {{item.content}}
                    </div>
                </dd>
            </dl>
           
        </div>
        <div class="commentsBox">
        <!-- <div :class="onfucs?onfucss:commentsBox"> -->
            <input type="text" v-model="inputValue" @focus="onfucsfun" placeholder="写评论...">
            <span @click="gocomment">发送</span>
            <img :src="require('@/assets/pen.png')" alt="">
        </div>
    </div>
</template>

<script>
import fixedIcon from '../common/fixedIcon.vue';
import {apithreedetail,twofloorcollect,comment} from '@/request/api';
export default {
    components: {
        fixedIcon
    },
    data(){
        return{
           onfucss:'onfucss',
           commentsBox:'commentsBox',
           onfucs:false,
           commentNum:0,
           readNum:0,
           author:'',
           title:'',
           commentList:[],
           inputValue:''
        }
    },
    created(){
        this.$vux.loading.show({
            text: "加载中..."
        });
        this.getdetail();
    },
    methods:{
        goBack(){            
            this.$router.go(-1);            
        },
        chat() { 
             twofloorcollect({
                type:3,
                dataId:this.$route.query.id
                }).then((data)=>{
                this.$vux.toast.text(data, 'middle')      
                }).catch((err)=>{
                console.log(err)
            })   
        },
        onfucsfun(){
            console.log(this.onfucs)
            this.onfucs = !this.onfucs;
        },
        getdetail(){
            apithreedetail('article/'+this.$route.query.id).then((data)=>{
                setTimeout(() => {
                    this.$vux.loading.hide();
                    this.title = data.title;
                    this.readNum = data.readNum;
                    this.author = data.author;
                    this.commentList = data.commentList;
                    this.commentNum = data.commentNum;
                }, 500)
                
            }).catch((err)=>{
                console.log(err)
            });            
        },
        gocomment(){
            console.log(this.inputValue);
             if (this.inputValue!='') {
                comment({
                    articleId:this.$route.query.id,
                    content:this.inputValue
                }).then((data)=>{
                    this.$vux.loading.show({
                        text: "评论中..."
                    });
                    setTimeout(() => {
                        this.getdetail();
                        this.inputValue = '';
                        this.$vux.loading.hide();
                    }, 1000);
                }).catch((err)=>{
                    console.log(err)
                })
            } else {
                this.$vux.toast.text('填写评论才能发布哟', 'middle')      
            }
        }
    }
}
</script>
