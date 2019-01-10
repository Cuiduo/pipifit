<style lang="less" scoped>
// head
header {
  width: 100%;
  height: 1.2rem;
  background: #ffffff;
  padding: 0 0.4rem;
  margin-bottom: 0.3rem;
  .searchBox {
    height: 1rem;
    width: 100%;
    padding-top: 0.1rem;
    display: flex;
    position: relative;
    left: 0;
    top: 0;
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
    }
    .searchImg {
      width: 0.4rem;
      position: absolute;
      left: 0.3rem;
      top: 0.25rem;
    }
    .counter {
      width: 0.5rem;
      position: absolute;
      right: 1.1rem;
      top: 0.22rem;
    }
    .collect{
      width: 0.72rem;
      position: absolute;
      right: 0;
    }
    .tipss{
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
// one start
.counterBox {
  width: 100%;
  height: 2rem;
  background: #ffffff;
  text-align: center;
  font-size: 0.3rem;
  color: #000000;
  .counterBtn {
    background: #f1531f;
    width: 40%;
    margin: 0 auto;
    border-radius: 0.3rem;
    height: 0.64rem;
    color: #ffffff;
    line-height: 0.64rem;
    img {
      width: 0.28rem;
      padding-bottom: 0.02rem;
    }
    span {
      font-size: 0.26rem;
    }
  }
  .describe {
    padding: 0.3rem 0;
    span {
      color: #333333;
    }
  }
}
.lines {
  // background: red;
  font-size: 0;
  height: 1px;
  width: 100%;
  padding: 0 0.4rem;
  div {
    width: 100%;
    background: #e4e4e4;
    height: 1px;
  }
}

.vux-tab .actived {
  // font-size: 0.4rem;
  // font-weight: 800;
  // width: auto;
  color: @colorone;
}
.vux-tab .vux-tab-item {
  background: none;
  position: relative;
  font-size: 0.3rem;
}
.vux-tab .vux-tab-item:nth-of-type(1) {
  flex: none;
  width: 1rem;
  // margin-right: -0.2rem;
  margin-left: 0.2rem;
}
.vux-tab .vux-tab-item:nth-of-type(2) {
  flex: none;
  width: 1rem;
}
.vux-tab .vux-tab-item:nth-of-type(3) {
  flex: none;
  width: 1.4rem;
}
.vux-tab .vux-tab-item:nth-of-type(4) {
  flex: none;
  width: 1rem;
}
.vux-tab .vux-tab-item:nth-of-type(5) {
  flex: none;
  width: 1rem;
}
.vux-tab .vux-tab-item:nth-of-type(6) {
  flex: none;
  width: 1.4rem;
}
.vux-tab .vux-tab-item:nth-of-type(7) {
  flex: none;
  width: 1.4rem;
}
.vux-tab .vux-tab-item.vux-tab-selected:before {
  content: "";
  position: absolute;
  left: auto;
  top: auto;
  bottom: 6px;
  right: 40%;
  height: 50%;
  width: 10px;
  border-bottom: 2px solid @colorone !important;
}
.contentBox,
.contentBoxThree {
  background: #ffffff;
  margin-bottom: 0.3rem;
  .h3 {
    font-size: 0.42rem;
    font-weight: 400;
    padding: 0.3rem 0.4rem 0.1rem 0.4rem;
  }
}
.vux-slider {
  min-height: 6rem;
  padding-top: 0.3rem;
  border-bottom: 1px solid #f4f4f4;
  .vux-swiper {
    height: 4rem;
    .tab-swiper {
      padding: 0 0.4rem;
    }
  }
}
.scrollable {
  padding-bottom: 0;
}
.OneBox {
  padding: 0.3rem 0.4rem 0;
  width: 100%;
  min-height: 4rem;
  display: flex;
  ul {
    // display: flex;
    li {
      width: 46%;
      // height: 2rem;
      display: flex;
      float: left;
      margin-bottom: 0.4rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .rightop{
        position: absolute;
        right: 0.09rem;
        top: 0.08rem;
        font-size: 0.2rem;
        color: #ffffff;
        width: 0.5rem;
        line-height: 0.26rem;
      }
      .leftbottom{
        position: absolute;
        bottom: 0.1rem;
        left: 0.1rem;
        font-size: 0.24rem;
        font-style: italic;
        i{
          font-size: 0.4rem;
          font-weight: 800;
          font-style: italic;
        }
      }
    }
    li:nth-of-type(odd) {
      margin-right: 8%;
    }
    li:nth-of-type(1){
      .leftbottom{
        color: #8080ef;
      }
    }
    li:nth-of-type(2){
      .leftbottom{
        color: #79d3e5;
      }
    }
    li:nth-of-type(3){
      .leftbottom{
        color:  #d8834c;
      }
    }
    li:nth-of-type(4){
      .leftbottom{
        color: #7ec234;
      }
    }
  }
}
.tipsBox {
  width: 100%;
  height: 1.9rem;
  padding: 0 0.4rem;
  position: relative;
  border-top: 1px solid #f4f4f4;
  .tipsContent {
    display: flex;
  }
  .btnrImg {
    position: absolute;
    right: 0.4rem;
    top: 0.5rem;
    width: 0.16rem;
  }

  .tipsLeft {
    flex: 1;
    font-size: 0.16rem;
    color: @colorone;
    height: 1.4rem;
    dt {
      text-align: center;
      padding: 0.14rem 0;
      img {
        width: 0.64rem;
      }
    }
    dd {
      text-align: center;
      background: #faf2f0;
      border-radius: 0.2rem;
      // width: 0.88rem;
      margin: 0 auto;
    }
  }
  .tipsRight {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    flex: 6;
    font-size: 0.26rem;
    padding-top: 0.22rem;
    height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .tipsBottom {
    width: 100%;
    height: 0.5rem;
    // background: red;
    color: #666666;
    font-size: 0.24rem;
    img {
      width: 0.25rem;
    }
    span {
      float: right;
      padding-left: 0.4rem;
    }
  }
}
//one end
// two start
.twoLow {
  width: 100%;
  // height: 8.5rem;
  background: #ffffff;
  margin-bottom: 0.3rem;
  h3 {
    font-size: 0.4rem;
    font-weight: 400;
    padding: 0.3rem 0.4rem 0;
    span {
      font-size: 0.26rem;
      font-weight: 400;
      margin-left: 0.1rem;
      background: #faf2f0;
      color: @colorone;
      border-radius: 0.2rem;
      padding: 0.05rem 0.25rem;
    }
  }
  .titleBox {
    font-size: 0.3rem;
    padding: 0.1rem 0 0.1rem 0.4rem;
    // background: red;
    height: 1rem;
    color: #333333;
    ul {
      overflow-x: scroll;
      display: -webkit-box;
      -webkit-overflow-scrolling: touch;
    }
    ul::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }
    ::-webkit-scrollbar {/*隐藏滚轮*/
      display: none;
    }
    li {
      margin-right: 0.5rem;
      height: 0.65rem;
      position: relative;
    }
    .activetwo {
      color: @colorone;
    }
    .activetwo:before {
      content: "";
      position: absolute;
      left: auto;
      top: auto;
      bottom: 6px;
      left: 50%;
      height: 50%;
      width: 0.4rem;
      margin-left: -0.2rem;
      border-bottom: 2px solid @colorone !important;
    }
    // .activetwo:nth-of-type(4):before {
    //   content: "";
    //   position: absolute;
    //   left: auto;
    //   top: auto;
    //   bottom: 6px;
    //   left: 20%;
    //   height: 50%;
    //   width: 0.4rem;
    //   border-bottom: 2px solid @colorone !important;
    // }
  }
  .preferenceBox {
    // background: red;
    // width: 200%;
    padding: 0 0.4rem;
    // height: 9.8rem;
    margin-bottom: 0.2rem;
    overflow-x: scroll;
    // overflow-y: hidden;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
    .twoFloorBox {
      width: 100%;
      min-height: 4rem;
      // background: pink;
      font-size: 0.36rem;
      position: relative;
      .imgBox {
        position: relative;
        .img {
          width: 100%;

          left: 0;
          top: 0;
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
            vertical-align: baseline;
          }
        }
        i {
          float: right;
        }
      }
      .twoFixed {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        span {
          font-size: 0.6rem;
        }
      }
      .particulars {
        h6 {
          font-size: 0.36rem;
          color: #333333;
          font-weight: 400;
        }
        p {
          color: @colorone;
          font-size: 0.24rem;
          span {
            font-size: 0.36rem;
          }
          i {
            color: #ffffff;
            float: right;
            padding: 0.1rem 0.4rem;
            display: block;
            background: @colorone;
            border-radius: 0.1rem;
          }
        }
      }
    }
  }
  .correlationBoxBig {
    height: 1.4rem;
    background: #ffffff;
  }
  .correlationBox {
    width: 100%;
    height: .8rem;
    border-bottom: 1px solid #f4f4f4;
    // background: red;
    // margin-bottom: 0.5rem;
    position: relative;
    font-size: 0.24rem;
    color: #bebebe;
    span {
      position: absolute;
      left: 50%;
      top: 108%;
      background: #ffffff;
      padding: 0 0.1rem;
      transform: translate(-50%, -68%);
    }
  }
  .guanlianBox {
    padding: 0 0.4rem;
    .twoFloorBox {
      width: 100%;
      min-height: 4rem;
      // background: pink;
      font-size: 0.36rem;
      position: relative;
      margin-bottom: 0.2rem;
      .imgBox {
        position: relative;
        .img {
          width: 100%;
          left: 0;
          top: 0;
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
      .twoFixed {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        span {
          font-size: 0.6rem;
        }
      }
      .particulars {
        h6 {
          font-size: 0.36rem;
          color: #333333;
          font-weight: 400;
        }
        p {
          color: @colorone;
          font-size: 0.24rem;
          span {
            font-size: 0.36rem;
          }
          i {
            color: #ffffff;
            float: right;
            padding: 0.1rem 0.4rem;
            display: block;
            background: @colorone;
            border-radius: 0.1rem;
          }
        }
      }
    }
  }
}
// two end
// three start

.contentBoxThree {
  padding-bottom: 0.3rem;
  .titleBox {
    font-size: 0.3rem;
    padding: 0.1rem 0 0.1rem 0.4rem;
    // background: red;
    height: 1rem;
    color: #333333;
    ul {
      overflow-x: scroll;
      display: -webkit-box;
      -webkit-overflow-scrolling: touch;
    }
    ul::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }
    li {
      margin-right: 0.5rem;
      height: 0.65rem;
      position: relative;
    }
    .activetwo {
      color: @colorone;
    }
    .activetwo:before {
      content: "";
      position: absolute;
      left: auto;
      top: auto;
      bottom: 6px;
      left: 50%;
      height: 50%;
      width: 0.4rem;
      margin-left: -0.2rem;
      border-bottom: 2px solid @colorone !important;
    }
    // .activetwo:nth-of-type(4):before {
    //   content: "";
    //   position: absolute;
    //   left: auto;
    //   top: auto;
    //   bottom: 6px;
    //   left: 50%;
    //   height: 50%;
    //   width: 0.4rem;
    //   margin-left: -0.2rem;
    //   width: 0.4rem;
    //   border-bottom: 2px solid @colorone !important;
    // }
  }
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
}
//popup
.popupBox {
  width: 100%;
  background-color: #fff;
  height: 7.3rem;
  border-bottom: 1px solid #E0E0E0;
  margin: 0 auto;
  padding-top: 10px;
  .describe {
    text-align: center;
    padding: 0.3rem 0;
    font-size: 0.3rem;
    span {
      color: #333333;
    }
  }
  .calculatorBox {
    // background: pink;
    width: 100%;
    height: 5rem;
    font-size: 0.3rem;
    .calulatorBar {
      width: 100%;
      height: 0.7rem;
      overflow: hidden;
      li {
        width: 25%;
        border: 0.01rem solid #e0e0e0;
        margin: 0 0 -1px 0;
        // border-bottom-color: #ffffff;
        float: left;
        text-align: center;
        height: 0.72rem;
        line-height: 0.72rem;
        background: #f4f4f4;
        color: #d3d3d3;
        border-top-left-radius: 5px;
        border-top-right-radius: 0.1rem;
      }
      .chosed {
        color: #333333;
        background: #ffffff;
      }
    }
    .calculatorContentBox {
      height: 3rem;
      .swipersymptom {
        padding: 0;
        height: 3rem;
        width: 100%;
        font-size: 0.3rem;
        .dotsClass {
          background: red !important;
        }
      }
      
    }
    .calculatorContent {
      width: 75%;
      height: 3rem;
      float: left;      
      // background: red;
      border-collapse: collapse;
      li {
        width: 33.333333%;
        border: 0.005rem solid #e0e0e0;
        // margin:0 0 -1px -1px;
        float: left;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        color: #333333;
      }
      .active {
        color: @colorone;
      }
    }
    .calculatorResult {
      width: 25%;
      float: right;
      height: 3rem;
      .setpeople {
        border: 1px solid #e0e0e0;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        img {
          width: 0.4rem;
        }
      }
      .countBox {
        background: @colorone;
        width: 100%;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        color: #ffffff;
      }
    }
    .classifyBox {
      font-size: 0.3rem;
      width: 100%;
      height: 0.7rem;
      display: flex;
      background: #ffffff;
      div {
        flex: 1;
        justify-content: space-around;
        text-align: center;
        align-content: center;
        line-height: 0.7rem;
        .Islamic {
          border-width: 2px;
          width: 0.74rem;
          height: 0.35rem;
          background: #ffffff;
          vertical-align: middle;
          box-shadow: none;
        }
        .weui-switch:checked {
          border-color: @colorone;
          // border:2px solid @colorone;
          // background: @colorone;
        }
        .Islamic::after {
          // background-color: @colorone;
          width: 0.27rem;
          height: 0.27rem;
        }
        .Dont::after {
          background-color: @colorone;
        }
        .Islamic::before {
          //  background-color: #D3D3D3;
          //  background-color: #ffffff;
          width: 0.27rem;
          height: 0.27rem;
        }
      }
    }
  }
}
.ageDiv{
  width: 100%;
  height: 0.8rem;
  // background: pink;
  padding-top: 0.2rem;
  border-top: 1px solid #e0e0e0;
  // border-bottom: 1px solid #e0e0e0;
  ul{
    padding: 0 0.3rem;
    overflow-x: scroll;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
  }
  ul::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  li{
    min-width: 1.4rem;
    line-height: 0.45rem;
    height: 0.45rem;
    padding: 0 0.1rem;
    margin-right: .45rem;
    text-align: center;
    border: 1px solid #BEBEBE;
    color: #BEBEBE;
    // float: left;
    border-radius: 0.2rem;
    font-size: .26rem;
  }
  .ageActive{
    border: 1px solid @colorone;
    color: @colorone;
  }
}
.popupTips{
  width: 100%;
  height: 2.8rem;
  background: #ffffff;
  padding: 0.5rem 0.4rem;
  display: flex;
  .jigouBox{
    flex: 1;
    margin-right: 0.3rem;
  }
  dl{
    font-size: 0.18rem;
    dt img{
      width: 0.96rem;
      height: 0.96rem;
      border-radius: 50%;
      margin-bottom: 0.1rem;
    }
  }
  dd{
    text-align: center;
    background: #faf2f0;
    border-radius: 0.2rem;
    margin: 0 auto;

  }
  .tipsContent{
    flex: 5;
    background: #F4F4F4;
    border-radius: 0.2rem;
    font-size: 0.26rem;
    color: #333333;
    padding: 0.26rem;
    position: relative;
    overflow: scroll;
    h6{
      font-size: .3rem;
      font-weight: 400;
      padding-bottom: 0.1rem;
    }
    img{
      position: absolute;
      left: -8px;
      width: 0.2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.forBox{
  height: 2.6rem;
  width: 100%;
  background: #ffffff;
  padding: 0.4rem 0;
  .bottomBottom{
    text-align: center;
    padding-top: .6rem;
    font-size: .18rem;
    color: #999999;
  }
}
.lines .cooperativeBox{
  width: 3rem;
  height: 0.5rem;
  background: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  // background: red;
  img{
    margin-right: 0.3rem;
    width: 0.4rem;
  }
  img:first-child{
    margin-left:0.3rem;
    width: 0.4rem;
  }
  img:last-child{
    margin-right:0;
    width: 0.4rem;
  }
}
.fixedBox{
  width: 100%;
  height: 0.88rem;
  background-color:rgba(255, 255, 255, 0.9); 
  position: fixed;
  font-size: 0.3rem;
  z-index: 202;
  top: 0;
  .describe {
    text-align: center;
    padding: 0.2rem 0;
    font-size: 0.3rem;
    span {
      color: #000000;
    }
  }
  .fiximg{
    position: absolute;
    left: 0.4rem;
    width: 0.5rem;
    top: 0.2rem;
  }
}








.infoBox{
        width: 100%;
        height: 5.2rem;
        background: #ffffff;
        z-index: 502;
        position: absolute;
        top: 2rem;
        font-size: 0.3rem;
        .sexBox{
            width: 30%;
            // background: red;
            margin: 0 auto;
            height: .9rem;
            display: flex;
           span{
                flex: 1;
                text-align: center;
                line-height: 1rem;
                i{
                    img{
                        width: 0.3rem;
                        vertical-align: unset;
                    }
                }
           }
        }
        .yearBox{
            width: 80%;
            // padding-left: 0.5rem;
            margin: 0 auto;
            position: relative;
            margin-bottom: 0.45rem;
            .yeari{
                position: absolute;
                font-size: 0.24rem;
                width: 1rem;
            }
            .lab{
            //    margin-top: 1rem;
               position: relative;
               top: 0.25rem;
               left: -.4rem;
            }
            img{
                width: 0.3rem;
            }
            .subImg{
                position: absolute;
                left: .4rem;
                top: 64%;
            }
            .addImg{
                position: absolute;
                right: 0;
                top: 64%;
            }
        }
        #qqq{
            margin-left: 10px;
        }
    }
    .confirmBox{
        width: 100%;
        height: 1rem;
        // border-bottom: 1px solid #E0E0E0;
        border-top: 1px solid #E0E0E0;
        padding: 0 15%;
        padding-top: 0.42rem;
        // display: flex;
        // background: red;
        span{
            display: inline-block;
            text-align: center;
            // padding-top: 0.2rem;
            width: 2.2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            background: #E0E0E0;
            border-radius: 0.1rem;
        }
        span:nth-of-type(2){
            background: @colorone;
            float: right;
            color: #ffffff;
        }
    }
</style>

<template>
  <div v-if="waiting">
    <header>
      <div class="searchBox">
        <span>
          <img class="searchImg" :src="searchImg" alt>
        </span>
        <input class="search" type="text" @click="gosearch" placeholder="请输入食材、症状、营养素">
        <span>
          <img class="counter" :src="counter" alt>
        </span>
        <span @click="gocollect">
          <img class="collect" :src="require('@/assets/collectimg.png')" alt="">
          <i class="tipss"></i>
        </span>
      </div>
    </header>
    <!-- fixed -->
    <section>
      <div class="fixedBox" v-show="shouOr" @click="show7 = true">
        <img class="fiximg" :src="require('@/assets/jisuanqi.png')" alt="">
        <div class="describe">
          <span>{{labelName}} |</span>
          <span>{{sexShow}} |</span>
          <span>{{year}}岁 |</span>
          <span>{{data1}}cm |</span>
          <span>{{data2}}kg</span>
        </div>
      </div>
    </section>
    <!-- search -->
    <section>
      <div class="counterBox">
        <div class="describe">
          <span>{{labelName}} |</span>
          <span>{{sexShow}} |</span>
          <span>{{year}}岁 |</span>
          <span>{{data1}}cm |</span>
          <span>{{data2}}kg</span>
        </div>
        <div @click="show7 = true" class="counterBtn">
          <img :src="little" alt>
          <span>精准计算</span>
        </div>
      </div>
    </section>
    <div class="lines" id="deadline">
      <div></div>
    </div>    
    <popup  v-model="show7" height="10rem" position="top" @on-hide="onclose">
      <div class="infoBox" v-if="infoSet">
            <div class="sexBox">
                <span @click="choseMan">
                    <i>
                       <img :src="sexSelect"> 
                    </i>
                    男
                </span>
                <span @click="choseWoman">
                    <i>
                        <img :src="sex" alt=""> 
                    </i>
                    女
                </span>
            </div>
            <div class="yearBox">
                <i class="yeari"  v-bind:style="{left:yeariLeft}">{{year}}岁</i>
                <span class="lab">年龄</span><span @click="sub"><img class="subImg" :src="subImg" alt=""></span>
                <range  v-model="year" :min="agemin" :max="agemax"  @on-change="onchang" :range-bar-height="4"></range>
                <span @click="add"><img class="addImg" :src="addImg" alt=""></span>
            </div>
            <div class="yearBox">
                <i class="yeari"  v-bind:style="{left:yeariLeft2}">{{data1}}cm</i>
                <span class="lab">身高</span><span @click="sub2"><img class="subImg" :src="subImg" alt=""></span>
                <range  v-model="data1" :min="50" :max="210"  @on-change="onchang2" :range-bar-height="4"></range>
                <span @click="add2"><img class="addImg" :src="addImg" alt=""></span>
            </div>
            <div class="yearBox">
                <i class="yeari"  v-bind:style="{left:yeariLeft3}">{{data2}}kg</i>
                <span class="lab">体重</span><span @click="sub3"><img class="subImg" :src="subImg" alt=""></span>
                <range v-model="data2" :min="1" :max="125"  :range-bar-height="4" @on-change="onchang3"></range>
                
                <span @click="add3"><img class="addImg" :src="addImg" alt=""></span>
            </div>
            <!-- <div clsass="ttttt" style="width: 80%;
  background: pink;
  height: 300px;
  padding-top: 100px;">
              <range :step="1" :min="7" :max="77" :range-bar-height="4" v-model="data14" ></range>
            </div> -->
            <div class="confirmBox">
                <span @click="closeset">取消</span>   
                <span @click="closeset">确认</span>
            </div>
        </div>
      <div class="popupBox">
        <div class="describe" v-show="ageNum===0">
          <span>{{symptom}} |</span>
          <span>{{sexShow}} |</span>
          <span>{{changeAge}}岁 |</span>
          <span>{{data1}} cm |</span>
          <span>{{data2}}kg</span>
        </div>
        <div class="describe" v-show="ageNum===1">
          <span>{{symptom2}} |</span>
          <span>{{sexShow}} |</span>
          <span>{{changeAge}}岁 |</span>
          <span>{{data1}}cm |</span>
          <span>{{data2}}kg</span>
        </div>
        <div class="describe" v-show="ageNum===2">
          <span>{{symptom3}} |</span>
          <span>{{sexShow}} |</span>
          <span>{{changeAge}}岁 |</span>
          <span>{{data1}}cm |</span>
          <span>{{data2}}kg</span>
        </div>
        
        <div class="calculatorBox">
          <div class="calulatorBar">
            <ul>
              <li
                v-for="(item, index) in ageData"
                :key="index"
                :class="{chosed:index == ageNum}"
                @click="choseAge(index)"
                
              >{{item}}</li>
            </ul>
          </div>
          <div class="ageDiv">
            <ul>
              <li v-for="(item,index) in ageLi"  :key="index" :class="{ageActive:index==indexLi}" @click="ageIndex(index,item)">{{item.crowdName}}</li>             
            </ul>
          </div>
          <div class="calculatorContentBox">
            <div class="calculatorContent">
              <children :race="raceData" :qujian='indexLi' v-show="ageNum===0" v-on:changeSymptom="symptoms"></children>
              <adult :race="raceData" :qujian2='indexLi' v-show="ageNum===1" v-on:changeSymptom="symptoms2"></adult>
              <wrinkly :race="raceData" :qujian3='indexLi' v-show="ageNum===2" v-on:changeSymptom="symptoms3"></wrinkly>              
            </div>
            <div class="calculatorResult">
              <div @click="setPeople" class="setpeople">
                <img :src="setpeople" alt>
              </div>
              <div class="countBox" @click="oncount">营养计算</div>
            </div>
          </div>
          <div class="classifyBox">
            <div>
              <inline-x-switch
                @on-change="onchosed"
                :class="valueSwitch?'Dont':''"
                v-model="valueSwitch"
                class="Islamic"
              ></inline-x-switch>有机
            </div>
            <div style="text-align:left">
              <inline-x-switch
                @on-change="onchosed2"
                :class="valueSwitch2?'Dont':''"
                v-model="valueSwitch2"
                class="Islamic"
              ></inline-x-switch>不含添加剂
            </div>
            <div style="text-align:left">
              <inline-x-switch
                @on-change="onchosed3"
                :class="valueSwitch3?'Dont':''"
                v-model="valueSwitch3"
                class="Islamic"
              ></inline-x-switch>低油少盐
            </div>
          </div>
          <div class="classifyBox">
            <div>
              <inline-x-switch
                @on-change="onchosed4"
                :class="valueSwitch4?'Dont':''"
                v-model="valueSwitch4"
                class="Islamic"
              ></inline-x-switch>清真
            </div>
            <div style="text-align:left">
              <inline-x-switch
                @on-change="onchosed5"
                :class="valueSwitch5?'Dont':''"
                v-model="valueSwitch5"
                class="Islamic"
              ></inline-x-switch>素食
            </div>
            <div style="text-align:left">
              <inline-x-switch
                @on-change="onchosed6"
                :class="valueSwitch6?'Dont':''"
                v-model="valueSwitch6"
                class="Islamic"
              ></inline-x-switch>速食
            </div>
          </div>
        </div>

        <!-- <group>
            <cell title="Product" value="Donate"></cell>
            <cell title="Total" value="$10.24"></cell>
            </group>
            <div style="padding:20px 15px;">
            <x-button type="primary">Pay</x-button>
            <x-button @click.native="show7 = false">Cancel</x-button>
        </div>-->
      </div>
      <div  class="popupTips">
        <div class="jigouBox">
          <dl>
            <dt><img :src="tipsdata.authorImage" alt=""></dt>
            <dd>{{tipsdata.authorType}}</dd>
          </dl>
        </div>
        <div class="tipsContent">
          <h6>{{tipsdata.title}}</h6>
          <p>{{tipsdata.content}}</p>
          <img :src="leftImg" alt="">
        </div>
      </div>
    </popup>
    <!-- one -->
    <section>
      <!-- <div clsass="ttttt" style="width: 80%;-webkit-overflow-scrolling: touch;
  height: 300px;
  padding-top: 100px;">
              <range  :min="1" :max="100" :range-bar-height="4" v-model="data14" ></range>
            </div> -->
      <div class="contentBox">
        <div class="h3">缤纷特选</div>
        <div>
          <tab :line-width="0" custom-bar-width="10px" v-model="index">
            <tab-item
              class="vux-center"
              v-for="(item, index) in list2"
              @on-item-click="oneFloor(index,item)"
              :key="index"
              :selected="index ==0 "
            >{{item.name}}</tab-item>
          </tab>
        </div>
        <swiper :options="swiperOption" class ref="mySwiper">
          <swiper-slide v-for="(item,index) in list2" :key="index">
            <div class="OneBox">
              <ul>
                <li v-for="(list, index) in item.egImg" @click="toggle(list.type)" :key="index" >
                  <img :src="list.imgUrl">
                  <span class="rightop">宝妈拼团</span>
                  <span class="leftbottom">立减<i>{{list.title}}</i>%</span>
                </li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
        <div class="tipsBox">
          <img class="btnrImg" :src="btr" alt>
          <div class="tipsContent">
            <div class="tipsLeft">
              <dl>
                <dt>
                  <img :src="onetipsdata.authorImage">
                </dt>
                <dd>{{onetipsdata.authorType}}</dd>
              </dl>
            </div>
            <div class="tipsRight" @click="tipsdetail(onetipsdata.id)">{{onetipsdata.author}}：{{onetipsdata.content}}</div>
          </div>
          <div class="tipsBottom">
            <img :src="see" style="vertical-align: baseline;width:0.3rem;"> {{onetipsdata.readNum}}
            <span>
              <img :src="share"> {{onetipsdata.shareNum}}
            </span>
            <span>
              <img :src="heart"> {{onetipsdata.collectionNum}}
            </span>
            <span>
              <img :src="comment"> {{onetipsdata.commentNum}}
            </span>
          </div>
        </div>
      </div>
    </section>
    <!-- two -->
    <section  v-if="twotitleLits.length!=0">
      <div class="twoLow">
        <h3>定制补充
          <span>预售</span>
        </h3>
        <div class="titleBox">
          <ul>
            <li v-if="twotitleLits"
              v-for=" (item,index) in twotitleLits"
              @click="onClickTwo(index)"
              :class="{activetwo:index==numTwo}"
              :key="index"
            >{{item.name}}</li>
          </ul>
          <!-- <tab :line-width="0" custom-bar-width="10px" v-model="twoindex">
            <tab-item
              class="vux-center"
              v-for="(item, index) in twotitleLits"
              @on-item-click="onClickTwo(index)"
              :key="index"
            >{{item.name}}</tab-item>
          </tab> -->
        </div>
        <div>
          <swiper v-if="twotitleLits" :options="swiperOption" class="swiper-no-swiping"  ref="twoSwiper">
                    <swiper-slide v-if="twotitleLits" v-for="(item,index) in twotitleLits" :key="index" >
          <div class="preferenceBox">
            <!-- <swiper :options="swiperOption" class="swiper-no-swiping"  ref="mySwiper"> -->
            <div class="twoFloorBox"  v-for="(list,index) in item.packageList" :key="index">
              <div class="imgBox"  @click="gotwoDetail(list.id)">
                <img class="img" :src='list.image' alt>
                <p>
                  <span>
                    <img :src="heart2" alt> {{list.collectionNum}}
                  </span>
                  <span>
                    <img style="width: 0.28rem;vertical-align: baseline;" :src="eyeWhite" alt> {{list.readNum}}万
                  </span>
                  <i>{{list.symptomName}}</i>
                </p>
                <div class="twoFixed">
                  富含
                  <span>{{list.nutrientName}}</span>
                </div>
              </div>
              <div class="particulars">
                <h6>{{list.title}}</h6>
                <p>
                  ￥<span>{{list.sourceAmount}}</span>
                  <i @click="gotwoDetail(list.id)">去拼团</i>
                </p>
              </div>
            </div>
          </div>
            <div class="tipsBox"  >
              <img class="btnrImg" :src="btr" alt>
              <div class="tipsContent">
                <div class="tipsLeft">
                  <dl>
                    <dt>
                      <img v-if="item.tips" :src="item.tips.authorImage">
                    </dt>
                    <dd  v-if="item.tips">{{item.tips.authorType}}</dd>
                  </dl>
                </div>
                <div  v-if="item.tips" class="tipsRight" @click="tipsdetail(item.tips.id)">{{item.tips.author}}：{{item.tips.content}}</div>
              </div>
              <div  v-if="item.tips" class="tipsBottom">
                <img :src="see"  style="vertical-align: baseline;width:0.3rem;"> {{item.tips.readNum}}
                <span>
                  <img  :src="share"> {{item.tips.shareNum}}
                </span>
                <span>
                  <img :src="heart"> {{item.tips.collectionNum}}
                </span>
                <span>
                  <img :src="comment"> {{item.tips.commentNum}}
                </span>
              </div>
            </div>
           </swiper-slide>
            </swiper>
        </div>
        <div v-if="packageList.length!=0" class="correlationBoxBig">
          <div class="correlationBox">
            <span   v-if="packageList.length!=0">· 是否还伴有{{packageList.symptomName}} ·</span>
          </div>
        </div>
        <div  v-if="packageList.length!=0"  class="guanlianBox">
          <div class="twoFloorBox">
            <div class="imgBox"  @click="gotwoDetail(packageList.packageList[0].id)">
              <img class="img" v-if="packageList.length!=0" :src='packageList.packageList[0].image' alt>
              <p>
                <span>
                  <img  v-if="packageList.length!=0" :src="heart2" alt> {{packageList.packageList[0].collectionNum}}
                </span>
                <span   v-if="packageList.length!=0">
                  <img style="width: 0.28rem;vertical-align: baseline;" :src="eyeWhite" alt> {{packageList.packageList[0].readNum}}
                </span>
                <i   v-if="packageList.length!=0">{{packageList.packageList[0].symptomName}}</i>
              </p>
              <div class="twoFixed">
                富含
                <span   v-if="packageList.length!=0">{{packageList.packageList[0].nutrientName}}</span>
              </div>
            </div>
            <div  v-if="packageList.length!=0" class="particulars">
              <h6   v-if="packageList.length!=0">{{packageList.packageList[0].title}}</h6>
              <p>
                ￥
                <span  v-if="packageList.packageList">{{packageList.packageList[0].totalAmount}}</span>
                <i   v-if="packageList.packageList" @click="gotwoDetail(packageList.packageList[0].id)">去拼团</i>
              </p>
            </div>
          </div>
        </div>
        <div v-if="packageList!=null" class="tipsBox">
          <img class="btnrImg" :src="btr" alt>
          <div class="tipsContent">
            <div class="tipsLeft">
              <dl>
                <dt>
                  <img  v-if="packageList.tips" :src="packageList.tips.authorImage">
                </dt>
                <dd  v-if="packageList.tips">{{packageList.tips.authorType}}</dd>
              </dl>
            </div>
            <div  v-if="packageList.tips" class="tipsRight" @click="tipsdetail(packageList.tips.id)">{{packageList.tips.author}}：{{packageList.tips.content}}</div>
          </div>
          <div  v-if="packageList.tips" class="tipsBottom">
            <img  v-if="packageList.tips" :src="see" style="vertical-align: baseline;width:0.3rem;"> {{packageList.tips.readNum}}
            <span>
              <img  :src="share"> {{packageList.tips.shareNum}}
            </span>
            <span>
              <img :src="heart"> {{packageList.tips.collectionNum}}
            </span>
            <span>
              <img :src="comment"> {{packageList.tips.commentNum}}
            </span>
          </div>
        </div>
      </div>
    </section>
    <!-- three -->
    <section>
      <div class="contentBoxThree">
        <h3 class="h3">专业解读</h3>
       <div class="titleBox">
          <ul>
            <li
              v-for=" (item,index) in list3"
              @click="onClickThr(index)"
              :class="{activetwo:index==numThr}"
              :key="index"
            >{{item}}</li>
          </ul>
        </div>
        <div>  
          <threefloor v-show="numThr == 0"></threefloor> 
          <threetwofloor v-show="numThr == 1"></threetwofloor>      
                <!-- <div class="">{{item.header}}</div> -->
          <!-- <swiper :options="swiperOption" class ref="forSwiper">
            <swiper-slide >
              <swiper :options="swiperOption2" class ref="thrSwiper">
                <swiper-slide v-for="(item,index) in list4Data" :key="index">
                  <div class="contents" @click="gothreeDetail(item.id)">
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
                        <dd>{{item.author}} <span>{{item.authorPosition}}</span> </dd>
                      </dl>
                    </div>
                  </div>
                </swiper-slide>
                <div class="swiper-pagination" id="paginations" slot="pagination"></div>            
              </swiper> 
            </swiper-slide>
          <swiper-slide >
          <swiper :options="swiperOption3" class ref="sixSwiper">
            <swiper-slide v-for="(item,index) in list3Data" :key="index">
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
          </swiper-slide>
          </swiper> -->
        </div>
        
      </div>
    </section>
    <!-- bottom -->
    <section>
      <div class="forBox">
        <div class="lines" style="position:relative;">
          <div></div>
          <div class="cooperativeBox">
              <img :src="require('../assets/bottom1.png')" alt="">
              <img :src="require('../assets/bottom2.png')" alt="">
              <img :src="require('../assets/bottom3.png')" alt="">
              <img :src="require('../assets/bottom4.png')" alt="">
          </div>
         
        </div>
        <div class="bottomBottom">
          <p>中国营养学会、中国疾控中心营养健康研究所  </p>
          <p>北京大学医学部公共卫生学院、中国粮油学会</p>
          <p>提供排他数据合作支持</p>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import {
  // Swiper,
  GroupTitle,
  // SwiperItem,
  XButton,
  Range,
  Divider,
  Alert,
  Toast,
  Tab,
  Loading,
  Confirm,
  XAddress,
  PopupPicker,
  ChinaAddressV4Data,
  Popup,
  TabItem,
  InlineXSwitch,
  TransferDomDirective as TransferDom
} from "vux";
import children from "./popup/children.vue";
import slider from "./common/slider.vue";
import adult from "./popup/adult.vue";
import wrinkly from "./popup/wrinkly.vue";
import threefloor from "./threefloor/index.vue";
import threetwofloor from "./threefloor/indextwo.vue";
// import information from "./information.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { apilogin,apigetdefault,apitwofloor,apionefloor,apithreefloor } from '@/request/api';
import { setTimeout, setInterval } from 'timers';
export default {
  directives: {
    TransferDom
  },
  components: {
    adult,
    children,
    threefloor,
    threetwofloor,
    // information,
    slider,
    wrinkly,
    InlineXSwitch,
    Popup,
    Range,
    swiper,
    swiperSlide,
    GroupTitle,
    // SwiperItem,
    XButton,
    Divider,
    Toast,
    Tab,
    TabItem,
    Loading,
    Confirm,
    XAddress,
    PopupPicker
  },  
  computed: {
        
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    twoSwiper() {
      return this.$refs.twoSwiper.swiper;
    },
    // thrSwiper() {
    //   return this.$refs.thrSwiper.swiper;
    // },
    // forSwiper(){
    //   return this.$refs.forSwiper.swiper;
    // },
    // sixSwiper(){
    //   return this.$refs.sixSwiper.swiper;
    // },
    ...mapGetters(['get_indexData','get_token'])
  },
  created() {
      //打印下获得数据结果
      // console.log(this.get_listname);
      this.$vux.loading.show({
          text: "加载中..."
      }); 
      if (localStorage.sexData) {
        this.sexData = localStorage.sexData;
        if (this.sexData==1) {
          this.sex = require("../assets/sex.png");
          this.sexSelect = require("../assets/sexSelect.png");
          this.sexShow = '男';
        } else {
          this.sex = require("../assets/sex.png");
          this.sexSelect = require("../assets/sexSelect.png");
          this.sexShow = '女';
        }
        if (localStorage.sexData == 0) {
          this.sexShow = '女'
        } else {
          this.sexShow = '男'
        }
      }  
      let flag =  localStorage.getItem('token');
      // console.log(flag)
      if (flag != null) {
        this.show7 = false;
      } else {
        this.show7 = true;
        this.login();
      } 
      if (localStorage.getItem('name') != null) {
        localStorage.name = '全餐';
        localStorage.period = 9;
      }
      if (localStorage.getItem('symptom') != null) {
        this.labelName = localStorage.symptom;
        this.gethreefloor(localStorage.symptom);
      }else{
        this.gethreefloor('超重');
      }
      this.getdefault();
      let symptomId = localStorage.symptomId;
      let crowdId = localStorage.crowdId;
      if (symptomId!=null) {
        this.gettwofloor(symptomId);
        this.getonefloor(symptomId,crowdId);
        if (localStorage.getItem('age') != null) {
          console.log(localStorage.getItem('age'))
          this.year = localStorage.getItem('age');
        }
      } else {
        this.gettwofloor('4');
        this.getonefloor('4','4');
      }       
      this.getage();
      setTimeout(()=>{     
          this.$vux.loading.hide(); 
          this.waiting = true;
      },500)
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
     
  },
  watch:{
          
  },
  methods: {
     ...mapMutations(['set_indexData','set_token','set_threedata','set_threetwodata']),
    tipsdetail(id){
      console.log(id);
      this.$router.push({path: "/tips",query: { id: id }})
    },
    getage(){
      if (localStorage.getItem('age') != null) {
        this.year = localStorage.getItem('age');
      }
      if (localStorage.getItem('weight') != null) {
        this.data2 = localStorage.getItem('weight');
      }
      if (localStorage.getItem('height') != null) {
        this.data1 = localStorage.getItem('height');
      }
    },
    oncount(){
      console.log('this.crowdId='+this.crowdId+' this.symptomId='+ this.symptomId+'this.labelName'+this.labelName+'symptomNo====='+this.symptomNo+'age='+this.year);
      console.log(this.symptomNo)
      if (this.symptomNo == '') {
        this.symptomNo = 9999;
      }
      this.$vux.loading.show({
        text: "加载中..."
      });
      setTimeout(() => {
        this.$vux.loading.hide();
      }, 500);
      // if (this.symptomId ==) {
        
      // }
      console.log(this.symptomNo)
      this.show7 = false;
      this.getonefloor(this.symptomId,this.crowdId);
      this.gettwofloor(this.symptomId);
      this.gethreefloor(this.labelName);
       console.log('this.sexData='+this.sexData+'age='+this.year+'period='+0+'weight='+this.data1+'height='+this.data2);
      localStorage.sexData = this.sexData;
      localStorage.age=this.year;
      localStorage.weight=this.data2;
      localStorage.height=this.data1;
      localStorage.symptomNo= this.symptomNo;
      localStorage.symptom= this.labelName;
      localStorage.symptomId = this.symptomId;
      localStorage.crowdId = this.crowdId;
    },
    login(){
      apilogin().then((data)=>{
        // console.log(data);
        this.set_token(data); 
        // console.log(this.get_token)       
        localStorage.setItem('token',data);
      }).catch((err)=>{
        console.log(err)
      })
    },
    //popup
    getdefault(){
      apigetdefault().then((data)=>{
        this.set_indexData(data);
        this.ageData = [];
        this.symptomData = [];
        for (let index = 0; index < data.length; index++) {         
          this.ageData.push(data[index].crowdName);         
        }
        this.ageLi=data[this.ageNum].crowdList;
        // this.dataobj = {
        //   max:data[this.ageNum].crowdList[0].ageMax,
        //   min:data[this.ageNum].crowdList[0].ageMin,
        //   ageDefault:data[this.ageNum].crowdList[0].ageDefault
        // }
        // localStorage.setItem('token',data);        
          this.agemax=data[this.ageNum].crowdList[0].ageMax;
          this.agemin=data[this.ageNum].crowdList[0].ageMin;
          // this.year=data[this.ageNum].crowdList[0].ageDefault;
          this.data1=data[this.ageNum].crowdList[0].heightDefault;
          this.data2=data[this.ageNum].crowdList[0].weightDefault;
          this.changeAge = data[this.ageNum].crowdList[0].ageDefault;
          this.tipsdata = data[this.ageNum].crowdList[0].symptomList[0].tips;
          console.log(this.tipsdata);
      }).catch((err)=>{
        console.log(err)
      })
    },
    //onefloor
    getonefloor(symptomId,crowdId){
      apionefloor({symptomId:symptomId,crowdId:crowdId}).then((data)=>{
        console.log(data); 
        // this.propertyList = data.propertyList;
        
         
          this.percentage1=   data.propertyList[0].title;
          this.percentage2=   data.propertyList[1].title;
          this.percentage3=   data.propertyList[2].title;
          this.percentage4=   data.propertyList[3].title;
          this.onetipsdata = data.tips;
          this.list2 = [
          {
            name:"全餐",
            period:9,
            egImg: [
              { imgUrl: require("../assets/onefloor/onefloor (1).png"), title:this.percentage1, type:1 },
              { imgUrl: require("../assets/onefloor/onefloor (2).png"),title:this.percentage2,  type:2 },
              { imgUrl: require("../assets/onefloor/onefloor (4).png"),title:this.percentage3,  type:3 },
              { imgUrl: require("../assets/onefloor/onefloor (3).png"),title:this.percentage4,  type:7 }
            ],         
          },
          {
            name:"早餐",
            period:1,
            egImg: [
              { imgUrl: require("../assets/onefloor/onefloor (1).png"), title:this.percentage1, type:1 },
              { imgUrl: require("../assets/onefloor/onefloor (2).png"),title:this.percentage2,  type:2 },
              { imgUrl: require("../assets/onefloor/onefloor (4).png"),title:this.percentage3,  type:3 },
              { imgUrl: require("../assets/onefloor/onefloor (3).png"),title:this.percentage4,  type:7 }
            ],         
          },
          {
            name:"早+晚餐",
            period:12,
            egImg: [
              { imgUrl: require("../assets/onefloor/onefloor (1).png"), title:this.percentage1, type:1 },
              { imgUrl: require("../assets/onefloor/onefloor (2).png"),title:this.percentage2,  type:2 },
              { imgUrl: require("../assets/onefloor/onefloor (4).png"),title:this.percentage3,  type:3 },
              { imgUrl: require("../assets/onefloor/onefloor (3).png"),title:this.percentage4,  type:7 }
            ],         
          },
          {
            name:"午餐",
            period:3,
            egImg: [
              { imgUrl: require("../assets/onefloor/onefloor (1).png"), title:this.percentage1, type:1 },
              { imgUrl: require("../assets/onefloor/onefloor (2).png"),title:this.percentage2,  type:2 },
              { imgUrl: require("../assets/onefloor/onefloor (4).png"),title:this.percentage3,  type:3 },
              { imgUrl: require("../assets/onefloor/onefloor (3).png"),title:this.percentage4,  type:7 }
            ],         
          },
          {
            name:"晚餐",
            period:5,
            egImg: [
              { imgUrl: require("../assets/onefloor/onefloor (1).png"), title:this.percentage1, type:1 },
              { imgUrl: require("../assets/onefloor/onefloor (2).png"),title:this.percentage2,  type:2 },
              { imgUrl: require("../assets/onefloor/onefloor (4).png"),title:this.percentage3,  type:3 },
              { imgUrl: require("../assets/onefloor/onefloor (3).png"),title:this.percentage4,  type:7 }
            ],         
          },
          {
            name:"早+午餐",
            period:11,
            egImg: [
              { imgUrl: require("../assets/onefloor/onefloor (1).png"), title:this.percentage1, type:1 },
              { imgUrl: require("../assets/onefloor/onefloor (2).png"),title:this.percentage2,  type:2 },
              { imgUrl: require("../assets/onefloor/onefloor (4).png"),title:this.percentage3,  type:3 },
              { imgUrl: require("../assets/onefloor/onefloor (3).png"),title:this.percentage4,  type:7 }
            ],         
          },
          {
            name:"午+晚餐",
            period:13,
            egImg: [
              { imgUrl: require("../assets/onefloor/onefloor (1).png"), title:this.percentage1, type:1 },
              { imgUrl: require("../assets/onefloor/onefloor (2).png"),title:this.percentage2,  type:2 },
              { imgUrl: require("../assets/onefloor/onefloor (4).png"),title:this.percentage3,  type:3 },
              { imgUrl: require("../assets/onefloor/onefloor (3).png"),title:this.percentage4,  type:7 }
            ],         
          }
        ];
      
        
      }).catch((err)=>{
        console.log(err)
      })
    },
    //twofloor
    gettwofloor(symptomId){
      apitwofloor({symptomId:symptomId}).then((data)=>{
        console.log(data);   
        if (data) {
          this.twotitleLits = data.categoryList;
          this.packageList = data.relationSymptom;
        } else {
          console.log('666666666666666666666666666666666')
          this.twotitleLits = [];
          this.packageList = [];
        }
        
        console.log(this.twotitleLits)
      }).catch((err)=>{
        console.log(err)
      })
    },
    //threefloor list4Data
    gethreefloor(labelName){
      apithreefloor({
        type:1,
        labelName:labelName
      }).then((data)=>{
        console.log(1111111111111111111111111111111111111111)
        console.log(data);  
        this.list3Data = data;
        this.set_threedata(data);
        //console.log(this.get_threedata)
      }).catch((err)=>{
        console.log(err)
      });
      apithreefloor({
        type:5,
        labelName:labelName
      }).then((data)=>{
        console.log(data);  
        this.list4Data = data;
        this.set_threetwodata(data);
      }).catch((err)=>{
        console.log(err)
      })
    },
    gosearch(){
      this.$router.push({path: "/search"})
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTops = document.getElementById('deadline').offsetTop;
      // console.log(scrollTop+','+offsetTop)
      if (scrollTop>offsetTops) {
        this.shouOr = true;
      } else {
        this.shouOr = false;
      }
    },
    gothreeDetail(index){
      this.$router.push({ path: "/specialist", query: { id: index } });
    },
    gothreeDetailTwo(index){
      this.$router.push({ path: "/windzxsh", query: { id: index } });
    },
    ageIndex(index,item){
      console.log(index,item)
      this.symptom = '健康';
      this.symptom2 = '健康';
      this.symptom3 = '健康';
      this.indexLi = index;
      this.crowdId = item.crowdId;
      this.dataobj = {
        max:item.ageMax,
        min:item.ageMin,
        ageDefault:item.ageDefault,
        heightDefault:item.heightDefault,
        weightDefault:item.weightDefault,
        muslim:item.muslim,
        vegetarian:item.vegetarian,
        fastFood:item.fastFood,
        organic:item.organic,
        notAdditive:item.notAdditive,
        lowSaltOils:item.lowSaltOils
      }
      this.$set(this.dataobj,'max',item.ageMax,'min',item.ageMin,'ageDefault',item.ageDefault);
      this.agemin = this.dataobj.min;
      this.agemax = this.dataobj.max;
      this.year = this.dataobj.ageDefault;
      this.data1 = this.dataobj.heightDefault;
      this.data2 = this.dataobj.weightDefault;
      this.changeAge = this.dataobj.ageDefault;
      if (this.dataobj.organic==0) {
        this.valueSwitch = false;
      } else { 
        this.valueSwitch = true;
      }
      if (this.dataobj.notAdditive==0) {
        this.valueSwitch2 = false;
      } else {
        this.valueSwitch2 = true;
      }
      if (this.dataobj.lowSaltOils==0) {
        this.valueSwitch3 = false;
      } else {
        this.valueSwitch3 = true;
      }
      if (this.dataobj.muslim==0) {
        this.valueSwitch4 = false;
      } else {
        this.valueSwitch4 = true;
      }
      if (this.dataobj.vegetarian==0) {
        this.valueSwitch5 = false;
      } else {
        this.valueSwitch5 = true;
      }
      if (this.dataobj.fastFood==0) {
        this.valueSwitch6 = false;
      } else {
        this.valueSwitch6 = true;
      }
      console.log( this.dataobj)
     
      // console.log( this.year)
      // localStorage.setItem('ageSection',index);
    },
    gocollect(){
      this.$router.push({ path: "/favorite", query: { id: 'index' } });
    },
    onClickTwo(index) {
      console.log(index);
      this.numTwo = index;
      this.twoSwiper.slideTo(index);
    },
    onClickThr(index) {
      console.log(index);
      this.numThr = index;
      // this.forSwiper.slideTo(index);
    },
    toggle: function(index) {
      console.log(index);
      console.log('this.sexData='+this.sexData+'age='+this.year+'period='+0+'weight='+this.data1+'height='+this.data2);
      
      this.$router.push({ path: "/onefloor", query: { id: index } });
      // this.$router.push({name:'mealDetails', params:{ id:index}});
    },
    gotwoDetail: function(index) {
      console.log(index);
      localStorage.setItem('flag','true');
      this.$router.push({ path: "/twoIndex", query: { id: index } });

      // this.$router.push({name:'mealDetails', params:{ id:index}});
    },
    oneFloor(index,item) {
      console.log(index);
      console.log(item);
      localStorage.period = item.period;
      localStorage.name = item.name;
      this.swiper.slideTo(index);
    },
    onclose() {
      this.getage();
    },
    onItemClick(index) {
      console.log("on item click:", index);
      if (index == 0) {
        this.oneshow = true;
        this.twoshow = false;
      } else {
        this.oneshow = false;
        this.twoshow = true;
      }
    },
    choseAge(e) {
      console.log(e);
      this.indexLi = 0;
      console.log(this.get_indexData);
      console.log(this.get_indexData[e].crowdList[0].ageDefault)
      this.ageLi = this.get_indexData[e].crowdList;
      this.agemax=this.get_indexData[e].crowdList[0].ageMax;
      this.agemin=this.get_indexData[e].crowdList[0].ageMin;
      this.year=this.get_indexData[e].crowdList[0].ageDefault;
      this.data1=this.get_indexData[e].crowdList[0].heightDefault;
      this.data2=this.get_indexData[e].crowdList[0].weightDefault;
      this.changeAge = this.get_indexData[e].crowdList[0].ageDefault;
      this.ageNum = e;
      this.raceData = e;
      this.$refs.children;
       if (this.get_indexData[e].crowdList[0].organic==0) {
        this.valueSwitch = false;
      } else {
        this.valueSwitch = true;
      }
      if (this.get_indexData[e].crowdList[0].notAdditive==0) {
        this.valueSwitch2 = false;
      } else {
        this.valueSwitch2 = true; //
      }
      if (this.get_indexData[e].crowdList[0].lowSaltOils==0) {
        this.valueSwitch3 = false;
      } else {
        this.valueSwitch3 = true;
      }
      if (this.get_indexData[e].crowdList[0].muslim==0) {
        this.valueSwitch4 = false;
      } else {
        this.valueSwitch4 = true;
      }
      if (this.get_indexData[e].crowdList[0].vegetarian==0) {
        this.valueSwitch5 = false;
      } else {
        this.valueSwitch5 = true;
      }
      if (this.get_indexData[e].crowdList[0].fastFood==0) {
        this.valueSwitch6 = false;
      } else {
        this.valueSwitch6 = true;
      }
      // if (e==1) {
      //   this.symptom2 = data;
      // } else if(e==2) {
      //   this.symptom2 = data;
      // }
    },
    onchosed() {
      console.log(this.valueSwitch);

    },
    onchosed2() {
      console.log(this.valueSwitch2);
    },
    onchosed3() {
      console.log(this.valueSwitch3);
    },
    onchosed4() {
      console.log(this.valueSwitch4);
    },
    onchosed5() {
      console.log(this.valueSwitch5);
    },
    onchosed6() {
      console.log(this.valueSwitch6);
    },
    closeset(data) {
      console.log(data);
      this.infoSet = false;
      this.visibilit = "hidden";
      // this.dataobj = {};
      // console.log(this.dataobj)
    },
    symptoms(data) {
      // console.log(e,item);
      console.log(this.year);
      console.log(data);
      this.symptomId = data.id;
      this.symptom = data.symptomName;
      this.symptomNo = data.symptomNo;
      this.labelName = data.symptomName;
      this.tipsdata = data.tips;
      console.log(this.tipsdata)
      // this.num = e;
    },
    changeage(data) {
      this.changeAge = data;
    },
    setPeople() {
      
      console.log(this.dataobj)
      this.infoSet = true;
      // setTimeout(()=>{
      //   this.infoSet = true;
      // },300)
      
      console.log(this.year);
      let that = this;
      let a = '';
      this.changeheight=this.data1;
      console.log(this.changeheight)
      setInterval(function () {
                // console.log(document.getElementsByClassName("range-handle"))
          a = parseInt(document.getElementsByClassName("range-handle")[1].style.left.split('px')[0])+50+'px';
          that.yeariLeft2 = a;
      },100)


      let b = '';
      this.changeAge=this.year;            
      setTimeout(function () {
            b = parseInt(document.getElementsByClassName("range-handle")[0].style.left.split('px')[0])+50+'px';
          that.yeariLeft = b;
      },100)

      let c = '';
      this.changeweight=this.data2;
      console.log(this.data2)
      setTimeout(function () {
          // console.log(document.getElementsByClassName("range-handle"))
          c = parseInt(document.getElementsByClassName("range-handle")[2].style.left.split('px')[0])+50+'px';
          that.yeariLeft3 = c;
          
      },10)

      // a = parseInt(document.getElementsByClassName("range-handle")[1].style.left.split('px')[0])+50+'px';
      // that.yeariLeft2 = a;
      // this.visibilit = "";
      // console.log(this.visibilit);
    },
    changesex(data) {
      this.sexShow = data;
    },
    changeheight(data) {
      this.changeHeight = data1;
    },
    changeweight(data) {
      this.changeWeight = data;
    },
    symptoms2(data) {
      // console.log(e,item);
      // console.log(data);
      console.log(data);
      // this.symptom2 = data;
      this.symptom2 = data.symptomName;
      this.symptomId = data.id;
      // this.symptom = data.symptomName;
      this.symptomNo = data.symptomNo;
      this.labelName = data.symptomName;
      this.tipsdata = data.tips;
      // // console.log(this.symptom)
      // this.num = e;
    },
    symptoms3(data) {
      // console.log(e,item);
      console.log(data);

      this.symptom3 = data.symptomName;
      this.symptomId = data.id;
      // this.symptom = data.symptomName;
      this.symptomNo = data.symptomNo;
      this.labelName = data.symptomName;
      this.tipsdata = data.tips;
      // // console.log(this.symptom)
      // this.num = e;
    },
    onChange(val) {
      console.log("val change", val);
      // console.log(this.$refs);
    },
    onShadowChange(ids, names) {
      console.log(ids, names);
      console.log(this.selectValue);
    },
    change(value) {
      console.log("new Value", value);
    },
    handleClick: function() {
      this.show = !this.show;
    },

    // test
    close(){
            this.$emit('closeSet','false');
        },
    choseMan(){
            this.sexData = 1;
            this.sex = require("../assets/sex.png");
            this.sexSelect = require("../assets/sexSelect.png");
            this.sexShow = '男';
            this.$emit('changeSex',this.sexShow);
        },
        say(){
              console.log(123);
        },
        choseWoman(){
            this.sexData = 0;
            this.sex = require("../assets/sexSelect.png");
            this.sexSelect = require("../assets/sex.png");
            this.sexShow = '女';
            this.$emit('changeSex',this.sexShow);
        },
        sub(){
            if (this.year>this.agemin) {
                this.year-=1;
            } else {
                return;
            }          
        },
        add(){
            this.year+=1;
        },
        sub2(){
            this.data1-=1;
        },
        add2(){
            this.data1+=1;
        },
        sub3(){
            // this.data2-=1;
            this.data2 = parseFloat(this.data2)-1;
        },
        add3(){
           this.data2 = this.data2+1 ;
          //  console.log(this.data2);
        },
        onchang(){
            let that = this;
            let a = '';
            this.changeAge=this.year; 
            a = parseInt(document.getElementsByClassName("range-handle")[0].style.left.split('px')[0])+50+'px';
            that.yeariLeft = a;           
            // setTimeout(function () {
            //      a = parseInt(document.getElementsByClassName("range-handle")[0].style.left.split('px')[0])+50+'px';
            //     that.yeariLeft = a;
            // },100)
            
        },
        onchang2(){
            let that = this;
            let a = '';
            this.changeheight=this.data1;
            console.log(this.changeheight)
            a = parseInt(document.getElementsByClassName("range-handle")[1].style.left.split('px')[0])+50+'px';
            that.yeariLeft2 = a;
            // setInterval(function () {
            //     // console.log(document.getElementsByClassName("range-handle"))
            //     a = parseInt(document.getElementsByClassName("range-handle")[1].style.left.split('px')[0])+50+'px';
            //     that.yeariLeft2 = a;
            // },100)
            
        },
        onchang3(){
            let that = this;
            let a = '';
            this.changeweight=this.data2;
            console.log(this.data2)
            a = parseInt(document.getElementsByClassName("range-handle")[2].style.left.split('px')[0])+50+'px';
            that.yeariLeft3 = a;
            // setTimeout(function () {
            //     // console.log(document.getElementsByClassName("range-handle"))
            //     a = parseInt(document.getElementsByClassName("range-handle")[2].style.left.split('px')[0])+50+'px';
            //     that.yeariLeft3 = a;
                
            // },10)
            
        }







  },
  data() {
    return {
//    test
      year:0,
      tipsdata:{},
      data0:4,
            data02:0,
            data03:0,
            data04:0,
            data:6,
            data1:110,
            toppx:'2rem',
            agemin:0,
            agemax:100,
            data2:4,
            sex: require("../assets/sex.png"),
            sexSelect: require("../assets/sexSelect.png"),
            addImg: require("../assets/add.png"),
            subImg: require("../assets/sub.png"),
            yeariLeft:'',
            yeariLeft2:'',
            yeariLeft3:'',
            sexData:0,
            sexShow:'男',
            getMsg:'race',
            symptomId:11,
            crowdId:4,
            labelName:'超重',
            symptomNo:'',
            packageList:[],
            onetipsdata:[],
          data14:50,










      waiting:false,
      mySwiper: "",
      per:25,
      indexLi:0,
      ageLi:[],
      indexData:[],
      swiperOption: {        
        // pagination: {
        //   el: '#paginations',
        //   clickable: true,
        //   // dynamicBullets: true,
        // },
        slidesPerView: "auto",
        centeredSlides: true,
        
        // paginationClickable: true,
        on: {
          slideChangeTransitionEnd: () => {
            // console.log(this.activeIndex);
            let swiper = this.$refs.mySwiper.swiper;
            let twoSwiper = this.$refs.twoSwiper.swiper;
            // let thrSwiper = this.$refs.thrSwiper.swiper;
            
            // console.log(twoSwiper);
            this.numTwo = twoSwiper.activeIndex;
            // this.numThr = thrSwiper.activeIndex;
            let i = swiper.activeIndex;
            this.index = i;
          }
        },
        observer: true,
        observeParents: true
      },
      swiperOption2: {        
        pagination: {
          el: '#paginations',
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
      swiperOption8: {        
        
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
      raceData: "0",
      infoSet: false,
      demo2: "美食",
      visibilit: "hidden",
      percentage1:0,
      percentage2:0,
      percentage3:0,
      percentage4:0,
      list2: [],
      show7: true,
      num: 0,
      ageNum: 0,
      value4: [],
      curIdx: 0,
      dataobj: {},
      nowIndex: 0,
      valueSwitch: false,
      valueSwitch2: false,
      valueSwitch3: false,
      valueSwitch4: false,
      valueSwitch5: false,
      valueSwitch6: false,
      shouOr:false,
      oneshow: true,
      twoshow: false,
      changeAge: "6",
      changeWeight: "50",
      changeHeight: "110",
      sexShow: "男",
      list1: [[]],
      twotitleLits: [],
      ageData: [],
      eg2: require("../assets/eg2.png"),
      list3: ["专家说", "健康资讯"],
      list4Data:[],
      list3Data:[],
      value1: ["华北"],
      title: "地区",
      addressData: ChinaAddressV4Data,
      showAddress: false,
      symptom: "健康",
      symptom2: "健康",
      symptom3: "健康",
      selectValue: [],
      areaData: [],
      index: 0,
      twoindex:0,
      numTwo: 0,
      numThr:0,
      leftImg: require("../assets/zuojiantou.png"),
      jigou: require("../assets/jigou.png"),
      see: require("../assets/see.png"),
      eyeWhite: require("../assets/eyeWhite.png"),
      comment: require("../assets/comment.png"),
      pinglun:require("../assets/pinglun.png"),
      heart: require("../assets/heart@2x.png"),
      heart2: require("../assets/heart2.png"),
      share: require("../assets/share.png"),
      btr: require("../assets/btr.png"),
      setpeople: require("../assets/headIntroduced.png"),
      searchImg: require("../assets/search.png"),
      counter: require("../assets/counter.png"),
      little: require("../assets/little.png"),
      littleCar: require("../assets/littleCar.png"),
      
      symptomData: [
        "血压高",
        "血糖高",
        "血脂高",
        "健康",
        "眼睛疲劳",
        "贫血",
        "便秘",
        "骨质疏松",
        "头发脱落"
      ],
      show: true
    };
  },
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#F4F4F4;");
  },

  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
};
</script>

