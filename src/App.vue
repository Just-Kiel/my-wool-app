<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Landing msg="Coucou c'est mon landing" message="oui"/>
  <Contact />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Landing from './components/Landing.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Landing,
    Contact
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  margin: 0;
}
</style>
