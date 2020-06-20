<template>
  <div style="margin: 20px;">
    hahhahahha
    <chj-button>hhhh</chj-button>
    <chj-button type="primary">主要按钮</chj-button>
    <chj-button type="success">成功按钮</chj-button>
    <chj-button type="info" @click="clickk">信息按钮</chj-button>
    <chj-button type="warning"  icon='chj-icon-loading'>警告按钮</chj-button>
    <chj-button type="danger" :loading="true">危险按钮</chj-button>
     <chj-button type="danger" round></chj-button>
    <i class="chj-icon-loading">123</i>
    <span :class="['test',{'test2': true, 'test1': true}]">test</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello CHJ UI!'
      };
    },
    methods: {
        clickk() {
            console.log(123)
        }
    }
  };
</script>
<style lang="scss" >
@import '../../packages/theme-chalk/src/common/var.scss';
.test1 {
    font-size: 17px;
    margin-top: 20px;
    display: inline-block;
}
.test{
    color: mix($--color-white, orange, 0%) ;
}
.test2{
    background-color: mix($--color-white, orange, 0%) ;
}
</style>
