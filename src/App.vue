<template>
  <div id="app">
    <Navigation/>
    <div class = "container"><br><Feedback/></div>
    <button v-on:click="testAlert()">Test</button>
    <router-view/>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Feedback from '@/components/Feedback.vue'
import {mapMutations} from 'vuex'
export default {
  components: {
    Navigation,
    Feedback
  },
  data: function() {
    return {
      count:0
    }
  },
  methods: {
    testAlert () {
      this.$store.commit('Feedback/alert', [`hello world ${this.count++}`, 'primary']);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
