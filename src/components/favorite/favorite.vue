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

.tabBox{
    width: 100%;
    height: 0.9rem;
    border-bottom: 1px solid #F4F4F4;
    font-size: 0.3rem;
    color: #666666;
    background: #ffffff;
    ul{
        display: flex;        
        li{
            align-items: center;
            text-align: center;
            flex: 1;
            line-height: 0.9rem;
            position: relative;
        }
        .active{
            color: @colorone;
        }
        .active:before {
            content: "";
            position: absolute;
            top: auto;
            bottom: 0;
            left: 50%;
            margin-left: -0.2rem;
            height: 50%;
            width: 0.4rem;
            border-bottom: 2px solid @colorone !important;
        }
        
    }
}

</style>

<template>
    <div>
        <header>
            <img class="backImg" @click="goBack" :src="require('@/assets/back.png')" alt>
            <span>收藏夹</span>
        </header>
        <div class="tabBox">
            <ul>
                <li v-for="(item,index) in tabList" :class="{active:index==num}" :key="index" @click="toggle(index)">{{item}}</li>
            </ul>
        </div>
        <div>
            <nutritionprogram v-if="num==0"></nutritionprogram>
            <customization v-if="num==1"></customization>
            <interpretation v-if="num==2"></interpretation>
            <articles v-if="num==3"></articles>    
        </div>
    </div>
</template>

<script>
import interpretation from './interpretation'
import customization from './customization'
import nutritionprogram from './nutritionprogram'
import articles from './article'
import {mapMutations} from 'vuex'
export default {
    components: {
        interpretation,customization,nutritionprogram,articles
    },
    created (){
        //调用set_listname方法，将listName对象作为参数传入
        this.set_listname(this.listName)
    },
    data(){
        return{
            tabList:['营养计划','定制补充','专业解读','文章'],
            num:0,
            listName: {
                name:'Ewall',
                age:'21'
            }
        }
    },
    methods: {
        toggle(index) { 
            this.num = index;
        },
        goBack(){            
            this.$router.go(-1);            
        },
        ...mapMutations(['set_listname'])
    },
    beforeCreate() {
        document
        .querySelector("body")
        .setAttribute("style", "background-color:#ffffff;");
    },
    beforeDestroy() {
        document.querySelector("body").removeAttribute("style");
    },
}
</script>
