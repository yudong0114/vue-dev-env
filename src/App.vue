<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App!!!" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

const axios = require('axios').default;

axios
  .get('https://api.github.com/users/yudong0114')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
