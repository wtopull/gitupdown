<template>
  <div id="app">
    <my_header>{{ msg }}</my_header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  import my_header from './components/header/header.vue'
  export default{
    name: 'app',
    data(){
      return{
        msg:'fdsafsaf'
      }
      
    },

    components: {
      my_header
    }
  }

</script>
<style>
*{
  margin:0;
  padding:0;
}
.tab{
  display:flex;
  width:100%;
  height:40px;
  line-height:40px;
}
.tab-item{
  flex: 1;
  text-align: center;
}
</style>
