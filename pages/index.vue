<template>
    <section class="zg-container zg-content">
        <div class="zg-left-content global-default-color">
            <div class="context-box global-default-border-color global-default-border-color" v-for="i in 100" :key="i">
                <div class="info-box">
                    <div class="title global-title-color">🔥 2020年度创作者榜单火热打榜中，为你喜爱的创作者投票吧</div>
                    <div class="description global-desc-color">这可能是一次提升技术这可能是一次提升技术这可能是一次提升技术这可能是一次提升技术这可能是一次提升技术、升职加薪的机会。</div>
                    <div class="time global-desc-color">10天前 . 周光 . 小菜鸟</div>
                </div>
                <img class="thumb" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48fd82765204d1e8b8115ef8b57f245~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp" alt="图">
            </div>
        </div>
        <div class="zg-right-content">
            <Sidebar></Sidebar>
        </div>
    </section>
</template>
<script>
export default {
  head() {
    return {
      title: '周光，一个程序员'
    }
  }
}
</script>