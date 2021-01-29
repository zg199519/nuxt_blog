const state = () => ({
    list: []
})

const mutations = {
    SET_ARTICLE_LIST(state, data) {
        state.list = data
    }
}

const getters = {
    GET_LIST_ARTICLE: state => {
        return state.list
    }
}

const actions = {
    // 获取文章列表
    GET_LIST_ARTICLE({commit}) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let datas = []
                for (let index = 0; index < 20; index++) {
                    datas.push({title: '测试标题', date: '2020-02-08', cover: 'https://atts.w3cschool.cn/attachments/cover/cover_nuxtjs.png?t=1581585385?imageView2/1/w/48/h/48', desc: '描述描述', tag:'标签'})
                }
                commit('SET_ARTICLE_LIST', {
                    code: 200,
                    msg: 'ok',
                    data: datas
                })
                resolve()
            }, 200)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}