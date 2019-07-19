<template>
  <div id="app">
    <Navigation/>
    <br/>
    <Feedback/>
    <router-view/>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Feedback from '@/components/Feedback.vue'
import Alert from '@/models/Alert'
import {mapMutations} from 'vuex'
export default {
  components: {
    Navigation,
    Feedback
  },
  data: function() {
    return {
      count:0,
      namedArray:'default'
    }
  },
  methods: {
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
