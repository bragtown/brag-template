import Alert from '../../models/Alert';

const state = {
    alerts:[]
}
const getters = {

}
const mutations = {
    alert(state, alert) {
        state.alerts.push(new Alert(...alert));
    },
    dismissAlert(state, index) {
        state.alerts.splice(index,1);
        console.log(index, state.alerts);
    }
}
export default {
    namespaced:true,
    state,
    mutations
}