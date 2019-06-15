<template>
    <div>
        <b-alert v-for = "(alert,index) in alerts"
                 v-bind:key="index"
                 :variant="alert.variant"
                 :dismissible="alert.dismissible"
                 @dismissed="dismissAlert(index)"
                 show>{{alert.content}}</b-alert>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState({
            alerts: state => state.Feedback.alerts
        })
    },
    methods: {
        ...mapMutations({dismiss:'Feedback/dismissAlert'}),
        dismissAlert:function(index) {
            console.log('dismissedAlert', index)
            debugger;
            this.$store.commit('Feedback/dismissAlert', index);
        }
    }
}
</script>
