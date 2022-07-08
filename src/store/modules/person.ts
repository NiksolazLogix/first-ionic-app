// import axios from 'axios'

const state = {
    name: 'Hanzel',
    age: 36,
    gender: 'male'
}
const mutations = {
    setInfo(state: any, payload: any) {
        state.name = payload.name
        state.age = payload.age
        state.gender = payload.gender
    }
}

export default {
    state,
    mutations
}

