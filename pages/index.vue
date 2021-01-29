<template>
    <section class="zg-container zg-content">
        <div class="zg-left-content global-default-color" v-infinite-scroll="rollingLoad" :infinite-scroll-distance="120" :infinite-scroll-disabled="scrollDisabled">
            <div class="context-box global-default-border-color global-default-border-color" v-for="(item, i) in list" :key="i">
                <div class="info-box">
                    <div class="title global-title-color">{{item.title}}</div>
                    <div class="description global-desc-color">{{item.desc}}</div>
                    <div class="time global-desc-color">{{item.date}} . {{item.tag}}</div>
                </div>
                <img class="thumb" v-if="item.cover" :src="item.cover">
            </div>
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
      list: []
    }
  },
  // asyncData({store, query}, callback) {
  //     store.dispatch('article/GET_LIST_ARTICLE').then(() => {
  //       const data = store.getters['article/GET_LIST_ARTICLE']
  //       callback(null, {list: data.data})
  //     })
  // },
  mounted() {
    
  },
  methods: {
    rollingLoad(){
      this.lists()
      console.log('加载')
    },
    lists() {
      this.scrollDisabled = true
      this.$store.dispatch('article/GET_LIST_ARTICLE').then(() => {
        const data = this.$store.getters['article/GET_LIST_ARTICLE']
        this.list = [...this.list, ...data.data]
        this.scrollDisabled = false
      })
    }
  }
}
</script>