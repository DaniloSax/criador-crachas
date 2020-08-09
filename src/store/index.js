import Vue from 'vue'
import Vuex from 'vuex'

// modules

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: false,
    },
    mutations: {
        activeSideBar(state) {
            state.drawer = !state.drawer
        },
        updateDrawer(state, value) {
            state.drawer = value
        },
    },
    actions: {},
    getters: {
        getDrawer: (state) => state.drawer
    },
    modules: {}
})