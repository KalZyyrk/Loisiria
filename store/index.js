export const state = () => ({
    category: 'all',
    inputValue: ''
})

export const getters = {
    getCategory(state) {
        return state.category
    },
    getInputValue(state) {
        return state.inputValue
    }
}

export const mutations = {
    setCategory(state, newCategory) {
        state.category = newCategory
    },
    unsetCategory(state) {
        state.category = 'all'
    },
    setInputValue(state, newInputValue) {
        state.inputValue = newInputValue
    }
}

export const actions = {
    setInputValue(state, newInputValue) {
        newInputValue = newInputValue.toLowerCase()
        state.commit('setInputValue', newInputValue)
    }
}

