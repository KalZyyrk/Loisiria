export const state = () => ({
    category: 'all'
})

export const getters = {
    getCategory(state) {
        return state.category
    }
}

export const mutations = {
    setCategory(state, newCategory) {
        state.category = newCategory
    },
    unsetCategory(state) {
        state.category = 'all'
    }
}
