<template>
    <section class="fixed-icon"
             :style="{ bottom: bottom + 'rem' }"
             :class="[ !transition ? 'fixed-transition' : '']"
             @click="event">
             <img :src="collect" alt="">
        <slot></slot>
    </section>
    <!-- <div slot="fixedIcon">

    </div> -->
</template>
<script>
  export default {
    name: 'fixedIcon',
    props: {
      bottom: { // 改图标距离底部距离 单位 rem
        type: Number,
        default: 1,
      },
    },
    data () {
      return {
        transition: true, // 是否触发动画
        timer: null, // 定时器
        msg: "fixedIcon",
        collect: require("../../assets/collect.png"),
      };
    },
    methods: {
      event() {
        this.$emit('clickEvent'); // 绑定点击图表事件
      },
      handleScroll () { // 每次滑动都会执行函数      
        this.transition = false;
        if (this.timer) { // 判断是否已存在定时器
          clearTimeout(this.timer);         
        }
        this.timer = setTimeout(() => { 
          this.transition = true;
          
        },1000);
      }
    },
    mounted () {
       setTimeout(() => {
        window.addEventListener('scroll', this.handleScroll)
      }, 200)
    }
  };
</script>

<style scoped lang="less">
    /*@media only screen and (min-width:750px){html{font-size:20px}} */
    .fixed-icon{
        position: fixed;
        z-index: 1100;
        right: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.2rem;
        width: 1.2rem;
        border-radius: 50%;
        // background-color: rgba(128, 128, 128, 0.8);
        transition: 0.7s ease-in-out;
        img{
            width: 100%;
        }
    }
    .fixed-transition{
        right: -0.6rem;
        opacity: 0.4;
        transition: 1s ease-in-out;
    }
</style>
