<template>
    <section class="zg-container zg-content">
        <div class="zg-left-content global-default-color">
           <section class="zg-details-content global-desc-color" id="markedContent"></section>
        </div>
        <div class="zg-right-content">
            <Sidebar></Sidebar>
        </div>
    </section>
</template>
<script>
export default {
//   async fetch({store, app, query}) {
//     const data = await axios.get('http://127.0.0.1:7001/api/home/list')
//     console.log(data)
//     // await store.dispatch('article/GET_DETAIL_ARTICLE', {id: query.id})
//     // const data = store.getters['article/GET_DETAIL_ARTICLE']
//     // app.head.title = data.title
//     // console.log(data,111)
//     // return {}
//   },
    head() {
        return {
            title: this.title,
        }
    },
    data(){
        return {
            id: this.$route.query.id,
            title: '',
            info: {}
        }
    },
    mounted() {
        // 
        this.getInfo()
    },
    methods: {
        async getInfo() {
            await this.$store.dispatch('article/GET_DETAIL_ARTICLE', {id: this.id})
            const data = this.$store.getters['article/GET_DETAIL_ARTICLE']
            this.info = data
            this.title = data.title
            document.getElementById('markedContent').innerHTML = marked(data.content);
        }
    }
}
</script>