<template>
  <div class="hello">
    <p>afdsafsd</p>
    <ul>
      <router-link to="/aaa" tag="li"></router-link>
      <router-link to="/bbb" tag="li"></router-link>
      <router-link to="/ccc" tag="li"></router-link>
      <router-view /> 
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
