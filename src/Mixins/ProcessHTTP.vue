<script>
import Alert from '@/models/Alert'
export default {
    
  methods: {
    handle(response) {
        if (response.response) this.handle(response.response)
        else {
          let status = response.status;
          if (status >= 200 && status < 300) {
            this.alert(response.statusText, "success")
            
          } else {
            this.alert(response.statusText, "danger")
          }
        }
        
    },
    alert (msg, style) {
      this.$store.commit('Feedback/alert', {alert:new Alert(msg, style)});
    }
  }
}
</script>