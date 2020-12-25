import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        catch_components: ["Home"],
        text: "哈哈哈"
    },
    mutations: {
        // 新增缓存组件
        addComponent(state, data) {
            state.catch_components.push(data)
        },

        // 删除缓存组件
        delComponent(state, data) {
            state.catch_components = state.catch_components.filter(x => x !== data);
        },

        updateText(state, date) {
            state.text = date;
        }

    },
    actions: {},
    modules: {},
    getters: {}
})