<template>
    <div>
        <b-alert v-for = "(alert,index) in alerts"
                 v-bind:key="index"
                 v-model="alert.visible"
                 :variant="alert.variant"
                 :dismissible="alert.dismissible"
                 @dismissed="dismiss({index, namedArray})"
                 >{{alert.content}}</b-alert>
    </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    props: {
        namedArray:{
            type:String,
            default:'default'
        }
    },
    computed: {
        alerts:function() {
            console.log('test',this.$store.getters['Feedback/getAlerts'](this.namedArray), this.namedArray);
            return this.$store.getters['Feedback/getAlerts'](this.namedArray);
            // return this.$store.state.Feedback.alertsArrays[this.namedArray];
        },
        // ...mapGetters({alertsObj:'Feedback/getAlertsObj'})
    },
    methods: {
        ...mapActions({dismiss:'Feedback/dismissAlert'}),

    },
    beforeMount() {
        this.$store.commit('Feedback/setAlertArray', this.namedArray);
    }
}
</script>
