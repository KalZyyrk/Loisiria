
export const state = () => {
    inputValue: ''
}

export const getters = {
    getInputValue(state) {
        return state.inputValue
    }
}

export const mutations = {
    setInputValue(state, newInputValue) {
        console.log(newInputValue);
        state.inputValue = newInputValue
        console.log(state.inputValue);
    }
}

export const actions = {
    setInputValue(state, newInputValue) {
        newInputValue = newInputValue.toLowerCase()
        state.commit('setInputValue', newInputValue)
    }
}