<style lang="less" scoped>
.contents{
    width: 100%;
    height: 6.7rem;
    padding: 0 0.4rem;
    font-size: 0.36rem;
    position: relative;
    
    .imgDiv {
        position: relative;
        .img{
          width: 100%;
          height: 3.7rem;
          left: 0;
          top: 0; 
          border-top-left-radius: 0.2rem;
          border-top-right-radius: 0.2rem;         
        }
        p {
          position: absolute;
          width: 96%;
          margin: 0 auto;
          top: 0.1rem;
          z-index: 100;
          color: #ffffff;
          font-size: 0.24rem;
          img {
            width: 0.24rem;
            margin-left: 0.2rem;
            margin-right: 0.1rem;
            // vertical-align: baseline;
          }
        }
        i {
          float: right;
        }
      }
      .threeBottom{
        height: 3rem;
        background: #F4F4F4;
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;  
        h5{
          font-size: .36rem;
          color: #333333;
          font-weight: normal;
          margin-bottom: 0.3rem;
          padding: 0.3rem;
        }
        dl{
          display: flex;
          padding: 0 0.3rem;
          dt{
            flex: 1;
            img{
              width: 0.56rem;
              height: 0.56rem;
              border-radius: 50%;
            }
          }
          dd{
            flex: 6;
            font-size: 0.26rem;
            padding-top: 0.1rem;
            span{
              float: right;
            }
          }
        }
      }
  }
</style>

<template>
    <div>         
          <swiper :options="swiperOption3" class ref="sixSwiper">
            <swiper-slide v-for="(item,index) in get_threedata" :key="index">
              <div class="contents" @click="gothreeDetailTwo(item.id)">
                    <div class="imgDiv">
                      <img class="img" :src='item.image' alt>                  
                      <p>
                        <span>
                          <img :src="heart2" alt> {{item.collectionNum}}
                        </span>
                        <span>
                          <img :src="pinglun"> {{item.commentNum}}
                        </span>
                        <span>
                          <img style="width: 0.28rem;vertical-align: baseline;" :src="eyeWhite" alt> {{item.readNum}}
                        </span>
                      </p>
                    </div> 
                <div class="threeBottom">
                  <h5>{{item.title}}</h5>
                  <dl>
                    <dt><img :src="item.authorImage" alt=""></dt>
                    <dd>{{item.author}}  </dd>
                  </dl>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" id="paginationsix" slot="pagination"></div>            
          </swiper>          
    </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    data(){
        return{
            list4Data:[],
            list3Data:[],
            eyeWhite: require("@/assets/eyeWhite.png"),
            comment: require("@/assets/comment.png"),
            pinglun:require("@/assets/pinglun.png"),
            heart: require("@/assets/heart@2x.png"),
            heart2: require("@/assets/heart2.png"),
            share: require("@/assets/share.png"),                       
            swiperOption3: {        
                pagination: {
                el: '#paginationsix',
                clickable: true,
                dynamicBullets: true,
                },
                slidesPerView: "auto",
                centeredSlides: true,
                
                // paginationClickable: true,
                on: {
                slideChangeTransitionEnd: () => {
                
                
                }
                },
                observer: true,
                observeParents: true
            },
        }
    },
    components: {       
        swiper,
        swiperSlide,        
    },  
    computed: {        
        thrSwiper() {
        return this.$refs.thrSwiper.swiper;
        },
        forSwiper(){
        return this.$refs.forSwiper.swiper;
        },
        sixSwiper(){
        return this.$refs.sixSwiper.swiper;
        },
        ...mapGetters(['get_threedata','get_threetwodata']),
        fun(){
            return  this.get_threedata;
            // return this.list4Data = this.get_threetwodata;
        },
    },
    created(){
        console.log(this.get_threedata);
        this.list3Data = this.get_threedata;
    },
    methods:{
      gothreeDetailTwo(index){
        this.$router.push({ path: "/windzxsh", query: { id: index } });
      },
    }
}
</script>

