<template>
  <div class="hello">
  	<ul>
  		<li v-for="(nav,index) in navs" :class="{'navtab':(nav.text)}">{{nav.tabs}}</li>
  	</ul>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      navs:[
	      {
	      	tabs:'所有优惠',
	      	text:'one'
	      },
	      {
	      	tabs:'所有优惠',
	      	text:'two'
	      },
	      {
	      	tabs:'所有优惠',
	      	text:'three'
	      },
	      {
	      	tabs:'所有优惠',
	      	text:'foru'
	      }
    	]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
