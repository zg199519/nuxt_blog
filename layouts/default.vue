<template>
    <el-container :name="themeSwitch?'theme-light':'theme-dark'">
      <el-header class="zg-header global-default-color">
        <section class="zg-container">
          <ul>
            <section class="zg-menu">
              <li class="global-title-color global-link-hover-color">文章</li>
              <li class="global-title-color global-link-hover-color">吐槽</li>
              <li class="global-title-color global-link-hover-color">小册</li>
            </section>
            <li class="global-title-color"><el-switch v-model="themeSwitch" active-color="#161b22" inactive-color="#c9d1d9"></el-switch> <span style="margin-left:12px">{{themeSwitch?'dark':'light'}}</span>  </li>
          </ul>
        </section>
      </el-header>
      <el-main class="global-bgcolor"><Nuxt /></el-main>
      <el-footer></el-footer>
    </el-container>
</template>
<script>
export default {
  data() {
    return { 
      themeSwitch: true,
    }
  },
  methods: {
    // toggleTheme(){
    //   if(this.theme === 'theme-light'){
    //     this.theme = 'theme-dark'
    //   } else {
    //     this.theme = 'theme-light'
    //   }
    //   console.log(11)
    // }
  }
}
</script>
<style lang="scss" scoped>

</style>