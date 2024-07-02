import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            theme: 'white'
        }
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme
            localStorage.setItem('theme', theme)
        }
    },
    actions: {
        initTheme({ commit }) {
            const cachedTheme = localStorage.getItem('theme')
            if (cachedTheme) {
                commit('setTheme', cachedTheme)
            }
        },
        toggleTheme({ commit, state }) {
            const newTheme = state.theme === 'white' ? 'dark' : 'white'
            commit('setTheme', newTheme)
        }
    },
    getters: {
        currentTheme: (state) => state.theme
    }
})