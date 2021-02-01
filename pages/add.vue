<template>
    <div>
        <div>
              <el-select style="width:100px" size="mini" v-model="form.code" placeholder="请选择">
                    <el-option
                    label="文章"
                    :value="1">
                    </el-option>
                 <el-option
                    label="沸点"
                    :value="2">
                    </el-option>
                </el-select>
            <el-input style="width:100px" size="mini" v-model="form.title" placeholder="请输入标题"></el-input>
            <el-input style="width:100px" size="mini" v-model="form.tag" placeholder="请输入标签"></el-input>
            <el-input style="width:100px" size="mini" v-model="form.link" placeholder="关联地址"></el-input>
            <input style="width:100px" type="file" ref="file" placeholder="上传封面" @change="fileChange"/>
        </div>
        <no-ssr><mavon-editor ref="md" :toolbars="markdownOption" v-model="handbook" @save="save" @imgAdd="imgAdd"/></no-ssr>
    </div>
</template>
<script>
export default {
    data() {
            return {
                form:{
                    code: 1, // 1文章 2 沸点
                    tag: '',
                    title: '',
                    cover:'',
                    link:''
                },
                markdownOption:{
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: false, // 全屏编辑
                    readmodel: false, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    navigation: true, // 导航目录
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    subfield: true, // 单双栏模式
                    preview: true, // 预览
                },
                handbook:"# 这里写标题",
        }
    },
    methods: {
        save(){
            // 组装数据
            this.form.content = this.handbook
            this.$store.dispatch('article/GET_ADD', this.form).then((res)=>{
               alert('添加成功')
            })
        },
        imgAdd(pos, $file) {
           // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           this.$store.dispatch('article/GET_IMG_UP', formdata).then((res)=>{
               this.$refs.md.$img2Url(pos, res.url);
           })
        },
        fileChange(){
            let file = this.$refs.file.files[0]
           var formdata = new FormData();
           formdata.append('image', file);
           this.$store.dispatch('article/GET_IMG_UP', formdata).then((res)=>{
               this.form.cover = res.url
           })
        }
    }
}
</script>