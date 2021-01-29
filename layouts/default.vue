<template>
    <el-container :name="themeSwitch?'theme-light':'theme-dark'">
      <el-header class="zg-header global-default-color">
        <section class="zg-container">
          <ul>
            <section class="zg-menu">
              <li class="global-title-color global-link-hover-color"> <Logo class="zg-logo"></Logo> </li>
              <li class="global-title-color global-link-hover-color"><nuxt-link :to="{path: '/', query: {code: 1}}">文章</nuxt-link></li>
              <li class="global-title-color global-link-hover-color"><nuxt-link :to="{path: '/', query: {code: 2}}">吐槽</nuxt-link></li>
              <!-- <li class="global-title-color global-link-hover-color"><nuxt-link to="/">小册</nuxt-link></li> -->
            </section>
            <li class="global-title-color"><el-switch v-model="themeSwitch" active-color="#161b22" inactive-color="#c9d1d9"></el-switch> <span style="margin-left:12px">{{themeSwitch?'dark':'light'}}</span>  </li>
          </ul>
        </section>
      </el-header>
      <el-main class="global-bgcolor zg-main global-title-color"><Nuxt /></el-main>
      <!-- 返回顶部 -->
      <el-backtop :visibility-height="100" class="global-default-color global-title-color"></el-backtop>
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

  }
}
</script>
<style lang="scss" scoped>

</style>