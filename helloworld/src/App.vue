<template>
  <div id="app">
    <my_header></my_header>
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
  const ERR_OK = 0;
  export default{
    name: 'app',
    data(){
      return{
        seller:{}
      }
      
    },
      created() {
      axios.get('/api/seller').then(function (response) {
          response = response.body;
          if(response.errno === ERR_OK){
            this.seller = response.data;
            console.log(response);
          }
        });

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
  border-bottom: 1px solid #e0e0e0;
}
.tab-item{
  flex: 1;
  text-align: center;
}
.tab-item a{
  text-decoration: none;
  display: block;
  font-size: 14px;
  color:rgb(77,85,93);
}
.tab-item a.router-link-exact-active{
  color:reba(94,92,91,1);
  background: #999;
}
</style>
