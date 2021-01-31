<template>
    <section class="zg-container zg-content">
        <div class="zg-left-content global-default-color" v-infinite-scroll="rollingLoad" :infinite-scroll-distance="120" :infinite-scroll-delay="200" :infinite-scroll-disabled="scrollDisabled">
            <nuxt-link class="context-box global-default-border-color global-default-border-color" tag="a" target="_blank" :to="{path: '/detail?id=', query: {id: item.id}}"  v-for="(item, i) in list" :key="i">
              <div class="info-box">
                  <div class="title global-title-color">{{item.title}}</div>
                  <div class="description global-desc-color">{{item.content}}</div>
                  <div class="time global-desc-color">{{item.creationTime}} . {{item.tag}}</div>
              </div>
              <img class="thumb" v-if="item.cover" :src="item.cover">
            </nuxt-link>
        </div>
        <div class="zg-right-content">
            <Sidebar></Sidebar>
        </div>
        <el-backtop target=".zg-left-content" :visibility-height="100" class="global-default-color global-title-color"></el-backtop>
    </section>
</template>
<script>
export default {
  data(){
    return {
      scrollDisabled: false,
      filters:{
        code: 1,
        page: 1,
        pageSize: 20,
        total: 0
      },
      list: []
    }
  },
  watch:{
    $route(to,from){
      this.reset()
    }
  },
  created() {
    this.filters.code = this.$route.query.code? Number(this.$route.query.code) : 1
  },
  methods: {
    rollingLoad(){
      this.lists()
    },
    lists() {
      this.scrollDisabled = true
      this.$store.dispatch('article/GET_LIST_ARTICLE', {...this.filters}).then(() => {
        const data = this.$store.getters['article/GET_LIST_ARTICLE']
        this.list = [...this.list, ...data.list]
        if(data.list.length >= this.filters.pageSize){
          // this.filters.total = data.total
          this.filters.page++
          this.scrollDisabled = false
        }
      })
    },
    reset(){
      this.filters.code = this.$route.query.code? Number(this.$route.query.code) : 1
      this.filters.page = 1
      this.filters.total = 0
      this.list = []
      this.lists()
    }
  }
}
</script>