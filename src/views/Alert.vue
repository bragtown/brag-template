<template>
    <div class = "container">
        <!-- <Feedback :namedArray="namedArray"/> -->
        <button v-on:click="testAlert()">Test</button>
    </div>
</template>
<script>
import Feedback from '@/components/Feedback.vue'
import Alert from '@/models/Alert'
import {mapMutations} from 'vuex'
export default {
  components: {
    Feedback
  },
  data: function() {
    return {
      count:0,
      namedArray:'default'
    }
  },
  methods: {
    testAlert () {
      this.$store.commit('Feedback/alert', {alert:new Alert(`hello world ${this.count++}`, 'primary'), namedArray:this.namedArray});
    }
  }
    
}
</script>
