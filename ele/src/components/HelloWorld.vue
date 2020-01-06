<template>
  <div id="container">
    <!-- 头部 -->
    <div class="header">
      <i class="iconfont icon-htmal5icon37 fanhui"></i>
      <p>庆丰包子铺   (窦店)</p>
      <i class="iconfont icon-sousuo sousuo"></i>
      <i class="iconfont icon-fenxiang share"></i>
    </div>
    <!-- 点餐还是评价 -->
    <div class="nav">
      <ul class="nul">
        <li v-for="(i,index) in shop" :key="index" @click="dian(index)" :class="shops == index ? 'action' : ''" >{{i}}</li>
      </ul> 
    </div>
    <!-- 点餐部分 -->
    <div class="main">

        <!-- 左边 -->
      <div class="main_left">
        <div class="can" v-for="(i,m) in type" :key="m" @click="kind(m)" :class="molds == m ? 'active' : ''">
          <a :href="'#' + m">{{i}}</a>
        </div>
      </div>

      <!-- 右边 -->
      <div class="content">
        <!-- 循环菜名数据 -->
        <div v-for="(i,m) in caiName" :key="m">
          <h3 :id="m">{{i}}</h3>
          <div v-for="(m,index) in arr" :key="index">
            <div class="caipin" v-if="i == m.kind">
              <div class="cai_img">
                <img :src="m.image" alt />
              </div>
              <div class="cai_list">
                <h4>{{m.name}}</h4>

                <p class="pin">
                  <span>月售{{m.sale}}份</span>
                  <span>好评率{{m.commit}}</span>
                </p>
                <h5>单价：{{m.sellCount}}</h5>


                <!-- 计算组件 -->
                <div class="jisuan">
                  <elShop v-model="m.num" @input="btn($event,m.sellCount,index)"></elShop>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 付款 -->
    <div class="footer">
      <div class="footer_a">
        <i class="iconfont icon-htmal5icon29"></i>
        <span class="footer_b" v-if="open">{{meige}}</span>
      </div>
      <p>￥{{zong}}</p>
      <span>另需配送费5元</span>
      <router-link :to="{path: '/items'}">
        <button class="count" @click="count_c">去结算</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import elShop from "./jiajian.vue";
import Smdata from "../assets/smdata.json";
import store from '../store/vuex.js'
export default {
  name: "container",
  components: {
    elShop,
  },
  data() {
    return {
      shop: ["点餐", ],
      shops: 0,
      type: ["水饺","流食","凉菜", "包子", "庆丰福粽", "庆丰特色冷饮","豆浆饮品"],
      molds: 0,   
      // path: "/items",
       index: 0,
      arr: [],//smdata数据
      open: false, 
    };
  },
  methods: {
    dian(i) {
      this.shops = i;
    },

    // 类别
    kind(i) {
      this.molds = i;
    },

    btn() {
      if (this.meige) {
        this.open = true;
      } else {
        this.open = false;
      }
    },

    // 结算
    count_c() {
      if (this.zong <= "0") {
        // alert("请选择商品");
        this.path = "/";
        return false;
      } else {
        this.path = "/items";
        // localStorage.data = JSON.stringify();
        store.commit('main_arr',this.jieArr)
      }
    }
  },
  computed: {

    // 菜名
    caiName() {
      let oArr = [];
      for (let i = 0; i < this.arr.length; i++) {
        if (oArr.indexOf(this.arr[i].kind) == -1) {
          oArr.push(this.arr[i].kind);
        }
      }
      return oArr;
    },
    zong() {
      let quan = 0;
      for (let i = 0; i < this.arr.length; i++) {
        quan += this.arr[i].num * this.arr[i].sellCount;
      }
      return quan;
    },
    meige() {
      let ge = 0;
      for (let i = 0; i < this.arr.length; i++) {
        ge += this.arr[i].num;
      }
      return ge;
    },

    // 结算
    jieArr() {
      var newArr = [];
      for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].num != 0) {
          newArr.push(this.arr[i]);
        }
      }
      return newArr;
    }
  },
  created() {
    this.arr = Smdata.arr
    console.log(this.arr)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
}

[v-cloak] {
  display: none;
}

/* 头部 */
.header {
  height: 100%;
  line-height: 80px;
  position: relative;
  border-bottom: 2px #ccc solid;
  /* background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572499667098&di=97291d36f14a8e959d4de1b03c0b2333&imgtype=0&src=http%3A%2F%2Fp3-q.mafengwo.net%2Fs10%2FM00%2F4D%2F46%2FwKgBZ1kh2nyASOqPAAD1uAzshXE64.jpeg%3FimageView2%2F2%2Fw%2F510%2Fh%2F8000%2Fq%2F100) */
}
/* .header p{
   border-bottom: 2px #ccc solid;
} */
.fanhui {
  position: absolute;
  left: 34px;
  font-size: 20px;
  color: #3497eb;
}

.header p {
  position: absolute;
  left: 63px;
  /* background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572499667098&di=97291d36f14a8e959d4de1b03c0b2333&imgtype=0&src=http%3A%2F%2Fp3-q.mafengwo.net%2Fs10%2FM00%2F4D%2F46%2FwKgBZ1kh2nyASOqPAAD1uAzshXE64.jpeg%3FimageView2%2F2%2Fw%2F510%2Fh%2F8000%2Fq%2F100), */
  /* top: 20px; */
  font-size: 20px;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572499667098&di=97291d36f14a8e959d4de1b03c0b2333&imgtype=0&src=http%3A%2F%2Fp3-q.mafengwo.net%2Fs10%2FM00%2F4D%2F46%2FwKgBZ1kh2nyASOqPAAD1uAzshXE64.jpeg%3FimageView2%2F2%2Fw%2F510%2Fh%2F8000%2Fq%2F100),

}

.sousuo {
  font-size: 20px;
  position: absolute;
  right: 80px;
  color: #3497eb;
  font-weight: bold;
}

.share {
  font-size: 20px;
  position: absolute;
  right: 34px;
}

/* nav */
.nav .nul {
  line-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 18px;
  /* margin-left: 60px; */
  margin-top: 50px;
  /* box-sizing: border-box; */
  /* margin-bottom: 24px; */
}

.action {
  border-bottom: 3px solid #3497eb;
  font-weight: bold;
  /* margin-left: 20px; */
}

/* 点餐 */
.main {
  height: 100vh;
  margin-bottom: 97px;
}

.main .main_left {
  height: 100%;
  line-height: 63px;
  width: 100px;
  font-size: 14px;
  background: #f8f8f8;
  float: left;
  text-align: center;
  margin-top: 20px;
}

.main .main_left a {
  height: 63px;
  width: 100px;
  color: #989898;
  display: block;
}

.active {
  background: #fff;
  color: #888;
}

.content {
  height: 100%;
  /* width: 80%; */
  margin-left: 30vw;
  overflow: hidden;
  overflow-y: scroll;
}

.content h3 {
  line-height: 96px;
  font-size: 2vw;
  color: #717171;
}

.caipin {
  height: 191px;
  /* margin-bottom: 10px; */
}

.cai_img {
  width: 30vw;
  height: 30vw;
  /* border-radius: 20px; */
  overflow: hidden;
  float: left;
  margin-right: 20px;
}

.cai_img img {
  width: 100%;
  height: 100%;
}

.cai_list {
  height: 191px;
  position: relative;
}

.cai_list h4 {
  font-size: 4vw;
  line-height: 42px;
  color: #2c2c2c;
  position: absolute;
  top: -10px;
  left: 135px;
}

.cai_list h5 {
  font-size: 4vw;
  color: #d96a59;
  position: absolute;
  top: 55px;
  left: 135px;
}

.cai_list p {
  font-size: 18px;
  color: #a8a8a8;
  /* padding-top: 16px; */
}

.pin span{
  font-size: 3vw;
  margin-top: 30px;
  display: inline-block;
  color:#c9cbca;

}
/* .caiqing p span:first-child {
  margin-right: 20px;
} */

.jisuan {
  /* width: 50px; */
  /* height: 44px; */
  position: absolute;
  bottom: 10px;
  right: 25px;
}

/* 尾部 */
.footer {
  height: 60px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #515154;
}

.count {
  position: absolute;
  right: 0;
  width: 120px;
  height: 60px;
  background: #37cb72;
  color: #fff;
  /* border: none; */
  font-size: 14px;
  bottom:0px;
}

.footer_a {
  width: 70px;
  height: 70px;
  background: #348de4;
  border: 10px solid #515154;
  border-radius: 50%;
  text-align: center;
  line-height: 97px;
  position: absolute;
  top: -40px;
  left: 50px;
}

.footer_a i {
  font-size: 30px;
  position:relative;
  bottom:20px;
  color: #fff;
}

.footer p {
  font-size: 18px;
  color: #fff;
  position: absolute;
  left: 130px;
  top: 10px;
}
.footer span{
  font-size: 8px;
  position: absolute;
  display: inline-block;
  left: 130px;
  bottom: 8px;
  color: #9a9b9d;
  }
.footer .footer_a .footer_b {
  position: absolute;
  top: -20px; 
  left:45px;
  width: 30px;
  height: 30px;
  background: #fb600d;
   font-size: 12px;
  line-height: 30px;
  border-radius: 50%;
  color: #fff;
}
</style>