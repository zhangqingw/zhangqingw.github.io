<template>
  <div id="elShop">
    <div class="shop_a">
      <i class="iconfont icon-jianshao jian" @click="jian" style="font-size: 5vw;color: #3497eb;"></i>
      <input type="text" style="font-size: 3vw;border: none;width:50px;text-align:center;" v-model="num"/>
      <i class="iconfont icon-jia jia" @click="jia" style="font-size: 5vw;color: #3497eb;"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "elShop",
  props: ["value"],
  computed: {
    num: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  },
  methods: {
    // 减
    jian() {
      if (this.num <= 0) {
        return false;
      }
      this.num--;
    },

    // 加
    jia() {
      this.num++;
    }
  }
};
</script>
<style>
*{
  cursor: pointer;
}
.shop_a {
  margin-top: -90px;
  margin-right: 10px;
}
</style>