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
.mealDetails {
  font-size: 0.3rem;
}
.vux-tab .vux-tab-item {
  font-size: 0.3rem;
}
.borderight:before {
  content: "";
  position: absolute;
  left: auto;
  top: auto;
  bottom: 5px;
  right: 50%;
  height: 50%;
  width: 5px;
  border-right: 1px solid #f4f4f4 !important;
}
.vux-tab {
  font-size: 0.3rem;
}
</style>

<template>
  <div class="onefloor" slot="onefloor">
    <header>
        <img class="backImg" @click="goBack" :src="require('@/assets/back.png')" alt>
        <span>{{name}}{{day}}日份</span>
    </header>
    <div class="headBox">
      <tab
        :line-width="1"
        v-model="index01"
        prevent-default
        @on-before-index-change="switchTabItem"
      >
        <tab-item class="borderight" selected>商品列表</tab-item>
        <tab-item>配餐计划</tab-item>
      </tab>
    </div>
    <mealDetails keep-alive v-show="showhich===0"></mealDetails>
    <mealplan v-if="showhich===1"></mealplan>
  </div>
</template>

<script>
import { Tab, TabItem, XProgress } from "vux";
import mealplan from './mealplan.vue';
import mealDetails from './mealDetails.vue';
export default {
  components: {
    Tab,
    TabItem,
    mealplan,
    mealDetails,
    XProgress
  },
  data() {
    return {
      msg: "onefloor",
      index01: 0,
      showhich:0,
      day:1,
      name:''
    };
  },
  created(){
    console.log(this.$route.query.id);
    this.day = this.$route.query.id;
    console.log(this.day)
    this.name = localStorage.name;
  },
  methods: {
    goBack(){            
        this.$router.go(-1);            
    },
    switchTabItem(index) {
      console.log("on-before-index-change", index);
      this.showhich = index;
      this.$vux.loading.show({
        text: "加载中..."
      });
      setTimeout(() => {
        this.$vux.loading.hide();
        this.index01 = index;
      }, 1000);
    },
    
  },
  beforeCreate() {
      document
      .querySelector("body")
      .setAttribute("style", "background-color:#f4f4f4;");
  },
  beforeDestroy() {
      document.querySelector("body").removeAttribute("style");
  },
};
</script>
