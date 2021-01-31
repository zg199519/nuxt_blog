import service from '../api/base'

export const state = () => ({
   info:''
})

export const mutations = {
    SET_INFO(state, info) {
        state.info = info
    },
}

export const getters = {
    GET_INFO: state => {
        return state.info
    }
}
export const actions = {
    // 登录
    SET_LOGIN({commit}, parameter) {
        return new Promise((resolve, reject)=>{
            service.post("/api/user/login", parameter ).then(res=>{
                commit('SET_INFO', res.data)
                resolve()
            })
        })
    }
}

export const namespaced = true