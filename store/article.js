import service from '../api/base'

export const state = () => ({
    list: [],
    detail: {}
})

export const mutations = {
    SET_ARTICLE_LIST(state, data) {
        state.list = data
    },
    SET_ARTICLE_DETAIL(state, data) {
        state.detail = data
    },
}

export const getters = {
    GET_LIST_ARTICLE: state => {
        return state.list
    },
    GET_DETAIL_ARTICLE: state => {
        return state.detail
    }
}

export const actions = {
    // 获取文章列表
    GET_LIST_ARTICLE({commit}, parameter) {
        return new Promise((resolve, reject)=>{
            service.post("/api/home/list",parameter).then(res=>{
                commit('SET_ARTICLE_LIST', res.data)
                resolve()
            })
        })
    },
    // 获取文章详情
    GET_DETAIL_ARTICLE({commit}, parameter) {
        return new Promise((resolve, reject)=>{
            service.get("/api/home/detail?id="+parameter.id).then(res=>{
                commit('SET_ARTICLE_DETAIL', res.data)
                resolve()
            })
        })
    }
}

export const namespaced = true