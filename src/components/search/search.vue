<style lang="less" scoped>
header {
  width: 100%;
  height: 1rem;
  background: #ffffff;
  padding: 0 0.4rem;
  .searchBox {
    height: 1rem;
    width: 100%;
    padding-top: 0.1rem;
    display: flex;
    position: relative;
    left: 0;
    top: 0;
    .backImg {
      width: 0.22rem;
      position: absolute;
      left: 0;
      top: 0.25rem;
    }
    .search {
      width: 88%;
      height: 0.7rem;
      background: #f4f4f4;
      outline: none;
      display: inline;
      font-size: 0.3rem;
      padding-left: 0.8rem;
      border-radius: 0.3rem;
      border: none;
      margin-left: 0.6rem;
    }
    .searchImg {
      width: 0.4rem;
      position: absolute;
      left: 0.9rem;
      top: 0.25rem;
    }
    .counter {
      width: 0.5rem;
      position: absolute;
      right: .5rem;
      top: 0.22rem;
    }
    .closed{
      width: 0.3rem;
      position: absolute;
      right: .5rem;
      top: 0.3rem;
    }
    .collect {
      width: 0.72rem;
      position: absolute;
      right: 0;
    }
    .tipss {
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
      display: inline;
      width: 0.16rem;
      height: 0.16rem;
      background: @colorone;
      border-radius: 50%;
    }
  }
}

// head end
.content{
    color: #333333;
    width: 100%;
    min-height: 2rem;
    overflow: hidden;
    background: #ffffff;
    padding:0.2rem 0.4rem 0.2rem;
    h5{
        font-size: 0.3rem;
        margin-bottom: 0.2rem;
    }
    li{
        font-size: 0.26rem;
        padding: 0 0.4rem;
        height: 0.56rem;
        background: #F9F9F9;
        border-radius: 0.2rem;
        line-height: 0.56rem;
        text-align: center;
        float: left;
        margin-right: 0.2rem;
        margin-bottom: 0.24rem;
    }
}
.history{
    color: #333333;
    width: 100%;
    min-height: 2rem;
    overflow: hidden;
    background: #ffffff;
    padding:0.2rem 0 0.2rem 0.4rem;
    h5{
        font-size: 0.3rem;
        margin-bottom: 0.2rem;
        padding-right: 0.4rem;
        img{
            width: .28rem;
            vertical-align: sub;
        }
        span{
            font-weight: normal;
            float: right;
            font-size: 0.24rem;
            color: #BEBEBE;
        }
    }
    li{
        font-size: 0.26rem;
        height: 0.84rem;
        line-height: 0.84rem;
        width: 100%;
        border-bottom: 1px solid #F4F4F4;
        img{
            float: right;
            width: .2rem;
            padding-top: 0.4rem;
            margin-right: 0.4rem;
        }
    }
}
.hintBox{
    width: 100%;
    min-height: 9rem;
    background: #ffffff;
    padding-left: 0.4rem;
    position: absolute;
    top: 1rem;
    z-index: 100;
    li{
        height: 1.2rem;
        line-height: 1.2rem;
        border-bottom: 1px solid #F4F4F4;
        color: #333333;
        font-size: 0.3rem;
        width: 100%;
        padding-right: .4rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        span{
            font-size: .26rem;
            background: #FAF2F0;
            color: @colorone;
            padding: 0.05rem 0.17rem;
            border-radius: 0.2rem;
            margin-right: 0.1rem;
        }
    }
}
.resultBox{
    width: 100%;
    min-height: 9rem;
    background: #ffffff;
    padding-left: 0.4rem;
    position: absolute;
    top: 1rem;
    z-index: 101;
    font-size: 0.3rem;
    li{
        height: 2.6rem;
        padding: 0.4rem 0;
        border-bottom: 1px solid #F4F4F4;
        dt{
            float: left;
            img{
                width: 1.76rem;
            }
        }
        dd{
            float: right;
            width: 4.7rem;
            margin-right: 0.4rem;
            position: relative;
            height: 1.75rem;
            h6{
                font-size: 0.3rem;
                color: #333333;
                font-weight: normal;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            p{
                span{
                    font-size: .26rem;
                    

                    background: #FAF2F0;
                    color: @colorone;
                    padding: 0.05rem 0.17rem;
                    border-radius: 0.2rem;
                    margin-right: 0.1rem;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                } 
            }
        }
        
    }
}
</style>

<template>
  <div class="searchDiv">
    <header>
      <div class="searchBox">
        <img class="backImg" @click="goBack" :src="require('@/assets/back.png')" alt>
        <span>
          <img class="searchImg" :src="searchImg" alt>
        </span>
        <input class="search" v-model="postmsg" type="text" v-on:input="gms"  placeholder="请输入食材、症状、营养素">
        <span v-show="result">
          <img v-if="!showClose" class="counter" :src="counter" alt>
          <img v-else class="closed" @click="closes" :src="require('@/assets/closeSearch.png')" alt>
        </span>
        <!-- <span @click="gocollect">
          <img class="collect" :src="require('@/assets/collectimg.png')" alt="">
          <i class="tipss"></i>
        </span>-->
      </div>
    </header>
    <section v-show="show1">
        <div class="content">
            <h5>
                热门搜索                
            </h5>
            <ul>
                <li v-for="(item,index) in dataList" :key="index" @click="hotsearch(item)">
                    {{item}}                     
                </li>
            </ul>
        </div>
        <div class="history">
            <h5>
                历史搜索
                <span @click="deletehost">
                    <img  :src="require('@/assets/delete.png')" alt="">
                    清空记录
                </span>
            </h5>
            <ul>
                <li v-for="(item,index) in hostlist" :key="index" >
                    {{item}}
                    <img :src="require('@/assets/cha.png')" @click="deleted(index)" alt="">
                </li>
            </ul>
        </div>
    </section>
    <!-- <section v-show="showClose">
        <div class="hintBox">
           <ul>
                <li v-for="(item,index) in searchData" :key="index" @click="searchIndex(index)"> 
                   {{item.title}}
                </li>    
           </ul> 
        </div>
    </section> -->

    <section v-show="show3">
        <div class="resultBox">
           <ul>
                <li v-for="(item,index) in resultData" :key="index" @click="searchIndex(item)"> 
                    <dl>
                        <dt>
                            <img :src="item.image" alt="">
                        </dt>
                        <dd>
                            <h6>{{item.title}}</h6>
                            <!-- <p><span>{{item.dataclassify}}</span></p> -->
                        </dd>
                    </dl>
                </li>    
           </ul> 
        </div>
    </section>
    <!-- <slider :min=0 :max=30 v-model = "per"></slider> -->
  </div>
</template>

<script>
import slider from '../common/slider.vue';
import {apihotsearch,apigetsearch} from '@/request/api';
import { debounce } from '@/request/util'
import {mapGetters,mapMutations} from 'vuex'
export default {
  components: {
    slider
  },
  data() {
    return {
      showClose:false,
      titleImg: require("@/assets/eg7.png"),
      eyeWhite: require("@/assets/eyeWhite.png"),
      searchImg: require("@/assets/search.png"),
      counter: require("@/assets/counter.png"),
      closed:'closed',
      postmsg:'',
      counterd:'counter',
      per:'20',
      show3:false,
      show1:true,
      result:true,
      resultData:[],
      searchData:[],
      dataList: [],
      hostData:[],
      hostlist:[]
    };
  },
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#ffffff;");
  },

  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },

  created() {
    this.gethot();
    // console.log(this.get_search);
    if (this.get_search!='') {
        this.postmsg = this.get_search;
        this.getsearch(this.postmsg);
        this.show3=true;
    } else {
        
    }
    console.log(this.postmsg)
  },
  computed: {
    ...mapGetters(['get_search']),
    
  },
  mounted(){
      this.host()
  },
  methods: {
    ...mapMutations(['set_search']),
    gethot(){
        apihotsearch().then((data)=>{
            this.dataList = data;
        }).catch((err)=>{
            console.log(err)
        })
    },
    host(){
        if (localStorage.getItem("hostData")!=null) {
            let str = localStorage.getItem("hostData").split(',')
            // console.log(str);
            this.hostlist = str;
        }        
    },
    deletehost(){
        this.hostlist = '';
        localStorage.removeItem("hostData");
    },
    hotsearch(item){
        this.postmsg = item;
        this.getsearch(this.postmsg);
        this.show3 = true; 
    },
    getsearch(postmsg){
        apigetsearch({keyword:postmsg}).then((data)=>{
           this.resultData = data;
        }).catch((err)=>{
            console.log(err)
        })
    },
    gms(e){
        // console.log(e.target.value);
        this.postmsg = e.target.value;
        if (this.postmsg!='') {
            this.getsearch(this.postmsg);
            this.show3=true;
        } else {
            this.show3=false;
        }
    },
    searchIndex(item){
        this.set_search(this.postmsg);
        let arr = '';
        var temp = []; 
        if (localStorage.getItem("hostData")!=null) {
            arr = localStorage.getItem("hostData");
            arr += ','+this.postmsg;
            // console.log(arr)
            arr = arr.split(',');
            arr.reverse();            
            for (let index = 0; index < arr.length; index++) {
                // console.log(temp.indexOf(arr[index]));
                if(temp.indexOf(arr[index])==-1){
                    temp.push(arr[index]);
                }else{
                    arr.splice(index, 1)
                }
            }
            localStorage.setItem("hostData", arr);
        } else {
            arr = this.postmsg;
            localStorage.setItem("hostData", arr)
        }
        if (item.type == 1) {
            this.$router.push({ path: "/windzxsh", query: { id: item.id } })
        } else if(item.type == 5){
            this.$router.push({ path: "/specialist", query: { id: item.id } })
        }
    },
    deleted(index){
        this.hostlist.splice(index,1);        
        if (this.hostlist.length!=0) {
            localStorage.setItem("hostData", this.hostlist);
        } else {
            localStorage.removeItem("hostData");
        }
    },
    goBack(){
        if (this.show3) {
            this.show3 = false;
            this.resultData = [];
        } else {
            this.postmsg = '';
            this.set_search('');
            this.$router.back();           
        }        
    },
    closes() {
        this.showClose = false;
        this.show3 = false;
        this.postmsg = '';
    }
  }
};
</script>
