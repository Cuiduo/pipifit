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
    dl{
        padding-top: 0.5rem;
        font-size: 0.26rem;
        min-height: 2rem;
        dt{
            float: left;
            width: 1rem;
            img{
                width: 100%;
                border-radius: 50%;
            }
        }
        dd{
            float: left;
            margin-left: 0.3rem;
        }
    }
    h6{
        font-size: 0.36rem;
        color:#201F24; 
       
    }
    p{
        font-size: 0.26rem;
        color: #999999; 
        img{
            width: 0.3rem;
            margin-right: 0.1rem;
        }
    }
    div{
        width: 100%;
        color: #333333;
        font-size: .36rem;
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
    min-height: 6rem;
    padding: 0 0.4rem 1rem;
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
</style>

<template>
    <div v-if="id">
        <section class="content">
            <fixed-icon :bottom="3" @clickEvent="chat">
                <i class="icon-chat"></i>
            </fixed-icon>
        </section>
        <header>
            <img class="backImg" @click="goBack" :src="require('@/assets/back.png')" alt>
            <span>正文</span>
        </header>
        <div class="topBox">
            <dl>
                <dt><img :src="require('@/assets/pipi.png')" alt=""></dt>
                <dd>
                    <h6>{{author}}</h6>
                    <p>{{authorType}}</p>
                </dd>
            </dl>
            <div>
                {{author}} <i v-show="author"> ：</i>“{{content}}”
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
           readNum:0,
           author:'',
           commentNum:0,
           authorType:'暂无',
           title:'',
           commentList:[],
           content:'',
           inputValue:'',
           id:'',
        }
    },
    created(){
        this.$vux.loading.show({text: "加载中..."});
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
                console.log(data);
                setTimeout(() => {      
                    this.$vux.loading.hide();
                    this.title = data.title;
                    this.id = data.id;
                    this.readNum = data.readNum;
                    this.author = data.author;
                    this.commentList = data.commentList;
                    this.commentNum = data.commentNum;
                    this.content = data.content;
                    this.authorType = data.authorType;
                }, 500);
                
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
