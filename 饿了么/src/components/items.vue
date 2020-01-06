<template>
  <div id="items">
    <div class="header">
      <router-link :to="{path:'/'}">
        <i class="iconfont icon-htmal5icon37 fanhui"></i>
      </router-link>
      <p>确认订单</p>
    </div>
    <div class="main_content">
      <div class="main_a">
        <div class="main_b">
          <h3 class="main_title">庆丰包子铺   (窦店)</h3>
          <ul class="main-top">
            <!-- 菜单部分 -->
            <li class="main_ctop">
              <ul class="main_list">
                <!-- 每一项菜 -->
                <li v-for="(i,index) in main_arr" :key="index" class="main_list_top" >
                  <div class="su_img">
                    <img :src="i.image" alt />
                  </div>
                  <span class="main_name">{{i.name}}</span>
                  <span class="main_num">x{{i.num}}</span>
                  <span class="main_price">￥{{i.num * i.sellCount}}</span>
                </li>
              </ul>
            </li>
            <li>
              <span class="main_center main_bao">包装</span>
               <span class='canhe'>餐盒：</span>  
               <span class="main_num">x{{chf}}</span>
              <span class="main_price">￥{{chf}}</span>
            </li>
            <li>
              <span class="main_center main_feng">蜂鸟</span>
              <span class='canhe'>配送费：</span>
              <span class="main_price">￥{{psf}}</span>
            </li>
            <li>
              <span>红包</span>
              <span class="choose"><i>选择地址后使用红包</i></span>
              </li>
            <li>
              <span class="cut_price">优惠说明</span>
              <span class="main_price"><i>小计￥</i>{{sum + chf + psf}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer sum">
      ￥{{sum + chf + psf}}
      <button class="count">去支付</button>
    </div>
  </div>
</template>

<script>
import store from '../store/vuex.js'
export default {
  name: "items",
  data() {
    return {
      // 配送费
      psf: 5,
      // main_arr: []
    };
  },
  mounted() {
    // this.main_arr = eval(`(${localStorage.data})`);
    // console.log(this.main_arr)
  },
  computed: {
    // vuex数据
    main_arr(){
      return store.state.smdata
    },

     // 餐盒配送费
    chf() {
      let quan = 0;
      for (let i = 0; i < this.main_arr.length; i++) {
        quan += this.main_arr[i].num;
      }
      return quan;
    },


    // 总价
    sum() {
      let quan = 0;
      for (let i = 0; i < this.main_arr.length; i++) {
        quan += this.main_arr[i].num * this.main_arr[i].sellCount;
      }
      return quan;
    },

   
  }
};
</script>

 <style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  border: none;
  text-decoration: none;
  cursor: pointer;
}

[v-cloak] {
  display: none;
}

/* 头部 */
.header {
  height: 100px;
  line-height: 100px;
  position: relative;
  border-bottom: 2px #dfdfdf solid;
}

.fanhui {
  position: absolute;
  left: 34px;
  font-size: 20px;
  color: #3497eb;
}

.header p {
  position: absolute;
  left: 83px;
  font-weight: bold;
  font-size: 18px;
}

/* 尾部 */
.footer {
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #515154;
}

.count {
  position: absolute;
  right: 0;
  bottom:0px;
  width: 150px;
  height: 50px;
  background: #37cb72;
  color: #fff;
  /* border: none; */
  font-size: 14px;
}

.main_content {
  background: #f5f5f5;
  height: auto;
}

.main_a {
  min-height: 500px;
  background: linear-gradient(#348de4, #f5f5f5, #f5f5f5);
  padding: 20px 20px 0 20px;
}

.main_b {
  min-height: 500px;
  background: #fdfffe;
  padding: 0 30px;
}
/* .main_list_top{
  height: 50px;
} */
.main_title {
  line-height: 100px;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 3px #f2f2f2 solid;
  margin-bottom: 5px;
}

.main-top {
  height: auto;
  border-bottom: 3px #f2f2f2 solid;
  padding-bottom: 100px;
  font-size: 14px;
  font-weight: bold;
}

.main-top li {
  line-height: 80px;
  height: 80px;
  border-top: 2px #f6f6f8 solid;
  position: relative;
}

.main-top .main_center {
  width: 50px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  line-height: 30px;
  text-align: center;
  /* margin-left: 20px; */
  margin-right: 50px;
}

.main-top .main_bao {
  /* box-sizing: border-box; */
  border: 1px #d3dae0 solid;
  background: #eff3f6;
  color: #8b98a0;
}

.main-top .main_feng {
  border: 2px #78aacd solid;
  background: #5facf0;
  color: #fff;
}

.main-top .main_ctop {
  height: auto;
  /* border: none; */
}

.main-top .main_price {
  position: absolute;
  right: 0;
  font-size: 20px;
}
.main-top .main_price i{
  font-size: 12px;
  font-style: normal;
}
.main-top .main_ctop .su_img {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* left: 30px; */
}

.main-top .main_ctop .su_img img {
  width: 100%;
  height: 100%;
}

.main_name {
  position: absolute;
  left: 140px;
}

.main_num {
  position: absolute;
  right: 160px;
}
.main-top .canhe{
  margin-left:40px
  }
.sum {
  line-height: 50px;
  color: #fff;
  /* font-size: 1px; */
  padding-left: 70px;
}
.cut_price {
  color: #b9b9b9;
}
.choose{
  float: right;
  font-weight: bold;
  /* background: orangered; */
   background: linear-gradient(#ff6f22, #ff4608);
  width: 150px;
  height: 25px;
  margin-top: 30px;
   /* position: absolute;
  right: 0; */
}
.choose i{
  position: absolute;
  top: 1px;
  font-style: normal;
  padding: 2px 10px;
  color: #cccccc;
  margin-left: 1px;
  /* line-height: 25px; */
}
</style>