<template>
  <div class="zg-sidebar">
    <div class="main global-default-color auth-section">
      <div class="title global-title-color">周光 - lucas.zhou</div>
      <div class="slogan global-desc-color">一个在路上越走越远的程序员</div>
      <div>
        <el-input
          class="global-input-color"
          style="margin-top:10px"
          size="small"
          placeholder="请输入邮箱"
          v-model="value"
          prefix-icon="el-icon-message">
        </el-input>

        <el-input
          class="global-input-color"
          style="margin-top:10px"
          size="small"
          placeholder="请输入密码"
          type="password"
          v-model="value"
          prefix-icon="el-icon-help">
        </el-input>
        <el-button size="small" class="login-btn global-title-color global-default-color global-default-border-color" style="width:100%;margin-top:10px">立即登录</el-button>
        <div class="agreement global-desc-color" style="margin-top:12px">
          注册登录即表示同意 <span class="global-title-color global-link-hover-color">注册登录协议</span>
        </div>
      </div>
    </div>

    <!-- 公益广告 -->
    <div class="main global-default-color advertising">
      <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/433826abc6374b059215ac0c8769872c~tplv-k3u1fbpfcp-watermark.image" alt="公益广告">
    </div>

    <!-- 备案号 -->
    <el-footer class="main zg-footer global-bgcolor global-title-color">
      <p>© 2021 lucas.zhou, Inc</p>
      <p>京ICP备15031610号-16</p>
    </el-footer>


  </div>
</template>
<script>
export default {
  data(){
    return {
      value:''
    }
  }
}
</script>