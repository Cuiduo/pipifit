<style lang="less" scoped>
.bigDiv{
    min-height: 12rem;
    background: #ffffff;
}
.content{
    width: 100%;
    min-height: 5rem;
    font-size: 0.26rem;
    li{
        margin-left: 0.4rem;
        border-bottom: 1px solid #F4F4F4;
        padding-bottom: 0.4rem;
        padding-top: 0.4rem;
        min-height: 2.8rem;
        
    }
    dl{
        position: relative;
         min-height: 2rem;
        dt{
            position: relative;
            width: 2rem;
            float: left;
            img{
                width: 100%;
            }
            .rightop{
                position: absolute;
                right: 0.05rem;
                top: 0.08rem;
                font-size: 0.12rem;
                color: #ffffff;
                width: 0.3rem;
                line-height: 0.16rem;
            }
        }
        dd{
            float: left;
           
            margin-left: 0.24rem;
            h5{
                font-weight: 100;
                font-size: 0.3rem;
            }
            p{
                color: #666666;
                font-size: 0.26rem;
            }
            div{
                position: absolute;
                bottom: 0;
                width: 4.5rem;
                span{
                    color: @colorone;
                    background: #FAF2F0;
                    padding: 0.06rem 0.2rem;
                    font-size: 0.26rem;
                    border-radius: 0.2rem;
                }
                i{
                    float: right;
                    padding-top: 0.05rem;
                }
            }
        }
    }
}

</style>

<template>
    <div class="bigDiv">
        <div class="content">
            <ul>
                <li v-for="(item,index) in datalist" :key="index" @click="toggle(item)" @touchstart.prevent="touchin(item.id)" @touchend.prevent="cleartime(item.id)">
                    <dl>
                        <dt>
                            <img v-if="item.days==1" :src="require('@/assets/onefloor/onefloor (1).png')" alt="">
                            <img v-if="item.days==2" :src="require('@/assets/onefloor/onefloor (2).png')" alt="">
                            <img v-if="item.days==3" :src="require('@/assets/onefloor/onefloor (4).png')" alt="">
                            <img v-if="item.days==7" :src="require('@/assets/onefloor/onefloor (3).png')" alt="">
                            <span class="rightop">宝妈拼团</span>
                        </dt>
                        <dd>
                            <h5>{{item.symptom}}</h5>
                            <p>
                               {{item.conditions}}
                            </p>
                            <div>
                                <span>{{item.meal}}</span>
                                <i>
                                    收藏于 {{item.createTime.toString().split(' ')[0]}}
                                </i>
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
            datalist:[]
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
                type:1,
                pageNum:1
            }).then((data)=>{
                console.log(data);
                setTimeout(() => {
                    this.$vux.loading.hide();
                    this.datalist = data.list;
                }, 800)
                
            }).catch((err)=>{
                console.log(err)
                setTimeout(() => {
                    this.$vux.loading.hide();
                    this.datalist = '';
                }, 800)
            })
        },
        touchin(id) {
            clearInterval(this.Loop);
            this.Loop = setTimeout(function() {
                console.log(id);
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
            this.$router.push({ path: "/onefloor", query: { id: item.days,planId:item.planId } });
            // this.$router.push({name:'mealDetails', params:{ id:index}});
        },
    }
}
</script>
