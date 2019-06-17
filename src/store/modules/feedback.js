import Alert from '../../models/Alert';
import Vue from 'vue';
import alertValidator from '../../validation/AlertValidator';
const state = {
    alertsArrays: {
        default:[]
    }
}
const getters = {
    getAlerts:(state)=> (arrName)=>{
        if (state.alertsArrays[arrName]) return state.alertsArrays[arrName];
        else return state.alertsArrays['default'];
    }
}
const mutations = {
    alert(state, {alert, namedArray = 'default'}) {
        //validate alert is an alert
        try {
            alertValidator(alert);
            state.alertsArrays[namedArray].push(alert);
        } catch(err) {
            console.log(err);
        } 
    },
    dismissAlert(state, {index, namedArray = 'default'}) {
        state.alertsArrays[namedArray].splice(index,1);
    },
    setAlertArray(state, namedArray) {
        if (!state.alertsArrays[namedArray]) {
            Vue.set(state.alertsArrays, namedArray, [])
        }
    }
}
const actions = {
    dismissAlert(context, payload) {
        setTimeout(() => {
            context.commit('dismissAlert', payload);
        }, 1);
    }
}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}