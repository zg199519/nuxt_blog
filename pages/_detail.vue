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
    mounted() {
        document.getElementById('markedContent').innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');
    },
    methods: {
    }
}
</script>