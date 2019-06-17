import Alert from '../../models/Alert';
import alertValidator from '../../validation/AlertValidator';
const state = {
    alertsArrays: {
        default:[]
    }
}
const getters = {
    getAlerts:(state)=>(arrName = 'default') => {
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
            console.log(alert, namedArray, state)
        } catch(err) {
            console.log(err);
        } 
    },
    dismissAlert(state, {index, namedArray = 'default'}) {
        state.alertsArrays[namedArray].splice(index,1);
    },
    setAlertArray(state, namedArray) {
        if (!state.alertsArrays[namedArray]) {
            state.alertsArrays[namedArray] = [new Alert('craxytown', 'danger')];
        }
    }
}
const actions = {
    dismissAlert(context, payload) {
        console.log('payload',payload)
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