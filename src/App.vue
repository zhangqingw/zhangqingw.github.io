<template>
  <div id="app">
    <keep-alive>
      <router-view name="a"></router-view>
    </keep-alive>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
<style>
  @font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1387992_y1utbg03xic.eot?t=1567674853277'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1387992_y1utbg03xic.eot?t=1567674853277#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATEAAsAAAAACkAAAAR2AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDZAqGcIVRATYCJAMgCxIABCAFhG0HcRvECBEVpCmQfVXAk4m5HFWzYo4HRgLVTV97RjB/uAkHeR4Ez9N71Z+bqqA5VBaQMyuge6Ev8OELcB6A7Dfnj1DOR6gRWfQfdSE5KKQvlw4C4OjcR9LvbEVHM8zCNC/bPp2gErvWrKtViEqDUNwRjoHmpbMxtWVf4fDcu3oDSI7ZAarWNdUVqpZhCArIyE2YCef3GE5x9Tcsuq+GAGGKqY6079i9Pw4aXCWATJ8yaQxOQIvOIAuOwko4qJGdmDjGJuM5Guywfl++YS0OGJgKvFbviR3G09qnL+crL/AYrjy85syAfAwUUB3QIF6idSnK8VdHEf7cT9MTiOJgoP24n+ZX9dt8aUGAHwuQqgjRK0SJEzY1HhQaczL/eAY2iAWXRoE4PmCDH9MQFPhxBA1+GoIJfhUEAb8qggV+GwQDvpyvxQa8I0+F4L8yA4jlvYLCIImykq1QSShaGMX3L5+3qB4/YdDEWbfvefe3PCx9sJDIkP57D3IsGkwluj+7OSi25W7B/31ADifC8YEjipxxzBtXv/mb11/12i5hKU1svghhneJdikSgbEmKRFpLEyCNZkliSdJlEVmZwbbZfza0v3Htf/K4N7p+c5rXq3otZ1VccrZ/4xs9TdjnXdycTVdpcsuyA9q5LmGcfK19/Nk30DzzZqfYlkvexcw61GgFk7JBRg7cfyR5Luv3PVp+9DSIKWlOiNTj/dyHDd2I3zRsWI3qfH6IpCTaJtokN0zs0WNTue2wpJ0lAc/3eDDa1GXbxLna2/RXf9+UeumNy3ZfJ+Sd3OZOm7sEq95G19Vvk9p1daHXb1qZZ56BATgAzFIrSN8SuUYUcVWPJ4jiJ8TTBV5Eo7dM1zWB/JbrCiFPXrqa9sJFYGSSa3pKvf4GP0ksEP8SC8zipPYyvutrjevX1VqacO36OmONceO6sZax+OTZNbOyDxVsCg5lzQ7nSxtp0OeMphWkxSLSpk1qa0/XiOuos+IxUS9l5byf42rY1l9cpWTIvNmpu3PT1r2PPk1PftxviLR7xGmFafFHMnLRyqHCOACC35mvwhAEylMCwVH1jBrzD37dPqKyb8i/odHJKTmjXPPfLqIBeHv/z59beYGnUR7cVTIK824/XsEa/RWgztHv0jQt0pS1BUrxGkCYmuDGc6bzQZPyrMLJIDhkeWBgUwQKh/JYTawOJhHqg4VDKwhTjU7HI2QwF4XoEFCVdQyEVK6BQZyHoEjleawmvg8m2XwHFqmiIMxAyThjhIqCcqOLYKSYQvwBl3BJqkFHduoXmjqPxC+wKH8owblgNV+GQw8sUZrYEp5mrUpAwgXc2fUwzxkqYY+Jzq1qdV4sKOmF5gkXjVHjIhgpphB/wCVcktFZR5Gf/0JT55FkFPww/6EE1zus5ssC2Ie0LFRwKM8JT7NWJSDhAu7MjDn5GarkeR4TndsK3uq84I2oqHTevbzY011AuIEXd5qptLGe82NitYjy3SY0bw6+6PWp7V3U0TTlQN8abMS9wHWoeUBYvsMW02gAAAA=') format('woff2'),
  url('//at.alicdn.com/t/font_1387992_y1utbg03xic.woff?t=1567674853277') format('woff'),
  url('//at.alicdn.com/t/font_1387992_y1utbg03xic.ttf?t=1567674853277') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1387992_y1utbg03xic.svg?t=1567674853277#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-htmal5icon37:before {
  content: "\e629";
}

.icon-htmal5icon29:before {
  content: "\e641";
}

.icon-jia:before {
  content: "\e60d";
}

.icon-jian:before {
  content: "\e60e";
}

.icon-jianshao:before {
  content: "\e611";
}

.icon-sousuo:before {
  content: "\e62a";
}

.icon-fenxiang:before {
  content: "\e874";
}
</style>
